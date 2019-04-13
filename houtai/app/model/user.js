module.exports = app => {
  const mongoose = app.mongoose;
  const UserSchema = new mongoose.Schema(
    {
      username: { type: String }, // 真实姓名
      sex: { type: String, enum: [ '男', '女' ] },
      phone: { type: String },
      qq: { type: String, unique: true },
      password: { type: String },
      province: { type: String },
      city: { type: String },
      dormitory: { type: String }, // 宿舍
      lab: { type: String },
      grade: { type: Number },
      major: { type: String },
      state: { type: String, enum: [ '未通过', '已通过' ], default: '未通过' },
      pcname: { type: String },
      joinDate: { type: Date },
      quitDate: { type: Date },
      // group: {type: mongoose.Schema.Types.ObjectId, ref: 'Project'},
      // avatarUrl: { type: String },
      // roleNum: { type: Number },
    },
    {
      timestamps: {
        createdAt: 'createdAt',
        updatedAt: 'updatedAt',
      },
    }
  );
  return mongoose.model('User', UserSchema);
};
