import React from 'react'
import styled from 'styled-components'

function header() {
    return (
        <Nav>
            <FooterLeft>
                <span>Developed with ❤️️ by Vivek Bhand</span>
            </FooterLeft>
            <FooterRight>
                <a target="_blank" rel="noreferrer" ><img src="/images/github-icon.png" alt="Github Icon" /></a>
                <a target="_blank" rel="noreferrer"><img src="/images/linkedin-icon.png" alt="LinkedIn Icon" /></a>
            </FooterRight>
        </Nav>
    )
}

export default header

const Nav = styled.nav`
    height: 70px; 
    background: #090b13;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 36px;
    overflow-x: hidden;
`

const FooterLeft = styled.div`
      display: flex;
    justify-content: center;
    flex: 1;

    span {
        text-align: center;
        color: #fff;
    }
`

const FooterRight = styled.div`
    display: flex;
    justify-content: flex-end;
    width:50%;

    a {
        padding-right: 20px;
    }

    img {
        height: 30px;
    }
`