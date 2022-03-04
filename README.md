# 2022 DXPR Senior Frontend Developer [Remote] Assessment 1.0.3

This repo is the solution of DXPR Senior Frontend Developer assessment that contains three tasks.

## Assessment Tasks
1. CSS Loader 
2. Bootstrap 5 Card
3. Infinity Scroll

## 1. CSS Loader
It is about Creating a CSS loader from scratch that animates the **DXPR** logo. 
It contains three files: 
* `index.html`
* `loader.css`
* `logo.svg`: *DXPR Logo*
* *It does not contain any javascript*

**How to run it:**

Go to *./1-css-loader/index.html* and double-click on this file

## Bootstrap 5 Card
It is about creating a Bootstrap 5 Card. 
It contains two files: 
* `index.html` 
* `loader.css`
* *It does not contain any javascript.*

**How to run it:**

Go to *./2-cards/index.html* and double-click on this file

## Infinity Scroll
It is about creating infinity scroll using **vanilla ES6+ JavaScript**. It uses the CSS loader and the card that is created in the first two tasks. 
Also it has a mock data source using JS promises. The promise will not use an HTTP call but uses a callback function to load the data.

**It contains five files:**
* `index.html`
* `styles.css`
* `app.js`: *It contains the logic of loading data and rendering the cards*
* `data.js`: *It contains the data source*
* `bundle.js`: *It is the actual JavaScript file that is attached to the `index.html` file. It is produced from bundling `app.js` and `data.js` using [Browserify](https://browserify.org/)*

**How to run it:**

Go to *./3-infinity-scroll/index.html* and double-click on this file




