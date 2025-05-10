import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouseLaptop,
  faChartSimple,
  faBullhorn,
  faBuildingColumns,
  faClipboardList,
  faPeopleRoof
} from '@fortawesome/free-solid-svg-icons';

export const TopMenus = {
    Home: 'Home',
    Login: 'login',
    Sign_Up: 'Sign Up',
    About_Us: 'About Us',
    Blogs: 'Blogs'
}

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
    HR: <FontAwesomeIcon icon="fa-solid fa-people-roof" />
  };

// "Customer Support ",
//     "UI/UX ",
//     "Project Manager",

export const Footerfunctions = [
  { name: "About Us", path: "/about" },
  { name: "Contact", path: "/contact" },
  { name: "Privacy Policy", path: "/privacy-policy" },
  { name: "Terms of Service", path: "/terms-of-service" },
  { name: "Blog", path: "/blog" },
  { name: "FAQs", path: "/faqs" },
  { name: "Sitemap", path: "/sitemap" },
  { name: "Help Center", path: "/help" },
  { name: "Browse Jobs", path: "/jobs" },
  { name: "Post a Job", path: "/employer/post-job" },
  { name: "Companies", path: "/companies" },
  { name: "Career Advice", path: "/career-advice" }
];