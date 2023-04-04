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
  id: string;
  isComplete: boolean;
  title: string;
  handleDeleteTask: (id: string) => void;
  handleEditTask: (id: string, isComplete: boolean) => void;
};

export function TaskItem({
  id,
  isComplete,
  title,
  handleDeleteTask,
  handleEditTask,
}: TaskItemProps) {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <Container>
      <ContainerContent>
        <CheckboxStyled value={isChecked} onValueChange={setIsChecked} />
        <TextStyled>{title}</TextStyled>
        <TrashButton
          onPress={() => {
            handleDeleteTask(id);
          }}
        >
          <TrashSimple size={16} color="#808080" />
        </TrashButton>
      </ContainerContent>
    </Container>
  );
}
