import styled from 'styled-components';

export const CartIconContainer = styled.div`
  width: 6rem;
  height: 6rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  .shopping-icon {
    width: 4rem;
    height: 4rem;
  }

  .item-count {
    color: #fff;
    position: absolute;
    font-size: 1.2rem;
    font-weight: bold;
    bottom: 41%;
  }
`;