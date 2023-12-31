import React from "react";
import styled from "styled-components";

import SideBarNavigation from "./SideBarNavigation";
import { useState } from "react";

import { TbLayoutSidebarLeftCollapseFilled, TbLayoutSidebarRightCollapseFilled } from "react-icons/tb";

import { useResponsive } from "../../hooks";

const SideBar = ({ 
    isCollapsed, 
    setIsCollapsed 
}) => {

    const { isGlobalMobile, isTablet } = useResponsive();

    return(
        <SideBarContainer 
            $isMobileOrTablet={isGlobalMobile || isTablet} 
            $isCollapsed={isCollapsed}
        >
            <ButtonCollapsed onClick={() => setIsCollapsed((prevState) => !prevState)}>
                {isCollapsed ? (
                    <StyledTbLayoutSidebarRightCollapseFilled />
                ) : (
                    <StyledTbLayoutSidebarLeftCollapseFilled />
                )}
            </ButtonCollapsed>
            <SideBarNavigation isCollapsed={isCollapsed} />
        </SideBarContainer>
    )
}

export default SideBar;

const SideBarContainer = styled.div`
    height: 100%;
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 998;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 400ms ease-in-out;

    ${({ $isCollapsed }) => $isCollapsed ? `
        width: 64px;
    ` : `
        width: 400px;
    `}

    ${({ $isMobileOrTablet }) => $isMobileOrTablet ? `
        top: 200px;
    ` : `
        top: 100px;
    `}

    &::before {
        content: "";
        position: absolute;
        height: 90%;
        width: 1.5px;
        background-color: ${({ theme }) => theme.colorSubSecondary()};
        right: 0;
        top: 15px;
        bottom: 15px;
    }
`;

const ButtonCollapsed = styled.button`
    height: auto;
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 15px;
    right: 15px;
    background: none;
    border: 0;
    border-radius: 5px;
    padding: 5px;
    cursor: pointer;
    transition: all 400ms linear;

    &:hover {
        background-color: ${({ theme }) => theme.colorSubPrimary(0.1)};

        svg {    
            color: ${({ theme }) => theme.colorSubPrimary()} !important;
        }
    }
`

const StyledTbLayoutSidebarLeftCollapseFilled = styled(TbLayoutSidebarLeftCollapseFilled)`
    color: ${({ theme }) => theme.colorSubSecondary()};
    height: 24px;
    width: 24px;
`;

const StyledTbLayoutSidebarRightCollapseFilled = styled(TbLayoutSidebarRightCollapseFilled)`
    color: ${({ theme }) => theme.colorSubSecondary()};
    height: 24px;
    width: 24px;
`;