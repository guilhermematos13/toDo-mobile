import { Clipboard, ClipboardText } from "phosphor-react-native";
import { StyleSheet, Text, View } from "react-native";
import {
  Container,
  ContentContainer,
  IconContainer,
  RegularText,
  StrongText,
  TextContainer,
  TextNumberContainerStyled,
  TextNumberStyled,
  TextStyled,
  Title,
  TitleContainer,
} from "./styles";

export function EmptyTasks() {
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

      <ContentContainer style={styles.borderText}>
        <IconContainer>
          <ClipboardText size={56} color="#262626" />
        </IconContainer>
        <TextContainer>
          <StrongText>Você ainda não tem tarefas cadastradas</StrongText>
          <RegularText>Crie tarefas e organize seus itens a fazer</RegularText>
        </TextContainer>
      </ContentContainer>
    </Container>
  );
}

const styles = StyleSheet.create({
  borderText: {
    borderTopColor: "#333333",
    borderTopWidth: 1,
  },
});
