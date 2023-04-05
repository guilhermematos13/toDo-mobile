import { Alert, Text, View } from "react-native";
import { Header } from "../../components/Header";
import { NewTaskBar } from "../../components/NewTaskBar";
import { TaskList } from "../../components/TasksList";
import { HomeContainer } from "./styles";
import { useState } from "react";
import { TaskProps } from "../../interface/task";
import { api } from "../../services/api";

export function Home() {
  const [list, setList] = useState<TaskProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  function getList() {
    setIsLoading(true);
    api
      .get("/list")
      .then((response) => {
        setList(response.data);
      })
      .catch(() => {
        Alert.alert("Ops!", "Algo deu errado!");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <HomeContainer>
      <Header />
      <NewTaskBar getList={getList} />
      <TaskList getList={getList} list={list} isLoading={isLoading} />
    </HomeContainer>
  );
}
