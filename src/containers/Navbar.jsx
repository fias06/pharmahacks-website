import React from 'react';
import '../styles/Navbar.css';
import '../styles/MLH.css';
import Button from '../components/Button';

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.listener = null;
    this.dropdownRef = React.createRef();
    this.state = {
      status: "top",
      eventsDropdownOpen: false,
      sidebarEventsDropdownOpen: false
    };
  }

  componentDidMount() {
    this.listener = document.addEventListener("scroll", (e) => {
      var scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 100) {
        if (this.state.status !== "scrolled") {
          this.setState({ status: "scrolled" });
        }
      } else {
        if (this.state.status !== "top") {
          this.setState({ status: "top" });
        }
      }
    });

    // Add click event listener to close dropdown when clicking outside
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("scroll", this.listener);
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  // Handle clicking outside the dropdown
  handleClickOutside = (event) => {
    if (this.dropdownRef.current && !this.dropdownRef.current.contains(event.target)) {
      this.setState({
        eventsDropdownOpen: false
      });
    }
  }

  scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  openNav = () => {
    document.getElementById("mySidebar").style.width = "250px";
  }

  closeNav = () => {
    document.getElementById("mySidebar").style.width = "0";
  }

  navigateHome = () => {
    window.location.href = '/';
  }

  toggleEventsDropdown = (e) => {
    e.stopPropagation(); // Prevent this click from being detected by the document listener
    this.setState(prevState => ({
      eventsDropdownOpen: !prevState.eventsDropdownOpen
    }));
  }

  toggleSidebarEventsDropdown = () => {
    this.setState(prevState => ({
      sidebarEventsDropdownOpen: !prevState.sidebarEventsDropdownOpen
    }));
  }

  render() {
    return (
      <nav
        className={`navbar-container ${this.state.status === "scrolled" ? "shrink" : ""}`}
        style={{
          backgroundColor: this.state.status === "scrolled" ? "rgba(0, 0, 0, 0.8)" : "rgba(0, 0, 0, 0)",
          backdropFilter: this.state.status === "scrolled" ? "blur(10px)" : "none",
          boxShadow: this.state.status === "scrolled" ? "0 4px 30px rgba(0, 0, 0, 0.3)" : "none",
          borderBottom: this.state.status === "scrolled" ? "1px solid rgba(255, 255, 255, 0.1)" : "none"
        }}
      >
        <div className="n-logo" onClick={window.innerWidth <= 800 ? this.openNav : this.navigateHome}>
          <img
            src="./images/navbar/pharma_icon.svg"
            alt="logo"
            style={{ opacity: this.state.status === "top" ? "0.9" : "1" }}
          />
        </div>
        <div className="n-tabs">
          <div className="n-items">
            <a href="/#welcome">Home</a>
            <a href="/Team">Team</a>
            <a href="/Hackathon2023">Hackathon</a>
            <div className="dropdown" ref={this.dropdownRef}>
              <button className="dropdown-toggle" onClick={this.toggleEventsDropdown}>
                Events <i className={`arrow ${this.state.eventsDropdownOpen ? 'up' : 'down'}`}></i>
              </button>
              <div className={`dropdown-menu ${this.state.eventsDropdownOpen ? 'show' : ''}`}>
                <a href="/Event">Event 2024</a>
                <a href="/Event2025">Event 2025</a>
              </div>
            </div>
          </div>

          <div className="n-buttons">
            <Button value="Sponsor Us!" color="lblue" action="mailto:contact@pharmahacks.com" />
          </div>
        </div>

        <div id="mySidebar" className="sidebar">
          <button className="closebtn" onClick={this.closeNav}>×</button>
          <a href="/#welcome">Home</a>
          <a href="/Team">Team</a>
          <a href="/Hackathon2023">Hackathon</a>
          <div className="sidebar-dropdown">
            <button className="sidebar-dropdown-toggle" onClick={this.toggleSidebarEventsDropdown}>
              Events <i className={`arrow ${this.state.sidebarEventsDropdownOpen ? 'up' : 'down'}`}></i>
            </button>
            <div className={`sidebar-dropdown-menu ${this.state.sidebarEventsDropdownOpen ? 'show' : ''}`}>
              <a href="/Event">Event 2024</a>
              <a href="/Event2025">Event 2025</a>
            </div>
          </div>
          <div className="sidebar-btn">
            <Button value="Sponsor Us!" color="lblue" action="mailto:contact@pharmahacks.com" />
          </div>
        </div>
      </nav>
    );
  }
}
