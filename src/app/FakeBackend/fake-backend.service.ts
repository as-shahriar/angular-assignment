
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
          email: 'fidelia@gmail.com', 
          password: 'defaultpassword', 
          is_admin:false, 
        },
        { 
          id: 3, 
          email: 'charlsie@gmail.com', 
          password: 'defaultpassword', 
          is_admin:false, 
        },
        { 
          id: 4, 
          email: 'norene@gmail.com', 
          password: 'defaultpassword', 
          is_admin:false, 
        },
        { 
          id: 5, 
          email: 'belle@gmail.com', 
          password: 'defaultpassword', 
          is_admin:false, 
        },
        { 
          id: 6, 
          email: 'bethany@gmail.com', 
          password: 'defaultpassword', 
          is_admin:false, 
        },
        { 
          id: 7, 
          email: 'tula@gmail.com', 
          password: 'defaultpassword', 
          is_admin:false, 
        },
        { 
          id: 8, 
          email: 'cristi@gmail.com', 
          password: 'defaultpassword', 
          is_admin:false, 
        },
        { 
          id: 9, 
          email: 'alfeda@gmail.com', 
          password: 'defaultpassword', 
          is_admin:false, 
        },
        { 
          id: 10, 
          email: 'wayne@gmail.com', 
          password: 'defaultpassword', 
          is_admin:false, 
        },
        { 
          id: 11, 
          email: 'miguelina@gmail.com', 
          password: 'defaultpassword', 
          is_admin:false, 
        },
        { 
          id: 12, 
          email: 'clint@gmail.com', 
          password: 'defaultpassword', 
          is_admin:false, 
        },
        { 
          id: 13, 
          email: 'exie@gmail.com', 
          password: 'defaultpassword', 
          is_admin:false, 
        },
        { 
          id: 14, 
          email: 'minh@gmail.com', 
          password: 'defaultpassword', 
          is_admin:false, 
        },
        { 
          id: 15, 
          email: 'vonnie@gmail.com', 
          password: 'defaultpassword', 
          is_admin:false, 
        },
        { 
          id: 16, 
          email: 'fransisca@gmail.com', 
          password: 'defaultpassword', 
          is_admin:false, 
        },
        { 
          id: 17, 
          email: 'camilia@gmail.com', 
          password: 'defaultpassword', 
          is_admin:false, 
        },
        { 
          id: 18, 
          email: 'benito@gmail.com', 
          password: 'defaultpassword', 
          is_admin:false, 
        },
        { 
          id: 19, 
          email: 'jolynn@gmail.com', 
          password: 'defaultpassword', 
          is_admin:false, 
        },
        { 
          id: 20, 
          email: 'jefferson@gmail.com', 
          password: 'defaultpassword', 
          is_admin:false, 
        },
        { 
          id: 21, 
          email: 'ivan@gmail.com', 
          password: 'defaultpassword', 
          is_admin:false, 
        }

      ]

      const profiles = [
        {
          id:1,
          fname: 'Admin',
          lname: 'Shaheeb',
          date_of_birth: '1999-05-08',
          gender: 'Male',
          phone: '0171xxxxxx',
          address: 'Dhaka, Bangladesh',
          interest: 'Coding & Watching Movies'
        },
        {
          id:2,
          fname: 'Fidelia',
          lname: 'Collis',
          date_of_birth: '1999-05-08',
          gender: 'Male',
          phone: '0171xxxxxx',
          address: 'Dhaka, Bangladesh',
          interest: 'Coding & Watching Movies'
        },
        {
          id:3,
          fname: 'Charlsie',
          lname: 'Eacret',
          date_of_birth: '1999-05-08',
          gender: 'Male',
          phone: '0171xxxxxx',
          address: 'Dhaka, Bangladesh',
          interest: 'Coding & Watching Movies'
        },
        {
          id:4,
          fname: 'Norene',
          lname: 'Winker',
          date_of_birth: '1999-05-08',
          gender: 'Male',
          phone: '0171xxxxxx',
          address: 'Dhaka, Bangladesh',
          interest: 'Coding & Watching Movies'
        },
        {
          id:5,
          fname: 'Belle',
          lname: 'Yokley',
          date_of_birth: '1999-05-08',
          gender: 'Male',
          phone: '0171xxxxxx',
          address: 'Dhaka, Bangladesh',
          interest: 'Coding & Watching Movies'
        },
        {
          id:6,
          fname: 'Bethany',
          lname: 'Dress',
          date_of_birth: '1999-05-08',
          gender: 'Male',
          phone: '0171xxxxxx',
          address: 'Dhaka, Bangladesh',
          interest: 'Coding & Watching Movies'
        },
        {
          id:7,
          fname: 'Tula',
          lname: 'Tafoya',
          date_of_birth: '1999-05-08',
          gender: 'Male',
          phone: '0171xxxxxx',
          address: 'Dhaka, Bangladesh',
          interest: 'Coding & Watching Movies'
        },
        {
          id:8,
          fname: 'Cristi',
          lname: 'Nowlin',
          date_of_birth: '1999-05-08',
          gender: 'Male',
          phone: '0171xxxxxx',
          address: 'Dhaka, Bangladesh',
          interest: 'Coding & Watching Movies'
        },
        {
          id:9,
          fname: 'Alfreda',
          lname: 'Sprankle',
          date_of_birth: '1999-05-08',
          gender: 'Male',
          phone: '0171xxxxxx',
          address: 'Dhaka, Bangladesh',
          interest: 'Coding & Watching Movies'
        },
        {
          id:10,
          fname: 'Wayne',
          lname: 'Wyche',
          date_of_birth: '1999-05-08',
          gender: 'Male',
          phone: '0171xxxxxx',
          address: 'Dhaka, Bangladesh',
          interest: 'Coding & Watching Movies'
        },
        {
          id:11,
          fname: 'Miguelina',
          lname: 'Meals',
          date_of_birth: '1999-05-08',
          gender: 'Male',
          phone: '0171xxxxxx',
          address: 'Dhaka, Bangladesh',
          interest: 'Coding & Watching Movies'
        },
        {
          id:12,
          fname: 'Clint',
          lname: 'Greenan',
          date_of_birth: '1999-05-08',
          gender: 'Male',
          phone: '0171xxxxxx',
          address: 'Dhaka, Bangladesh',
          interest: 'Coding & Watching Movies'
        },
        {
          id:13,
          fname: 'Exie',
          lname: 'Simoes',
          date_of_birth: '1999-05-08',
          gender: 'Male',
          phone: '0171xxxxxx',
          address: 'Dhaka, Bangladesh',
          interest: 'Coding & Watching Movies'
        },
        {
          id:14,
          fname: 'Minh',
          lname: 'Borquez',
          date_of_birth: '1999-05-08',
          gender: 'Male',
          phone: '0171xxxxxx',
          address: 'Dhaka, Bangladesh',
          interest: 'Coding & Watching Movies'
        },
        {
          id:15,
          fname: 'Vonnie',
          lname: 'Sabala',
          date_of_birth: '1999-05-08',
          gender: 'Male',
          phone: '0171xxxxxx',
          address: 'Dhaka, Bangladesh',
          interest: 'Coding & Watching Movies'
        },
        {
          id:16,
          fname: 'Fransisca',
          lname: 'Pauly',
          date_of_birth: '1999-05-08',
          gender: 'Male',
          phone: '0171xxxxxx',
          address: 'Dhaka, Bangladesh',
          interest: 'Coding & Watching Movies'
        },
        {
          id:17,
          fname: 'Camilla',
          lname: 'Canfield',
          date_of_birth: '1999-05-08',
          gender: 'Male',
          phone: '0171xxxxxx',
          address: 'Dhaka, Bangladesh',
          interest: 'Coding & Watching Movies'
        },
        {
          id:18,
          fname: 'Benito',
          lname: 'Mathes',
          date_of_birth: '1999-05-08',
          gender: 'Male',
          phone: '0171xxxxxx',
          address: 'Dhaka, Bangladesh',
          interest: 'Coding & Watching Movies'
        },
        {
          id:19,
          fname: 'Jolynn',
          lname: 'Wrenn',
          date_of_birth: '1999-05-08',
          gender: 'Male',
          phone: '0171xxxxxx',
          address: 'Dhaka, Bangladesh',
          interest: 'Coding & Watching Movies'
        },
        {
          id:20,
          fname: 'Jefferson',
          lname: 'Villalon',
          date_of_birth: '1999-05-08',
          gender: 'Male',
          phone: '0171xxxxxx',
          address: 'Dhaka, Bangladesh',
          interest: 'Coding & Watching Movies'
        },
        {
          id:21,
          fname: 'Ivan',
          lname: 'Masker',
          date_of_birth: '1999-05-08',
          gender: 'Male',
          phone: '0171xxxxxx',
          address: 'Dhaka, Bangladesh',
          interest: 'Coding & Watching Movies'
        }
        
      ]
      
      return { users,profiles } 
    }
  }