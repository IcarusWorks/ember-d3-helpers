import Ember from 'ember';
import array from 'd3-array';

let allowedMethods = Ember.A(['min', 'max', 'extent', 'sum', 'mean', 'median', 'variance', 'deviation', 'scan', 'merge', 'pairs', 'permute']);

export function d3Array([ method, ...args ]) {
  Ember.assert('this method is not yet supported', allowedMethods.includes(method));

  let arrayMethod = array[method];
  return arrayMethod.apply(null, args);
}

export default Ember.Helper.helper(d3Array);
