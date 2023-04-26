import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/mainPage';
import AboutPage from './Pages/aboutPage';
import UserRegistration from './Pages/userRegistrationPage';
import UserLogin from './Pages/userLoginPage';
import UserListPage from './Pages/userListPage';
import UserProfilePage from './Pages/userProfilePage';
import CompanyListPage from './Pages/companyListPage';
import CompanyProfilePage from './Pages/companyProfilePage';
import { useDispatch, useSelector } from 'react-redux';
import store from './store';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const cash = useSelector((state: ReturnType<typeof store.getState>) => state.cash);
  console.log(cash);

  const addCash = () => {
    dispatch({ type: 'ADD_CASH', payload: 1 });
  };

  const getCash = () => {
    dispatch({ type: 'GET_CASH', payload: 1 });
  };

  const fakeUserData = {
    name: 'John',
    email: 'john@gmail.com',
    age: 30,
  };
  const fakeCompanyData = {
    name: 'Meduzzen.',
    email: 'contact@meduzzen.com',
    age: 30,
    address: '123 Main St.',
    numEmployees: 100,
  };

  return (
    <div className='App'>
      <div>
      <h2>{cash.toString()}</h2>

        <button onClick={addCash}>Addd user</button>
        <button onClick={getCash}>Delete user</button>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/meduzzenProject' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/register' element={<UserRegistration />} />
          <Route path='/login' element={<UserLogin />} />
          <Route path='/users' element={<UserListPage {...{ userData: fakeUserData }} />} />
          <Route path='/users/:userId' element={<UserProfilePage {...{ userData: fakeUserData }} />} />
          <Route path='/companies' element={<CompanyListPage {...{ companyData: fakeCompanyData }} />} />
          <Route path='/companies/:companyId' element={<CompanyProfilePage {...{ companyData: fakeCompanyData }} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
