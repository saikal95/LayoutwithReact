const express = require('express');
const Photo = require("../models/Photo");
const path = require("path");
const { nanoid } = require('nanoid');
const multer = require('multer');
const config = require('../config');
const auth = require("../middleware/auth")

const router = express.Router();


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, config.uploadPath);
  },
  filename: (req, file, cb) => {
    cb(null, nanoid() + path.extname(file.originalname))
  }
});

const upload = multer({storage});

router.get("/", async (req, res, next) => {
  try {
    let query = {};

    if (req.query.user) {
      query.user = req.query.user;
    }

    const photos = await Photo.find(query).populate('user');
    return res.send(photos);
  } catch(e) {
    next(e);
  }
});

router.post('/', auth, upload.single('image'), async (req, res, next) => {
  try {
    if (req.user) {
      const photoData = {
        user: req.user._id,
        title: req.body.title,
        image: req.file.filename,
      };

      const photo = new Photo(photoData);

      await photo.save();

      return res.send({message: 'Created new image'});
    }

    return res.send({message: 'You can t post!'});
  } catch (e) {
    next(e);
  }
});


module.exports = router


