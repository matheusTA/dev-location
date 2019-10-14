/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from 'react';
import MapGL, { Marker } from 'react-map-gl';
import { Avatar } from './styles';

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        width: window.innerWidth,
        height: window.innerHeight,
        latitude: 37.78,
        longitude: -122.41,
        zoom: 15,
      },
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.resize);
    this.resize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  resize = () => {
    const { viewport } = this.state;
    this.setState({
      viewport: {
        ...viewport,
        width: window.innerWidth,
        height: window.innerHeight,
      },
    });
  };

  render() {
    const { viewport } = this.state;

    return (
      <MapGL
        {...viewport}
        // mapStyle="mapbox://styles/mapbox/dark-v9"
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
        onViewportChange={(viewportChange) => this.setState({ viewport: viewportChange })}
      >
        <Marker
          latitude={37.78}
          longitude={-122.41}
          offsetLeft={-20}
          offsetTop={-10}
        // key={viewport.longitude}
        >
          <Avatar src="https://avatars3.githubusercontent.com/u/35041966?s=460&v=4" alt="user" />
        </Marker>
      </MapGL>
    );
  }
}

export default Map;
