import unionBy from 'lodash/unionBy';
import reduce from 'lodash/reduce';

import data from './data.json';

export const getOptionProvince = () => unionBy(
  data.map(({ province }) => ({ label: province, value: province })),
  'value'
);

export const getOptionDistrict = province => unionBy(
  reduce(
    data,
    (result, obj) => {
      if (obj.province === province) {
        return [...result, { label: obj.district, value: obj.district }];
      }
      return result;
    },
    []
  ),
  'value'
);

export const getOptionSubdistrict = (province, district) => unionBy(
  reduce(
    data,
    (result, obj) => {
      if (obj.province === province && obj.district === district) {
        return [
          ...result,
          { label: obj.subdistrict, value: obj.subdistrict }
        ];
      }
      return result;
    },
    []
  ),
  'value'
);

export const getOptionPostcode = (province, district, subdistrict) => reduce(
  data,
  (result, obj) => {
    if (
      obj.province === province
        && obj.district === district
        && obj.subdistrict === subdistrict
    ) {
      return [...result, { label: obj.postcode, value: obj.postcode }];
    }
    return result;
  },
  []
);
