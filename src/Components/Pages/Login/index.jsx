import { Link } from "react-router-dom";
import Button from "../../Button";
import { AnimationContainer, Background, Container, Content } from "./style";
import Input from "../../Input";
import api from "../../services/api"
import { FiUser, FiMail, FiLock } from "react-icons/fi";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-hot-toast";

function Login() {
  const schema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
    password: yup
      .string()
      .min(8, "Minimo de 8 digitos")
      .required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = ({name, email, password}) => {
    const user = {name, email, password}
    api.post("/user/register", user).then((_) =>{
      toast.success("Requisição aprovada")
    })
    .catch((err) => toast.error("Requisição falhou"))
  }

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <h1> Login </h1>
            <Input
              register={register}
              icon={FiMail}
              label="Email"
              placeholder="Seu melhor email"
              name="email"
              error={errors.email?.message}
            />
            <Input
              register={register}
              name="password"
              icon={FiLock}
              label="Senha"
              placeholder="Uma senha bem segura"
              type="password"
              error={errors.password?.message}
            />
            <Button type="submit"> Enviar </Button>
            <p>
              Não tem uma conta? Faça seu <Link to="/signup"> Cadastro </Link>
            </p>
          </form>
        </AnimationContainer>
      </Content>
      <Background />
    </Container>
  );
}

export default Login;
