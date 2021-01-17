
  import { InMemoryDbService,RequestInfo } from 'angular-in-memory-web-api';
  
  export class FakeBackendService implements InMemoryDbService {
  
    createDb() {
      const users = [
        { 
          id: 1, 
          email: 'admin@admin.com', 
          password: 'admin123', 
          is_admin:true, 
        }
      ]

      const profiles = [
        {
          id:1,
          fname: 'Admin',
          lname: 'Shaheeb',
          date_of_birth: '20-05-1999',
          gender: 'Male',
          phone: '0171xxxxxx',
          address: 'Dhaka, Bangladesh',
          interest: 'Coding & Watching Movies'
        }
      ]
      
      return { users,profiles } 
    }

    // post(requestInfo: RequestInfo) {
    //   const collectionName = requestInfo.collectionName;
    //   // console.log(collectionName);
    // }
    // put(requestInfo: RequestInfo) {
    //   const collectionName = requestInfo.collectionName;
    //   console.log(collectionName);
    // }
  }