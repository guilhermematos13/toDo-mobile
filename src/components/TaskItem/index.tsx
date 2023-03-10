import { TrashSimple } from "phosphor-react-native";
import { useState } from "react";
import {
  CheckboxStyled,
  Container,
  ContainerContent,
  TextStyled,
  TrashButton,
} from "./styles";

type TaskItemProps = {
  isCompleted: boolean;
};

export function TaskItem({ isCompleted }: TaskItemProps) {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <Container>
      <ContainerContent>
        <CheckboxStyled value={isChecked} onValueChange={setIsChecked} />
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
