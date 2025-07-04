const express = require("express");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const axios = require("axios");
const FormData = require("form-data");
require("dotenv").config();

const router = express.Router();

const uploadDir = path.join(__dirname, "..", "uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir),
  filename: (req, file, cb) => cb(null, file.originalname),
});

const upload = multer({ storage });

router.post("/upload", upload.single("landDoc"), async (req, res) => {
  try {
    if (!req.file) return res.status(400).send("No file uploaded");

    const filePath = path.join(uploadDir, req.file.originalname);
    const data = new FormData();
    data.append("file", fs.createReadStream(filePath));
    data.append("pinataMetadata", JSON.stringify({ name: req.file.originalname }));

    const headers = {
      ...data.getHeaders(),
      pinata_api_key: process.env.PINATA_API_KEY,
      pinata_secret_api_key: process.env.PINATA_API_SECRET,
    };

    const response = await axios.post("https://api.pinata.cloud/pinning/pinFileToIPFS", data, { headers });

    fs.unlinkSync(filePath); // cleanup after upload
    res.send({ ipfsHash: response.data.IpfsHash });
  } catch (err) {
    console.error("IPFS upload failed:", err);
    res.status(500).send("IPFS upload failed");
  }
});


module.exports = router;
