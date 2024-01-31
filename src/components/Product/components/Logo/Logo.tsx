import { ILogoProps } from './Logo.types';

const Logo: React.FC<ILogoProps> = ({ logo }) => {
  return (
    <>
      <img src={logo} alt={logo + ' logo'} loading="lazy" />
    </>
  );
};

export default Logo;
