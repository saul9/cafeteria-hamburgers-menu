
import styled from 'styled-components';
import { Card} from '@material-ui/core';

export const card = styled(Card)`
    display: grid;
    minWidth: 275px;
`;

export const details = {
    textAlign: '-webkit-center',
    
}

export const Container = styled.div`
    border-style: ${(props) => props.border ? props.border :'none !important'};
`;



