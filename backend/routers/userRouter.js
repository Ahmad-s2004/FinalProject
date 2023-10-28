const express = require('express')
const userGet = require('../controllers/userController.js')
const router = express.Router()
const upload = require('../multer/imgconfig')
const WomenApi = require('../controllers/women.js')
const MenApi = require('../controllers/men.js')
const KidsApi = require('../controllers/kids.js')
const NewInApi = require('../controllers/newIn.js')
const AccessoriesApi = require('../controllers/accessories.js')
const HomeApi = require('../controllers/home.js')




router.post("/register",upload.single('img'),userGet)
router.post("/women/register",upload.single('img'),WomenApi)
router.post("/men/register",upload.single('img'),MenApi)
router.post("/kids/register",upload.single('img'),KidsApi)
router.post("/newin/register",upload.single('img'),NewInApi)
router.post("/accessories/register",upload.single('img'),AccessoriesApi)
router.post("/home/register",upload.single('img'),HomeApi)



module.exports = router;

