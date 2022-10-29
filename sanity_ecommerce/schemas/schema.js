import schemaTypes from 'all:part:@sanity/base/schema-type';
import createSchema from 'part:@sanity/base/schema-creator';

import product from './product';
import banner from './banner';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([product, banner]),
});
