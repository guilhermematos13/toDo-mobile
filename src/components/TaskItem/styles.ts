import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

export const Container = styled.View`
  flex-direction: row;
  margin-top: 20px;
  margin-bottom: 8px;
`;

export const TextStyled = styled.Text`
  color: ${(props) => props.theme.COLORS.GRAY_100};
  width: 80%;
  font-size: ${(props) => props.theme.FONT_SIZE.SM}px;
  font-family: ${(props) => props.theme.FONT_FAMILY.REGULAR};
`;

export const TrashButton = styled(TouchableOpacity)`
  align-items: center;
  justify-content: center;
`;

export const ContainerContent = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 8px;

  width: 100%;
  background: ${(props) => props.theme.COLORS.GRAY_500};
  padding: 20px;
  border-radius: 8px;
`;
