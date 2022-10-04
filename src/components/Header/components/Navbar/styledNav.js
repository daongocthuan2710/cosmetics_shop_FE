import styled from 'styled-components';
import { NavLink as Link} from 'react-router-dom';
import {FaBars} from 'react-icons/fa';

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

    /* &.active {
        background-color: #EEAF7C;
    } */

    &:hover {
        background-color: #EEAF7C;
    }
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;

    @media screen and (max-width: 768px){
        display: none;
    }
`;

export const NavBtnLink = styled(Link)`
    border-radius: 4px;
    background: #256ce1;
    padding: 10px;
    color: #fff;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &.hover{
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`;

