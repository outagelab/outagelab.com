# JavaScript SDK Reference

## Install

```
npm install -s @outagelab/sdk
```

## Configure

```
const OutageLabClient = require("@outagelab/sdk")

let client = new OutageLabClient({
    application: "reviews-service",
    environment: process.env.ENVIRONMENT_NAME,
    apiKey: process.env.OUTAGELAB_API_KEY,
    enabled: (ctx) => ctx.environment !== "production"
})
```
