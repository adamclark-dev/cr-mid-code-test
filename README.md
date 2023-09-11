# Comic Relief Engineer Code Test

Your task is to create an API endpoint that an API user can submit a postcode to, which will return a list of potential addresses **enhanced with latitudes and longitudes**.

You can find an example of how the end result might function here: <https://poqr2v25cb.execute-api.us-east-1.amazonaws.com/prod/postcode/SE17TP>

You may add your own formatting, styles, etc. to the output, change error handling, etc.

As part of your solution, you will need to send a GET request to our postcode lookup API to get the list of addresses:

[https://lookups.sls.comicrelief.com/postcode/lookup/SE17TP](https://lookups.sls.comicrelief.com/postcode/lookup/SE17TP)

You will then need to send a GET request to the [postcodes.io](https://postcodes.io) API to retrieve latitudes and longitudes:

[https://api.postcodes.io/postcodes/SE17TP](https://api.postcodes.io/postcodes/SE17TP)

You will then need to join the latitude and longitude data onto the address list, and return the enhanced list to the user.

## Local Development

Prerequisites:

- [Serverless](https://www.serverless.com/) installed globally in order to run the function locally using serverless offline
- [NodeJS](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)

Clone the repo and then execute

```bash
yarn install
```

to install the dependencies.

To run the endpoint locally, you can then run the following command in the command line:

```bash
serverlesss offline start
```

You can then visit the following url in your browser to test the response:

```bash
http://localhost:3001/postcode/SE17TP
```
