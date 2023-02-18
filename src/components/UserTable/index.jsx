import Table from "react-bootstrap/Table";
import styles from "./UserTable.module.scss";
import TableRow from "./TableRow";

function UserTable(props) {
  return (
    <>
      <div>
        <div className={styles.table_title}>系統管理&rarr;帳戶管理</div>
        <Table responsive striped bordered hover>
          <thead className={styles.thead}>
            <tr>
              <th>帳戶編號</th>
              <th>帳戶名稱</th>
              <th>姓名</th>
              <th>註冊信箱</th>
              <th>有效時間</th>
            </tr>
          </thead>
          <tbody>
            {props.userData.map((item) => (
              <TableRow
                key={item.userId}
                id={item.userId}
                account={item.account}
                name={item.userName}
                email={item.email}
                valid={item.valid}
              />
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default UserTable;
