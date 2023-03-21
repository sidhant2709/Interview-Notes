import React, { useState } from 'react';
import useUser from './useUsers';

const App = () => {
  const { userList, getCurrentUser, fetchNextUser, fetchPrevUser } = useUser();

  const handleNextUser = () => {
    fetchNextUser();
  };

  const handlePrevUser = () => {
    fetchPrevUser();
  };

  if (!getCurrentUser()) {
    return <p>Loading...</p>;
  }
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <h1>User List </h1>
      {userList.length > 0 && (
        <>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <img src={getCurrentUser().picture.large} alt={getCurrentUser().name.first} />
            <p>Name: {`${getCurrentUser().name.first} ${getCurrentUser().name.last}`}</p>
            <p>Email: {getCurrentUser().email}</p>
            <p>Phone: {getCurrentUser().phone}</p>
          </div>
          <div>
            <button onClick={handlePrevUser} style={{ margin: '15px' }}>
              Previous
            </button>
            <button onClick={handleNextUser}>Next</button>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
