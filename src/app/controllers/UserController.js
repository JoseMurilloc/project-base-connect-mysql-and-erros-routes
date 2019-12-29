import User from '../models/User';

class UserController {
  async store(req, res) {

    console.log(req.body)

    const { email, name, password, age, weight, height, sexo } = req.body;

    const user = await User.create({
      name,
      email,
      password_hash: password,
      age,
      weight,
      height,
      sexo 
    });
    
    return res.status(200).json(user);
  }
}

export default new UserController();