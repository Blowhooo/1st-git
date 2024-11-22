'use strict';

class UserStorage {
  static #users = {
    id : ["login1", "login2", "login3"],
    psword : ["1234", "5678", "9101"],
    name : ["윤준후1", "윤준후2", "윤준후3"]
  }

  static getUsers(...fields){
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if(users.hasOwnProperty(field)){
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  }

  static getUserInfo(id){
    const users = this.#users;
    const idx = users.id.indexOf(id)
    const userKeys = Object.keys(users);
    const userInfo = userKeys.reduce((user, info) => {
      user[info] = users[info][idx];
      return user;
    }, {});
    return userInfo;
  }
}

module.exports = UserStorage;