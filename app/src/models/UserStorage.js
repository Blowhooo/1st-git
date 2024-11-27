'use strict';

const fs = require('fs').promises;

class UserStorage {

  static #getUserInfo(data, id){
    const users = JSON.parse(data)
    const idx = users.id.indexOf(id);
    const userKeys = Object.keys(users);
    const userInfo = userKeys.reduce((user, info) => {
      user[info] = users[info][idx];
      return user;
    }, {});
    return userInfo;
  }

  static #getUsers(isAll, fields, data){
    const users = JSON.parse(data);
    if(isAll) return users;
    const newUsers = fields.reduce((newUsers, field) => {
      if(users.hasOwnProperty(field)){
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  }

  static getUsers(isAll, ...fields){
    return fs.readFile('./src/databases/user.json')
    .then(data => {
      return this.#getUsers(isAll, fields, data);
    })
    .catch(console.error)
  }

  static getUserInfo(id){
    return fs.readFile('./src/databases/user.json')
    .then(data => {
      return this.#getUserInfo(data, id);
    })
    .catch(console.error);
  }

  static async save(userInfo){
    const users = await this.getUsers(true);
    if(users.id.includes(userInfo.id)){
      throw "이미 존재하는 아이디입니다.";
    }
    users.id.push(userInfo.id);
    users.name.push(userInfo.name);
    users.psword.push(userInfo.psword);
    fs.writeFile('./src/databases/user.json', JSON.stringify(users));
    return {success:true}
    
  }
}

module.exports = UserStorage;