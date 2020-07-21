import React from 'react';

const passport = {
  username: 'joao',
  password: '1234',
  equal(compare) {
    return this.username === (compare.username || false )
    && this.password === (compare.password || false )
  },
  test() { return this.username }
}

const StrictAccess = ({user = {username: '', password: ''}}) => {
  if(passport.equal(user)) return (
    <div>
      <h2> Allow </h2>
    </div>
  );
  return (
    <div>
      <h2> Deny </h2>
    </div>
  );
};

export default StrictAccess;