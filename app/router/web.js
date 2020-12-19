const express = require("express")
const router = express.Router();
var multer = require('multer')
var mime = require('mime-types')
const bookingController = require('../controller/BookingController')
const authController = require('../controller/AuthController')
const roomController = require('../controller/RoomController')

var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'public/images')
    },
    filename: function(req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix + '.' + mime.extension(file.mimetype))
    }
})

var upload = multer({ storage: storage })

router.get('/', bookingController.index)

router.get('/data', bookingController.getData)

router.get('/login/:message', authController.formLogin)

router.post('/auth', authController.prosesLogin)

router.get('/home', authController.home)

router.get('/logout', authController.logout)

router.get('/room/create', roomController.create)

router.post('/room/store', upload.single('image'), roomController.store)

router.get('/room/view', roomController.view);

router.get('/room/edit/:id', roomController.edit)

router.post('/room/update', upload.single('image'), roomController.update)

router.get('/room/booking', bookingController.view)

router.get('/room/booking/:id', bookingController.booking)

module.exports = router