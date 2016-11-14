# OMRB <sub><sub><sub>One More Redux Boilerplate</sub></sub></sub>
[![Travis](http://img.shields.io/travis/jupl/omrb/native.svg?style=flat-square&label=travis)](https://travis-ci.org/jupl/omrb)
[![Dependencies](http://img.shields.io/david/jupl/omrb.svg?style=flat-square)](https://david-dm.org/jupl/omrb#info=devDependencies)
[![Dev Dependencies](http://img.shields.io/david/dev/jupl/omrb.svg?style=flat-square)](https://david-dm.org/jupl/omrb#info=devDependencies)

## Table of Contents
- [About](#about)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Tasks](#tasks)
- [Project Resources](#project-resources)

## About
This is a boilerplate project for developing a mid to a large scale mobile application using JavaScript, [React](https://github.com/facebook/react), [React Native](https://facebook.github.io/react-native/), and [Redux](http://redux.js.org/). For an example project, visit the [native example branch](https://github.com/jupl/omrb/tree/native-example).

### Variants
- [OMRB](https://github.com/jupl/omrb)
- [OMRB with React Native](https://github.com/jupl/omrb/tree/native)

[<sup>Back to top</sup>](#omrb-one-more-redux-boilerplate)

## Prerequisites
- [Node.js](https://nodejs.org/en/) (6.x minimum required)
  - [npm CLI](https://docs.npmjs.com/cli/npm) is usually included with Node.js
- [Yarn](https://yarnpkg.com/en/docs/install) (recommended)
- Editor with support for JavaScript (see [Tern](https://ternjs.net/) for code analysis if editor does not include it), [ESLint](http://eslint.org/), and [EditorConfig](http://editorconfig.org/)
- [Additional requirements per React Native](https://facebook.github.io/react-native/docs/getting-started.html)

[<sup>Back to top</sup>](#omrb-one-more-redux-boilerplate)

## Getting Started
1. Clone/download this repository.
2. Install dependencies using npm **or** Yarn:
  - `npm install`
  - `yarn`
3. Start running tasks as described below in the [tasks section](#tasks).

[<sup>Back to top</sup>](#omrb-one-more-redux-boilerplate)

## Project Structure

### Overview
```
omrb/
├─ coverage/  # Code coverage reports
├─ storybook/ # Storybook entry points for platforms
├─ src/
│  ├─ app/                # Application domain
│  │  ├─ components/root/ # Top level application view
│  │  ├─ actions.test.js  # Test to ensure all actions are valid
│  │  ├─ config.js        # Application configuration options
│  │  ├─ reducer.js       # Reducer for whole application
│  │  ├─ saga.js          # Saga entry for whole application
│  │  └─ styles.js        # Styling for application container
│  ├─ common/                  # Shared code used throughout project
│  │  ├─ components/container/ # Application wrapper component
│  │  └─ create─store.js       # Helper to create a Redux store
│  ├─ domain1/ # See Domains section below
│  ├─ domain2/
│  ├─ domainX/
│  ├─ storybook.js # Storybook entry point
│  └─ app.js       # Application entry point
├─ .babelrc          # Babel configuration
├─ .eslintrc         # ESLint configuration
├─ esdoc.json        # ESDoc configuration
├─ index.android.js  # Entry point for Android platform
├─ index.ios.js      # Entry point for iOS platform
├─ package.json      # Configuration, tasks, and dependencies
└─ yarn.lock         # Dependency pinning from Yarn
```

### Domains
```
domain/
├─ components/
│  ├─ component1/ # See Component sections below
│  ├─ component2/
│  └─ componentX/
├─ actions.js # Redux actions for domain
├─ reducer.js # Domain reducer
└─ saga.ts    # Domain sagas
```

Rather than group items by things like components/reducers/actions/etc., items are grouped by domain which can be a saner option as the project grows. Examples of domains can be things like resources (ex. `blog/`, `users/`) or other things. (ex. `ui/`) Domains may include things like components, actions, reducer, sagas, etc. but they don't have to include all of them. In fact, you can think of `app/` and `common/` as domains. Other files may be present as well.

### Components
```
component/
├─ index.js
└─ template.js
```

React componenjs are grouped in a directory.
- `template.js` defines the React component without any knowledge of Redux specifics or other things like React DnD. (sometimes referred as *dumb* component)
- `index.js` is the entry point of the component when used by others.
  - If template does not require data/action bindings then it can just pass through the template. (see `src/app/componenjs/root/index.js`)
  - If template requires data/action bindings then it is done here.  (sometimes refereed as *smart* component)

### Other Files

#### `*.test.js`
Tests for components/domains/logic/etc. Some guides on tests include:
- [Jest](https://facebook.github.io/jest/docs/api.html)
- [Enzyme](http://airbnb.io/enzyme/index.html#basic-usage)
- [React](https://facebook.github.io/jest/docs/tutorial-react.html)
- [Redux](http://redux.js.org/docs/recipes/WritingTests.html)
- [Redux Saga](http://yelouafi.github.io/redux-saga/docs/advanced/Testing.html)

#### `*.stories.js`
Defines a story to display in React Storybook. Typically this file is in a component. (ex. `index.stories.js`) [This guide](https://gejstorybook.io/docs/react-storybook/basics/writing-stories) provides information on how to write stories.

#### `__snapshots__`
Generated files/directories when using Jest's [snapshot feature](https://facebook.github.io/jest/docs/tutorial-react.html#snapshot-testing). These files should be left to Jest and not touched manually.

[<sup>Back to top</sup>](#omrb-one-more-redux-boilerplate)

## Tasks
Tasks can be executed in the following manner:
```
npm run [command]  # npm
yarn run [command] # Yarn
```
Examples:
```
npm run build:dev
yarn run lint
```

### `server:story`
Start a local server for React Native Storybook. For more information visit the [documentation for React Native Storybook](https://github.com/storybooks/react-native-storybook#start-the-storybook).

### `build:docs`
Build detailed code documentation in the `docs/api/` directory.

### `test`
Run tests once using Jest. For more information visit the [documentation for Jest](facebook.github.io/jest/docs/configuration.html).

### `test:watch`
Run tests once and rerun on changes using Jest.

### `lint`
Verify that code is valid using ESLint. For customzation modify `.eslintrc`.

### `lint:fix`
Like `lint` task, but automatically fixes certain linting violations.

### `coverage`
Like `test` task, but also collects code coverage, which becomes available in the `coverage/` directory.

### `coverage:watch`
Run converage once and rerun on changes using Jest.

[<sup>Back to top</sup>](#omrb-one-more-redux-boilerplate)

## Project Resources
- Language
  - [Babel](http://babeljs.io/)
  - [ESLint](http://eslint.org/)
- Libraries
  - [React](https://facebook.github.io/react/)
  - [React Native](https://facebook.github.io/react-native/)
  - [Redux](http://redux.js.org/)
    - [Redux Saga](http://yelouafi.github.io/redux-saga/)
    - [Redux Actions](https://github.com/acdlite/redux-actions)
- Testing
  - [Jest](http://facebook.github.io/jest/)
  - [Enzyme](https://github.com/airbnb/enzyme/)
- Development Tools
  - [React Native Storybook](https://github.com/storybooks/react-native-storybook)
  - [Redux DevTools](https://github.com/zalmoxisus/remote-redux-devtools)
  - [ESDoc](https://esdoc.org/)

[<sup>Back to top</sup>](#omrb-one-more-redux-boilerplate)
