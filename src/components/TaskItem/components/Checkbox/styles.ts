import styled from "styled-components/native";

export const CheckboxContainer = styled.View`
width: 24px;
height: 24px;
`

export const CheckboxStyled = styled.TouchableOpacity`
height: 17.5px;
width: 17.5px;
border-radius: 9999px;
border: 2px solid ${props => props.theme.COLORS.BLUE}
`