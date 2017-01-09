import { connect } from 'react-redux';
import Search from './search';
import { fetchBenches } from '../../actions/bench_actions';

const mapStateToProps = ({benches}) => ({
  benches: {
    benches: benches,
    benchIds: Object.keys(benches)
  }
});

const mapDispatchToProps = dispatch => ({
  fetchBenches: () => dispatch(fetchBenches())
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
