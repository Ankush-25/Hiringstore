import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouseLaptop,
  faChartSimple,
  faBullhorn,
  faBuildingColumns,
  faClipboardList,
  faPeopleRoof,
  faCode,
  faServer,
  faDatabase,
  faLaptopCode,
  faMobileScreen,
  faGraduationCap,
  faChartPie,
  faShieldHalved,
  faCloud,
  faNetworkWired,
  faPalette,
  faHeadset,
  faCheckDouble,
  faLink,
  faGamepad,
  faCartShopping,
  faFileLines,
  faRobot,
  faHandshake
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

// Old popular job designations
export const popularJobDesignations = {
  Remote: <FontAwesomeIcon icon={faHouseLaptop} />,
  Analyst: <FontAwesomeIcon icon={faChartSimple} />,
  Marketing: <FontAwesomeIcon icon={faBullhorn} />,
  Banking: <FontAwesomeIcon icon={faBuildingColumns} />,
  "Ops Manager": <FontAwesomeIcon icon={faClipboardList} />,
  HR: <FontAwesomeIcon icon={faPeopleRoof} />
};

// New comprehensive job categories with counts and icons
export const jobCategories = [
  {
    id: 1,
    title: "Software Development",
    icon: <FontAwesomeIcon icon={faCode} />,
    count: "5,280",
    description: "Software engineering, web development, and programming roles"
  },
  {
    id: 2,
    title: "Data Science",
    icon: <FontAwesomeIcon icon={faChartPie} />,
    count: "3,450",
    description: "Data analysis, machine learning, and AI roles"
  },
  {
    id: 3,
    title: "Marketing",
    icon: <FontAwesomeIcon icon={faBullhorn} />,
    count: "2,890",
    description: "Digital marketing, content creation, and brand management"
  },
  {
    id: 4,
    title: "Finance",
    icon: <FontAwesomeIcon icon={faBuildingColumns} />,
    count: "2,150",
    description: "Accounting, financial analysis, and banking roles"
  },
  {
    id: 5,
    title: "Human Resources",
    icon: <FontAwesomeIcon icon={faPeopleRoof} />,
    count: "1,780",
    description: "Recruitment, employee relations, and HR management"
  },
  {
    id: 6,
    title: "Remote Work",
    icon: <FontAwesomeIcon icon={faHouseLaptop} />,
    count: "4,620",
    description: "Work from home and remote-first positions"
  },
  {
    id: 7,
    title: "DevOps",
    icon: <FontAwesomeIcon icon={faServer} />,
    count: "1,950",
    description: "Infrastructure, CI/CD, and system administration"
  },
  {
    id: 8,
    title: "Database",
    icon: <FontAwesomeIcon icon={faDatabase} />,
    count: "1,340",
    description: "Database administration, architecture, and development"
  },
  {
    id: 9,
    title: "Frontend",
    icon: <FontAwesomeIcon icon={faLaptopCode} />,
    count: "2,760",
    description: "UI/UX development, JavaScript frameworks, and web design"
  },
  {
    id: 10,
    title: "Mobile",
    icon: <FontAwesomeIcon icon={faMobileScreen} />,
    count: "1,890",
    description: "iOS, Android, and cross-platform mobile development"
  },
  {
    id: 11,
    title: "Security",
    icon: <FontAwesomeIcon icon={faShieldHalved} />,
    count: "1,230",
    description: "Cybersecurity, penetration testing, and security analysis"
  },
  {
    id: 12,
    title: "Cloud",
    icon: <FontAwesomeIcon icon={faCloud} />,
    count: "2,540",
    description: "Cloud architecture, AWS, Azure, and GCP specialists"
  },
  {
    id: 13,
    title: "UI/UX Design",
    icon: <FontAwesomeIcon icon={faPalette} />,
    count: "1,850",
    description: "User interface and experience design, prototyping"
  },
  {
    id: 14,
    title: "Product Management",
    icon: <FontAwesomeIcon icon={faClipboardList} />,
    count: "1,420",
    description: "Product strategy, roadmap planning, and execution"
  },
  {
    id: 15,
    title: "Customer Support",
    icon: <FontAwesomeIcon icon={faHeadset} />,
    count: "3,210",
    description: "Technical support and customer service positions"
  },
  {
    id: 16,
    title: "Quality Assurance",
    icon: <FontAwesomeIcon icon={faCheckDouble} />,
    count: "1,680",
    description: "Software testing and quality assurance engineering"
  },
  {
    id: 17,
    title: "Blockchain",
    icon: <FontAwesomeIcon icon={faLink} />,
    count: "980",
    description: "Blockchain development and smart contracts"
  },
  {
    id: 18,
    title: "Game Development",
    icon: <FontAwesomeIcon icon={faGamepad} />,
    count: "1,120",
    description: "Game design and development roles"
  },
  {
    id: 19,
    title: "E-commerce",
    icon: <FontAwesomeIcon icon={faCartShopping} />,
    count: "2,350",
    description: "Online retail and marketplace positions"
  },
  {
    id: 20,
    title: "DevOps",
    icon: <FontAwesomeIcon icon={faNetworkWired} />,
    count: "2,110",
    description: "CI/CD, infrastructure as code, and automation"
  },
  {
    id: 21,
    title: "Technical Writing",
    icon: <FontAwesomeIcon icon={faFileLines} />,
    count: "890",
    description: "Documentation and technical content creation"
  },
  {
    id: 22,
    title: "AI/ML Research",
    icon: <FontAwesomeIcon icon={faRobot} />,
    count: "1,450",
    description: "Artificial Intelligence and Machine Learning research"
  },
  {
    id: 23,
    title: "Sales Engineering",
    icon: <FontAwesomeIcon icon={faHandshake} />,
    count: "1,760",
    description: "Technical sales and solutions architecture"
  },
  {
    id: 24,
    title: "Data Engineering",
    icon: <FontAwesomeIcon icon={faDatabase} />,
    count: "2,030",
    description: "Data pipeline and ETL development"
  }
];

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

