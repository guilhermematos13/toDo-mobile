import styled from "styled-components/native";

export const Container = styled.View`
`
export const ContentContainer = styled.View`
height: 208px;
align-items: center;
justify-content: center;
margin-top: 20px;
`
export const IconContainer = styled.View`
margin-bottom: 16px;
`

export const TextContainer = styled.View`
align-items: center;
`

export const StrongText = styled.Text`
    font-size: 14px;
    font-family: ${props => props.theme.FONT_FAMILY.BOLD};
    color: ${props => props.theme.COLORS.GRAY_300};
`

export const RegularText = styled.Text`
    font-size: 14px;
    font-family: ${props => props.theme.FONT_FAMILY.REGULAR};
    color: ${props => props.theme.COLORS.GRAY_300};
`