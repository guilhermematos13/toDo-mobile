import { TrashSimple } from "phosphor-react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useState } from "react";
import { Container, ContainerContent, TextStyled, TrashButton } from "./styles";
import { StyleSheet } from "react-native";

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
        <BouncyCheckbox
          size={18}
          fillColor="#5E60CE"
          unfillColor="transparent"
          onPress={setIsChecked}
          iconStyle={{ borderColor: "#4EA8DE" }}
          innerIconStyle={{
            borderWidth: 2,
            borderColor: isChecked ? "#5E60CE" : "#4EA8DE",
          }}
          text={title}
          textStyle={{
            fontSize: 14,
            color: isChecked ? "#808080" : "#F2F2F2",
            width: 250,
          }}
        />

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
