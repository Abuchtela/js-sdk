
require('dotenv').config();
console.log('loaded configuration from .env', __dirname);

module.exports = async function (globalConfig, projectConfig) {
  console.log('starting global setup, initalizing testnet');

  if (process.env['USE_SHIVA'] === true) {
    const tinny = require('@lit-protocol/tinny');
    global.__SHIVA__ = new tinny.ShivaClient();
    global.__TESTNET__ = await global.__SHIVA__.startTestnetManager();
    const state = await global.__TESTNET__.pollTestnetForActive();
    console.log('test net state is ', state);
    if (state === `UNKNOWN`) {
      console.log(
        'Testnet state found to be Unknown meaning there was an error with testnet creation. shutting down'
      );
      throw new Error(`Error while creating testnet, aborting test run`);
    }
    const config = await global.__TESTNET__.getTestnetConfig();
    console.log(config);
  } else {
    console.log('Skipping network creation, using live testnet');
  }
};
