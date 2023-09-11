# Comic Relief Engineer Code Test

The aim of the code test is to create an API endpoint that an API user can submit a postcode to, which will return a list of potential addresses which have been **enhanced with latitudes and longitudes**.

You can find an example of how the end result might function below:

<https://poqr2v25cb.execute-api.us-east-1.amazonaws.com/prod/postcode/SE17TP>

You may add your own formatting, styles, etc. to the output, change error handling, etc.

As part of your code, You will need to send a GET request to our postcode API to get the list of addresses:

[https://lookups.sls.comicrelief.com/postcode/lookup/SE17TP](https://lookups.sls.comicrelief.com/postcode/lookup/SE17TP)

You will then need to send a GET request to the postcode.io api to retrieve latitudes and longitudes:

[https://api.postcodes.io/postcodes/SE17TP](https://api.postcodes.io/postcodes/SE17TP)

You will then need to join the latitude and longitude data from postcode.io onto the data from our postcode api, and return the data to the user.

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
