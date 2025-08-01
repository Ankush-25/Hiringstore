import { useState } from "react";
import {
  NavbarContainer,
  LogoSection,
  SearchSection,
  SearchBar,
  MainNavigation,
  NavItem,
  UserSection,
  NotificationButton,
  NotificationBadge,
  UserProfile,
  ActionButtons,
  PostJobButton,
  AuthButton,
  MobileMenuButton,
  DropdownMenu,
  DropdownItem,
} from "./navbarstyes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faMapMarkerAlt,
  faBriefcase,
  faBuilding,
  faUser,
  faGraduationCap,
  faBell,
  faPlus,
  faSignInAlt,
  faUserPlus,
  faBars,
  faTimes,
  faSignOutAlt,
  faUserCog,
  faBookmark,
  faFileAlt,
  faChartBar,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../../../authContext";
import { Imagepaths } from "../../../../../src/assets/Global_Need_files/ImagesPaths";

export function LandingNavBar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [locationInput, setLocationInput] = useState("");
  const [notifications] = useState(5);

  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);
  const toggleUserDropdown = () => setShowUserDropdown(!showUserDropdown);

  const handleSearch = (e) => {
    e?.preventDefault();
    if (searchQuery.trim()) {
      navigate(
        `/jobs?q=${encodeURIComponent(
          searchQuery
        )}&location=${encodeURIComponent(locationInput)}`
      );
    }
  };

  const handleLogout = () => {
    logout();
    setShowUserDropdown(false);
    navigate("/");
  };

  const menuItems = [
    { label: "Companies", path: "/companies", icon: faBuilding },
    { label: "Career Guidance", path: "/career", icon: faGraduationCap },
  ];

  const userMenuItems = [
    {
      label: "My Profile",
      icon: faUserCog,
      action: () => navigate("/profile"),
    },
    {
      label: "Saved Jobs",
      icon: faBookmark,
      action: () => navigate("/saved-jobs"),
    },
    {
      label: "My Applications",
      icon: faFileAlt,
      action: () => navigate("/applications"),
    },
    {
      label: "Dashboard",
      icon: faChartBar,
      action: () => navigate("/dashboard"),
    },
    { label: "Logout", icon: faSignOutAlt, action: handleLogout },
  ];

  const shouldShowSearch = !["/", "/home"].includes(pathname);

  return (
    <NavbarContainer>
      <LogoSection onClick={() => navigate("/")}>
        <img
          src={Imagepaths.HiringstoreslogoPath}
          alt="HiringStores Logo"
          style={{ height: "60px" }}
        />
      </LogoSection>

      {shouldShowSearch && (
        <SearchSection>
          <SearchBar onSubmit={handleSearch}>
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
            <input
              type="text"
              placeholder="Search jobs, companies, skills..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSearch(e)}
            />
            <div className="location-divider"></div>
            <FontAwesomeIcon icon={faMapMarkerAlt} className="location-icon" />
            <input
              type="text"
              placeholder="Location"
              className="location-input"
              value={locationInput}
              onChange={(e) => setLocationInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSearch(e)}
            />
            <button type="submit" className="search-button">
              <span>Search</span>
            </button>
          </SearchBar>
        </SearchSection>
      )}

      <MobileMenuButton onClick={toggleMobileMenu}>
        <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
      </MobileMenuButton>

      <MainNavigation isMobileMenuOpen={isMobileMenuOpen}>
        {menuItems.map((item, index) => (
          <NavItem
            key={index}
            to={item.path}
            className={item.className}
            activeClassName="active"
          >
            <FontAwesomeIcon icon={item.icon} className="nav-icon" />
            {item.label}
          </NavItem>
        ))}
      </MainNavigation>

      <UserSection>
        {currentUser ? (
          <>
            <NotificationButton>
              <FontAwesomeIcon icon={faBell} />
              {notifications > 0 && (
                <NotificationBadge>{notifications}</NotificationBadge>
              )}
            </NotificationButton>
            <div style={{ position: "relative" }}>
              <UserProfile onClick={toggleUserDropdown}>
                <div className="user-avatar">
                  {currentUser.name?.[0]?.toUpperCase() || "U"}
                </div>
                <span className="user-name">{currentUser.name || "User"}</span>
              </UserProfile>
              {showUserDropdown && (
                <DropdownMenu>
                  {userMenuItems.map((item, index) => (
                    <DropdownItem
                      key={index}
                      onClick={() => {
                        item.action();
                        setShowUserDropdown(false);
                      }}
                    >
                      <FontAwesomeIcon
                        icon={item.icon}
                        className="dropdown-icon"
                      />
                      {item.label}
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              )}
            </div>
          </>
        ) : (
          <ActionButtons>
            <AuthButton variant="login" onClick={() => navigate("/login")}>
              <FontAwesomeIcon icon={faSignInAlt} className="auth-icon" />
              Login
            </AuthButton>
            <AuthButton onClick={() => navigate("/signup")}>
              <FontAwesomeIcon icon={faUserPlus} className="auth-icon" />
              Sign Up
            </AuthButton>
          </ActionButtons>
        )}
      </UserSection>
    </NavbarContainer>
  );
}
