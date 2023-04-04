import { useState } from "react";
import { Input } from "../Input";
import { ButtonStyled, Icon, NewTaskBarContainer } from "./styles";
import { api } from "../../services/api";
import { Alert } from "react-native";

interface NewTaskProps {
  getList: () => void;
}

export function NewTaskBar({ getList }: NewTaskProps) {
  const [taskTitle, setTaskTitle] = useState<string>();

  function addNewTask() {
    if (taskTitle !== undefined) {
      api
        .post("/list", {
          title: taskTitle,
          isComplete: false,
        })
        .then(() => {
          Alert.alert("Task Criada", "Sua tarefa foi criada com sucesso!");
          getList();
        })
        .catch(() => {
          Alert.alert("Ops", "Algo deu errado!");
        });
    }
  }

  return (
    <NewTaskBarContainer>
      <Input
        onChangeText={(title) => {
          setTaskTitle(title);
        }}
        value={taskTitle}
        placeholder="Adicione uma nova tarefa"
      />
      <ButtonStyled onPress={addNewTask}>
        <Icon />
      </ButtonStyled>
    </NewTaskBarContainer>
  );
}
