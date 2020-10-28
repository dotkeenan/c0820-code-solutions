import React from 'react';

function User(props) {
  return (
    <li>
      <h3>{ props.user.name }</h3>
      <p>from { props.user.company.name }</p>
      <p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={`mailto:${props.user.email}`} >
          { props.user.email }
        </a>
      </p>
    </li>
  );
}

function UserList(props) {
  return (
    <ul>
      {
        props.users.map(user => {
          return <User key={user.id} user={user}/>;
        })
      }
    </ul>
  );
}

export default UserList;
