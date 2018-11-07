const { DATA_MEDICARE_GOV_APP_TOKEN } = require('../config.js');
const express = require('express');
const axios = require('axios');

console.log(DATA_MEDICARE_GOV_APP_TOKEN);

const app = express();
const PORT = 3000;

app.use(express.static(__dirname + '/../client/dist'));

// ----------------------------------------------------
// TODO: Fill in the request handler for this endpoint!
// ----------------------------------------------------
app.get('/api/heartFailures', (req, res) => {

  axios.get('https://data.medicare.gov/resource/ukfj-tt6v.json', {
    headers: {
      app_token: DATA_MEDICARE_GOV_APP_TOKEN,
    },
    params: {
      measure_name: 'Death rate for heart failure patients',
    }
  })
    .then((data) => {
      let stateResults = {};
      data.data.forEach(record => {
        
      });
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
  // -----------------------------------------------------
  // TODO: Send a request to the HospitalCompare API here!
  // -----------------------------------------------------

  // -----------------------------------------------------
  // TODO: Do all data processing/wrangling/munging here!
  // -----------------------------------------------------

});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});