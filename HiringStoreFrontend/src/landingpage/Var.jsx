import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouseLaptop,
  faChartSimple,
  faBullhorn,
  faBuildingColumns,
  faClipboardList,
  faPeopleRoof
} from '@fortawesome/free-solid-svg-icons';

export const TopMenus = [
    { label: 'Home', path: '/' },
    { label: 'Login', path: '/login' },
    { label: 'Sign Up', path: '/signup' },
    { label: 'About Us', path: '/aboutUs' },
    { label: 'Blogs', path: '/blogs' }
];

//SearchBar

export const Searchplaceholders = {
    Firstplaceholder: "Skill / Designation / Companies",
    Secondplaceholder: "Experience",
    Thirdplaceholder: "Location"
} 

// export const popularJobDesignations = [
//     "Remote",
//     "Analyst",
//     "Marketing",
//     "Banking",
//     "Ops Manager",
//     "HR"
// ];

export const popularJobDesignations = {
    Remote: <FontAwesomeIcon icon={faHouseLaptop} />,
    Analyst: <FontAwesomeIcon icon={faChartSimple} />,
    Marketing:<FontAwesomeIcon icon={faBullhorn} />,
    Banking: <FontAwesomeIcon icon={faBuildingColumns} />,
    "Ops Manager": <FontAwesomeIcon icon={faClipboardList} />,
    HR: <FontAwesomeIcon icon={faPeopleRoof} />
  };

//    "Customer Support ",
//       "UI/UX ",
//    "Project Manager",

export const Footerfunctions = [
  { name: "About Us", path: "/about" },
  { name: "Contact-Us", path: "/contact-us" },
  { name: "Privacy Policy", path: "/privacy-policy" },
  { name: "Terms of Service", path: "/terms-of-service" },
  { name: "Blogs", path: "/blogs" },
  { name: "FAQs", path: "/faqs" },
  { name: "Sitemap", path: "/sitemap" },
  { name: "Help Center", path: "/help" },
  { name: "Browse Jobs", path: "/jobs" },
  { name: "Post a Job", path: "/employer/post-job" },
  { name: "Companies", path: "/companies" },
  { name: "Career", path: "/career" }
];

// this data should have to remove after some time creating after the backend
export const recommendedJobs = {
  role: "Software Developer",
  recommended: [
    {
      title: "Senior Frontend Developer",
      company: "TechNova Inc.",
      location: "Remote"
    },
    {
      title: "Full Stack Engineer",
      company: "Innovate Labs",
      location: "San Francisco, CA (Hybrid)"
    },
    {
      title: "Backend Developer (Node.js)",
      company: "CloudSync",
      location: "Remote"
    },
    {
      title: "React Developer",
      company: "BrightPixel",
      location: "Austin, TX"
    },
    {
      title: "Software Engineer",
      company: "CodeCrafters",
      location: "New York, NY"
    },
    {
      title: "Frontend Engineer",
      company: "NextGen Web",
      location: "Seattle, WA (Hybrid)"
    },
    {
      title: "Platform Engineer",
      company: "SkyNet Solutions",
      location: "Chicago, IL"
    },
    {
      title: "JavaScript Developer",
      company: "DevVerse",
      location: "Remote"
    },
    {
      title: "Web Application Developer",
      company: "CloudBridge",
      location: "Denver, CO"
    },
    {
      title: "Senior Software Engineer",
      company: "BitLogic",
      location: "Remote"
    }
  ]
};
