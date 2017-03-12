import { Router } from 'express';
import mongoose from 'mongoose';
import { User } from '../models';
var Users = require('../models/user').Users;

const router = Router();

router.get('/', (req, res) => {
  res.render('index.html');
});

 router.get('/protected', (req, res) => {
  if (!req.user.admin) return res.sendStatus(401);
  res.sendStatus(200);
 });

router.get('/api', (req, res) => {

  Users.find({}, (err, users) => {
    if(err) throw err;
    console.log(users);
    res.end(JSON.stringify(users));
  });

});

router.get('/show', (req, res) => {
  Users.find({}, (err, users) => {
    if(err) throw err;
    console.log(users);
    res.end(JSON.stringify(users));
  });
});

router.post('/create_user',function(req,res)
  {
     var anx = new Users();
   anx.username=req.body.username;
   anx.password=req.body.password;
   anx.profile_pic=req.body.profile_pic;
   
   anx.save(function (err, result){
    if(!err)
    {
     res.send('completed');
    }
 

   });

 });
   router.post('/user_login',function(req,res) 
  {
     Users.findOne({username:req.body.username ,password:req.body.password},function(err,doc){
        if(!err && doc)
        {
          res.json({msg:"sucess"});
        }
        else
        {
           res.json({msg:"login failed"});
        }


     })
    });

     router.post('/update_blogs',function(req,res) 
  {
     
         var blof = new Blog();
         blof.title = req.body.title;
         blof.author = req.body.author;
         blof.body = req.body.body;
         blof.comments.body = req.body.comments;
         
         blof.save(function (err, result){
              if(!err)
              {
              res.send('blog updated');
              }
 

              });

    });

   


     router.post('/get_blogs',function(req,res) 
  {
     
        var author1 = req.body.author;
          var res = new Blog();
          res.findauthor(author1,function(err,result){
       if(!err)
       {

           console.log(result);
       }

          } )
      
        
            
    });



  

export const route = router;
