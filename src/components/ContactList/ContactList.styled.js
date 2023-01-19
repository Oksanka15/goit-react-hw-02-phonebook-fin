import styled from 'styled-components';

export const ContactListStyled = styled.ul`
    margin: 0;
    padding: 0;
    & > li:not(:last-of-type){
        margin-bottom: 10px;
        
    }
`;

export const ContactItem = styled.li`
    display: flex;
    gap: 5px;
    
    
`;