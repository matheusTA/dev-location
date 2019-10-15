/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from 'react';
import MapGL, { Marker, GeolocateControl } from 'react-map-gl';
import { Avatar } from './styles';

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        width: window.innerWidth,
        height: window.innerHeight,
        latitude: 0,
        longitude: 0,
        zoom: 15,
      },
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.resize);
    this.resize();
    this.getLocationUser();
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

  getLocationUser = () => {
    const { viewport } = this.state;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.setState({
          viewport: {
            ...viewport,
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          },
        });
      });
    } else {
      // eslint-disable-next-line no-alert
      alert('Geolocation is not supported by this browser.');
    }
  }

  render() {
    const { viewport } = this.state;

    return (
      <MapGL
        {...viewport}
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
        <GeolocateControl
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation
        />
      </MapGL>
    );
  }
}

export default Map;
