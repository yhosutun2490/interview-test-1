import styles from "./App.module.scss";
import MainNavBar from "./components/MainNavBar";
import NavList from "./components/NavList";
import UserForm from "./components/UserForm";
import UserTable from "./components/UserTable";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
// 設定資料JSON
const userData = [
  {
    userId: 1,
    account: "admin",
    userName: "Jack",
    email: "email.two.shoulder@gmail.com.tw",
    valid: "2022/12/31",
  },
  {
    userId: 2,
    account: "Rafael123",
    userName: "Rafael",
    email: "email.two.shoulder@gmail.com.tw",
    valid: "2022/12/31",
  },
  {
    userId: 3,
    account: "PotterHarry",
    userName: "Harry",
    email: "email.two.shoulder@gmail.com.tw",
    valid: "2022/12/31",
  },
  {
    userId: 4,
    account: "Amy123",
    userName: "Amy",
    email: "email.two.shoulder@gmail.com.tw",
    valid: "2022/12/31",
  },
  {
    userId: 5,
    account: "PT123",
    userName: "Peter",
    email: "email.two.shoulder@gmail.com.tw",
    valid: "2022/12/31",
  },
  {
    userId: 6,
    account: "GaryTW",
    userName: "Gary",
    email: "email.two.shoulder@gmail.com.tw",
    valid: "2022/12/31",
  },
  {
    userId: 7,
    account: "Mary2",
    userName: "Mary",
    email: "email.two.shoulder@gmail.com.tw",
    valid: "2022/12/31",
  },
  {
    userId: 8,
    account: "Jhon",
    userName: "Jhon",
    email: "email.two.shoulder@gmail.com.tw",
    valid: "2022/12/31",
  },
];

function App() {
  const [selectUser, setSelectUser] = useState("");
  const filterUserData = selectUser
    ? userData.filter((user) => user.userId === selectUser)
    : userData;
  return (
    <div className={styles.App}>
      <MainNavBar />
      <Container fluid className={styles.main_container}>
        <Row>
          <Col xxl={2} lg={3} md={4} sm={5}>
            <div className={styles.sidebar}>
              <NavList />
            </div>
          </Col>
          <Col xxl={10} lg={9} md={8} sm={7}>
            <Row>
              <Col xl={5} lg={3} md={3} sm={0}>
                <div className={styles.table_title}>總覽</div>
              </Col>
              <Col xl={7} lg={9} md={9} sm={12}>
                <UserForm
                  userData={filterUserData}
                  setSelected={setSelectUser}
                />
              </Col>
            </Row>
            <Row className="mt-5">
              <UserTable userData={filterUserData} />
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
