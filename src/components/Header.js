  
import React from 'react'
import { Heading, Subheading, Link } from './StyledComponents'

const Header = props => (
  <header>
      <Heading> {props.title} </Heading>
      <Subheading> Powered by <Link target="_blank" rel="noopener noreferrer" href="https://www.coindesk.com/price/">CoinDesk</Link>. </Subheading>
  </header>
)

export default Header