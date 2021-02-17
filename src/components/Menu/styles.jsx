import styled from "styled-components";

const StyledMenu = styled.nav`
  width: 100%;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;

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
      justify-content: flex-end;
      overflow: scroll;

      ul {
        transform: translateX(0%);
      }
    }
  }    

  > ul {
    transition: all 0.4s ease-in-out;
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #FFFFFF;
    height: 100%;

    @media (max-width: 640px) {
      width: 60%;
      transform: translateX(100%);
      flex-direction: column;
      align-items: flex-start;
      padding: 40px 20px;
      justify-content: flex-start;
    }

    li {
      height: 100%;
      width: 16.5%;
      cursor: pointer;
      position: relative;

      @media (max-width: 640px)  {
        flex-basis: 60px;
        width: 100%;
      }

      @media (min-width: 641px) {
        &:hover {
          .dropdown-menu {
            max-height: 500px;
            overflow: visible;
            border-top: 2px solid #7971EA;
          }
        }
      }

      a {
        height: 100%;
        width: 100%;
        align-items: center;
        display: flex;
        justify-content: center;
        gap: 10px;
        text-transform: uppercase;

        @media (max-width: 640px) {
          display: flex;
          justify-content: flex-start;
          flex-wrap: wrap;
        }

        svg {
          height: 16px;
        }

        .dropdown-menu {
          display: flex;
          flex-direction: column;
          position: absolute;
          top: 100%;
          left: 0;
          width: 150%;
          transition: all 0.4s ease-in-out;
          background-color: #FFFFFF;
          overflow: hidden;
          max-height: 0;

          @media (max-width: 640px) {
            position: relative;
            top: auto;
            left: auto;
            width: 100%;

            &.open {
              max-height: 500px;
              overflow: visible;
            }
          }

          > li {
            width: 100%;
            height: 100%;
            position: relative;

            &:hover {
              background-color: #f3f3f4;
            }

            @media (min-width: 641px) {
              &.submenu:hover {
                .dropdown-submenu {
                  max-height: 500px;
                  border-top: 2px solid #7971EA;
                }
              }
            }

            a {
              text-transform: capitalize;
              padding: 20px;
              font-size: 16px;
              justify-content: flex-start;
            }
          
            .dropdown-submenu {
              display: flex;
              flex-direction: column;
              position: absolute;
              top: 0;
              left: 100%;
              width: 100%;
              transition: all 0.6s ease-in-out;
              background-color: #FFFFFF;
              overflow: hidden;
              max-height: 0;

              @media (max-width: 640px) {
                position: relative;
                top: auto;
                left: auto;

                &.open {
                  max-height: 500px;
                  overflow: visible;
                }
              }

              li {
                width: 100%;
                height: 100%;

                &:hover {
                  background-color: #f3f3f4;
                }
              }
            }
          }            
        }
      }
    }
  }
`;

export default StyledMenu;