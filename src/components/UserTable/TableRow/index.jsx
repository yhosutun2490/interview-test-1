import styles from "./TableRow.module.scss";
function TableRow(props) {
  return (
    <>
      <tr className={styles.table_row}>
        <th className={styles.table_content_id}>{props.id}</th>
        <th className={styles.table_content}>{props.account}</th>
        <th className={styles.table_content}>{props.name}</th>
        <th className={styles.table_content}>{props.email}</th>
        <th className={styles.table_content}>{props.valid}</th>
      </tr>
    </>
  );
}

export default TableRow;
