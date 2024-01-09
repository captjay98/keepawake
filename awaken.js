const express = require("express");
const axios = require("axios");
const app = express();

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

async function keepAwake() {
  for (const site of sites) {
    try {
      await axios.get(site.url);
      console.log(`${site.name} Awake`);
    } catch (error) {
      console.log(`Failed to wake ${site.name} with ${error.code}`);
    }
  }
}

app.get("/", async (req, res) => {
  await keepAwake();
  res.send("Awake requests sent to all sites.");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  setInterval(keepAwake, 60000);
  console.log("All Servers Awake");
});
