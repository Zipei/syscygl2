'use strict';

/** @type Egg.EggPlugin */
// module.exports = {
//   // had enabled by egg
//   // static: {
//   //   enable: true,
//   // }
// };
exports.mongoose = {
  enable: true,
  package: 'egg-mongoose',
};
exports.redis = {
  enable: true,
  package: 'egg-redis',
};
// exports.io = {
//   enable: true,
//   package: 'egg-socket.io',
// };
// exports.cors = {
//   enable: true,
//   package: 'egg-cors',
// };