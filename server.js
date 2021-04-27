const express = require("express");
const app = express();
const multer = require("multer");
const cors = require("cors");
const bodyParser = require("body-parser");
const pool = require("./database/db");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "/home/nuttavadee/sambashare");
  },
  filename: (req, file, cb) => {
    const ext = file.originalname.split(".")[1];
    cb(
      null,
      req.body.title + "-" + Math.round(Math.random() * 10000) + "." + ext
    );
  },
});
const upload = multer({ storage: storage });

const corsMiddleware = cors({
  credentials: true,
  origin: ["*", "http://localhost:3000"],
  methods: ["GET", "PUT", "POST", "PATCH", "DELETE"],
});
app.use(corsMiddleware);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/note", async (req, res) => {
  let conn = await pool.getConnection();
  const rows = await conn.query("SELECT * from note");
  conn.release();
  res.status(200).json(rows);
});

app.post("/api/note", upload.any("image"), async (req, res) => {
  let conn = await pool.getConnection();
  const data = req.body;
  if (req.files.length !=0) {
    await conn.query("INSERT INTO note(title, content, image, date) value (?,?,?, current_date())", [
      data.title,
      data.content,
      req.files[0].filename,
    ]);
  } else {
    await conn.query("INSERT INTO note(title, content, image, date) value (?,?,?, current_date())", [
      data.title,
      data.content,
      null,
    ]);
  }
  res.status(201).json({ success: true });
});

app.put("/api/note/:id", async(req,res) => {
  let conn = await pool.getConnection();
  const noteid = req.params.id;
  const data = req.body;
  await conn.query(`UPDATE note set title = ?, content = ? where noteid = ?`, [data.title, data.content, noteid])
  res.status(201).json({ success: true });
})

app.delete('/api/note/:id', async(req, res) => {
  let conn = await pool.getConnection();
  const noteid = req.params.id;
  await conn.query(`DELETE FROM note where noteid = ?`,[noteid])
  res.status(201).json({ success: true });
})

app.use("/images", express.static("uploads"));




app.listen(5000, () => {
  console.log("Start server at port 5000.");
});
