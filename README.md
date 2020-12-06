# Introduction

This project is built on ReactJS and was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). The files generated are static, so the website can be served over a cdn. This will bring down the cost of hosting.

## Setting up the project.

### Required softwares
1. Download and install **nodejs** from [here](https://nodejs.org/en/download/)
2. Download and Install **yarn** package manager from [here](https://classic.yarnpkg.com/en/docs/install/)

### Downloading the project:

1. Clone git repo
````
git clone https://github.com/abhinavkrin/construction-site.git
````
2. Download the zip file from the github [https://github.com/abhinavkrin/construction-site](https://github.com/abhinavkrin/construction-site).  Extract it.

### Installing dependencies
1. Change current directory to the project directory **construction-site** and run:

````
yarn install
````
The project is now set up.

### Start the Development server

To see live changes to the code edits, start the development server.

````
yarn start
````
### Edit the config file
In the **src/config.js**, you will find the following variables. Change them according to your need.
```
export const SITE_NAME = "Pro Construction";
export const SITE_TAGELINE = "Best Construction Company"
export const CONTACT_MESSAGE_POST_URL = "https://url-to-post-message/";
```

### The contact form
The contact form contents are posted to the **CONTACT_MESSAGE_POST_URL** (defined in src/config.js file) with the follwing fields: **name** , **email**, **message** as **multipart/form-data**

### Build the project

To build the project run

````
yarn build
````

All the build files are created in the **build** folder.

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

### Deployment

After you build this project, the production files are available in `build` folder. Copy the content of `build` folder to the server root / .


