import values from 'lodash/values';

export const selectBenches = (state) => {
  return values(state.benches);
};
