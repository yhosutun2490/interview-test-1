import Container from "react-bootstrap/Container";
import styles from "./MainNavBar.module.scss";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavBarModal from "./NavBarModal";
import { FaBell } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

function MainNavBar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  function handleOnClick() {
    setIsModalOpen(!isModalOpen);
  }
  return (
    <>
      <style type="text/css">
        {`
    .navbar {
      background-color: #20B2AA !important; 
      box-shadow:  3px 3px 3px rgba(0,0,0,0.3);
      padding: 10px 25px;
    }
    `}
      </style>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#home">
            <div className={styles.sidebar_modal}>
              <GiHamburgerMenu
                size={32}
                color="white"
                onClick={handleOnClick}
              />
            </div>
          </Navbar.Brand>

          <div className={styles.icon_group}>
            <div className={styles.icon_notify}>
              <FaBell size={30} color="white" />
              <div className={styles.icon_pill}>2</div>
            </div>
            <FiLogOut size={30} color="white" />
            <FaUserCircle size={30} color="white" />
          </div>
        </Container>
        {isModalOpen && <NavBarModal />}
      </Navbar>
    </>
  );
}

export default MainNavBar;
