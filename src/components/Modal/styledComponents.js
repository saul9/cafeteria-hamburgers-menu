import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px !important;
  outline: none;
  top:10%;
  left:30%;
  right:30%;
  display: grid !important;
  border-radius: 8px;
  grid-template-columns:repeat(2,2fr);
  @media (max-width:1380px){
    grid-template: repeat(2,2fr) / 2fr 1fr;
    top: 10% !important;
    bottom: 10% !important;
    left: 20% !important;
    right: 20% !important;
    
  }
  @media (max-width:500px){
    grid-template-columns:repeat(2,1fr);
    top: 10% !important;
    bottom: 10% !important;
    left: 5% !important;
    right: 5% !important;    
  }
`;
