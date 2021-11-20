import { Link } from "react-router-dom"
import Button from "../../Button";
import { AnimationContainer, Background, Container, Content } from "./styles";
import Input from "../../Input"

function Signup (){
    return (
     <Container>
         <Background/>
         <Content>
             <AnimationContainer>
                <form>
                    <h1> Cadastro </h1>
                    <Input label="Nome" placeholder="Seu nome" />
                    <Input label="Email" placeholder="Seu melhor email"/>
                    <Input label="Senha" placeholder="Uma senha bem segura"type="password" /> 
                    <Input
                    label="Confirmação de senha"
                    placeholder="Confirmação da senha"
                    type="password"
                    />
                    <Button> Enviar </Button>
                    <p>
                        Já tem uma conta? Faça seu <Link to="/link"> Login</Link> 
                    </p>
                </form>
             </AnimationContainer>
         </Content>
     </Container>   
    )
}

export default Signup