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
  Marketing: <FontAwesomeIcon icon={faBullhorn} />,
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

export const internships = {
  internships: [
    { id: "1", title: "Software Engineering Intern", company: "Google", location: "Bangalore, India" },
    { id: "2", title: "Data Science Intern", company: "Microsoft", location: "Hyderabad, India" },
    { id: "3", title: "Frontend Developer Intern", company: "Swiggy", location: "Remote" },
    { id: "4", title: "Backend Developer Intern", company: "Zoho", location: "Chennai, India" },
    { id: "5", title: "UI/UX Design Intern", company: "Razorpay", location: "Remote" },
    { id: "6", title: "Cloud Engineering Intern", company: "TCS", location: "Mumbai, India" },
    { id: "7", title: "Cybersecurity Intern", company: "Infosys", location: "Pune, India" },
    { id: "8", title: "Machine Learning Intern", company: "NVIDIA", location: "Remote" },
    { id: "9", title: "DevOps Intern", company: "Amazon", location: "Chennai, India" },
    { id: "10", title: "iOS Developer Intern", company: "Apple", location: "Hyderabad, India" },
    { id: "11", title: "Android Developer Intern", company: "Samsung", location: "Noida, India" },
    { id: "12", title: "Data Analyst Intern", company: "Flipkart", location: "Bangalore, India" },
    { id: "13", title: "Product Management Intern", company: "Paytm", location: "Remote" },
    { id: "14", title: "QA Testing Intern", company: "Freshworks", location: "Chennai, India" },
    { id: "15", title: "Blockchain Intern", company: "Polygon", location: "Remote" },
    { id: "16", title: "Game Development Intern", company: "Nazara", location: "Mumbai, India" },
    { id: "17", title: "Full Stack Intern", company: "Byju's", location: "Bangalore, India" },
    { id: "18", title: "Business Analyst Intern", company: "Accenture", location: "Gurgaon, India" },
    { id: "19", title: "AI Research Intern", company: "OpenAI", location: "Remote" },
    { id: "20", title: "Robotics Intern", company: "Boston Dynamics", location: "Remote" },
    { id: "21", title: "Software Testing Intern", company: "Cognizant", location: "Kolkata, India" },
    { id: "22", title: "Systems Engineering Intern", company: "Wipro", location: "Pune, India" },
    { id: "23", title: "Tech Support Intern", company: "HP", location: "Noida, India" },
    { id: "24", title: "Marketing Intern", company: "Zomato", location: "Remote" },
    { id: "25", title: "Salesforce Intern", company: "Salesforce", location: "Hyderabad, India" },
    { id: "26", title: "Web Developer Intern", company: "Oyo", location: "Gurgaon, India" },
    { id: "27", title: "SDE Intern", company: "CRED", location: "Remote" },
    { id: "28", title: "UI Developer Intern", company: "Meesho", location: "Bangalore, India" },
    { id: "29", title: "Graphic Design Intern", company: "Unacademy", location: "Remote" },
    { id: "30", title: "Cloud Dev Intern", company: "Oracle", location: "Mumbai, India" }
  ]
};






