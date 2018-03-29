# Interesting Places in my Neighbourhood
This application features a Google Maps map with places that I find interesting places to visit when you visit this area (Bollenstreek, the Netherlands). When clicking on a point or using the list on the right-hand side of the map, you can select a point, after which the map centers on it and an info-window appears with an image and description of each place directly from [WikiPedia](https://www.wikipedia.org/).
This application has been made by me from scratch and is a required project in the [Udacity](https://udacity.com) Front-End Nanodegree program.

## How to Run

1. Make sure you have Node.js and NPM installed on your machine
2. Run `npm install && npm start`
3. The application is available on Localhost:3000

## How to Use
The app has 2 main parts: The list and the map.
When using the list to select a place of interest, simply click on the list item and the corresponding marker on the map will get centered and the info-window will popup. This infowindow contains the name of the place, the first picture that comes up in the WikiPedia search results, a description of the first result of the WikiPedia search results, and a link to that WikiPedia page.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Properties

- This application is made using the [React](https://reactjs.org/) Framework
- 3 Additional packages have been used: `react-google-maps`, `escape-string-regexp` and `sort-by`. (See `package.json`)
- The [WikiPedia API](https://www.mediawiki.org/wiki/API:Main_page) has been used to fetch the information for the places. *Some of the places only had a WikiPedia page in Dutch, so there are some Dutch examples between them*
- The application includes a production-mode only service-worker provided by `create-react-app`. More details at [Deploy to Production](#deploy-to-production)

## Source files:
```bash
├── README.md - This file.
├── package.json
├── public
│   └── index.html
└── src
    ├── Utilities
    |   └── Images
    |   |   └── tulips.png - img of background of header
    |   └── places.js - an array of objects of all of our places
    ├── App.js
    ├── Heading.js - the heading of the app
    ├── List.js - the list component
    ├── ListBtn.js - the component of the button to toggle the list
    ├── Map.js - the map with markers and infowindows
    ├── Place.js - each list item component
    ├── App.test.js
    ├── registerServiceWorker.js
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```

## Deploy to Production

To create a production version of the app, run the command: `npm run build` and a folder will be created including a version of the app, ready to be deployed.

### Service worker

The production version also includes a service worker that caches the website for use when the user is disconnected from the internet. However, this service worker will only work:
1. On browsers and devices that support the service worker
2. Only on HTTPS websites
