# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Flow
This project is using [flow](https://flow.org/) to perform static type checking. To explore how flow was integrated and enabled in this project refer to [create-react-app/adding-flow](https://create-react-app.dev/docs/adding-flow/). This quick introduction to flow on [medium](https://medium.com/free-code-camp/why-use-static-types-in-javascript-part-1-8382da1e0adb) is really helpful.
To enable flow on WebStorm IDE refer to: [WebStorm/Flow](https://www.jetbrains.com/help/webstorm/using-the-flow-type-checker.html)

## Absolute Import
This project is configured to work with absolute import rather than relative import. The `src` folder within the top-level project directory is the root/base of the absolute path. So each import statement will look like `"path/to/your/component"` where `path` is a sub folder within `src`.
To learn more on absolute imports: [create-react-app.dev/docs](https://create-react-app.dev/docs/importing-a-component/#absolute-imports), [bezkoder.com](https://www.bezkoder.com/absolute-import-react/) 

## How to download and save the graphql schema 

Install get-graphql-schema. Follow: https://www.npmjs.com/package/get-graphql-schema
Once you have installed get-graphql-schema run the following command and this will simply download and save the graphql schema into the schema.graphql file.
```
get-graphql-schema https://swapi-graphql.netlify.app/.netlify/functions/index >  schema.graphql
```


## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
