<div align="center">
  <br />
  <img src="https://github.com/satyam-mishra-dev/Neo-Care/assets/151519281/a7dd73b6-93de-484d-84e0-e7f4e299167b" alt="Neo Care Banner" width="800">
  <br />

  <div>
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="typescript" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
    <img src="https://img.shields.io/badge/-Appwrite-black?style=for-the-badge&logoColor=white&logo=appwrite&color=FD366E" alt="appwrite" />
    <img src="https://img.shields.io/badge/-React_18-black?style=for-the-badge&logoColor=white&logo=react&color=61DAFB" alt="react" />
  </div>

  <h3 align="center">🏥 Neo Care - Modern Healthcare Management System</h3>
  <p align="center">A comprehensive healthcare patient management application with advanced UI/UX, real-time notifications, and seamless appointment scheduling.</p>

   <div align="center">
    <a href="https://github.com/satyam-mishra-dev/Neo-Care/stargazers">
      <img src="https://img.shields.io/github/stars/satyam-mishra-dev/Neo-Care?style=social" alt="Stars">
    </a>
    <a href="https://github.com/satyam-mishra-dev/Neo-Care/forks">
      <img src="https://img.shields.io/github/forks/satyam-mishra-dev/Neo-Care?style=social" alt="Forks">
    </a>
    <a href="https://github.com/satyam-mishra-dev/Neo-Care/issues">
      <img src="https://img.shields.io/github/issues/satyam-mishra-dev/Neo-Care" alt="Issues">
    </a>
    <a href="https://github.com/satyam-mishra-dev/Neo-Care/blob/master/LICENSE">
      <img src="https://img.shields.io/github/license/satyam-mishra-dev/Neo-Care" alt="License">
    </a>
    </div>
</div>

## 📋 Table of Contents

