import User from '../model/User.js'


export const getUsers = async (req, res) =>{
    try{
      const users =  await User.find();
      res.status(200).json(users);
    }
    catch(e){
      res.status(404).json({message: `message not found error ${e}`})
    }
};




export const addUser = async(req, res) => {
    const body = req.body;
    const user = new User(body);
    try{
      console.log(user);
       await user.save((e)=>{
         if(e){
           console.log(e);
         };
       });
       res.status(201).json(user);
    }
    catch(e){
      res.status(400).json({message: e.message});
    }
}

export const getUserById = async(req, res) => {
    const id = req.params.id;
    try{
      const user = await User.findById(id);
      res.status(200).json(user);
    }
    catch(e){
      res.status(404).json({message: e.message});
    }
}

export const editUser = async(req, res) => {
  const body = req.body;
  const user = new User(body);
  try{
    const upDatedUser = await User.findByIdAndUpdate(req.params.id, user);
    res.status(201).json(`saved successfully`);
  }
  catch(e){
    res.status(400).json(`error in editing user details`)
  }
}

export const deleteUser = async(req, res) => {
  try{
      await User.deleteOne({_id: req.params.id});
      res.status(200).json(`deleted successfully`);
  }catch(e){
      res.status(400).json({message: e.message});
  }
}