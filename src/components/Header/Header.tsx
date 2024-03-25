import styled from "styled-components"
import { FaKeyboard } from "react-icons/fa";

const StyledHeader = styled.header`
    height: 70px;
    display: flex;
    justify-content: center;
    background-color: #242424;
    width: calc(100vw - 30px);
    border-radius: 5px;
    border: 1px solid #303030;
    .header-container{
        display: flex;
        align-items: center;
        width: calc(100% - 60px);
        max-width: 1080px;
        .header-logo{
        display: flex;
        align-items: center;
        gap: .5em;
        color: #e9ff6f;
            svg{
                font-size: 1.8em;
            }
            span{
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