1. [🚀 Overview](#overview)
2. [✨ Features](#features)
3. [🛠️ Tech Stack](#tech-stack)
4. [📱 Screenshots](#screenshots)
5. [⚡ Quick Start](#quick-start)
6. [🔧 Environment Setup](#environment-setup)
7. [📁 Project Structure](#project-structure)
8. [🎨 UI/UX Features](#uiux-features)
9. [🔐 Security Features](#security-features)
10. [📊 Performance](#performance)
11. [🤝 Contributing](#contributing)
12. [📄 License](#license)

## 🚀 Overview

**Neo Care** is a modern, full-stack healthcare management system built with Next.js 14 and Appwrite. It provides a seamless experience for patients to register, book appointments, and manage their healthcare journey, while offering comprehensive administrative tools for healthcare providers.

### 🎯 Key Highlights

- **Modern UI/UX**: Beautiful, responsive design with smooth animations
- **Real-time Updates**: Live appointment status updates and notifications
- **Secure Authentication**: Robust user authentication and authorization
- **File Management**: Secure document upload and storage
- **Mobile-First**: Optimized for all devices and screen sizes
- **Performance Optimized**: Fast loading times and smooth interactions

## ✨ Features

### 👥 Patient Features
- **📝 Easy Registration**: Streamlined patient registration with comprehensive health information
- **🏥 Appointment Booking**: Intuitive appointment scheduling with doctor selection
- **📱 Real-time Updates**: Live status updates for appointments
- **📄 Document Upload**: Secure upload of identification documents
- **📊 Health Profile**: Complete medical history and information management
- **🔔 SMS Notifications**: Instant appointment confirmations and updates

### 👨‍⚕️ Admin Features
- **📋 Appointment Management**: Complete control over all appointments
- **✅ Status Updates**: Schedule, confirm, or cancel appointments
- **📊 Dashboard Analytics**: Real-time statistics and insights
- **👥 Patient Database**: Comprehensive patient information management
- **📱 Bulk Operations**: Efficient management of multiple appointments
- **🔐 Secure Access**: Protected admin panel with passkey authentication

### 🎨 UI/UX Features
- **🎭 Modern Design**: Clean, professional healthcare-themed interface
- **📱 Responsive Layout**: Perfect experience on all devices
- **✨ Smooth Animations**: GSAP-powered modal animations and transitions
- **🎨 Custom Components**: Reusable, accessible UI components
- **🌙 Dark Mode Ready**: Optimized for different viewing preferences
- **♿ Accessibility**: WCAG compliant design elements

## 🛠️ Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **ShadCN/UI** - Modern component library
- **React Hook Form** - Form state management
- **Zod** - Schema validation
- **GSAP** - Advanced animations

### Backend & Database
- **Appwrite** - Backend-as-a-Service
- **Cloud Database** - Scalable data storage
- **Cloud Storage** - File management
- **Authentication** - Secure user management

### Additional Tools
- **Sentry** - Error tracking and performance monitoring
- **Twilio** - SMS notifications
- **React Phone Number Input** - International phone validation
- **React DatePicker** - Advanced date/time selection

## 📱 Screenshots

### Patient Dashboard
![Patient Dashboard](https://via.placeholder.com/800x400/24AE7C/FFFFFF?text=Patient+Dashboard)

### Appointment Booking
![Appointment Booking](https://via.placeholder.com/800x400/79B5EC/FFFFFF?text=Appointment+Booking)

### Admin Panel
![Admin Panel](https://via.placeholder.com/800x400/F37877/FFFFFF?text=Admin+Panel)

## ⚡ Quick Start

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **Git**
- **Appwrite Account** (for backend services)

### Installation

1. **Clone the repository**
```bash
   git clone https://github.com/satyam-mishra-dev/Neo-Care.git
   cd Neo-Care
```

2. **Install dependencies**
```bash
npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```

4. **Configure Appwrite**
   - Create an Appwrite project
   - Set up database collections
   - Configure storage buckets
   - Get your API credentials

5. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Environment Setup

Create a `.env.local` file in the root directory:

```env
# Appwrite Configuration
NEXT_PUBLIC_ENDPOINT=https://cloud.appwrite.io/v1
PROJECT_ID=your_project_id
API_KEY=your_api_key
DATABASE_ID=your_database_id
PATIENT_COLLECTION_ID=your_patient_collection_id
APPOINTMENT_COLLECTION_ID=your_appointment_collection_id
NEXT_PUBLIC_BUCKET_ID=your_bucket_id

# Admin Authentication
NEXT_PUBLIC_ADMIN_PASSKEY=your_admin_passkey

# Twilio (Optional - for SMS notifications)
TWILIO_ACCOUNT_SID=your_twilio_account_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token
TWILIO_PHONE_NUMBER=your_twilio_phone_number

# Sentry (Optional - for error tracking)
NEXT_PUBLIC_SENTRY_DSN=your_sentry_dsn
```

## 📁 Project Structure

```
Neo-Care/
├── app/                          # Next.js App Router
│   ├── admin/                    # Admin dashboard pages
│   ├── api/                      # API routes
│   ├── patients/                 # Patient pages
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Home page
├── components/                   # Reusable components
│   ├── forms/                   # Form components
│   ├── ui/                      # UI components (ShadCN)
│   ├── table/                   # Data table components
│   └── ...                      # Other components
├── lib/                         # Utility functions
│   ├── actions/                 # Server actions
│   ├── appwrite.config.ts      # Appwrite configuration
│   ├── utils.ts                # Utility functions
│   └── validation.ts           # Zod schemas
├── types/                       # TypeScript type definitions
├── constants/                   # Application constants
├── public/                      # Static assets
└── ...                         # Configuration files
```

## 🎨 UI/UX Features

### Design System
- **Color Palette**: Healthcare-themed colors (teal, mint, professional grays)
- **Typography**: Clean, readable fonts with proper hierarchy
- **Spacing**: Consistent spacing system using Tailwind CSS
- **Components**: Reusable, accessible UI components

### Responsive Design
- **Mobile-First**: Optimized for mobile devices
- **Tablet Support**: Enhanced layouts for tablet screens
- **Desktop Experience**: Full-featured desktop interface
- **Touch-Friendly**: Optimized for touch interactions

### Animations & Interactions
- **Modal Animations**: Smooth GSAP-powered modal transitions
- **Loading States**: Elegant loading indicators
- **Hover Effects**: Subtle interactive feedback
- **Form Validation**: Real-time validation with smooth error handling

## 🔐 Security Features

### Authentication & Authorization
- **Secure Login**: Protected admin access with passkey
- **Session Management**: Secure session handling
- **Role-Based Access**: Different permissions for patients and admins

### Data Protection
- **Encrypted Storage**: Secure data storage in Appwrite
- **File Upload Security**: Safe document upload with validation
- **Input Validation**: Comprehensive form validation with Zod
- **XSS Protection**: Built-in Next.js security features

### Privacy Compliance
- **GDPR Ready**: Privacy-focused data handling
- **Consent Management**: Clear privacy and treatment consent
- **Data Minimization**: Only collect necessary information

## 📊 Performance

### Optimization Features
- **Next.js 14**: Latest performance optimizations
- **Image Optimization**: Next.js Image component for fast loading
- **Code Splitting**: Automatic code splitting for faster loads
- **Caching**: Intelligent caching strategies

### Monitoring
- **Sentry Integration**: Real-time error tracking
- **Performance Monitoring**: Track app performance metrics
- **User Analytics**: Understand user behavior patterns

## 🤝 Contributing

We welcome contributions to Neo Care! Here's how you can help:

### Getting Started
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow TypeScript best practices
- Write clean, documented code
- Add tests for new features
- Update documentation as needed
- Follow the existing code style

### Bug Reports
- Use the GitHub Issues page
- Provide detailed reproduction steps
- Include browser and device information
- Attach screenshots if applicable

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Next.js Team** - For the amazing React framework
- **Appwrite Team** - For the powerful backend services
- **ShadCN** - For the beautiful UI components
- **Tailwind CSS** - For the utility-first CSS framework
- **Open Source Community** - For all the amazing libraries and tools

## 📞 Support

- **GitHub Issues**: [Report bugs or request features](https://github.com/satyam-mishra-dev/Neo-Care/issues)
- **Documentation**: Check the code comments and this README
- **Community**: Join our discussions in GitHub Discussions

---

<div align="center">
  <p>Made with ❤️ by <a href="https://github.com/satyam-mishra-dev">Satyam Mishra</a></p>
  <p>If you find this project helpful, please give it a ⭐️</p>
</div>
