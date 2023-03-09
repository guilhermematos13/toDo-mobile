import { PlusCircle } from "phosphor-react-native";
import { TextInput, TouchableOpacity, View } from "react-native";
import { ButtonStyled, NewTaskBarContainer, TextInputStyled } from "./styles";

export function NewTaskBar() {
  return (
    <NewTaskBarContainer>
      <TextInputStyled
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor="#808080"
      />
      <ButtonStyled>
        <PlusCircle size={18} color="#F2F2F2" />
      </ButtonStyled>
    </NewTaskBarContainer>
  );
}
