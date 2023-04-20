# Welcome to Argo22 FrontEnd challenge.

![Multi step form preview](./instructions/design/desktop-design-step-1.jpg "The Challenge preview")


## The challenge

Your challenge is to build out this multi-step form and get it looking as close to the design as possible.

You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.

Your users should be able to:

- Complete each step of the sequence
- Go back to a previous step to update their selections
- See a summary of their selections on the final step and confirm their order
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- Receive form validation messages if:
    - A field has been missed
    - The email address is not formatted correctly
    - A step is submitted, but no selection has been made

## Where to find everything

Your task is to build out the project to the designs inside the `/instructions/design` folder. You will find both a mobile and a desktop version of the design.

The designs are in JPG static format. Using JPGs will mean that you'll need to use your best judgment for styles such as `font-size`, `padding` and `margin`.

All the required assets for this project are in the `/assets` folder. The images are already exported for the correct screen size and optimized.

We also include variable and static font files for the required fonts for this project. You can choose to either link to Google Fonts or use the local font files to host the fonts yourself. Note that we've removed the static font files for the font weights that aren't needed for this project.

There is also a `/instructions/style-guide.md` file containing the information you'll need, such as color palette and fonts.

## What to do if you're stuck

when all else fails - contact your reviewer.

## Tech Stack

The purpose of this project is to evaluate your ability to effectively handle commonly used technologies at Argo22. To achieve this objective, the recommended stack for this project includes the following technologies and tools:

- [React.js](https://reactjs.org/): A popular JavaScript library for building user interfaces.
- [Vite](https://vitejs.dev/): A build tool that optimizes the development experience by providing fast and reliable build times.
- [TypeScript](https://www.typescriptlang.org/): A statically typed superset of JavaScript that helps catch errors before they occur.
- [Prettier](https://prettier.io/): A code formatter that ensures consistency in code style.
- [Tailwind](https://tailwindcss.com/): A utility-first CSS framework that streamlines the development process by providing pre-designed CSS classes.
- [GraphQL](https://graphql.org/): A query language for APIs that provides a more efficient and flexible alternative to traditional REST APIs.


While not mandatory, the following technologies and tools may enhance your project:

- [React Hook Form](https://react-hook-form.com/): A library that simplifies form building in React.
- [React Query](https://react-query.tanstack.com/): A data fetching library that helps optimize server requests.
- [Jotai](https://jotai.pmnd.rs/): A state management library for React that aims to provide a simpler and more intuitive alternative to existing state management solutions.
- [React Router](https://reactrouter.com/): A routing library for React that helps manage navigation and URLs within a single-page application.

## Development Approach

This template project is already configured to run `React + Typescript + Vite + Tailwind`. Clone it and make it your starting point in you own GitHub project.

### API
There is a local mock GraphQl API ready to be used.
Endpoint is `/graphql`.
All there is to use is described in `/src/api/schema.graphql` and typescript types for API resources can be accessed in `/src/api/types.ts`  

### Scripts
The following scripts are available in a typical React Vite project:

```shell
yarn dev #This command runs the development server, which automatically rebuilds and hot reloads the app as you make changes. It's recommended to use this command during development.

yarn build #This command builds the production-ready code for your app. The first command, tsc, compiles the TypeScript code to JavaScript, while the second command, vite build, creates an optimized production build of your app.

yarn preview #This command serves the production build of your app locally, allowing you to preview it before deploying it to a production environment. It's useful for testing your app's production build locally.
```

### Tasks to Complete

1. Your first task is to configure Prettier in your project and use it to format your code according to the following configuration:

```JSON
{
  "semi": true,
  "trailingComma": "all",
  "singleQuote": true,
  "printWidth": 120,
  "tabWidth": 2,
  "endOfLine": "auto"
}
```

This will ensure consistency in your code style and make it easier for others to read and maintain your code.


2. Complete The Challenge
   - Develop UI based on provided design
   - Follow instruction above
   - Connect to API - query plans, add-ons and at the end of the form make mutation with all the data that you have collected throughout the multi-step form process
   - Commit regularly to note your progress
3. Present your result
   - Invite your reviewer to see your repository
   - React to his code-review
4. Profit :tada: 
   - Completing this challenge will not only help us evaluate your development skills but may also help you improve your skills and see how we usually tackle challenges like this one. We wish you the best of luck!
