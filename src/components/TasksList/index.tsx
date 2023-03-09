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

export function TaskList() {
  return (
    <Container>
      <TitleContainer>
        <Title>
          <TextStyled variant="blue">Criadas</TextStyled>
          <TextNumberContainerStyled>
            <TextNumberStyled>0</TextNumberStyled>
          </TextNumberContainerStyled>
        </Title>
        <Title>
          <TextStyled variant="purple">Concluidas</TextStyled>
          <TextNumberContainerStyled>
            <TextNumberStyled>0</TextNumberStyled>
          </TextNumberContainerStyled>
        </Title>
      </TitleContainer>
      <TaskItem />
      {/* <EmptyTasks /> */}
    </Container>
  );
}
