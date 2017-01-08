import { connect } from 'react-redux';
import BenchIndex from './bench_index';
import { fetchBenches } from '../../actions/bench_actions';
import { selectBenches } from '../../reducers/selectors';

const mapStateToProps = (state) => ({
  benches: selectBenches(state)
});

const mapDispatchToProps = dispatch => ({
  fetchBenches: () => dispatch(fetchBenches())
});

export default connect(mapStateToProps, mapDispatchToProps)(BenchIndex);
