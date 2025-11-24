module.exports = {
  // options...
  log: {
    level: "warn",
    supportAnsiColors: true,
  },
  cookieJarEnabled: true,
  environments: {
    "pmp.dev": {
      "envName": "dev",
      "pmpUrl": "https://supportportal-{{envName}}.symphony.com/"
    },
    "pmp.prod": {
       "envName": "prod",
       "pmpUrl": "https://supportportal.symphony.com/"
    },
  }
}