import React from 'react';
import BenchIndexItem from './bench_index_item';
import { selectBenches } from '../../reducers/selectors';

class BenchIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBenches();
    console.log("Bench Index mount")
  }

  render(){

    const benches = this.props.benches.benchIds.map( (benchId) => (
        <BenchIndexItem bench={this.props.benches.benches[benchId]} key={benchId} />
    ));
    console.log("Bench Index render")
    return (
      <div className="bench-container">
        <ul className="bench-list">
          { benches }
        </ul>
      </div>
    );
  }
}

export default BenchIndex;
