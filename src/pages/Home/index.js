import React from 'react';
import LeftBar from '../../components/LeftBar';
import Map from '../../components/Map';
import AddUser from '../../components/AddUser';

export default function Home() {
  return (
    <>
      <Map />
      <LeftBar />
      <AddUser />
    </>
  );
}
