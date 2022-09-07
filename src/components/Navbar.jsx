import react from 'react'
import styled from 'styled-components'
import BurguerButton from './BurguerButton'
function Navbar(){
    return(
        <>
            <NavContainer>
                <h2> Navbar <span>responsive</span></h2>
                <div className="links, active">
                    <a href="/">home</a>
                    <a href="/">shop</a>   
                    <a href="/">about</a>
                    <a href="/">contact</a>
                    <a href="/">blog</a>
                </div>
                <div className="burguer">
                    <BurguerButton/>
                </div>

            </NavContainer>
        </>
    )
}

export default Navbar
const NavContainer = styled.nav `
    h2{
        color: white;
        font-weight: 400;
        span{
            font-weight: bold;
        }
    }
    padding: .4rem;
    background-color: #333;
    display: flex;
    align-items: center;
    justify-content: space-between;
    a{
        color: white;
        text-decoration: none;
        margin-right: 1rem;
    }
    .burguer{
        @media(min-width: 768px){
            display: none;
        }
    }
    .links{
        position:aboslute;
        top: -700px;
        left:-2000px
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        @media( min-width: 400px){
            display:none;
        }
    }
    .links.active{
        width: 100%;
        display: block;
        position: absolute;
        margin-left= auto;
        margin-right= auto;
        top=30%;
        left=0;
        right=0;
        text-align=center;
        a{
            color=#333;

        }


    }
`



 
