import React from 'react';

interface UserListPageProps {
  userData: {
    name: string;
    email: string;
    age: number;
  };
}

const UserListPage: React.FC<UserListPageProps> = ({ userData }) => {
  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
      <p>Age: {userData.age}</p>
    </div>
  );
};

export default UserListPage;
