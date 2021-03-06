import Knex from 'knex';

export interface AuthorisationRequest {
  walletContractAddress: string;
  key: string;
  deviceInfo: object;
}

class AuthorisationStore {
  constructor(private database : Knex) {}

  addRequest(request: AuthorisationRequest) {
    const {walletContractAddress, key, deviceInfo} = request;
    return this.database.insert({walletContractAddress: walletContractAddress.toLowerCase(), key: key.toLowerCase(), deviceInfo})
      .into('authorisations')
      .returning('id');
  }

  getPendingAuthorisations(walletContractAddress: string) {
    return this.database('authorisations')
      .where({walletContractAddress: walletContractAddress.toLowerCase()})
      .select();
  }

  removeRequest(walletContractAddress: string, publicKey: string) {
    return this.database('authorisations')
      .where('walletContractAddress', walletContractAddress.toLowerCase())
      .where('key', publicKey.toLocaleLowerCase())
      .del();
  }
}

export default AuthorisationStore;
