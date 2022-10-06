import express from "express";
import router from "../router/index.js";
import path from "path";
import cors from "cors";
import fs from "fs";
import multer from 'multer'
import { v4 as uuidv4 } from 'uuid';
import { list } from '../router/index.js'

const __dirname = path.resolve();

const PORT = 3000;
const app = express();

const storage = multer.diskStorage({
  destination: (_, b, cb) => {
    cb(null, 'images')
  }, 
  filename: (_, file, cb) => {
    cb(null, file.originalname)
  }
}) 

const upload = multer({
  storage
  , fileFilter: (req, file, cb) => {
    if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
    }
  }  
},  
)

app.use('/api/uploads', express.static('images'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(router);
router.use(cors());

app.use(express.static(path.resolve(__dirname, "images")));

app.get("/", (req, res) => {
  const directoryPath = path.join(__dirname, "images");

  fs.readdir(directoryPath, function (err, files) {
    if (err) {
      console.log("Error getting directory information.");
    } else {
      files.forEach(function (file) {
        const filePath = path.join(__dirname, "images", file);
        res.sendFile(filePath);
      });
    }
  });
});

app.post('/api/createPet', upload.array('photos', 3), (req, res) => {
  try {
    if(!req.files) {
      return res.status(501).json({msg: "Wrong image!"});
    }
    const respone = {}
    req.files.forEach((item, index) => {
      respone[index] = `/uploads/${item.originalname}`;
    })

    const fields = {
        id: uuidv4(),
        name: req.body.name,
        status: req.body.status,
        date: req.body.date,
        gender: req.body.gender,
        info: req.body.info,
        petType: req.body.petType,
        image: typeof req.body.image === 'string' ? [req.body.image] : req.body.image
      }
      list.push(fields)

    res.status(201).json(respone);
  } catch(e) {
    res.status(400).json(e);
    console.log(e);
  }
})

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

export default app;
