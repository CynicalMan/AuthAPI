const router = require('express').Router();
const connection = require('../db/connection');

//get all users from db (get)
router.get('/login', (req, res) => {
    const data = req.body;

    connection.query("select * from user where ? ", { name: data.name }, (err, result, fields) => {
        if (result.length === 0) {
            res.json({
                "message": "username is incorrect"
            })
            return;
        } else {
            if (result[0].password === data.password) {
                res.json(result)
            } else {
                res.json({
                    "message": "password is incorrect"
                })
            }
        }
    });
});

// //create new user (post)
// router.post('/register', (req, res)=>{
//     const data = req.body;
//     connection.query("insert into user set ? ",{name : data.name , password : data.password } ,(err , result , fields)=>{
//         if(err){
//             res.statusCode = 500 ;
//             res.json({
//                 message:"Error in inserting user",
//                 err,
//                 data,
//             });
//         }
//         res.json({
//             message:"User created"
//         });
//     });
// });

// //update pass (put)
// router.put('/reset-pass/:id',(req , res)=>{
//     const {id} = req.params;
//     const data = req.body;

//     connection.query("update user set ? where id = ?",[{password:data.password},id],(err,result,fields)=>{
//         if(err){
//             res.statusCode = 404;
//             res.json({
//                 message:"Error reseting password",
//             });
//         }
//         res.json({
//             message:"password updated! ",
//         })
//     });
// });

module.exports = router;

//khaled's part

//get admin (get)
// router.get('/login',(req,res)=>{
//     connection.query("select * from users where value = 1",(err,result,fields)=>
//     {
//         if(err){
//             res.sendStatus = 500 ;
//             res.json({
//                 message:"no admin found",
//             });
//         }
//         res.json(result);
//     });
// });