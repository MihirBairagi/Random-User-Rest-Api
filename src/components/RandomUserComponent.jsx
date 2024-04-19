import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RandomUserComponent = () => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    const fetchUserList = async () => {
      try {
        const response = await axios.get('https://randomuser.me/api/?results=4');
        // const response = await axios.get('http://localhost:5000/get-random-user');
        setUserList(response.data.results);
      } catch (error) {
        console.error('Error fetching user list:', error);
      }
    };

    fetchUserList();
  }, []);

  return (
    <>
      <ul className='user-data-list'>
        {userList.map((user, index) => (
          <li key={index}>
            <div className="img-box">
              <img src={user.picture.medium} alt="User" />
            </div>
            <div className='name-box'>
              <h2>Name: {user.name.first} {user.name.last}</h2>
            </div>
            <div className="gender-box">
              <h3>Gender: {user.gender}</h3>
            </div>
            <div className="gender-box">
              <h3>number: {user.location.street.number}</h3>
              <h3>location: {user.location.city}</h3>
              <h3>pass: {user.location.postcode}</h3>
              <h3>emal: {user.email}</h3>
            </div>
          </li>
        ))}
      </ul>
      <div className="refresh-button">
        <button onClick={() => window.location.reload()}>Refresh</button>
      </div>

    </>
  );
};

export default RandomUserComponent;
