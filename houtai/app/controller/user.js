'use strict';
const Controller = require('./../core/base_controller');
module.exports = class extends Controller {
  async create() {
    const { service, ctx } = this;
    const payload = ctx.request.body || {};
    const res = await service.user.create(payload);
    this.ctx.body = res;
  }
  async login() {
    const { service, ctx } = this;
    const payload = ctx.request.body || {};
    const res = await service.user.login(payload);
    this.ctx.body = res;
  }
};