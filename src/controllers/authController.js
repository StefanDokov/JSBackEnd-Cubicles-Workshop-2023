
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
        console.log(err.message);
        return res.render('auth/login', {err: err.message});

    }
    
    res.redirect('/');
}

exports.getRegisterPage = (req, res) => {
    res.render('auth/register');
}

exports.postRegisterPage = async (req, res, next) => {
   const {username, password, repeatPassword} = req.body;

   if (password !== repeatPassword) {
       return res.render('auth/register', {err: 'Password missmatch!'});
       
   }
      const existingUser = await authManager.checkUsername(username);

      if (existingUser) {
        return res.render('auth/register', {err: 'Username already exist!'});
      }

   try {
      const user = await authManager.register(username, password);
   } catch(err) {
      const message = Object.values(err.errors)[0];
      return res.render('auth/register', {err: message});
   }

      res.redirect('/login');

}

exports.getLogout = (req, res) => {
    res.clearCookie('auth');
    res.redirect('/');
}