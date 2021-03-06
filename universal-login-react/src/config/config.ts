require('dotenv').config();
import {ETHER_NATIVE_TOKEN} from '@universal-login/commons';

const developmentConfig = {
  domains: ['mylogin.eth'],
  relayerUrl: 'http://localhost:3311',
  jsonRpcUrl: 'http://localhost:18545',
  tokens: [process.env.TOKEN_CONTRACT_ADDRESS!, ETHER_NATIVE_TOKEN.address],
};

export default developmentConfig;
