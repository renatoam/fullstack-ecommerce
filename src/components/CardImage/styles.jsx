import styled from "styled-components"

export const StyledFigure = styled.figure`
    position: relative;
    width: 240px;
    margin: 10px 0;
    
    @media (max-width: 1024px) {
      width: 45%;
    }

    @media (max-width: 640px) {
      width: 95%;
    }

    &:hover {
      .cover {
        max-height: 260px;
      }
    }

    img {
      width: 100%;
    }

  .cover {
    background-color: rgba(255, 255, 255, 0.6);
    height: 100%;
    width: 100%;
    max-height: 0;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    font-weight: bold;
    text-transform: uppercase;
    color: #3e3c3c;
    overflow: hidden;
    transition: all 0.4s ease-in-out;
  }`