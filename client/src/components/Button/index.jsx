import { Container } from "./styles";

export const Button = ({ title, ...rest }) => {
  return (
    <Container {...rest}>
      <button>{title}</button>
    </Container>
  );
};
