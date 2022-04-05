import {
  LambdaWrapper,
  ResponseModel,
} from '@comicrelief/lambda-wrapper';

import CONFIGURATION from '../Config/Configuration';

export default LambdaWrapper(CONFIGURATION, async (di, request) => {
  // Get a name from the query parameters.
  const postCode = request.getPathParameter('postCode', null);

  return new ResponseModel({
    postCode,
  }, 200, 'ok').generate();
});
