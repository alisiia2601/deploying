import React from 'react';

interface CompanyProfilePageProps {
  companyData: {
    name: string;
    email: string;
    age: number;
    address: string;
    numEmployees: number;
  };
}


const CompanyProfilePage: React.FC<CompanyProfilePageProps> = ({ companyData }) => {
  return (
    <div>
      <p>CompanyProfilePage {companyData.name}</p>
    </div>
  );
};

export default CompanyProfilePage;
