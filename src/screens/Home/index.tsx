import { Text, View } from "react-native";
import { EmptyTasks } from "../../components/EmptyTasks";
import { Header } from "../../components/Header";
import { NewTaskBar } from "../../components/NewTaskBar";
import { HomeContainer } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <Header />
      <NewTaskBar />
      <EmptyTasks />
    </HomeContainer>
  );
}
