import styled from 'styled-components';
import { helpers } from 'utilities/helpers/helpers.component';

const { accentColor } = helpers;

export const Header = styled.header`
  position: fixed;
  z-index: 9999;
  width: 100%;

  height: 6.4rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: ${accentColor};

  .options {
    margin: 2rem;
    position: relative;

    .option {
      margin: 0 1rem;
      font-size: 1.8rem;
      color: #fff;
      text-decoration: none;

      &:hover {
        color: lighten(${accentColor}, 15%);
      }
    }
  }

  .logo {
    width: 12rem;
    height: 3rem;
    background: rgba(255, 255, 255, 0.2);
    margin: 2rem;
    float: left;
    clear: both;
  }
`;