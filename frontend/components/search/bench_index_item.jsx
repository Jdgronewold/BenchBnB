import React from 'react';

const BenchIndexItem = ({ bench }) => (
  <li>
    Description: {bench.description}
    <br/>
    Lat: {bench.lat}
    <br/>
    Long: {bench.long}
  </li>
);

export default BenchIndexItem;
