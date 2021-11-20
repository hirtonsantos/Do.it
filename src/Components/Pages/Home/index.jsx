import { useHistory } from "react-router";
import Button from "../../Button";
import { Container, Content } from "./style";

export default function Home() {

  const history = useHistory()

  return (
    <Container>
      <Content>
        <h1> do<span>.</span>it </h1>
        <span> Organize-se de forma fácil e efetiva </span>
        <div>
          <Button onClick={() => history.push("/signup")} whiteSchema> Cadastra-se </Button>
          <Button> Login </Button>
        </div>
      </Content>
    </Container>
  );
}
