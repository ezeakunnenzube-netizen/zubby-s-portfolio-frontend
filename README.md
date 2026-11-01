# 🌟 Zubby's Portfolio - Frontend

Modern, high-performance portfolio website built with React, Vite, and Firebase.

## 🚀 Features

- **⚡ Blazing Fast Performance**: Powered by Vite and React
- **🎨 Modern Dark/Glassmorphism Design**: Sleek typography, micro-interactions, and custom styling
- **📁 Dynamic Projects**: Connected to Firebase Firestore database
- **📬 Contact & Inquiries**: Direct messaging system hooked to Firestore
- **🔐 Admin Dashboard**: Project management and inquiry review portal

## 🛠️ Tech Stack

- **Frontend**: React 19, React Router 7, Vite
- **Styling**: Vanilla CSS with tailored design tokens
- **Database / Auth**: Firebase (Firestore, Firebase Auth)

## 📦 Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/ezeakunnenzube-netizen/zubby-s-portfolio-frontend.git
cd portfolio

# Install dependencies
npm install
```

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
VITE_API_BASE_URL=https://zubby-s-portfolio-backend-7nvj2janq-code-house1.vercel.app/
```

### Development Server

```bash
npm run dev
```

### Production Build

```bash
npm run build
npm run preview
```
