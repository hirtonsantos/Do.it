import { useHistory } from "react-router";
import Button from "../../Button";
import { Container, Content } from "./style";
import { Redirect } from "react-router";

export default function Home({authenticated}) {

  const history = useHistory()

  if (authenticated){
    return <Redirect to="/dashboard"/>
  }

  return (
    <Container>
      <Content>
        <h1> do<span>.</span>it </h1>
        <span> Organize-se de forma fácil e efetiva </span>
        <div>
          <Button onClick={() => history.push("/signup")} whiteSchema> Cadastra-se </Button>
          <Button onClick={() => history.push("/login")}> Login </Button>
        </div>
      </Content>
    </Container>
  );
}
