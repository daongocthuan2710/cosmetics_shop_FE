import styled from 'styled-components';
import { NavLink as Link} from 'react-router-dom';

export const Nav = styled.nav`
    background: #BE8C63;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 calc((100vw - 1000px) / 2);
    z-index: 10;

    @media screen and (max-width: 768px){
        display: none;
    }
`;

export const NavMenu = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 768px){
        display: none;
    }
`;

export const NavLink = styled(Link)`
    color: #fff;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
    text-transform: uppercase;
    padding: 0 10px;
    height: 50px;
    line-height: 50px;

    &:hover {
        color: black;
        background-color: #EEAF7C;
    }
`;


