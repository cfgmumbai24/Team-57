const express = require("express")
const router = express.Router();
const {loginUser, signupUser} = require("../controllers/userController")

//Login Route
router.post('/login',loginUser )

//Signup Route
router.post('/signup', signupUser)

module.exports = router




// const {handleGetAllUsers, handleGetUserById, handleUpdateUserById, handleDeleteUserById, handleCreateNewUser} = require("../controllers/user")


// router.route("/")
// .get(handleGetAllUsers)
// .post(handleCreateNewUser)

// //REST API with chaining
// router.route("/:id")
// .get(handleGetUserById)
// .patch(handleUpdateUserById)
// .delete(async(handleDeleteUserById))


// module.exports = router