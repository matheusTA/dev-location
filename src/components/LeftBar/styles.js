import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #FFF;
  width: 20%;
  height: 90%;
  position: absolute;
  top: 5%;
  left: 2%;
  border-radius: 5px;
  overflow: auto;
  border: 2px solid #DCDCDC
`;

export const ListUsers = styled.ul`
  list-style: none;
  padding: 5%;
`;

export const User = styled.li`
  display: flex;
  flex-direction: row;
  padding: 3% 5% 3% 5%;
  align-items: center;
  border-bottom: 1px solid rgba(190, 190, 190, 0.6 );

  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin-right: 2%;
  }
`;

export const UserInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  p {
    color: #666;
    font-weight: 300;
  }

  button {
    background: transparent;
    color: #E90C07;
    margin-right: 10px;
  }

  a {
    color: #000;
  }
`;
