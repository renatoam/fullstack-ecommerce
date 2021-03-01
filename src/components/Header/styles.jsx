import styled from "styled-components";

export const StyledHeader = styled.header`
  border-bottom: 1px solid #f3f3f4;
  height: auto;
  padding: 20px;
  position: sticky;
  top: 0;
  background-color: #FFFFFF;

  @media (max-width: 640px) {
    position: relative;
  }

  h1 {
    a {
      text-transform: uppercase;
      color: #25262a;
      letter-spacing: 0.2em;
      font-size: 20px;
      padding: 5px 30px;
      border: 2px solid #25262a;
    }
  }

  .container {
    height: 100%;
    justify-content: space-between;
    

    @media (max-width: 640px) {
    display: flex;
    flex-direction: column;
    }

  section {
    align-items: center;
    display: flex;
    justify-content: center;

    &:not(:nth-child(2)) {
      flex: 1 1 30%;
      @media (max-width: 640px) {
        order: 1;
        width: 100%;
        border: 1px solid #f3f3f4;
        border-radius: 16px;
        margin: 10px;
      }
    }

    &:nth-child(2) {
      flex: 2 1 40%;
    
    @media (max-width: 640px) {
        order: 0;
        width: 100%;
        height: 62px;
        padding: 20px;
        border: none;
      }
    }

    &:last-child {
      gap: 15px;
    
      @media (max-width: 640px) {
        order: 2;
        width: 100%;
        height: 62px;
        padding: 10px;
        border: none;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }
  }

input {
  border: none;
  height: 40px;
  padding-left: 40px;
  font-size: 1.2rem;
  line-height: 1.5;

  @media (max-width: 640px) {
    width: 90%;
    padding-left: 15px;
  }
}

  .cart {
    position: relative;

    span {
      position: absolute;
      top: -15px;
      right: -15px;
      font-size: 13px;
      width: 24px;
      height: 24px;
      line-height: 24px;
      border-radius: 50%;
      display: block;
      text-align: center;
      background-color: #7971ea;
      color: #fff;
      transition: 0.2s all ease-in-out;
    }
  }
}

.menu {
  @media (min-width: 640px) {
    display: none;
  }
}
`;
