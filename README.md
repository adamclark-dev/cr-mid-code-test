## Midweight Developer Code Test

The aim of the code test is to create an API endpoint that an API user can submit a postcode to, which
will return a list of potential addresses which have been enhanced with latitudes and longitudes.

You can find an example of how the end result should function below:

https://s4aily6l6c.execute-api.eu-west-2.amazonaws.com/production/postcode/SE17TP


As part of your code, You will need to send a GET request to our post code api to get the list of addresses:

[https://lookups.sls.comicrelief.com/postcode/lookup/SE17TP](https://lookups.sls.comicrelief.com/postcode/lookup/SE17TP)

You will then need to send a GET request to the postcode.io api to get latitudes and longitudes:

[https://api.postcodes.io/postcodes/SE17TP](https://api.postcodes.io/postcodes/SE17TP)

You will then need to join the latitude and longitude data from postcode.io onto the data from our
postcode api and return the data to the user.

### Local Developemnt

To run the endpoint locally you can run the following command in the command line,
```
serverlesss offline start
```

and then visit the following url in your browser to test the response,
```
http://localhost:3001/postcode/sw183ba
```
