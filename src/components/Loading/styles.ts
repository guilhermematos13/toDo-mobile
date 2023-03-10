import styled from 'styled-components/native'

export const Container = styled.View`
flex: 1;
justify-content:center;
align-items: center;

background-color: ${props => props.theme.COLORS.GRAY_700};
`

export const LoadingStyled = styled.ActivityIndicator.attrs(({theme}) => ({
    color: theme.COLORS.BLUE
}))``;
