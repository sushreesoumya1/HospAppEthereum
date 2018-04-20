import web3 from './web3';
import MedData from './build/MedData.json';

export default address => {
  return new web3.eth.Contract(JSON.parse(MedData.interface), address);
};
