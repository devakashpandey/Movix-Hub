import React, { useState, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { useNavigate, useLocation } from "react-router-dom";
import "./Header.scss";
import ContentWrapper, {
  contentWrapper,
} from "../../components/contentWrapper/ContentWrapper";
import logo from "../../assets/logo.png";

const Header = () => {
  const [show, setShow] = useState("top");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [query, setQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const openSearch = () => {
    setMobileMenu(false);
    setShowSearch(true);
  };

  const openMobileMenu = () => {
    setMobileMenu(true);
    setShowSearch(false);
  };

  const searchHandler = (e) => {
    if (e.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
      setTimeout(() => {
        setShowSearch(false);
      }, 1000);
    }
  };

  return (
    <header className={`header ${mobileMenu ? "mobile-view" : ""}  ${show}`}>
      <ContentWrapper className="content-wrapper">
        <div className="logo">
          <img src={logo} alt="logo" />
          <span className="logo-title">Movix Hub</span>
        </div>
        <ul className="menu-items">
          <li className="menu-item">Movies</li>
          <li className="menu-item">TV Shows</li>
          <li className="menu-item search-icon">
            <HiOutlineSearch />
          </li>
        </ul>
        <div className="mobile-Menu-Items">
          <HiOutlineSearch className="mobile-icon" onClick={openSearch} />
          {mobileMenu ? (
            <VscChromeClose
              className="mobile-icon"
              onClick={() => setMobileMenu(false)}
            />
          ) : (
            <SlMenu className="mobile-icon" onClick={openMobileMenu} />
          )}
        </div>
      </ContentWrapper>
      {showSearch && (
        <div className="search-bar">
          <ContentWrapper>
            <div className="search-input">
              <input
                type="text"
                placeholder="Search for movies or tv shows..."
                onChange={(e) => setQuery(e.target.value)}
                onKeyUp={searchHandler}
              />
              <VscChromeClose
                onClick={() => setShowSearch(false)}
                style={{ color: "white" }}
              />
            </div>
          </ContentWrapper>
        </div>
      )}
    </header>
  );
};

export default Header;
