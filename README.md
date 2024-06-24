# PRJ4 - E-Commerce Dashboard

The E-Commerce Dashboard is a website that supports our customer in predicting the upcoming revenue. We used a variation of the prophet model, which is written in Python and produces high-quality forecasts.

[Prophet](https://facebook.github.io/prophet/) is a procedure for forecasting time series data based on an additive model where non-linear trends are fit with yearly, weekly, and daily seasonality, plus holiday effects. It works best with time series that have strong seasonal effects and several seasons of historical data. Prophet is robust to missing data and shifts in the trend and typically handles outliers well.

## Features
- **Data Integration**: Collects and funnels data from various Sales channels including Shopify, Amazon, eBay and more. 
- **Concise Analysis**: Offers insight into various metrics like ad spending, inventory, product sales and demographic data of customers.
- **User configured Dashboard**: Offers a user-friendly dashboard to visualise sales-trends, product performance and advertisement-ROI (ROI = Return on marketing investment).
- **Weather-Integration**: Uses weather-data to predict sales trends, especially important for weather-depending clothes like pyjamas.
- **Dynamic Marketing Strategies**: Offers to have precise marketing campaigns on the base of customer locations and popular product regions.
- **Inventory Management**: Helps with the optimization of inventory and purchasing decisions to maximise revenue and minimise mistakes.

## Table of contents:
- [1 Analysis](/analysis)
  - [1.1 Data Dictionary](/analysis//Data%20Dictionary.md)
  - [1.2 User Stories](/analysis/User%20Stories.md)
  - [1.3 Work Breakdown Structure](/analysis/Work%20Breakdown%20Structure.pdf)
- [2 Project Management](/project%20management)
  - [2.1 Feedpulse](/project%20management/feedpulse.md)
  - [2.2 Scrum Board](https://github.com/users/feestjebouwen01/projects/1/views/2)
- [3 Implementation](/implementation)
    - [3.1. Prophet Model](/implementation/prophet%20model)
- [4 README](/README.md)

## Analysis:

[User group](/analysis/User%20Stories.md):
A set of people who have similar interests, goals or concerns.

[User story](/analysis/User%20Stories.md):
An informal, general explanation of a software feature written from the perspective of the end user. Its purpose is to articulate how a software feature will provide value to the customer.

## Technologies
- **React**: React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on components.
- **MUI**: Material UI is a library used for styling the website.
- **Python**: Used for API requests, data processing, and backend development.
- **PostgreSQL**: Database management for storing and retrieving data efficiently.
- **HTML, CSS, JavaScript**: Frontend development for creating interactive dashboards and user interfaces.
- **Celery**: Used for handling task queue's for the backend.
- **Redis**: Used for caching orders as well as a message broker for the task queue.
- **Django REST**: Backend framework for handling server-side logic and routing.

The following programs can be used to run our application:
- [IntelliJ](https://www.jetbrains.com/de-de/idea/): IntelliJ is an integrated development environment (IDE) primarily used for Java development but also supports various other programming languages.
- [Visual Studio Code](https://code.visualstudio.com): Visual Studio Code, is a lightweight yet powerful source code editor developed by Microsoft, widely used for various programming languages and configurations.

# How to run the project:
## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `cd blogapi`
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
