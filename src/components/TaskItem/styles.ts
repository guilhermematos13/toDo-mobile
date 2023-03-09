import styled from "styled-components/native";

export const Container = styled.View`
flex-direction: row;
margin-top: 20px;
margin-bottom: 8px;
`

export const TextStyled = styled.Text`
color: ${props => props.theme.COLORS.GRAY_100};
font-size: ${props => props.theme.FONT_SIZE.SM};
font-family: ${props => props.theme.FONT_FAMILY.REGULAR};
`

export const TrashButton = styled.TouchableOpacity`
background-color: transparent;
align-items: center;
justify-content: center;
`

export const ContainerContent = styled.View`
flex-direction: row;
align-items: center;
justify-content: center;
gap:20px;

width: 100%;
background: ${props => props.theme.COLORS.GRAY_500};
padding: 12px;
border-radius: 8px;
`