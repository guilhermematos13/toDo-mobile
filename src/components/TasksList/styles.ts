import styled from "styled-components/native"

export const Container = styled.View`
flex-direction: column;
margin-left: 24px;
margin-right: 24px;
margin-top: 32px;
`

export const TitleContainer = styled.View`
flex-direction: row;
justify-content: space-between;
`

export const Title = styled.View`
flex-direction: row;
gap: 8px;
`

interface TextStyledProps {
    variant: 'blue' | 'purple'
}

export const TextStyled = styled.Text<TextStyledProps>`
    font-family: ${props => props.theme.FONT_FAMILY.BOLD};
    font-size: ${props => props.theme.FONT_SIZE.SM}px;
    ${props => props.variant === 'blue' ? `color: ${props.theme.COLORS.BLUE}` : `color: ${props.theme.COLORS.PURPLE}`}

`

export const TextNumberContainerStyled = styled.View`
    border-radius: 9999px;
    text-align: center;
    width: 24px;
    padding: 2px 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.COLORS.GRAY_400};
`

export const TextNumberStyled = styled.Text`
    font-size: 12px;
    color: ${props => props.theme.COLORS.GRAY_100};
    font-family: ${props => props.theme.FONT_FAMILY.BOLD};
`