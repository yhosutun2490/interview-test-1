import Form from "react-bootstrap/Form";
import styles from "./UserForm.module.scss";
import Button from "react-bootstrap/Button";
import { useRef, useState } from "react";

function UserForm(props) {
  const { userData, setSelected } = props;
  const formId = useRef("");
  const formStatus = useRef("");
  const formInput = useRef("");

  function handleOnSubmit() {
    // 如果使用者只輸入id，input為空，並用id搜尋使用者
    if (formId.current.value && !formInput.current.value) {
      setSelected(Number(formId.current.value));
      console.log(userData);
    }
    // 如果使用者只輸入input搜尋，用關鍵字搜尋使用者
    else {
      setSelected("");
      console.log(userData);
    }
  }
  return (
    <>
      <style type="text/css">
        {`
    .form-select,.form-control {
      border-radius: 50px;
      margin: 5px 10px;
      -webkit-appearance:  none;
      -moz-appearance:  none;
      appearance:  none;
      box-shadow: 1px 2px 5px 0px rgba(0,0,0,0.3);
    }
    .form-select {
      width: auto;
    }
    .form-control {
      width: 70%;
    }

    .btn {
      background-color: #20B2AA;
      font-size: 1.2rem;
      white-space: nowrap;
      border-radius: 50px;
      padding: 5px;
    }
    `}
      </style>
      <Form>
        <div className={styles.form}>
          <Form.Select aria-label="use-state" ref={formStatus}>
            <option value="normal">正常使用</option>
            <option value="broken">故障</option>
            <option value="reparing">修復處理中</option>
          </Form.Select>
          <Form.Select aria-label="user-number" ref={formId}>
            <option value="">帳戶編號</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
          </Form.Select>
          <Form.Control
            type="text"
            aria-describedby="search-input"
            placeholder="請輸入關鍵字查詢"
            ref={formInput}
          />
          <Button onClick={handleOnSubmit}>送出</Button>
        </div>
      </Form>
    </>
  );
}

export default UserForm;
