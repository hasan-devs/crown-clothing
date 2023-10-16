import styled from "styled-components";
import { BaseButton,GoogleSignInButton,InvertedButton } from "../button/button.styles";
export const CartDropdownContainer = styled.div`
position: absolute;
width: 260px;
height: 420px;
display: flex;
flex-direction: column;
padding: 20px;
//border: 1px solid black;
border-radius: 5px;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
background-color: white;
top: 90px;
right: 40px;
z-index: 5;

${InvertedButton},
${GoogleSignInButton},
${BaseButton}{
  margin-top  : auto;
}
`;

export const EmptyMessage = styled.span`
    font-size: 18px;
    margin: 50px auto;
`

export const CartItems = styled.div`
height: 340px;
    display: flex;
    flex-direction: column;
    overflow: scroll;
`


