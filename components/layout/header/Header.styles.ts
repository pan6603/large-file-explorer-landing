import Link from "next/link";
import styled from "styled-components";

const tabletBreakpoint = "(min-width: 768px) and (max-width: 1024px)";

export const HeaderContainer = styled.header`
    position: relative;
    width: 100%;
    height: auto;
    background-color: #ffffff;
    border: 1px solid #c1c6d566;
    z-index: 1000;
`;

export const HeaderInner = styled.div`
    max-width: 1280px;
    width: 100%;
    height: 64px;
    margin: 0 auto;
    padding: 0 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media ${tabletBreakpoint} {
        padding: 0 20px;
    }

    @media (max-width: 767px) {
        height: 56px;
        padding: 0 16px;
    }
`;

export const HeaderLogo = styled.div`
    /* Desktop: 1025px 이상 */
    width: fit-content;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    /* Tablet: 768px ~ 1024px */
    @media (min-width: 768px) and (max-width: 1024px) {
        height: 30px;
    }

    /* Mobile: 767px 이하 */
    @media (max-width: 767px) {
        max-width: 155px;
        height: 28px;
    }
`;

export const LogoIconContainer = styled.div`
    /* Desktop: 1025px 이상 */
    width: 32px;
    height: 32px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;

    /* Tablet: 768px ~ 1024px */
    @media (min-width: 768px) and (max-width: 1024px) {
        width: 30px;
        height: 30px;
        border-radius: 7px;
    }

    /* Mobile: 767px 이하 */
    @media (max-width: 767px) {
        width: 28px;
        height: 28px;
        border-radius: 7px;
    }
`;

export const LogoIconText = styled.span`
    width: fit-content;
    font-family: "Inter", sans-serif;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    color: #131b2e;
    white-space: nowrap;

    /* Tablet: 768px ~ 1024px */
    @media (min-width: 768px) and (max-width: 1024px) {
        font-size: 14px;
        line-height: 20px;
    }

    /* Mobile: 767px 이하 */
    @media (max-width: 767px) {
        font-size: 13px;
        line-height: 18px;
    }
`;


export const NavContainer = styled.nav`
    max-width: 426px;
    width: 100%;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media ${tabletBreakpoint} {
        display: none;
    }

    @media (max-width: 767px) {
        display: none;
    }
`;

export const NavItem = styled(Link)`
    width: fit-content;
    font-family: "Inter", sans-serif;
    font-weight: 500;
    font-size: 14px;
    color: #414753;
`;

export const HeaderActions = styled.div`
    max-width: 189px;
    width: 100%;
    height: 32px;
    display: flex;
    gap: 12px;
    justify-content: flex-end;
    align-items: center;

    @media ${tabletBreakpoint} {
        max-width: 343px;
        height: 40px;
    }

    @media (max-width: 767px) {
        max-width: 170px;
        height: 32px;
        gap: 12px;
        justify-content: flex-end;
        
    }
`;

export const GitHubButton = styled(Link)`
    max-width: 86px;
    width: 100%;
    height: 30px;
    padding: 6px 12px;
    background-color: #ffffff;
    opacity: 1;
    border-radius: 8px;
    border: 1px solid rgba(193, 198, 213, 0.6);
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 767px) {
        width: 38px;
        height: 30px;
        padding: 5px 10px;
        border-radius: 7px;
    }
`;

export const GitHubButtonText = styled.span`
    width: fit-content;
    font-family: "Inter", sans-serif;
    font-weight: 500;
    font-size: 12px;
    color: #414753;

    @media (max-width: 767px) {
        display: none;
    }
`;

export const DownloadButton = styled(Link)`
    max-width: 190px;
    width: 100%;
    height: 32px;
    padding: 8px 16px;
    background-color: #0066cc;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 767px) {
        width: 38px;
        height: 30px;
        padding: 5px 10px;
        border-radius: 7px;
    }
`;

export const DownloadButtonText = styled.span`
    width: fit-content;
    font-family: "Inter", sans-serif;
    font-weight: 600;
    font-size: 12px;
    color: #ffffff;

    @media (max-width: 767px) {
        display: none;
    }
`;

export const MenuButton = styled.button`
    width: 40px;
    height: 40px;
    padding: 0;
    background-color: #ffffff;
    display: none;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(193, 198, 213, 0.6);
    border-radius: 8px;
    cursor: pointer;

    &:focus-visible {
        outline: 2px solid #0066cc;
        outline-offset: 2px;
    }

    &[aria-expanded="true"] {
        border-color: #0066cc;
    }

    @media ${tabletBreakpoint} {
        display: flex;
        flex: 0 0 40px;
    }

    @media (max-width: 767px) {
        width: 32px;
        height: 32px;
        flex: 0 0 32px;
        border-radius: 7px;
        display: flex;
    }
`;

export const ResponsiveMenu = styled.nav`
    position: absolute;
    top: calc(100% + 8px);
    right: 20px;
    max-width: 494px;
    width: calc(100% - 40px);
    padding: 8px;
    background-color: #ffffff;
    border: 1px solid rgba(193, 198, 213, 0.6);
    border-radius: 10px;
    box-shadow: 0 8px 24px rgba(19, 27, 46, 0.12);
    display: none;

    @media ${tabletBreakpoint} {
        display: block;
    }


    @media (max-width: 767px) {
        display: block;

        top: calc(100% + 6px);
        right: 16px;

        max-width: none;
        width: calc(100% - 32px);

        padding: 8px;
        border-radius: 8px;
    }
`;

export const ResponsiveMenuList = styled.ul`
    width: 100%;
    margin: 0;
    padding: 0;
    list-style: none;

    @media (max-width: 767px) {
        display: flex;
        flex-direction: column;
        gap: 2px;
    }
`;

export const ResponsiveMenuEntry = styled.li`
    width: 100%;

    &:not(:last-child) {
        border-bottom: 1px solid rgba(193, 198, 213, 0.35);
    }

    @media (max-width: 767px) {
        border-bottom: none;

        &:not(:last-child) {
            border-bottom: none;
        }
    }
`;

export const ResponsiveMenuItem = styled(Link)<{ $center?: boolean }>`
    width: 100%;
    min-height: 48px;
    padding: 0 12px;
    display: flex;
    align-items: center;
    gap: 10px;
    border-radius: 6px;
    font-family: "Inter", sans-serif;
    font-weight: 500;
    font-size: 14px;
    color: #131b2e;

    &:hover,
    &:focus-visible {
        background-color: #edf6ff;
    }

    &:focus-visible {
        outline: 2px solid #0066cc;
        outline-offset: -2px;
    }

    @media (max-width: 767px) {
        min-height: 44px;
        padding: 0 10px;
        gap: 8px;
        font-size: 13px;

        justify-content: ${({ $center }) => $center ? "center" : "flex-start"};
        border: ${({ $center }) => $center
            ? "1px solid rgba(193, 198, 213, 0.6)"
            : "none"};
    }
`;

export const ResponsiveDownloadItem = styled(ResponsiveMenuItem)`
    margin-top: 8px;
    min-height: 44px;
    background-color: #0066cc;
    color: #ffffff;
    font-weight: 600;

    &:hover,
    &:focus-visible {
        background-color: #0058b3;
    }

    &:focus-visible {
        outline-color: #131b2e;
    }

    @media (max-width: 767px) {
        min-height: 44px;

        justify-content: center;
        gap: 8px;
    }
`;
