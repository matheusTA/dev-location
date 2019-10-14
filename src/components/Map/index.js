/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from 'react';
import MapGL, { Marker } from 'react-map-gl';
import { Container } from './styles';

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        width: window.innerWidth,
        height: window.innerHeight,
        latitude: -21.975923,
        longitude: -46.780686,
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
      <Container>
        <MapGL
          {...viewport}
          // mapStyle="mapbox://styles/mapbox/dark-v9"
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
          onViewportChange={(viewportChange) => this.setState({ viewport: viewportChange })}
        />
      </Container>
    );
  }
}

export default Map;
