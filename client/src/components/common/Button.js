const { default: styled } = require("styled-components");

const Button = styled.button`
  width: 100%;
  padding: ${(props) => (props.small && "0 0.5rem") || "1rem"};
  font-size: ${(props) => (props.small && "0.8rem") || "1.5rem"}
  color: ${(props) => (props.delete ? "white" : "black")};
  background-color: ${(props) =>
    (props.delete && "red") || (props.done && "green") || "white"};
`;

export default Button;
