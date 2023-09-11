import {
  LambdaWrapper,
  ResponseModel,
} from '@comicrelief/lambda-wrapper';

import CONFIGURATION from '../Config/Configuration';

export default LambdaWrapper(CONFIGURATION, async (di, request) => {
  // get the postcode from the request URL
  const postCode = request.getPathParameter('postCode', null);

  return new ResponseModel({
    postCode,
  }, 200, 'ok').generate();
});
