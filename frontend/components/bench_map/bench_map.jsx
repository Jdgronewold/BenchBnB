import React from 'react';
import MarkerManager from '../../utils/marker_manager';

class BenchMap extends React.Component {
  constructor(props){
    super(props);
  }


  componentDidMount() {
    // set the map to show SF
    console.log("Map mount")
    const mapOptions = {
      center: { lat: 37.7758, lng: -122.435 }, // this is SF
      zoom: 13
    };

    // wrap the mapDOMNode in a Google Map
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(this.props.benches);
  }

  componentWillReceiveProps(newProps) {
    this.MarkerManager.updateMarkers(newProps.benches);
  }

  render() {
    console.log("Map render");
    return (
      <div id="map-container" ref={ map => this.mapNode = map }></div>
    );
  }
}

export default BenchMap;
