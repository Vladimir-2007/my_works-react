import Link from 'next/link'
import React from 'react'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'
import { DiCssdeck, DiCodeigniter } from 'react-icons/di'

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles'

const Header = () => (
   <Container>
      <Div1>
         <Link href='/'>
            <a style={ { display: 'flex', alignItems: 'center', color: 'white' } }>
               <DiCodeigniter size='3rem' style={{paddingBottom: '7px',fill: 'red', marginRight: '5px'}} /> <span>SVeM Portfolio</span>
            </a>
         </Link>
      </Div1>
      <Div2>
         <li>
            <Link href='#projects'>
               <NavLink>Projects</NavLink>
            </Link>
         </li>
         <li>
            <Link href='#tech'>
               <NavLink>Technologies</NavLink>
            </Link>
         </li>
      </Div2>
      <Div3>
         <SocialIcons href='https://github.com'>
            <AiFillGithub size='3rem' />
         </SocialIcons>
      </Div3>
   </Container>
)

export default Header
