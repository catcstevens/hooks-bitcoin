import styled from "styled-components"

export const AppContainer = styled.div `
  max-width: 720px;
  margin: 0 auto;
  text-align: center;
`
export const SelectContainer = styled.div `
  select {
    padding: 1em;
    border: none;
    box-shadow: none;
    background: transparent;
    -webkit-appearance: none;
    font-family: 'Bungee', cursive;
    color: #ff1769;
    font-size: 1em;
    max-width: 250px;
    white-space:nowrap;
    &:focus {
        outline: none;
    }
  }
`
export const Button = styled.button `
  text-decoration: none;
  border: none;
  background-color: white; 
  color: #ff1769;
`

export const Heading = styled.div `
  font-size: 2em; 
  font-family: 'Bungee', cursive; 
`

export const Subheading = styled(Heading) `
  font-size: 1.5em; 
`
export const SelectHeading = styled.span `
  font-family: 'Bungee', cursive; 
  font-size: 1em;
`

export const ChartArea = styled.div `
  margin-top: 2em;
`

export const Link = styled.a `
  text-decoration: none;
  `