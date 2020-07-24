import styled from 'styled-components';
import { breakpoints } from 'utilities/helpers/helpers.component';


const { phone, tabletPortrait } = breakpoints;

export const DirectoryContainer = styled.div`
margin-top: 10rem;

`;

export const DirectoryMenu = styled.div`
	display: flex;
	align-items: center;
  justify-content: center;
  min-height: 50vh;
  
  @media ${phone} {
    flex-direction: column;
    margin: 2rem;
  }
  @media ${tabletPortrait} {
    flex-direction: column;
    margin: 2rem;
  }
`;

export const Title = styled.div`
  font-size: 1.8rem;
  margin: 5rem 0 2rem 6rem;
`;

export const MenuItemContainer = styled.div`
	margin: 10px;
`;

export const AllMenu = styled.div`
	margin: 10px;
`;

// .all-menu {
//   /* display: flex; */
//   margin: 0px 50px 20px 50px;
// }
