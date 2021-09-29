import RegularLayout from "../../layouts/RegularLayout";
import "./LoginPage.css";
import Container from "react-bootstrap/Container";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { users } from "../../../data/users";
import classNames from "classnames";

import { useHistory } from "react-router-dom";

const LoginPage = () => {
  let history = useHistory();
  
  const [state, setState] = useState({
    username: "",
    password: "",
    loginError: "",
  });

  const changeState = (newState) => {
    setState((prevState) => ({ ...prevState, ...newState }));
  };

  const onLoginClick = (e) => {
    e.preventDefault();
    const activeUser = users.find(
      (user) =>
        user.username === state.username && user.password === state.password
    );

    if (activeUser) {
      localStorage.setItem("activeUser", activeUser.id);
      history.push("/")  
    } else {
      changeState({
        loginError: "Погрешни креденцијали. \n Покушајте Поново.",
      });
    }
  };

  const errorClass = classNames("login-form-error", {
    "login-error-active": state.loginError,
  });
  return (
    <div>
      <RegularLayout>
        <Container className="login-form-container">
          <h1 className="welcome-title">Добродошли!</h1>
          <Form className="login-form">
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">
                Корисничко име
              </InputGroup.Text>
              <FormControl
                placeholder="Корисничко име"
                aria-label="Корисничко име"
                value={state.username}
                onChange={(e) =>
                  changeState({ username: e.target.value, loginError: "" })
                }
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">Лозинка</InputGroup.Text>
              <FormControl
                placeholder="Лозинка"
                aria-label="Лозинка"
                type="password"
                value={state.password}
                onChange={(e) =>
                  changeState({ password: e.target.value, loginError: "" })
                }
              />
            </InputGroup>
            <span className={errorClass}>{state.loginError}</span>
            <Button type="submit" onClick={onLoginClick}>
              Улогуј се
            </Button>
          </Form>
        </Container>
      </RegularLayout>
    </div>
  );
};

LoginPage.propTypes = {};

LoginPage.defaultProps = {};

export default LoginPage;
