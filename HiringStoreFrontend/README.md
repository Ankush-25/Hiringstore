# HiringStore - Job Portal Web Application

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Component Documentation](#component-documentation)
  - [Landing Page](#landing-page)
  - [Job Search & Listings](#job-search--listings)
  - [User Authentication](#user-authentication)
  - [Dashboard](#dashboard)
  - [Job Posting](#job-posting)
- [API Integration](#api-integration)
- [State Management](#state-management)
- [Styling](#styling)
- [Deployment](#deployment)
- [Getting Started](#getting-started)
- [Contributing](#contributing)
- [License](#license)

## Project Overview
HiringStore is a modern job portal web application that connects job seekers with employers. The platform offers a seamless experience for browsing job listings, applying for positions, and managing job applications.

## Features
- Responsive design for all devices
- Job search with filters
- User authentication (login/signup)
- Job application tracking
- Company profiles and job listings
- Admin dashboard for job management
- Blog section for career advice

## Tech Stack
- **Frontend**: React.js
- **Styling**: CSS3, CSS Modules
- **Icons**: Font Awesome
- **State Management**: React Context API
- **Routing**: React Router
- **HTTP Client**: Axios
- **Build Tool**: Vite

## Project Structure
```
src/
├── App/                    # Main application components
├── assets/                # Static assets (images, fonts)
├── components/            # Reusable UI components
├── landingpage/           # Landing page components
│   ├── LandingPageUppersec/
│   │   ├── UpperSection/  # Header and search functionality
│   │   └── MidSection/    # Main content sections
│   └── LandingPageLowersec/ # Additional sections
├── pages/                 # Route components
├── services/              # API services
├── utils/                 # Utility functions
├── App.jsx                # Main App component
└── main.jsx               # Application entry point
```

## Component Documentation

### Landing Page
#### 1. UpperSection
- **Location**: `landingpage/LandingPageUppersec/UpperSection/`
- **Purpose**: Main header section with navigation and search functionality
- **Key Components**:
  - `Navbar`: Responsive navigation bar with auth controls
  - `UpperSectionSearch`: Job search bar with filters
  - `UpperSectionType`: Job category filters
  - `RemoteJobsCarousel`: Featured remote jobs
  - `FreshersJobsCarousel`: Entry-level job opportunities

#### 2. MidSection
- **Location**: `landingpage/LandingPageUppersec/MidSection/`
- **Purpose**: Displays featured companies and job categories
- **Key Components**:
  - `CompaniesSlider`: Showcases hiring companies
  - `FeaturedJobs`: Highlights popular job listings

### Job Search & Listings
#### 1. Job Cards
- **Location**: `components/JobCard/`
- **Features**:
  - Responsive design
  - Hover effects
  - Apply button with tracking
  - Skill tags display

#### 2. Search Functionality
- **Location**: `landingpage/LandingPageUppersec/UpperSection/UpperSectionSearch/`
- **Features**:
  - Keyword search
  - Location filter
  - Job type filter
  - Experience level filter

### User Authentication
#### 1. Login
- **Location**: `login/`
- **Features**:
  - Email/password authentication
  - Social login options
  - Form validation
  - Remember me functionality

#### 2. Sign Up
- **Location**: `signUp/`
- **Features**:
  - User registration form
  - Email verification
  - Password strength meter
  - Terms acceptance

### Dashboard
#### 1. User Dashboard
- **Location**: `App/Dashboard/`
- **Features**:
  - Application tracking
  - Profile management
  - Saved jobs
  - Application history

#### 2. Admin Dashboard
- **Location**: `App/Admin/`
- **Features**:
  - Job posting management
  - User management
  - Analytics and reports
  - Application review

### Job Posting
#### 1. Create Job
- **Location**: `App/JobPost/`
- **Features**:
  - Multi-step form
  - Rich text editor
  - Preview functionality
  - Job requirements builder

## API Integration
### Endpoints
- **Base URL**: `https://api.hiringstore.com/v1`
- **Authentication**:
  - `POST /auth/login` - User login
  - `POST /auth/register` - User registration
  - `POST /auth/refresh` - Refresh token
- **Jobs**:
  - `GET /jobs` - Get job listings
  - `GET /jobs/:id` - Get job details
  - `POST /jobs` - Create new job
  - `PUT /jobs/:id` - Update job
  - `DELETE /jobs/:id` - Delete job
- **Applications**:
  - `POST /applications` - Submit application
  - `GET /applications` - Get user applications
  - `GET /applications/:id` - Get application details

## State Management
- **Context API** for global state
- **Local State** for component-specific state
- **React Query** for server state management

## Styling
- **CSS Modules** for component-scoped styles
- **CSS Variables** for theming
- **Responsive Design** using media queries
- **Animation** for better UX

## Deployment
### Prerequisites
- Node.js (v14+)
- npm or yarn

### Setup Instructions
1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/hiringstore.git
   cd hiringstore
   ```
2. Install dependencies
   ```bash
   npm install
   # or
   yarn
   ```
3. Create a `.env` file with required environment variables
   ```env
   VITE_API_BASE_URL=your_api_url_here
   VITE_GOOGLE_CLIENT_ID=your_google_client_id
   VITE_LINKEDIN_CLIENT_ID=your_linkedin_client_id
   ```
4. Start development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```
5. Build for production
   ```bash
   npm run build
   # or
   yarn build
   ```

## Contributing
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
