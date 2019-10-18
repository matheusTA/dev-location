/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Modal, Button, Input } from 'antd';
import { Creators as ModalAddUserActions } from '../../store/ducks/modalAddUser';
import { Creators as UsersActions } from '../../store/ducks/users';

class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    };
  }

  handleHideModal = () => {
    const { hideModal } = this.props;
    hideModal();
    this.setState({
      input: '',
    });
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    console.log('oioii');
    const { loading } = this.props;

    if (loading) return;

    const { input } = this.state;

    if (!input) return;

    const {
      addUserRequest,
      modalAddUser: { cordinates },
    } = this.props;

    addUserRequest(input, cordinates);
    this.setState({ input: '' });
  }

  render() {
    const { modalAddUser } = this.props;
    const { input } = this.state;

    return (
      <Modal
        visible={modalAddUser.visible}
        title="Adicionar Usuário"
        closable={false}
        footer={
          [
            <Button key="back" onClick={this.handleHideModal}>
              Cancelar
            </Button>,
            <Button key="submit" type="primary" onClick={this.handleFormSubmit}>
              Ok
            </Button>,
          ]
        }
      >
        <Input
          type="text"
          placeholder="Usuário do Github"
          value={input}
          onChange={(e) => { this.setState({ input: e.target.value }); }}
        />
      </Modal>
    );
  }
}

AddUser.propTypes = {
  modalAddUser: PropTypes.shape({
    visible: PropTypes.bool,
    cordinates: PropTypes.shape().isRequired,
  }).isRequired,
  hideModal: PropTypes.func.isRequired,
  addUserRequest: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  modalAddUser: state.modalAddUser,
  loading: state.users.loading,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
  { ...ModalAddUserActions, ...UsersActions }, dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(AddUser);
