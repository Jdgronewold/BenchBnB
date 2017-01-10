import React from 'react';
import MarkerManager from '../../utils/marker_manager';

class BenchMap extends React.Component {
  constructor(props){
    super(props);
    this._idleHandler = this._idleHandler.bind(this);
  }


  componentDidMount() {
    // set the map to show SF
    const mapOptions = {
      center: { lat: 37.7758, lng: -122.435 }, // this is SF
      zoom: 13
    };

    // wrap the mapDOMNode in a Google Map
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(this.props.benches);

    this.map.addListener("idle", this._idleHandler);
  }

  _idleHandler() {
    const bounds = this.map.getBounds();
    const northEast = {lat: bounds.getNorthEast().lat(),
                       long: bounds.getNorthEast().lng()};
    const southWest = {lat: bounds.getSouthWest().lat(),
                       long: bounds.getSouthWest().lng()};
    const bound_corners = {bounds: {northEast, southWest}};
    this.props.updateBounds(bound_corners);
    this.props.fetchBenches(bound_corners.bounds);
  }

  componentWillReceiveProps(newProps) {
    this.MarkerManager.updateMarkers(newProps.benches);
  }

  render() {
    return (
      <div id="map-container" ref={ map => this.mapNode = map }></div>
    );
  }
}

export default BenchMap;
