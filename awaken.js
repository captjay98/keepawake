#!/usr/bin/env node

const axios = require("axios");

const sites = [
  {
    name: "Jobsite Render Django",
    url: "https://jobsite-django.onrender.com/api/users",
  },
  {
    name: "Jobsite Render Express",
    url: "https://jobsite-express.onrender.com",
  },
  {
    name: "Jobsite Render",
    url: "https://jobsite-fejw.onrender.com",
  },
  {
    name: "JilTicketing Render",
    url: "https://jilticketing.onrender.com",
  },
  {
    name: "Jobsite FL0",
    url: "https://jobsite-dev.1.us-1.fl0.io",
  },
  {
    name: "Ticketer Koyeb",
    url: "https://ticketer-captjay.koyeb.app",
  },
 
];

/**
 * Keeps the application awake by making HTTP requests to a list of websites.
 *
 * @param {Array} sites - An array of objects representing websites to be awakened.
 *                        Each object should have a 'name' property specifying the name of the website,
 *                        and a 'url' property specifying the URL of the website.
 * @return {Promise} A promise that resolves when all the HTTP requests have completed.
 */

async function keepAwake() {
  sites.forEach(async (site) => {
    try {
      await axios.get(site.url);
      console.log(`${site.name} Awake`);
    } catch (error) {
      console.log(`Failed to wake ${site.name} with ${error.code}`);
    }
  });
}

/**
 * Runs the specified function after ten minutes.
 *
 * @param {function} func - The function to run.
 * @return {void} This function does not return a value.
 */
function runAfterTenMinutes() {
  keepAwake();
  setTimeout(keepAwake, 600000);
}

runAfterTenMinutes();
