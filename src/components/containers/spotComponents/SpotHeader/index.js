import React from 'react';
import UserDetails from '../UserDetails';
import TrackSearch from '../TrackSearch';
import './Header.css';

const SpotHeader = () => {
  return (
    <div className="header">
      <div className="search"><TrackSearch /></div>
      <UserDetails />
    </div>
  );
};

export default SpotHeader;
