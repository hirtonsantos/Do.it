import Button from "../../Button";
import { Container, Content } from "./style";

export default function Home() {
  return (
    <Container>
      <Content>
        <h1> do<span>.</span>it </h1>
        <span> Organize-se de forma fácil e efetiva </span>
        <div>
          <Button whiteSchema> Cadastra-se </Button>
          <Button> Login </Button>
        </div>
      </Content>
    </Container>
  );
}
