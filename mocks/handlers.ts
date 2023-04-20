import {graphql} from "msw";
import {Addon, Mutation, MutationSubscribeArgs, Plan, Subscription} from "../src/api/types";

interface PlansQuery {
    plans: Plan[]
}

interface AddonsQuery {
    addons: Addon[]
}


export const handlers = [
    graphql.query<PlansQuery>('plans', (req, res, ctx) => {
        console.log({req});
        return res(
            ctx.delay(),
            ctx.data({
                plans: [
                    {__typename: 'Plan', id: "plan-1", name: "Arcade", monthlyFee: 9, yearlyFee: 90},
                    {__typename: 'Plan', id: "plan-2", name: "Advanced", monthlyFee: 12, yearlyFee: 120},
                    {__typename: 'Plan', id: "plan-3", name: "Pro", monthlyFee: 15, yearlyFee: 150}
                ]
            })
        )
    }),
    graphql.query<AddonsQuery>('addons', (req, res, ctx) => {
        return res(
            ctx.delay(),
            ctx.data({
                addons: [
                    {
                        __typename: 'Addon',
                        id: "addon-1",
                        name: "Online service",
                        description: "Access to multiplayer games",
                        monthlyFee: 1,
                        yearlyFee: 10
                    },
                    {
                        __typename: 'Addon',
                        id: "addon-2",
                        name: "Larger storage",
                        description: "Extra 1TB of cloud save",
                        monthlyFee: 2,
                        yearlyFee: 20
                    },
                    {
                        __typename: 'Addon',
                        id: "addon-3",
                        name: "Customizable profile",
                        description: "Custom theme on your profile",
                        monthlyFee: 2,
                        yearlyFee: 20
                    },
                ]
            })
        )
    }),
    graphql.mutation<Mutation, MutationSubscribeArgs>('subscribe', (req, res, ctx) => {
        const {userName, userEmail, userPhone, billing, planId, addonIds} = req.variables;

        // Basic validation for userName
        if (typeof userName !== 'string' || !userName.trim()) {
            return res(
                ctx.errors([
                    {
                        message: 'Invalid user name',
                    },
                ]),
            );
        }

        // Basic validation for userEmail
        if (
            typeof userEmail !== 'string' ||
            !userEmail.trim() ||
            !/^\S+@\S+\.\S+$/.test(userEmail)
        ) {
            return res(
                ctx.delay(),
                ctx.errors([
                    {
                        message: 'Invalid user email',
                    },
                ]),
            );
        }

        // Basic validation for user phoneNumber
        if (
            typeof userPhone !== 'string' ||
            !userPhone.trim() ||
            !/^(\+?420)?(\d?){9}$/.test(userPhone)
        ) {
            return res(
                ctx.delay(),
                ctx.errors([
                    {
                        message: 'Invalid user phone number',
                    },
                ]),
            );
        }

        // Basic validation for user phoneNumber
        if (!billing) {
            return res(
                ctx.delay(),
                ctx.errors([
                    {
                        message: 'Invalid billing',
                    },
                ]),
            );
        }

        // Basic validation for plan ID
        if (typeof planId !== 'string' || !planId.trim()) {
            return res(
                ctx.delay(),
                ctx.errors([
                    {
                        message: 'Invalid plan ID',
                    },
                ]),
            );
        }

        // Basic validation for addon IDs
        if (addonIds?.length && (!Array.isArray(addonIds) || addonIds.some(id => typeof id !== 'string' || !id.trim()))) {
            return res(
                ctx.delay(),
                ctx.errors([
                    {
                        message: 'Invalid addon IDs',
                    },
                ]),
            );
        }


        return res(
            ctx.delay(),
            ctx.data({
                subscribe: {
                    __typename: "Subscription",
                    id: 'order-123',
                    status: "ok",
                },
            }),
        )
    })
]
