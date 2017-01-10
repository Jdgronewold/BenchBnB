import { connect } from 'react-redux';
import Search from './search';
import { fetchBenches } from '../../actions/bench_actions';
import { updateBounds } from '../../actions/filter_actions';

const mapStateToProps = ({benches}) => ({
  benches: {
    benches: benches,
    benchIds: Object.keys(benches)
  }
});

const mapDispatchToProps = dispatch => ({
  fetchBenches: (bounds) => dispatch(fetchBenches(bounds)),
  updateBounds: (bounds) => dispatch(updateBounds(bounds))
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
