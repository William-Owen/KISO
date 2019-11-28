# Project Feature Overview

This project is work in progress and not intended for use. Its function at this time is to assist a conversation around ways of working with React applications. The application pulls together an opinionated stack of tools along with some opinionated logic to create an example React Application.

## Install

`npm i`

## Features

- *[React JS](https://reactjs.org/) and [Create React App](https://github.com/facebook/create-react-app)* - Modern JavaScrpt framework.
- *[ESLint](https://eslint.org/)* - IDE Linting for JavaScript/ES7/React/Babel with extneded support for cypress.
- *[EditorConfig](https://editorconfig.org/)* - General shared IDE config.
- *[Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/)* - Unit testing and low-level end-to-end testing.
- *[Cypress](https://www.cypress.io/)* - Developer end-to-end testing.
- *[StoryBook](https://storybook.js.org/)* - Component documentation and testing.
- *[Plop JS](https://plopjs.com/)* - Templates for pages and components.

## Uncertain features

These are features that are currently being explored but are not yet feeling quite right.

- *[Emotion CSS in JS](https://emotion.sh/docs/introduction)* - Themeing and CSS. I am still not convinced about CSS in JS. This project has been configured to allow a parent theme to override a child theme (The inverse of how I understand the normal behaviour to work). In this way, the component can define a look and feel that the parent theme (implementation) can override.
- *[SASS](https://sass-lang.com/)* - I much prefer the DRY SASS syntax over SCSS.
- Storybook Source view - This is not working correctly at this time.

## Plop template

Plop.js is a micro-generator, a tool that gives you a simple way to generate code or any other type of flat text files in a consistent way. Plop.js is perfect for scaffolding out components, pages and other contents such as tests and redux reducers were there is a fair amount of boilerplate.

### Install globally

`npm i plop -g`

### Call plop from the project directory

`plop`

### Available Plop templates

These templates are defined in the `plopfile.js` with supporting templates in the `plop-templates` directory. Plop templates use [Handlebars](https://handlebarsjs.com/)

The currently avialalbe templates are: -

- Component
- Page

## Component Structure

- Jest / React Testing Library for unit testing
- Markdown for documentation
- StoryBook for UI exploration / documentation
- SASS / Emotion for for styling
- Index for clearn exports.

```
src
├── actions - API actions.
├── components - Application components.
    ├── app - Application specific components.
        ├── <ComponentName> - Folder with cammel cased name of the component
            ├── <ComponentName>.js - The main component definition
            ├── <ComponentName>.sass - Related style file if needed.
            ├── <ComponentName>.test.js - Related unit tests.
            ├── index.js - Clean export of the component. Allows for easy refereneing.
    ├── library - Reusable generic components.
    ├── pages - pages, views, layouts typically triggered by routes.
├── redux - All redux store configuration.
    ├── rootReducer.js - The main application reducer file
    ├── store.js - The configuration of the redux store.
    ├── <Name>.reducer.js - A specific reducer
├── utilities - Helper functions
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits. You will also see any lint errors in the console.

### `npm test`

Launches the test runner (Jest) in the interactive watch mode. See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

Also see `npm run cypress`

### `npm run build`

Builds the app for production to the `build` folder.

It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes.

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run storybook`

UI component library decumentation *http://localhost:55515/*

### `npm run cypress`

Initiates the Cypress test runner UI. Cypress runs as fast as your browser can render content. You can watch tests run in real time as you develop your applications.

----

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).