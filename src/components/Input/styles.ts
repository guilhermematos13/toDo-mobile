import { TextInput } from "react-native";
import styled from "styled-components/native";

export const Container = styled(TextInput)`
  padding: 16px;
  border-radius: 6px;
  background-color: ${(props) => props.theme.COLORS.GRAY_500};
  flex: 1;
  font-family: ${(props) => props.theme.FONT_FAMILY.REGULAR};
  margin-left: 24px;
  color: ${(props) => props.theme.COLORS.GRAY_100};
`;
