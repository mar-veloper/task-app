import React from "react";
import styled from "styled-components";

const Input = ({ name, label, ...rest }) => {
  return (
    <Container>
      <Label htmlFor={name}>{label}</Label>
      <StyledInput {...rest} name={name} id={name} className="form-control" />
    </Container>
  );
};

const Container = styled.div`
  margin: 2rem 0;
  display: grid;
  text-align: center;
  gap: 1rem;
`;
const Label = styled.label`
  font-size: 1.5rem;
`;
const StyledInput = styled.input`
  font-size: 1rem;
  text-align: center;
  outline: none;
  border: 0;
  border-bottom: 1pt solid black;
`;

// input:focus::-webkit-input-placeholder
// {
//     color: transparent;
// }

export default Input;
