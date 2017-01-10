import { UPDATE_BOUNDS } from '../actions/filter_actions';
import merge from 'lodash/merge';

const _nullBounds = { bounds: {} };

const FilterReducer = (state = _nullBounds, action) => {
  Object.freeze(state);
  switch(action.type) {
    case UPDATE_BOUNDS:
      return merge({}, state, action.bounds);
    default:
      return state;
  }
};

export default FilterReducer;
