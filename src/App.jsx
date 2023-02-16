import styles from "./App.module.scss";
import MainNavBar from "./components/NavBar";
import SideBarList from "./components/SideBarList";
import UserForm from "./components/FormGroup";
import UserTable from "./components/UserTable";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className={styles.App}>
      <MainNavBar />
      <Container fluid className={styles.main_container}>
        <Row>
          <Col lg={2}>
            <SideBarList />
          </Col>
          <Col lg={10}>
            <Row>
              <Col>總覽</Col>
              <Col>
                <UserForm />
              </Col>
            </Row>
            <Row>
              <UserTable />
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
