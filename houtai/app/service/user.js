'use strict';
const Service = require('../core/base_service');
const md5 = require('md5');
module.exports = class extends Service {
  async login(payload) {
    console.log(payload)
    const qq = payload.qq;
    const pw = md5(payload.password);
    // payload.password = pw;
    let res;
    try {
      res = await this.ctx.model.User.find({ 'qq': qq, 'password': pw });
      if (this.isEmpty(res)) {
        return this.fail(this.config.CODE.LOGIN_FAIL);
      }
      return this.success();

    } catch (error) {
      return this.fail(this.config.CODE.EXCEPTION, error.message);
    }
  }

  async create(payload) {
    let res;
    const qq = payload.qq;
    payload.password = md5(payload.password);
    try {
      res = await this.ctx.model.User.findOne({ 'qq': qq });
      if (res) {
        return this.fail(this.config.CODE.HAS_EXIST);
      }
      res = await this.ctx.model.User.create(payload);
      return this.success();

    } catch (error) {
      return this.fail(this.config.CODE.EXCEPTION, error.message);
    }
  }
};