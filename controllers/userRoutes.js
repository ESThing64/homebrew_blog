const router = require('express').Router();
const User = require('../models/User')
const bcrypt = require('bcrypt');

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

router.post('/register', async  (req, res) => {
  try {
    console.log(req.body)


    const { name, email, password, password2 } = req.body

    let errors = [];

    if (!name || !email || !password || !password2) {
      console(name, email, password, password2)
      errors.push({ message: 'you for got to fill in one of the fields.' });
    }


      if (password !== password2) {
        errors.push({ msg: 'Make sure the passwords match' });
      }

      if (password.length < 6) {
        errors.push({ msg: 'password should be a minimum of 6 characters' });
      } 


      if(errors.length > 0) {
        console.log(errors)
        res.render('register',
        errors)

      }else{
        
        //user exists 
        
       userData = await User.findOne({ where:{ email: email} })

       console.log(userData)
       
       if(userData){
         errors.push({msg: "That email had already been registered, please login!"})
         res.render('register',{
           errors
         })
       } else {
        
        const newUser = await  User.create({
          name: "name",
          email: "email@gmail.com",
          password: "password"
           
        });
        
  
         console.log(newUser)
       }

        
      }


     
      



  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;