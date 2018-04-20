import web3 from './web3';
import MedData from './build/MedData.json';

const instance = new web3.eth.Contract(
  JSON.parse(MedData.interface),
  '0xcAF34Ef27cd400AC11C673037aea8C5eA558C2e8' //- MedData contract address
);

export default instance;

