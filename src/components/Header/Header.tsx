import styled from "styled-components"
import { FaKeyboard } from "react-icons/fa";

const StyledHeader = styled.header`
    height: 70px;
    display: flex;
    justify-content: center;
    .header-container{

        display: flex;
        align-items: center;
        width: calc(100% - 60px);
        .header-logo{
        display: flex;
        align-items: center;
        gap: .5em;
            svg{
                color: #bdbdbd;
                font-size: 1.8em;
            }
            span{
                color: #bdbdbd;
                font-size: 1.2em;
                user-select: none;
            }
        }
    }
    
`

export const Header = () => {
    return(
        <StyledHeader>
            <div className="header-container">
                <div className="header-logo">
                    <FaKeyboard />
                    <span>typing</span>
                    <span>stack</span>
                </div>
            </div>
        </StyledHeader>
    )
}