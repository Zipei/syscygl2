/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = {};

  // config.cluster = {
  //   listen: {
  //     path: '/syscygl2',
  //     port: 7001,
  //     hostname: 'syscygl2',
  //   },
  // };

  //跨域
  config.security = {
    csrf: {
      enable: false,
    },
    domainWhiteList: [ '*' ],
  };



  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1554797061822_7890';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };



  config.mongoose = {
    url: 'mongodb://127.0.0.1:27017/syscygl2',
    options: {
      // useNewUrlParser: true,
      // autoReconnect: true,
      // reconnectTries: Number.MAX_VALUE,
      // bufferMaxEntries: 0,
    },
  };

  config.io = {
    // init: {
    //   wsEngine: 'ws',
    // }, // passed to engine.io
    // namespace: {
    //   '/': {
    //     connectionMiddleware: [ 'connection' ],
    //     packetMiddleware: [ 'packet' ],
    //   },
    // },

    // cluster 模式下，通过 redis 实现数据共享
    redis: {
      host: '127.0.0.1',
      port: 6379,
    },
  };

  config.redis = {
    client: {
      port: 6379, // Redis port
      host: '127.0.0.1', // 部署服务器使用本地ip
      password: '',
      db: 0,
    },
  };

  config.CODE = {
    SUCCESS: { errno: 1000, errmsg: '成功' },
    ERROR: { errno: 1002, errmsg: '失败' },
    EXCEPTION: { errno: 1004, errmsg: '出现异常' },
    PARA_MISS: { errno: 1006, errmsg: '缺少必要参数' },
    PARA_ERROR: { errno: 1008, errmsg: '参数格式错误' },
    TOKEN_MISS: { errno: 1010, errmsg: 'token缺失' },
    TOKEN_NOT_FOUND: { errno: 1012, errmsg: '查无此token' },
    TOKEN_INVALID: { errno: 1014, errmsg: 'token不匹配' },
    USER_NOT_FOUND: { errno: 1016, errmsg: '用户不存在' },
    LOGIN_FAIL: { errno: 1018, errmsg: '账号或密码不正确' },
    HAS_EXIST: { errno: 1020, errmsg: '已存在' },
    NOT_EXIST: { errno: 1022, errmsg: '不存在' },
    HTTP_METHOD_ERROR: { errno: 1024, errmsg: 'HTTP请求类型错误' },
    NO_PERMISSION: { errno: 1026, errmsg: '当前用户没有权限操作' },
    UNIONID_MISS_PERMISSION: { errno: 1028, errmsg: '用户没有授权获取unionId，需请求权限获得unionId' },
    SEND_SUCCESS: { errno: 1030, errmsg: '发送成功，请等待wamp回复' },
    NONE_FOUND: { errno: 1034, errmsg: '查询为空' },
    SYS_BUSY: { errno: 1036, errmsg: '系统繁忙，请稍后再试' },
    CODE_INVALID: { errno: 1038, errmsg: 'code无效' },
    DECYPT_FAIL: { errno: 1040, errmsg: '解密失败' },
    APPLY_FAIL: { errno: 1042, errmsg: '申请失败' },
    API_UNDEFINED: { errno: 1044, errmsg: '接口未注册' },
    NOT_ENOUGH: { errno: 1046, errmsg: '商户余额不足' },
    OVER_TIME: { errno: 1048, errmsg: '超时' },
  };

  return {
    ...config,
    ...userConfig,
  };
};
