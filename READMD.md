ระบบจัดการคลังสินค้า
🚀 ภาพรวมโครงการ
ระบบจัดการคลังสินค้าแบบครบวงจร พัฒนาด้วย React และ Tailwind CSS
📦 เทคโนโลยีที่ใช้

Frontend: React 18.2.0
การออกแบบ: Tailwind CSS 3.4.1
การจัดการสถานะ: React Hooks
การนำทาง: React Router DOM
ไคลเอนต์ HTTP: Axios
เครื่องมือสร้าง: React Scripts

📂 โครงสร้างโปรเจ็กต์ (รายละเอียด)
1. ไดเรกทอรีหลัก
Copyinventory-frontend/
│
├── public/                 # ไฟล์สถิต
├── src/                    # โค้ดต้นฉบับ
├── Dockerfile              # การทำคอนเทนเนอร์ Docker
├── docker-compose.yml      # การตั้งค่า Docker หลายคอนเทนเนอร์
├── nginx.conf              # การกำหนดค่าเว็บเซิร์ฟเวอร์ Nginx
├── tailwind.config.js      # การกำหนดค่า Tailwind CSS
├── postcss.config.js       # การกำหนดค่า PostCSS
└── README.md               # เอกสารโครงการ
2. โฟลเดอร์สาธารณะ
Copypublic/
├── index.html              # เทมเพลต HTML หลัก
├── favicon.ico             # ไอคอนเว็บไซต์
└── manifest.json           # การกำหนดค่าแอปพลิเคชันเว็บ
3. โครงสร้างโฟลเดอร์ Src
Copysrc/
├── components/             # คอมโพเนนต์ React แบบใช้ซ้ำได้
│   ├── common/             # คอมโพเนนต์ทั่วไป
│   ├── auth/               # คอมโพเนนต์ตรวจสอบสิทธิ์
│   ├── inventory/          # คอมโพเนนต์จัดการคลังสินค้า
│   └── dashboard/          # คอมโพเนนต์แดชบอร์ด
│
├── pages/                  # คอมโพเนนต์เพจระดับบน
│   ├── Home.js
│   ├── Login.js
│   ├── Dashboard.js
│   └── Inventory.js
│
├── services/               # เลเยอร์บริการและ API
│   ├── api.js              # API เรียกรวมศูนย์
│   └── auth.js             # บริการตรวจสอบสิทธิ์
│
├── contexts/               # การจัดการบริบท React
│   └── AuthContext.js      # สถานะการตรวจสอบสิทธิ์ทั่วโลก
│
├── utils/                  # ฟังก์ชันยูทิลิตี้
│   ├── validation.js       # การตรวจสอบแบบฟอร์ม
│   └── helpers.js          # ฟังก์ชันช่วยเหลือ
│
├── styles/                 # ไฟล์การตกแต่ง
│   └── index.css           # สไตล์ทั่วโลก
│
├── App.js                  # คอมโพเนนต์แอปพลิเคชันหลัก
└── index.js                # จุดเริ่มต้น
🔧 ข้อกำหนดเบื้องต้น

Node.js 18.x
npm 9.x
Docker (เลือกใช้)

📦 การติดตั้ง Dependencies
1. Dependencies หลัก
bashCopynpm install react react-dom react-router-dom axios
2. Dependencies สำหรับการพัฒนา
bashCopy# Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# เครื่องมือเสริม
npm install -D @testing-library/react @testing-library/jest-dom
3. การติดตั้ง Package แบบเต็ม
bashCopy# โคลนโครงการ
git clone https://github.com/yourusername/inventory-frontend.git
cd inventory-frontend

# ติดตั้ง Dependencies ทั้งหมด
npm install
🚀 การรันโปรเจ็กต์
โหมดพัฒนา
bashCopy# เริ่มเซิร์ฟเวอร์พัฒนา
npm start
สร้างเพื่อการใช้งานจริง
bashCopy# สร้างสำหรับการใช้งานจริง
npm run build
การใช้ Docker
bashCopy# สร้าง Docker image
docker build -t inventory-frontend .

# รัน Docker container
docker run -d -p 3001:80 inventory-frontend
🔑 คุณสมบัติหลัก

การตรวจสอบสิทธิ์ผู้ใช้
การจัดการคลังสินค้า
การติดตามสินค้า
การวิเคราะห์แดชบอร์ด
การออกแบบที่ตอบสนอง

🛡️ คุณสมบัติด้านความปลอดภัย

การตรวจสอบสิทธิ์ด้วย JWT
เส้นทางที่ถูกป้องกัน
การตรวจสอบความถูกต้องของข้อมูลนำเข้า
การจัดการข้อผิดพลาด