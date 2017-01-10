import React from 'react';
import BenchIndex from './bench_index';
import BenchMap from '../bench_map/bench_map';

const Search = ({ benches, fetchBenches, updateBounds }) => {
  return (
    <div className="search-container">
      <BenchMap updateBounds={updateBounds} benches={benches} fetchBenches={fetchBenches}/>
      <br/>
      <BenchIndex benches={benches} fetchBenches={fetchBenches} />
  </div>
  );
};

export default Search;
