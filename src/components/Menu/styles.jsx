import styled from "styled-components";

const StyledMenu = styled.section`
    width: 100%;
    height: 64px;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;

    @media (max-width: 640px) {
      height: 100vh;
      background: rgba(32, 32, 32, 0.6);
      position: fixed;
      top: 0;
      left: 0;
      opacity: 0;
      transition: opacity 0.4s ease-in-out 0.5s;
      display: none;


      &.open {
        opacity: 1;
        display: flex;

        nav {
        transform: translateX(0%);
        }
      }
    }    

    nav {
      transition: all 0.4s ease-in-out;

      @media (max-width: 640px) {
        width: 62%;
        height: 100%;
        display: flex;
        align-items: center;
        background: #FFFFFF;
        margin-left: 38%;
        transform: translateX(100%);
      }

      ul {
        @media (max-width: 640px) {
        display: flex;
        flex-direction: column;
        font-size: 24px;
        text-transform: initial;
        width: 100%;
        padding: 20px;
      }
      
        a {
          margin: 10px;
          @media (max-width: 640px) {
            margin: 15px;
            display: flex;
            justify-content: space-between;
            &:hover {
            color: #be74be;
            transition: 400ms;
            }
          }
        }
        svg {
          height: 16px;
        }
      }
      
    }
  
`;

export default StyledMenu;