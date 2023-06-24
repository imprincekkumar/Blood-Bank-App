const express = require("express");
const {registerController, loginController, currentUserController} = require("../controllers/authController");
const authMiddelware = require("../middlewares/authMiddelware");


const router = express.Router();

// routes
// Register || POST
router.post('/register', registerController);

// lOGIN || POST

router.post('/login',loginController);

// Get Current user || GET

router.get('/current-user',authMiddelware,currentUserController)

module.exports = router;