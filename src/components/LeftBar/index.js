import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import DeleteIcon from '@material-ui/icons/HighlightOffRounded';
import NextIcon from '@material-ui/icons/NavigateNextRounded';
import { Creators as UsersActions } from '../../store/ducks/users';
import {
  Container, ListUsers, User, UserInfo,
} from './styles';

const LeftBar = ({ users, removeUser }) => (
  <Container>
    {!users.data.length && <h4>Nenhum usuário adicionado</h4>}
    <ListUsers>
      {users.data.map((user) => (
        <User key={user.id}>
          <img src={user.avatar} alt={user.name} />
          <UserInfo>
            <div>
              <h2>{user.name}</h2>
              <p>{user.login}</p>
            </div>
            <div>
              <button type="button" onClick={() => removeUser(user)}>
                <DeleteIcon />
              </button>
              <a href={`https://github.com/${user.login}`}>
                <NextIcon />
              </a>
            </div>
          </UserInfo>
        </User>
      ))}
    </ListUsers>
  </Container>
);

LeftBar.propTypes = {
  users: PropTypes.shape({
    data: PropTypes.array,
  }).isRequired,
  removeUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  users: state.users,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(UsersActions, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(LeftBar);
