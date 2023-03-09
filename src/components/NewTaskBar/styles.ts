import styled from "styled-components/native";

export const NewTaskBarContainer = styled.View`
width: 100%;
flex-direction: row;
gap: 4px;
margin-top: -24px;
`

export const TextInputStyled = styled.TextInput`
padding: 16px;
border-radius: 6px;
background-color: ${props => props.theme.COLORS.GRAY_500};
flex: 1;
font-family: ${props => props.theme.FONT_FAMILY.REGULAR};
margin-left: 24px;
color: ${props => props.theme.COLORS.GRAY_100};

&:focus{
    border: 1px solid ${props => props.theme.COLORS.PURPLE};
}

`

export const ButtonStyled = styled.TouchableOpacity`
padding: 18px;
border-radius: 6px;
margin-right: 24px;
background-color: ${props => props.theme.COLORS.BLUE_DARK};
`