import styled from 'styled-components'

const StyledHeader = styled.header`
  border-bottom: 1px solid #f3f3f4;
  height: 125px;
  padding: 20px;

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

    section {
      align-items: center;
      display: flex;
      justify-content: center;

      &:not(:nth-child(2)) {
        flex: 1 1 30%;
      }

      &:nth-child(2) {
        flex: 2 1 40%;
      }

      &:last-child {
        gap: 15px;
      }
    }
  }

  input {
    border: none;
    height: 40px;
    padding-left: 40px;
    font-size: 1.2rem;
    line-height: 1.5;
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
`

export default StyledHeader
