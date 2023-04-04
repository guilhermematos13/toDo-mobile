import { Input } from "../Input";
import { ButtonStyled, Icon, NewTaskBarContainer } from "./styles";

export function NewTaskBar() {
  return (
    <NewTaskBarContainer>
      <Input />
      <ButtonStyled>
        <Icon />
      </ButtonStyled>
    </NewTaskBarContainer>
  );
}
