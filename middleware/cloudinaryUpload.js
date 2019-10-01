const multer = require('multer');
const Datauri = require('datauri');
const path = require('path');

const storage = multer.memoryStorage();
const multerUploads = multer({ storage });
const dUri = new Datauri();
const uri = req => dUri.format(path.extname(req.file.originalname).toString(), req.file.buffer);

module.exports = {
    multerUploads,
    uri
};