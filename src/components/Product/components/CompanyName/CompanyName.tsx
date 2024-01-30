import { ICompanyName } from './CompanyName.types';

const CompanyName: React.FC<ICompanyName> = ({ name, lastAdded }) => {
  return (
    <>
      <h3>{name}</h3>
      {lastAdded && <span>נוספו לאחרונה</span>}
    </>
  );
};

export default CompanyName;
