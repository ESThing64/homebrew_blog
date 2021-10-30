const router = require('express').Router();

router.get('/login', async (req, res) => {
    try {
     
      
      res.render('login');
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  router.get('/register', async (req, res) => {
    try {
     
      
      res.render('register');
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  //handle registration 

  router.post('/register', async (req, res) => {
    try {
      
     
      const {name, email, password, password2 } = req.body

    let errors =  [];

    if(!name || !email ||password || password2) {
      errors.push ({message: 'you for got to fill in one of the fields.'});
   

    if(password !== password2){
      errors.push({msg: 'Make sure the passwords match'});
    }

    if(password.leng < 6) {
      errors.push({msg: 'password should be a minimum of 6 characters'});
    }

    else {
      res.send('Okay.')
    }
  } 


     
    } catch (err) {
      res.status(500).json(err);
    }
  }); 


module.exports = router;