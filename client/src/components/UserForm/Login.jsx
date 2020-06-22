import React, { useState } from "react";
import styled from "styled-components";

import Input from "../common/Input";
import Button from "../common/Button";
import * as auth from "../../services/authService";

const Login = () => {
  const [userData, setUserData] = useState({ email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await auth.login(userData.email, userData.password);
    } catch (error) {}
  };

  const handleChange = (e) => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;
    const newUserData = {
      ...userData,
      [name]: value,
    };

    setUserData(newUserData);
  };

  return (
    <Container>
      <h1>Login</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <Input
          onChange={(e) => handleChange(e)}
          label={"email"}
          name={"email"}
          value={userData.email}
        />
        <Input
          onChange={(e) => handleChange(e)}
          name={"password"}
          label={"password"}
          type={"password"}
          value={userData.password}
        />
        <Button>Login</Button>
      </form>
    </Container>
  );
};

const Container = styled.div`
  max-width: 30rem;
  padding: 1rem;
  margin: 0 auto;
  box-sizing: border-box;
`;

export default Login;
