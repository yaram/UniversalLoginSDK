import dotenv from 'dotenv';
import { getEnv } from '@universal-login/commons';

dotenv.config();

export interface Config {
  jsonRpcUrl: string;
  privateKey: string;
  chainSpec: {
    ensAddress: string,
    publicResolverAddress: string,
    chainId: number,
    name: string,
  };
}

const getConfig = (): Config => Object.freeze({
  jsonRpcUrl: getEnv('JSON_RPC_URL'),
  privateKey: getEnv('PRIVATE_KEY'),
  chainSpec: {
    ensAddress: getEnv('ENS_ADDRESS'),
    publicResolverAddress: getEnv('PUBLIC_RESOLVER_ADDRESS'),
    chainId: 0,
    name: 'ganache'
  },
});

export default getConfig;
