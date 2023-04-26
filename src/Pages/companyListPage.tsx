import React from 'react';

interface CompanyListPageProps {
  companyData: {
    name: string;
    address: string;
    numEmployees: number;
  };
}

const CompanyListPage: React.FC<CompanyListPageProps> = ({ companyData }) => {
  return (
    <div>
      <h1>CompanyList {companyData.name}</h1>
    </div>
  );
};

export default CompanyListPage;
