import React from 'react';
import { Modal, Button, Input } from 'antd';

export default function AddUser() {
  return (
    <Modal
      visible
      title="Adicionar Usuário"
      footer={[
        <Button key="back">
          Cancelar
        </Button>,
        <Button key="submit" type="primary" loading>
          Ok
        </Button>,
      ]}
    >
      <form action="">
        <Input
          type="text"
          placeholder="Usuário do Github"
          value={() => { }}
          onChange={() => { }}
        />
      </form>
    </Modal>
  );
}
