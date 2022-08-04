import { RESTDataSource } from "apollo-datasource-rest";
import {makeUserDataloader} from "./dataloaders"

export class UsersApi extends RESTDataSource {
  constructor(){
    super();
    this.baseURL = process.env.API_URL + "/users/";

    // o bind(this) indica para usar este this na função que vai receber o getPosts
    // é como se la usa-se o this daqui
    this.dataLoader = makeUserDataloader(this.getUsers.bind(this));
  }

  // o terceiro parametro configura o tempo que quero guardar os dados em cache de memoria
  async getUsers(urlParams = {}) {
    return this.get('', urlParams , {
      cacheOptions: {
        ttl: 60
      }
    });
  }

  async getUser(id) {
    return this.get(id, undefined, {
      cacheOptions: {
        ttl: 60
      }
    });
  }

  batchLoadById(id) {
    return this.dataLoader.load(id);
  }
}
