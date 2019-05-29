import styled from 'styled-components';
import { Button } from '@material-ui/core';

export const Container = styled.div`
    display: grid;
    width: auto;
    grid-template: 1fr / 50px 70px 30px ${(props) => props.hideNumberOfElements ? '' : ` 120px 40px 40px`};
    justify-items: center;
    align-items: center;

`;

export const Text = styled.label`
    font-size: 14px;
    color: #6c7b8a;
    font-family: CircularStd;
`;

export const ButtonPagination = styled(Button)`
    background-color: transparent !important;
    border-radius: 100% !important;
    width: 15px !important;
    min-width: 0 !important;
    padding: 1px 5px !important;
    height: 15px !important;
    min-height: 0 !important;
    justify-self: ${(props) => props.isbac};
    align-self: center;
`;

export const Icon = styled.i`
  color: ${(props) => props.disabled ? '#dcdcdc' : '#8ca0b3'};
  font-size: 18px;
`;
