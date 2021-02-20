  
import styled from 'styled-components';


export const SideBarStyle = styled.div`
    background-color: #f2f2f2;
    padding: 3vw;
    grid-row: 1/4;
    grid-column: 1/2;
`

export const HCategory = styled.h2`
    font-weight: normal;
    font-size: 18px;
    font-weight: bold;
`

export const LiCategory = styled.li`
    list-style:none;
    font-size: 14px;
    padding: 5px 0;
    color: black;
    cursor: pointer;
        &:hover{
            text-decoration:underline;
        }
`