export const freshersJobs = {
  jobs: [
    { 
      id: "f1", 
      title: "Associate Software Engineer", 
      company: "Microsoft", 
      location: "Bangalore, India",
      experience: "0-1 years",
      education: "B.Tech in CSE/IT/ECE",
      type: "Full-time",
      salary: "₹12L - ₹18L/year"
    },
    { 
      id: "f2", 
      title: "Junior Frontend Developer", 
      company: "Swiggy", 
      location: "Remote",
      experience: "Fresher",
      education: "B.E/B.Tech in any stream",
      type: "Full-time",
      salary: "₹8L - ₹12L/year"
    },
    { 
      id: "f3", 
      title: "Data Analyst", 
      company: "Amazon", 
      location: "Hyderabad, India",
      experience: "0-2 years",
      education: "B.Tech/B.Sc in CS/IT/Statistics",
      type: "Full-time",
      salary: "₹10L - ₹15L/year"
    },
    { 
      id: "f4", 
      title: "Software Developer", 
      company: "Zoho", 
      location: "Chennai, India",
      experience: "0-1 years",
      education: "B.E/B.Tech in CSE/IT",
      type: "Full-time",
      salary: "₹6L - ₹10L/year"
    },
    { 
      id: "f5", 
      title: "UI/UX Designer", 
      company: "Razorpay", 
      location: "Bangalore, India",
      experience: "Fresher",
      education: "B.Des/Any Degree",
      type: "Full-time",
      salary: "₹8L - ₹12L/year"
    },
    { 
      id: "f6", 
      title: "Associate DevOps Engineer", 
      company: "TCS", 
      location: "Mumbai, India",
      experience: "0-1 years",
      education: "B.E/B.Tech in CSE/IT",
      type: "Full-time",
      salary: "₹5L - ₹8L/year"
    },
    { 
      id: "f7", 
      title: "Cybersecurity Analyst", 
      company: "Infosys", 
      location: "Pune, India",
      experience: "0-2 years",
      education: "B.Tech in CSE/IT/ECE",
      type: "Full-time",
      salary: "₹6L - ₹9L/year"
    },
    { 
      id: "f8", 
      title: "Machine Learning Engineer", 
      company: "NVIDIA", 
      location: "Remote",
      experience: "0-1 years",
      education: "M.Tech/B.Tech in CSE/AI/ML",
      type: "Full-time",
      salary: "₹15L - ₹25L/year"
    },
    { 
      id: "f9", 
      title: "iOS Developer", 
      company: "Apple", 
      location: "Hyderabad, India",
      experience: "Fresher",
      education: "B.E/B.Tech in CSE/IT",
      type: "Full-time",
      salary: "₹12L - ₹18L/year"
    },
    { 
      id: "f10", 
      title: "Android Developer", 
      company: "Samsung", 
      location: "Noida, India",
      experience: "0-1 years",
      education: "B.Tech in CSE/IT",
      type: "Full-time",
      salary: "₹8L - ₹14L/year"
    },
    { 
      id: "f11", 
      title: "Business Analyst", 
      company: "Accenture", 
      location: "Gurgaon, India",
      experience: "Fresher",
      education: "BBA/MBA/B.Tech",
      type: "Full-time",
      salary: "₹6L - ₹10L/year"
    },
    { 
      id: "f12", 
      title: "Full Stack Developer", 
      company: "CRED", 
      location: "Bangalore, India",
      experience: "0-2 years",
      education: "B.E/B.Tech in CSE/IT",
      type: "Full-time",
      salary: "₹12L - ₹20L/year"
    }
  ]
};
