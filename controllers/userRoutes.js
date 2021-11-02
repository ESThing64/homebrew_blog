const router = require('express').Router();
const User = require('../models/User')






router.get('/login', async (req, res) => {
  try {

 
    res.render('login');
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    console.log(req.body)
    const userData = await User.findOne({ where: {email: req.body.email } });
console.log(userData)
console.log("====9283748923498238942379180237891274908172304897123890471289034712890374890123749012837408912374089123749081273408912734908123789")
    if (!userData) {
      res.status(400)
      res.json({message: "Your password or email is not correct."});
      return;
    }
    const validatePassword = await userData.checkPassword(req.body.password);

    if (!validatePassword) {
      res.status(400)
      res.json({message: "Your password or email is not correct."});
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id
      req.session.email = userData.email;
      req.session.logged_in = true;
    

      
      res.render('dashboard', {
        loggedIn: req.session.loggedIn,
        loggedIn: req.body.loggedIn
      })
    });
    
    } catch (err){
      res.status(400).json(err);
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
   
    const { name, email, password, password2 } = req.body
    let test =  await User.findOne({ email: email });
  console.log(test)

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
          name: name,
          email: email,
          password: password       
        });
         console.log(newUser)
       }    
      }

  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/users/login');
});




module.exports = router;