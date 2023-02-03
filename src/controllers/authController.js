
const authManager = require('../managers/authManager');

exports.getLoginPage = (req, res) => {
    res.render('auth/login');
}

exports.postLoginPage = async(req, res) => {
    const {username, password } = req.body;
    try{
    const token = await authManager.login(username, password);
    res.cookie('auth', token, {httpOnly: true});

    } catch(err) {
        console.log(err);
        return res.redirect('/404');
    }
    
    res.redirect('/');
}

exports.getRegisterPage = (req, res) => {
    res.render('auth/register');
}

exports.postRegisterPage = async (req, res) => {
   const {username, password, repeatPassword} = req.body;

   if (password !== repeatPassword) {
       return res.redirect('/404');
   }
      const existingUser = await authManager.checkUsername(username);

      if (existingUser) {
        return res.redirect('404');
      }

      const user = await authManager.register(username, password);

      console.log(user);

      res.redirect('/login');

}