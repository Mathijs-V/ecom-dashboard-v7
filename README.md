# PRJ4 - E-Commerce Dashboard

The E-Commerce Dashboard is a website that supports our customers in predicting what articles to restock and what to rather ignore. We used a variation of the prophet model, which is written in Python and produces high-quality forecasts.

[Prophet](/https://facebook.github.io/prophet/) is a procedure for forecasting time series data based on an additive model where non-linear trends are fit with yearly, weekly, and daily seasonality, plus holiday effects. It works best with time series that have strong seasonal effects and several seasons of historical data. Prophet is robust to missing data and shifts in the trend and typically handles outliers well.

## Features
- **Data Integration**: Collects and funnels data from various Sales channels including Shopify, Amazon, eBay and more. 
- **Concise Analysis**: Offers insight into various metrics like ad spending, inventory, product sales and demographic data of customers.
- **User configured Dashboard**: Offers a user-friendly dashboard to visualise sales-trends, product performance and advertisement-ROI (ROI = Return on marketing investment).
- **Weather-Integration**: Uses weather-data to predict sales trends, especially important for weather-depending clothes like pyjamas.
- **Dynamic Marketing Strategies**: Offers to have precise marketing campaigns on the base of customer locations and popular product regions.
- **Inventory Management**: Helps with the optimization of inventory and purchasing decisions to maximise revenue and minimise mistakes.

## Table of contents:
- [1 Analysis](/analysis)
  - [1.1 Data Dictionary](/analysis/DataDictionary.md)
  - [1.2 User Stories](/analysis/User%20Stories.md)
  - [1.3 Work Breakdown Structure](/analysis/Work%20Breakdown%20Structure.md)
- [2 Design](/design)
  - [2.1 Wireframes](/design/wireframes)
  - [2.2 Entity-Relationship-Model](/design/ERM)
  - [2.2 Entity-Relationship-Diagram](/design/ERD)
- [3 Implementation](/implementation/)
  - [3.1 ](/implementation/)
  - [3.1 E-Commerce-Dashboard](/implementation/E-Commerce-Dashboard)
- [4 Project Management](/project%20management)
  - [4.1 Retrospectives](/project%20management/Retrospectives)
  - [4.2 Definition of done](/project%20management/DoD.md)
  - [4.3 Task board Guidelines](/project%20management/Task%20Board%20guidelines.md)
- [5 README](/README.md)

## Analysis:

[User group](/analysis/User%20Stories.md):
A set of people who have similar interests, goals or concerns.

[User story](/analysis/User%20Stories.md):
An informal, general explanation of a software feature written from the perspective of the end user. Its purpose is to articulate how a software feature will provide value to the customer.

## What we used:

The following programs can be used to run our application:
- [IntelliJ](https://www.jetbrains.com/de-de/idea/): IntelliJ is an integrated development environment (IDE) primarily used for Java development but also supports various other programming languages.
- [Visual Studio Code](https://code.visualstudio.com): Visual Studio Code, is a lightweight yet powerful source code editor developed by Microsoft, widely used for various programming languages and configurations.

The following programming languages were used to create the project:
- [Javascript](/google.de): The base of the project is written in Javascript. 
- [Python](/google.de): The prophet model, as the heart-piece of our project is written in Python.
- [HTML/CSS](/google.de): We used a little html and css for styling.

# How to run the project:
## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

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

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
