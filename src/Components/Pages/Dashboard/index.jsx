import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Redirect } from "react-router";
import Input from "../../Input";
import Button from "../../Button";
import { FiEdit2 } from "react-icons/fi";
import { Container, InputContainer, TasksContainer } from "./style";
import Card from "../../Card";
import api from "../../services/api";
import toast from "react-hot-toast";

function Dashboard({ authenticated }) {
  const [tasks, setTasks] = useState([]);
  const [token] = useState(
    JSON.parse(localStorage.getItem("@Doit:token")) || ""
  );

  const { register, handleSubmit } = useForm();

  function loadTasks() {
    api
      .get("/task", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          completed: false,
        },
      })
      .then((response) => {
        const apiTasks = response.data.data.map((task) => ({
          ...task,
          createdAt: new Date(task.createdAt).toLocaleString("pt-BR", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          }),
        }));
        setTasks(apiTasks);
        console.log(tasks)
      })
      .catch((err) => console.log(err));
  }


  useEffect(() => {
    loadTasks();
  }, []);

  const onSubmitt = ({ task }) => {
    if (!task) {
      return toast.error("Complete o campo para enviar a tarefa");
    }
    api
    .post(
      "/task",
      {
        description: task,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then((response) => loadTasks())
  };
  
  if (!authenticated) {
    return <Redirect to="/login" />;
  }

  return (
    <Container>
      <InputContainer onSubmit={handleSubmit(onSubmitt)}>
        <time>7 de maio de 2021</time>
        <section>
          <Input
            icon={FiEdit2}
            placeholder="Nova tarefa"
            register={register}
            name="task"
          />
          <Button type="submit"> Adicionar </Button>
        </section>
      </InputContainer>
      <TasksContainer>
        {tasks.map((task) => (
          <Card
            key={task._id}
            title={task.description}
            date={task.createdAt}
            onClick={() => {}}
          />
        ))}
      </TasksContainer>
    </Container>
  );
}

export default Dashboard;
