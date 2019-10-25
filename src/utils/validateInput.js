import find from 'lodash/find';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';
import toString from 'lodash/toString';

/* return false คือ validate ผ่าน */
const handleValidateType = (value, type) => {
  if (type === 'email') {
    const rex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i; // eslint-disable-line
    return !rex.test(value);
  }
  if (type === 'number') {
    const rex = /^\d+$/;
    return !rex.test(value);
  }
  return false;
};

const handleValidatePattern = (value, pattern) => {
  const rex = new RegExp(pattern);
  return !rex.test(value);
};

export default (value, rules) => {
  // console.log('value', value, rules);
  const data = find(rules, ({ type, required, pattern }) => {
    if (required && isEmpty(toString(value))) return true;
    if (!isEmpty(type) && handleValidateType(value, type)) return true;
    if (!isEmpty(pattern) && handleValidatePattern(value, pattern)) return true;
    return false;
  });

  return get(data, 'message', '');
};
