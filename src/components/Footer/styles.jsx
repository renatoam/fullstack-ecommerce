import styled from "styled-components";


export const StyledFooter = styled.footer`
  border-top: 1px solid #edf0f5;
  height: 300px;
  padding: 20px 0;

  .bottom {
    background-color: #edf0f5;
    height: 80px;
  }

  h2 {
    font-size: 16px;
    text-transform: uppercase;
    color: #5a5858;
    padding-left: 2px;
  }

  ul {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;    
    li {
        font-size: 12px;
      }
  }

`;