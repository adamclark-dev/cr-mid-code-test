# Comic Relief Engineer Code Test

Your task is to create an API endpoint that an API user can submit a postcode to, which will return a list of potential addresses **enhanced with latitudes and longitudes**.

You can find an example of how the end result might function here: <https://poqr2v25cb.execute-api.us-east-1.amazonaws.com/prod/postcode/SE17TP>

You may add your own formatting, styles, etc. to the output, change error handling, etc.

As part of your solution, you will need to send a GET request to [our postcode lookup API](http://spa-lookups-apidocs.s3-website-eu-west-1.amazonaws.com/#api-General-Postcode_Lookup) to get the list of addresses:

[https://lookups.sls.comicrelief.com/postcode/lookup/SE17TP](https://lookups.sls.comicrelief.com/postcode/lookup/SE17TP)

You will then need to send a GET request to the [postcodes.io](https://postcodes.io) API to retrieve latitudes and longitudes:

[https://api.postcodes.io/postcodes/SE17TP](https://api.postcodes.io/postcodes/SE17TP)

You will then need to join the latitude and longitude data onto the address list, and return the enhanced list to the user.

## Prerequisites

You'll need to have the following software installed:

- [NodeJS](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)
- [Serverless](https://www.serverless.com/) installed globally

## Local development

Clone the repo and then install dependencies by running

```bash
yarn install
```

To run the service locally, use the following command:

```bash
serverlesss offline start
```

You can then visit the following URL in your browser to test the response:

<http://localhost:3001/postcode/SE17TP>

## Submission

To submit your solution:

- Create a private Github Repository that contains your code
- [Invite](https://docs.github.com/en/github/setting-up-and-managing-your-github-user-account/managing-access-to-your-personal-repositories/inviting-collaborators-to-a-personal-repository) [corinja](https://github.com/corinja), [seb-cr](https://github.com/seb-cr) and [KrupaPammi](https://github.com/KrupaPammi)  as contributors
- Email <c.ashwell@comicrelief.com> to let us know when you've finished
- If you're ok to share screen during the interview that's good, alternatively if you can host this somewhere that's also good
- Please reach out to [me](https://github.com/corinja) with any questions!
