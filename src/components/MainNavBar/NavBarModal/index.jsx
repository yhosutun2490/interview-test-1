import Nav from "react-bootstrap/Nav";
import styles from "./NavBarModal.module.scss";
import { BsHouseDoor } from "react-icons/bs";
import { GiFishEggs } from "react-icons/gi";
import { TbBuildingFactory2 } from "react-icons/tb";
import { BsGear } from "react-icons/bs";
import { FiEye } from "react-icons/fi";
import { FaWater } from "react-icons/fa";
import { HiOutlineClipboardList } from "react-icons/hi";

function NavBarModal() {
  return (
    <>
      <style type="text/css">
        {`
    .nav-pills {
      background-color: #20B2AA;
      width: 100%;
      padding: 10px 25px;
      box-shadow: none !important;
    }
}
    .nav-link {
      display: flex;
      padding: 15px 10px;
      margin-bottom: 15px;
      font-weight: 500;
      font-size: 1.5rem;
      color: white;
    }
    .nav-pills .nav-link.active, .nav-pills .show>.nav-link {
      background-color: #003366;
      border-radius: 8px;
       box-shadow:  1px 2px 5px 2px rgba(0,0,0,0.3);
     }
    `}
      </style>
      <Nav variant="pills" defaultActiveKey="/system" className="flex-column">
        <Nav.Link eventKey="/home">
          <div className={styles.sidebar_item_logo}>
            <BsHouseDoor />
          </div>
          <div className={styles.sidebar_item_text}> 首頁</div>
        </Nav.Link>
        <Nav.Link eventKey="/link-1">
          <div className={styles.sidebar_item_logo}>
            <TbBuildingFactory2 />
          </div>
          <div className={styles.sidebar_item_text}>廢域管理</div>
        </Nav.Link>
        <Nav.Link eventKey="/system">
          <div className={styles.sidebar_item_logo}>
            <BsGear />
          </div>
          <div className={styles.sidebar_item_text}>系統管理</div>
        </Nav.Link>
        <Nav.Link eventKey="/link-3">
          <div className={styles.sidebar_item_logo}>
            <FiEye />
          </div>
          <div className={styles.sidebar_item_text}>養殖監控</div>
        </Nav.Link>
        <Nav.Link eventKey="/link-4">
          <div className={styles.sidebar_item_logo}>
            <FaWater />
          </div>
          <div className={styles.sidebar_item_text}>水池整池</div>
        </Nav.Link>
        <Nav.Link eventKey="/feed-record">
          <div className={styles.sidebar_item_logo}>
            <HiOutlineClipboardList />
          </div>
          <div className={styles.sidebar_item_text}>養殖紀錄</div>
        </Nav.Link>
      </Nav>
    </>
  );
}

export default NavBarModal;
