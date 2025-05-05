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