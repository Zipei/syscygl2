'use strict';
const { Controller } = require('egg');
class BaseController extends Controller {
  success(data) {
    this.ctx.body = {
      errno: 0,
      errmsg: '',
      data,
    };
  }
  // fail(msg, no) {
  //   this.ctx.body = {
  //     errno: no || 400,
  //     errmsg: msg || '内部错误',
  //   };
  // }
  fail(resultEnum, data, message) {
    let obj;
    if (typeof resultEnum === 'object') {
      obj = {
        errno: resultEnum.errno,
        errmsg: message !== undefined && message !== '' ? message : resultEnum.errmsg,
        data: data || '',
      };
    } else {
      obj = {
        errno: data,
        errmsg: resultEnum,
        data: message,
      };
    }
    return this.ctx.body = obj;
  }
  isEmpty(data) {
    if (
      data === undefined ||
      data === null ||
      data === false ||
      data === '' ||
      data.toString() === 'NaN' ||
      JSON.stringify(data) == '{}' ||
      JSON.stringify(data) == '[]'
    ) {
      return true;
    }
    return false;

  }
}
module.exports = BaseController;