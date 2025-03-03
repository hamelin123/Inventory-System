# ใช้ Node 20 Alpine เป็นฐาน
FROM node:20-alpine AS builder

# กำหนด Working Directory
WORKDIR /app

# คัดลอก package.json และ package-lock.json
COPY package*.json ./

# ติดตั้ง Dependencies
RUN npm install

# คัดลอกไฟล์โปรเจ็กต์ทั้งหมด
COPY . .

# Build Production
RUN npm run build

# สร้าง Production Image
FROM nginx:alpine

# คัดลอก Build files จาก Builder stage
COPY --from=builder /app/build /usr/share/nginx/html

# เปิด Port
EXPOSE 81

# คำสั่งรัน Nginx
CMD ["nginx", "-g", "daemon off;"]