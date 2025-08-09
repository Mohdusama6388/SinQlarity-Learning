
// import mongoose from 'mongoose';
// const schema=mongoose.Schema;
// const userSchema=new schema(
//     {
//         name:{
//           type:String,
//           required:true},

//         email:{
//             type:String,
//             required:true,
//         unique:true,
//         index:true
//     },
//         password:{
//          type:String,
//          required:true}
//     },
//     {timestamps:true}
// );
// const User=mongoose.model("user",userSchema);
// export default User;
import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      index: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);
export default User;
