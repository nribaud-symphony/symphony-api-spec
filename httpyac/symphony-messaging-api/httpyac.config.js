module.exports = {
  // options...
  log: {
    level: "warn",
    supportAnsiColors: true,
  },
  cookieJarEnabled: true,
  environments: {
    "$shared": {
      "botName": "sa",
      // privatekey file located in ~/.ssh/symphony-api-spec.keys/<botkey>
      "botKey": "mykey.pem"
    },
    "ceb-nri-s001.on.dev.symphony.com": {   
       "sessionAuthUrl": "https://ceb-nri-s001.on.dev.symphony.com",
       "podUrl": "https://ceb-nri-s001.on.dev.symphony.com"
    },
  }
}