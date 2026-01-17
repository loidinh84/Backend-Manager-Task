const express = require("express");
const admin = require("firebase-admin");

//1 kết nối với file key
const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

//khởi tạo cơ sở dữ liệu
const db = admin.firestore();
const app = express();
app.use(express.json());

//hàm Middleware để kiểm tra bảo mật
const checkAuth = async (req, res, next) => {
  req.user = { uid: "haahMhqCgqNKBemKGIwlmQ9QfF12" }; 
  next();
};

//2 API để lưu thong tin dự án mới vào database
app.post("/add-project", checkAuth, async (req, res) => {
  try {
    const project = {
      name: req.body.name,
      tech: req.body.tech,
      description: req.body.description,
      createdAt: new Date(),
      userId: req.user.uid,
    };
    const response = await db.collection("projects").add(project);
    res
      .status(200)
      .send({ message: "Đã lưu dự án thành công!", id: response.id });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

//3 API để lấy danh sách dự án
app.get("/get-projects", async (req, res) => {
  const snapshot = await db.collection("projects").get();
  const projects = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  res.json(projects);
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Backend đang chạy tại port ${PORT}`));
