/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MapGL, { Marker, GeolocateControl } from 'react-map-gl';
import { Creators as ModalAddUserActions } from '../../store/ducks/modalAddUser';
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

  handleMapClick = async (event) => {
    const [longitude, latitude] = event.lngLat;
    const { showModal } = this.props;

    await showModal({ latitude, longitude });
  }

  render() {
    const { viewport } = this.state;
    const { users } = this.props;

    return (
      <MapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
        onViewportChange={(viewportChange) => this.setState({ viewport: viewportChange })}
        onClick={this.handleMapClick}
      >
        {users.data.map((user) => (
          <Marker
            latitude={user.cordinates.latitude}
            longitude={user.cordinates.longitude}
            key={user.id}
          >
            <Avatar src={user.avatar} alt={user.name} />
          </Marker>
        ))}
        <GeolocateControl
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation
        />
      </MapGL>
    );
  }
}

Map.propTypes = {
  showModal: PropTypes.func.isRequired,
  users: PropTypes.shape({
    data: PropTypes.array,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  users: state.users,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(ModalAddUserActions, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Map);
