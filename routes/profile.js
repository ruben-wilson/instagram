const express = require("express");
const router = express.Router();

const ProfileController = require("../controllers/profile");

router.get("/find", ProfileController.Button);
router.post("/find", ProfileController.Find);
router.get("/:email", ProfileController.Index);


module.exports = router;
