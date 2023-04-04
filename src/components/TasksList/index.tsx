import { useEffect, useState } from "react";
import { EmptyTasks } from "../EmptyTasks";
import { TaskItem } from "../TaskItem";
import {
  Container,
  TextNumberContainerStyled,
  TextNumberStyled,
  TextStyled,
  Title,
  TitleContainer,
} from "./styles";
import { TaskProps } from "../../interface/task";
import { Alert, FlatList } from "react-native";
import { api } from "../../services/api";
import { Loading } from "../Loading";

interface TaskListProps {
  getList: () => void;
  list: TaskProps[];
  isLoading: boolean;
}

export function TaskList({ getList, list, isLoading = false }: TaskListProps) {
  useEffect(() => {
    getList();
  }, []);

  function handleEditTask(id: string, isComplete: boolean) {
    api
      .put(`/list/${id}`, { isComplete: !isComplete })
      .then(() => {
        getList();
      })
      .catch(() => Alert.alert("Ops", "Algo deu errado!"));
  }

  function handleDeleteTask(id: string) {
    api
      .delete(`list/${id}`)
      .then(() => {
        getList();
        Alert.alert("Tarefa deletada");
      })
      .catch(() => {
        Alert.alert("Ops", "Algo deu errado!");
      });
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Container>
      <TitleContainer>
        <Title>
          <TextStyled variant="blue">Criadas</TextStyled>
          <TextNumberContainerStyled>
            <TextNumberStyled>{list.length}</TextNumberStyled>
          </TextNumberContainerStyled>
        </Title>
        <Title>
          <TextStyled variant="purple">Concluidas</TextStyled>
          <TextNumberContainerStyled>
            <TextNumberStyled>0</TextNumberStyled>
          </TextNumberContainerStyled>
        </Title>
      </TitleContainer>
      <FlatList
        data={list}
        keyExtractor={(item: TaskProps) => String(item.id)}
        renderItem={({ item }: { item: TaskProps }) => (
          <TaskItem
            title={item.title}
            id={String(item.id)}
            isComplete={item.isComplete}
            handleDeleteTask={handleDeleteTask}
            handleEditTask={handleEditTask}
          />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 400 }}
      />
      {list.length === 0 && <EmptyTasks />}
    </Container>
  );
}
