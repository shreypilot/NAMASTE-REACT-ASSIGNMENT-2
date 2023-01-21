// ## Namaste React Course by Akshay Saini

// # Chapter 02 - Igniting Our App

/*
 *** Parcel Features -"Parcel is a Beast" ***
    
 * Created A Server
 * HMR - Hot Module Replacement
 * File Watcher algorithm - C++
 * BUNDLING
 * MINIFY
 * Cleaning our Code
 * Dev abd Production Build
 * Super Fast build algorithm
 * Image Optimization
 * Caching while development
 * Compression
 * Compatible with older version of browser
 * HTTPS on dev
 * port Number
 * Consistent Hashing Algorithm
 * Zero Config
 * Tree shaking
 *
 *
 * Transitive Dependencies
*/

// imported react & react-dom from node_module folder 
import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1",
    {
        id: "title1",
    },
    "Heading from Parcel"
);

const heading1 = React.createElement("h2",
    {
        id: "title2"
    },
    "This is Heading1"
);

const container = React.createElement("div",
    {
        className: "container",
    },
    [heading, heading1]
);

// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));

// Passing a react element inside root
root.render(container);