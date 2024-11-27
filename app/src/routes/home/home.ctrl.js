'use strict';

const User = require('../../models/User');

const output = {
  home : (req, res) => {
    res.render('home/index');
  },
  login : (req, res) => {
    res.render('home/login');
  },
  register : (req, res) => {
    res.render('home/register');
  }
}

const process = {
  login : async (req, res) => {
    const users = new User(req.body);
    const response = await users.login();
    return res.json(response);
  },
  register : async (req, res) => {
    const users = new User(req.body);
    const response = await users.register();
    return res.json(response);
  }
}

module.exports = {
  output,
  process
}