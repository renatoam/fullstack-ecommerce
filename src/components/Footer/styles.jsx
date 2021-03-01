import styled from "styled-components";


export const StyledFooter = styled.footer`
  margin-top: 100px;
  background-color: #edf0f5;
  padding-top: 50px;

  .up {
    padding-bottom: 20px;

    .container {
      display: flex;
      justify-content: space-evenly;
      align-items: flex-start;

      @media (max-width: 922px) {
        flex-wrap: wrap;
        text-align: center;
      }
     
      @media (max-width: 640px) {
        width: 100vw;
        text-align: center;
        background-color: #edf0f5;
        flex-direction: column;
        align-items: center;
        padding: 0 30px;
      }

      > section {
        max-width: 18%;

        @media (max-width: 922px) {
        min-width: 45%;
        flex-grow: 1;
        margin-top: 30px;

        > div {
            justify-content: center;
            align-items: center;
        }
      
      }        

        @media (max-width: 640px) {
          max-width: 100%;
          width: 100%;
          overflow: hidden;
          max-height: 35px;
          border-bottom: 1px solid rgb(0 0 0 / 20%);
          margin-top: 20px;
          transition: max-height 0.6s ease-in-out;
          
          &.open {
            max-height: 210px;
          }
                
          &:last-child {
            border-bottom: none;
          }

          > div {
            justify-content: center;
          }  
        }


        &:not(.contact) {
          > div {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
        }
      }

      section {
        h2 {
          padding: 0;
          margin-bottom: 20px;
          font-size: 16px;
          text-transform: uppercase;
          color: rgb(134 137 149);
        }

        ul {
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;   
          
          li {
            margin-bottom: 20px;
            font-size: 12px;
          }
        }

        .newsletter {
          display: flex;

          label {
            font-size: 12px;
            margin-bottom: 10px;
            display: block;
          }
          
          .send {
            display: flex;
            gap: 5px;
          }

          input {
            border: none;
            padding: 10px;
            border-radius: 5px;
          }

          button {
            border: none;
            border-radius: 5px;
            background-color: #7971EA;
            color: #fff;
            padding: 10px;
            cursor: pointer;
            transition: all 0.4s ease-in-out;

            &:hover {
              background-color: #5c56b4;
            }
          }
        }
      
        &.contact > div {
          display: flex;
          margin-bottom: 20px;
          align-items: center;
          gap: 10px;
          font-size: 12px;
        }
      }
    } 
  }

  .bottom {
    border-top: 1px solid rgb(134 137 149 / 30%);

    .container {
      display: flex;

      @media (max-width: 922px) {
        flex-direction: column;
      }

      p {
        margin-top: 20px;
        min-width: 225px;
      }

      a {
        align-items: center;
        color: inherit;

        @media (max-width: 922px) {
        margin: 0;
        padding: 0;

      }
      }

      > * {
        width: 33%;
        display: flex;
        gap: 10px;
        justify-content: center;
      }
    }
  } 
`;