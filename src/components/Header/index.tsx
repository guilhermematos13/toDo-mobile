import { Image } from "react-native";
import { HeaderContainer, ImageStyled } from "./styles";

export function Header() {
  return (
    <>
      <HeaderContainer>
        <ImageStyled source={require("../../assets/logo.png")} />
      </HeaderContainer>
    </>
  );
}
