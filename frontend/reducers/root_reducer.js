import { combineReducers } from 'redux';
import SessionReducer from './sessions_reducer';
import BenchReducer from './bench_reducer';

export default combineReducers({
  session: SessionReducer,
  benches: BenchReducer
});
