import React from 'react';

const Users = (props) => {
  const { userId } = props.match.params;
  let { greetingsMessage } = props;
  greetingsMessage = greetingsMessage || 'Hello, Stranger!';
  return (
    <div>
      <h2> Users </h2>
      <p> {greetingsMessage} Este é meu componente! </p>
      <p> {userId} </p>
    </div>
  )
};

export default Users;