const express = require('express');
const app = express();
const multer = require('multer');
const upload = multer();

app.use("/",express.static("html"));

app.post('/*', upload.single('file-input'),(req,res)=>{
	res.json({size: req.file.size});
})
app.listen(process.env.PORT||1337);