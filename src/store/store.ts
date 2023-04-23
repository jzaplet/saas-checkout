/**
 * Copyright (c) 2023 Strategio Digital s.r.o.
 * @author Jiří Zapletal (https://strategio.dev, jz@strategio.dev)
 */

import { atom } from 'jotai';
import { Addon, Billing, Plan } from '../api/types';

export const stepStore = atom(1);

export const plansStore = atom<Plan[]>([]);

export const addonsStore = atom<Addon[]>([]);

export const personalDataStore = atom({
  name: '',
  email: '',
  phone: '',
});

export const selectedPlanStore = atom<Plan | null>(null);

export const selectedBillingIntervalStore = atom<Billing>(Billing.month);

export const selectedAddonsStore = atom<Addon[]>([]);
