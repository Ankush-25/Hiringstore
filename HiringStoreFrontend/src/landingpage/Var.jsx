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
  data: [
    {
      _id: "1",
      title: "Senior Frontend Developer",
      company: "TechNova Inc.",
      location: "Remote"
    },
    {
      _id: "2",
      title: "Machine Learning Engineer",
      company: "DataWorks",
      location: "Remote"
    },
    {
      _id: "3",
      title: "Cloud Infrastructure Engineer",
      company: "DeployNow",
      location: "Remote"
    },
    {
      _id: "4",
      title: "Product Designer",
      company: "DesignPro",
      location: "New York, NY"
    },
    {
      _id: "5",
      title: "Backend Developer",
      company: "CodeBase",
      location: "Austin, TX"
    },
    {
      _id: "6",
      title: "Full Stack Developer",
      company: "StackWorks",
      location: "San Francisco, CA"
    },
    {
      _id: "7",
      title: "DevOps Engineer",
      company: "InfraEdge",
      location: "Seattle, WA"
    },
    {
      _id: "8",
      title: "React Developer",
      company: "UIForge",
      location: "Remote"
    },
    {
      _id: "9",
      title: "Frontend Engineer",
      company: "WebCore",
      location: "Denver, CO"
    },
    {
      _id: "10",
      title: "Software Engineer",
      company: "AlgoSoft",
      location: "Chicago, IL"
    },
    {
      _id: "11",
      title: "Node.js Developer",
      company: "ServerStack",
      location: "Remote"
    },
    {
      _id: "12",
      title: "iOS Developer",
      company: "AppVantage",
      location: "Boston, MA"
    },
    {
      _id: "13",
      title: "Android Developer",
      company: "MobileNext",
      location: "San Diego, CA"
    },
    {
      _id: "14",
      title: "QA Engineer",
      company: "BugCatchers",
      location: "Phoenix, AZ"
    },
    {
      _id: "15",
      title: "Tech Lead",
      company: "LeadLogic",
      location: "Remote"
    },
    {
      _id: "16",
      title: "UI Engineer",
      company: "PixelPush",
      location: "Miami, FL"
    },
    {
      _id: "17",
      title: "Security Analyst",
      company: "SecureWave",
      location: "Atlanta, GA"
    },
    {
      _id: "18",
      title: "Cloud Engineer",
      company: "SkyTech",
      location: "Remote"
    },
    {
      _id: "19",
      title: "Data Analyst",
      company: "InsightHub",
      location: "Philadelphia, PA"
    },
    {
      _id: "20",
      title: "Solutions Architect",
      company: "TechBridge",
      location: "Remote"
    }
  ]
};




