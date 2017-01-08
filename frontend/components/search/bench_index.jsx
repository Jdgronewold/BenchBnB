import React from 'react';
import BenchIndexItem from './bench_index_item';

class BenchIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBenches();
  }

  render(){
    const benches = this.props.benches.map( (bench, i) => (
        <BenchIndexItem bench={bench} key={i} />
    ));
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
