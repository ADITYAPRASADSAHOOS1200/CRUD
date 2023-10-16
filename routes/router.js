
const express=require('express')
const {home,createUser,getUsers,deleteUsers, editUsers}=require('../controllers/userControllers.js')

const router=express.Router();

router.get('/',home)

router.post('/createuser',createUser)


    router.get('/getusers',getUsers)

    router.delete('/deleteusers/:id',deleteUsers)

    router.put('/edituser/:id',editUsers)

module.exports=router


