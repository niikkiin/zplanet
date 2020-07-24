import styled from 'styled-components';

export const CartDropDownContainer = styled.div`
  position: absolute;
  width: 24rem;
  height: 34rem;
  display: flex;
  flex-directon: column;
  padding: 2rem;
  border: 1px solid black;
  background-color: #fff;
  top: 100%;
  right: 2%;
  z-index: 5;

  .cart-items {
    height: 24rem;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
  }

  button {
    margin-top: auto;
  }
`;