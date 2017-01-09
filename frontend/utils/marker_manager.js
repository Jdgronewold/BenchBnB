import { selectBenches } from '../reducers/selectors';

export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = [];
    this.benchIds = [];
  }

  _benchesToAdd(benches) {
    const newBenches = benches.benchIds.map( benchId => {
      if(this.benchIds.indexOf(benchId === -1)) {
        this.benchIds.push(benchId);
        return benches.benches[benchId];
      }
    });
    return newBenches;
  }

  _createMarkerFromBench(bench) {
    const pos = new google.maps.LatLng(bench.lat, bench.long);
    let marker = new google.maps.Marker({
      position: pos,
      title: bench.description
    });
    this.markers.push(marker);
    marker.setMap(this.map);
  }

  updateMarkers(benches) {
    const benchesToAdd = this._benchesToAdd(benches);
    benchesToAdd.forEach( bench => {
      this._createMarkerFromBench(bench);
    });
  }
}
