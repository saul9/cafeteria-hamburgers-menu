import styled from 'styled-components';

export const Container = styled.div`
  background-color: white;
  margin: 30px 30px 5px 30px ;
  display: grid !important;
  grid-template-columns: repeat(4,1fr);
  grid-gap:10px 10px;
  @media (max-width:1280px){
    grid-template: repeat(5,1fr) / repeat(3,1fr);
  }
  @media (max-width:500px){
    grid-template: repeat(3,1fr) / 1fr ;
  }
`;
export const ContainerPagination = styled.div`
  grid-column: 1 / -1;
  grid-row: -2 / -1;
  justify-self: flex-end;
  align-self: flex-end;
`;