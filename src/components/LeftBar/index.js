import React from 'react';
import DeleteIcon from '@material-ui/icons/HighlightOffRounded';
import NextIcon from '@material-ui/icons/NavigateNextRounded';
import {
  Container, ListUsers, User, UserInfo,
} from './styles';

export default function LeftBar() {
  return (
    <Container>
      <ListUsers>
        <User>
          <img src="https://avatars3.githubusercontent.com/u/35041966?s=460&v=4" alt="user" />
          <UserInfo>
            <div>
              <h2>matheus</h2>
              <p>mathuesta</p>
            </div>
            <div>
              <button type="button">
                <DeleteIcon />
              </button>
              <a href="/">
                <NextIcon />
              </a>
            </div>
          </UserInfo>
        </User>
        <User>
          <img src="https://avatars3.githubusercontent.com/u/35041966?s=460&v=4" alt="user" />
          <UserInfo>
            <div>
              <h2>Matheus Trajano Antonino</h2>
              <p>mathuesta</p>
            </div>
            <div>
              <button type="button">
                <DeleteIcon />
              </button>
              <a href="/">
                <NextIcon />
              </a>
            </div>
          </UserInfo>
        </User>
        <User>
          <img src="https://avatars3.githubusercontent.com/u/35041966?s=460&v=4" alt="user" />
          <UserInfo>
            <div>
              <h2>matheus</h2>
              <p>mathuesta</p>
            </div>
            <div>
              <button type="button">
                <DeleteIcon />
              </button>
              <a href="/">
                <NextIcon />
              </a>
            </div>
          </UserInfo>
        </User>
      </ListUsers>
    </Container>
  );
}
