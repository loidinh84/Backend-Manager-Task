# Task Manager API

Dự án Backend thực tế sử dụng Node.js kết nối trực tiếp với hạ tầng Cloud của Google (Firebase).

## Tổng quan dự án

Hệ thống này được xây dựng để quản lý danh sách các dự án cá nhân và công việc, giúp lưu trữ dữ liệu an toàn trên đám mây. Dự án thể hiện kỹ năng thiết lập hạ tầng Cloud và xây dựng RESTful API.

## Công nghệ sử dụng

- **Ngôn ngữ:** Node.js
- **Framework:** Express.js
- **Database:** Google Cloud Firestore (NoSQL)
- **Infrastructure:** Google Firebase
- **Testing:** Thunder Client / Postman

## Kiến trúc hệ thống

- **Backend:** Xử lý logic và xác thực quyền truy cập thông qua Service Account của Google.
- **Database:** Lưu trữ dữ liệu thời gian thực trên Firestore.
- **Security:** Sử dụng `.gitignore` để bảo vệ mã khóa bí mật (Secret Keys).

## Các Endpoint chính (API)

| Method | Endpoint        | Chức năng                              |
| :----- | :-------------- | :------------------------------------- |
| POST   | `/add-project`  | Thêm một dự án mới lên Cloud Firestore |
| GET    | `/get-projects` | Lấy danh sách toàn bộ dự án đã lưu     |

## Cách cài đặt và chạy thử

1. Clone dự án: `git clone <https://github.com/loidinh84/Backend-Manager-Task.git>`
2. Cài đặt thư viện: `npm install`
3. Cấu hình: Thêm file `serviceAccountKey.json` vào thư mục gốc.
4. Chạy server: `node server.js`

## Tác giả

- **Đinh Thành Lợi** - _Học viên theo định hướng Fullstack_
