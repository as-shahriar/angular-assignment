
  import { InMemoryDbService,RequestInfo } from 'angular-in-memory-web-api';
  
  export class FakeBackendService implements InMemoryDbService {
  
    // In-Memory DB will intercept /api/whatever calls and return data
    createDb() {
      const users = [
        { id: 1, email: 'admin@admin.com', password: 'admin123', is_admin:true }
        // add as many data you need
      ]
      const products = [
        { id: 1, maker: 'Samsung', model: 'Galaxy'},
        { id: 2, maker: 'Sony', model: 'Xperia'}
      ]
      return { users, products } // add as many end-points you want
    }

    post(requestInfo: RequestInfo) {
      const collectionName = requestInfo.collectionName;
      console.log(collectionName);
      
    }
  }