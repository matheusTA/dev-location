/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Modal, Button, Input } from 'antd';
import { Creators as ModalAddUserActions } from '../../store/ducks/modalAddUser';

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
            <Button key="submit" type="primary">
              Ok
            </Button>,
          ]
        }
      >
        <form>
          <Input
            type="text"
            placeholder="Usuário do Github"
            value={input}
            onChange={(e) => { this.setState({ input: e.target.value }); }}
          />
        </form>
      </Modal>
    );
  }
}

AddUser.propTypes = {
  modalAddUser: PropTypes.shape({
    visible: PropTypes.bool,
  }).isRequired,
  hideModal: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  modalAddUser: state.modalAddUser,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(ModalAddUserActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AddUser);
