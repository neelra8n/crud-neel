import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    username: String,
    phone: String,
})


autoIncrement.initialize(mongoose.connection);
userSchema.plugin(autoIncrement.plugin,'User');


const User = mongoose.model('User', userSchema);

export default User;