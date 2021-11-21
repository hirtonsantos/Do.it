import { Link } from "react-router-dom";
import Button from "../../Button";
import { AnimationContainer, Background, Container, Content } from "./styles";
import Input from "../../Input";
import api from "../../services/api"
import { FiUser, FiMail, FiLock } from "react-icons/fi";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-hot-toast";
import { Redirect, useHistory } from "react-router";

function Signup({authenticated}) {
  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
    password: yup
      .string()
      .min(8, "Minimo de 8 digitos")
      .required("Campo obrigatório"),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas diferentes")
      .required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const history = useHistory()

  const onSubmitFunction = ({name, email, password}) => {
    const user = {name, email, password}
    api.post("/user/register", user).then((_) =>{
      toast.success("Requisição aprovada")
      return history.pushState("/login")
    })
    .catch((err) => toast.error("Requisição falhou"))
  }

  if (authenticated){
    return <Redirect to="/dashboard"/>
  }

  return (
    <Container>
      <Background />
      <Content>
        <AnimationContainer>
          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <h1> Cadastro </h1>
            <Input
              register={register}
              icon={FiUser}
              label="Nome"
              placeholder="Seu nome"
              name="name"
              error={errors.name?.message}
            />
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
            <Input
              register={register}
              name="passwordConfirm"
              icon={FiLock}
              label="Confirmação de senha"
              placeholder="Confirmação da senha"
              type="password"
              error={errors.passwordConfirm?.message}
            />
            <Button type="submit"> Enviar </Button>
            <p>
              Já tem uma conta? Faça seu <Link to="/login"> Login</Link>
            </p>
          </form>
        </AnimationContainer>
      </Content>
    </Container>
  );
}

export default Signup;
