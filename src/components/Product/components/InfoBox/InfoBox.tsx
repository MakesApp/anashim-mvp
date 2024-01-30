import { IInfoBox } from './InfoBox.types';

const InfoBox: React.FC<IInfoBox> = ({ text }) => {
  return <div>{text}</div>;
};

export default InfoBox;
