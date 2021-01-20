
  import { InMemoryDbService,RequestInfo } from 'angular-in-memory-web-api';
  
  export class FakeBackendService implements InMemoryDbService {
  
    createDb() {
      const users = [
        { 
          id: 1, 
          email: 'admin@admin.com', 
          password: 'admin123', 
          is_admin:true, 
        },
        { 
          id: 2, 
          email: 'admin2@admin.com', 
          password: 'admin123', 
          is_admin:false, 
        },
        { 
          id: 3, 
          email: 'admin@admin.com', 
          password: 'admin123', 
          is_admin:false, 
        },
        { 
          id: 4, 
          email: 'admin@admin.com', 
          password: 'admin123', 
          is_admin:false, 
        },
        { 
          id: 5, 
          email: 'admin@admin.com', 
          password: 'admin123', 
          is_admin:false, 
        },
        { 
          id: 6, 
          email: 'admin@admin.com', 
          password: 'admin123', 
          is_admin:false, 
        },
        { 
          id: 7, 
          email: 'admin@admin.com', 
          password: 'admin123', 
          is_admin:false, 
        },
        { 
          id: 8, 
          email: 'admin@admin.com', 
          password: 'admin123', 
          is_admin:false, 
        },
        { 
          id: 9, 
          email: 'admin@admin.com', 
          password: 'admin123', 
          is_admin:false, 
        },
        { 
          id: 10, 
          email: 'admin@admin.com', 
          password: 'admin123', 
          is_admin:false, 
        },
        { 
          id: 11, 
          email: 'admin@admin.com', 
          password: 'admin123', 
          is_admin:false, 
        },
        { 
          id: 12, 
          email: 'admin@admin.com', 
          password: 'admin123', 
          is_admin:false, 
        },
        { 
          id: 13, 
          email: 'admin@admin.com', 
          password: 'admin123', 
          is_admin:false, 
        },
        { 
          id: 14, 
          email: 'admin@admin.com', 
          password: 'admin123', 
          is_admin:false, 
        },
        { 
          id: 15, 
          email: 'admin@admin.com', 
          password: 'admin123', 
          is_admin:false, 
        },
        { 
          id: 16, 
          email: 'admin@admin.com', 
          password: 'admin123', 
          is_admin:false, 
        },
        { 
          id: 17, 
          email: 'admin@admin.com', 
          password: 'admin123', 
          is_admin:false, 
        },
        { 
          id: 18, 
          email: 'admin@admin.com', 
          password: 'admin123', 
          is_admin:false, 
        },
        { 
          id: 19, 
          email: 'admin@admin.com', 
          password: 'admin123', 
          is_admin:false, 
        },
        { 
          id: 20, 
          email: 'admin@admin.com', 
          password: 'admin123', 
          is_admin:false, 
        },
        { 
          id: 21, 
          email: 'admin@admin.com', 
          password: 'admin123', 
          is_admin:false, 
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
        },
        {
          id:2,
          fname: 'Mdmin',
          lname: 'Shaheeb',
          date_of_birth: '20-05-1999',
          gender: 'Male',
          phone: '0171xxxxxx',
          address: 'Dhaka, Bangladesh',
          interest: 'Coding & Watching Movies'
        },
        {
          id:3,
          fname: 'Ldmin',
          lname: 'Shaheeb',
          date_of_birth: '20-05-1999',
          gender: 'Male',
          phone: '0171xxxxxx',
          address: 'Dhaka, Bangladesh',
          interest: 'Coding & Watching Movies'
        },
        {
          id:4,
          fname: 'Kdmin',
          lname: 'Shaheeb',
          date_of_birth: '20-05-1999',
          gender: 'Male',
          phone: '0171xxxxxx',
          address: 'Dhaka, Bangladesh',
          interest: 'Coding & Watching Movies'
        },
        {
          id:5,
          fname: 'Zdmin',
          lname: 'Shaheeb',
          date_of_birth: '20-05-1999',
          gender: 'Male',
          phone: '0171xxxxxx',
          address: 'Dhaka, Bangladesh',
          interest: 'Coding & Watching Movies'
        },
        {
          id:6,
          fname: 'Ydmin',
          lname: 'Shaheeb',
          date_of_birth: '20-05-1999',
          gender: 'Male',
          phone: '0171xxxxxx',
          address: 'Dhaka, Bangladesh',
          interest: 'Coding & Watching Movies'
        },
        {
          id:7,
          fname: 'Fdmin',
          lname: 'Shaheeb',
          date_of_birth: '20-05-1999',
          gender: 'Male',
          phone: '0171xxxxxx',
          address: 'Dhaka, Bangladesh',
          interest: 'Coding & Watching Movies'
        },
        {
          id:8,
          fname: 'Edmin',
          lname: 'Shaheeb',
          date_of_birth: '20-05-1999',
          gender: 'Male',
          phone: '0171xxxxxx',
          address: 'Dhaka, Bangladesh',
          interest: 'Coding & Watching Movies'
        },
        {
          id:9,
          fname: 'Ddmin',
          lname: 'Shaheeb',
          date_of_birth: '20-05-1999',
          gender: 'Male',
          phone: '0171xxxxxx',
          address: 'Dhaka, Bangladesh',
          interest: 'Coding & Watching Movies'
        },
        {
          id:10,
          fname: 'Cdmin',
          lname: 'Shaheeb',
          date_of_birth: '20-05-1999',
          gender: 'Male',
          phone: '0171xxxxxx',
          address: 'Dhaka, Bangladesh',
          interest: 'Coding & Watching Movies'
        },
        {
          id:11,
          fname: 'Bdmin',
          lname: 'Shaheeb',
          date_of_birth: '20-05-1999',
          gender: 'Male',
          phone: '0171xxxxxx',
          address: 'Dhaka, Bangladesh',
          interest: 'Coding & Watching Movies'
        },
        {
          id:12,
          fname: 'Mdmin',
          lname: 'Shaheeb',
          date_of_birth: '20-05-1999',
          gender: 'Male',
          phone: '0171xxxxxx',
          address: 'Dhaka, Bangladesh',
          interest: 'Coding & Watching Movies'
        },
        {
          id:13,
          fname: 'Ldmin',
          lname: 'Shaheeb',
          date_of_birth: '20-05-1999',
          gender: 'Male',
          phone: '0171xxxxxx',
          address: 'Dhaka, Bangladesh',
          interest: 'Coding & Watching Movies'
        },
        {
          id:14,
          fname: 'Kdmin',
          lname: 'Shaheeb',
          date_of_birth: '20-05-1999',
          gender: 'Male',
          phone: '0171xxxxxx',
          address: 'Dhaka, Bangladesh',
          interest: 'Coding & Watching Movies'
        },
        {
          id:15,
          fname: 'Zdmin',
          lname: 'Shaheeb',
          date_of_birth: '20-05-1999',
          gender: 'Male',
          phone: '0171xxxxxx',
          address: 'Dhaka, Bangladesh',
          interest: 'Coding & Watching Movies'
        },
        {
          id:16,
          fname: 'Ydmin',
          lname: 'Shaheeb',
          date_of_birth: '20-05-1999',
          gender: 'Male',
          phone: '0171xxxxxx',
          address: 'Dhaka, Bangladesh',
          interest: 'Coding & Watching Movies'
        },
        {
          id:17,
          fname: 'Fdmin',
          lname: 'Shaheeb',
          date_of_birth: '20-05-1999',
          gender: 'Male',
          phone: '0171xxxxxx',
          address: 'Dhaka, Bangladesh',
          interest: 'Coding & Watching Movies'
        },
        {
          id:18,
          fname: 'Edmin',
          lname: 'Shaheeb',
          date_of_birth: '20-05-1999',
          gender: 'Male',
          phone: '0171xxxxxx',
          address: 'Dhaka, Bangladesh',
          interest: 'Coding & Watching Movies'
        },
        {
          id:19,
          fname: 'Ddmin',
          lname: 'Shaheeb',
          date_of_birth: '20-05-1999',
          gender: 'Male',
          phone: '0171xxxxxx',
          address: 'Dhaka, Bangladesh',
          interest: 'Coding & Watching Movies'
        },
        {
          id:20,
          fname: 'Cdmin',
          lname: 'Shaheeb',
          date_of_birth: '20-05-1999',
          gender: 'Male',
          phone: '0171xxxxxx',
          address: 'Dhaka, Bangladesh',
          interest: 'Coding & Watching Movies'
        },
        {
          id:21,
          fname: 'Bdmin',
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