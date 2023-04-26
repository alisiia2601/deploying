import React from 'react';

interface UserProfilePageProps {
  userData: {
    name: string;
    email: string;
    age: number;
  };
}

const UserProfilePage: React.FC<UserProfilePageProps> = ({ userData }) => {
  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
      <p>Age: {userData.age}</p>
    </div>
  );
};

export default UserProfilePage;
