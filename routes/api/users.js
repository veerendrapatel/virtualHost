const router = require("express").Router();
const userController = require("../../controllers/userController");

// matches with "/api/users/" +

router.post("/signup", userController.create);

router.post('/login', userController.login);

router.post("/validate", userController.validSignup);

module.exports = router;