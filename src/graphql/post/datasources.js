import { RESTDataSource } from "apollo-datasource-rest";
import {makePostDataloader} from "./dataloaders"

export class PostsApi extends RESTDataSource {
  constructor(){
    super();
    this.baseURL = process.env.API_URL + "/posts/";

    // o bind(this) indica para usar este this na função que vai receber o getPosts
    // é como se la usa-se o this daqui
    this.dataLoader = makePostDataloader(this.getPosts.bind(this));
  }

  // o terceiro parametro configura o tempo que quero guardar os dados em cache de memoria
  async getPosts(urlParams = {}) {
    return this.get('', urlParams , {
      cacheOptions: {
        ttl: 60
      }
    });
  }

  async getPost(id) {
    return this.get(id, undefined, {
      cacheOptions: {
        ttl: 60
      }
    });
  }

  batchLoadByUserId(id) {
    return this.dataLoader.load(id);
  }
}
