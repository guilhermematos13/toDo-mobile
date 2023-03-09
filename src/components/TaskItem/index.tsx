import { TrashSimple } from "phosphor-react-native";
import { Checkbox } from "./components/Checkbox";
import { Container, ContainerContent, TextStyled, TrashButton } from "./styles";

export function TaskItem() {
  return (
    <Container>
      <ContainerContent>
        <Checkbox />
        <TextStyled>
          Integer urna interdum massa libero{"\n"}auctor neque turpis turpis
          semper.
        </TextStyled>
        <TrashButton>
          <TrashSimple size={16} color="#808080" />
        </TrashButton>
      </ContainerContent>
    </Container>
  );
}
