import Link from "next/link";
import styled from "styled-components";

const tabletBreakpoint = "(min-width: 768px) and (max-width: 1024px)";

export const HeaderContainer = styled.header`
    position: relative;
    width: 100%;
    height: auto;
    background-color: #ffffff;
    border: 1px solid #c1c6d566;
    z-index: 10;
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
`;

export const HeaderLogo = styled.div`
    max-width: 177px;
    width: 100%;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const LogoIconContainer = styled.div`
    max-width: 32px;
    width: 100%;
    height: 32px;
    border-radius: 8px;
    background-color: #0066cc;
`;

export const LogoIconText = styled.span`
    width: fit-content;
    font-family: "Inter", sans-serif;
    font-weight: 700;
    font-size: 15px;
    color: #131b2e;
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
`;

export const NavItem = styled(Link)`
    width: fit-content;
    font-family: "Inter", sans-serif;
    font-weight: 500;
    font-size: 14px;
    color: #414753;
`;

export const HeaderActions = styled.div`
    max-width: 289px;
    width: 100%;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media ${tabletBreakpoint} {
        max-width: 343px;
        height: 40px;
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
`;

export const GitHubButtonText = styled.span`
    width: fit-content;
    font-family: "Inter", sans-serif;
    font-weight: 500;
    font-size: 12px;
    color: #414753;
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
`;

export const DownloadButtonText = styled.span`
    width: fit-content;
    font-family: "Inter", sans-serif;
    font-weight: 600;
    font-size: 12px;
    color: #ffffff;
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
`;

export const TabletMenu = styled.nav`
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
`;

export const TabletMenuList = styled.ul`
    width: 100%;
    margin: 0;
    padding: 0;
    list-style: none;
`;

export const TabletMenuEntry = styled.li`
    width: 100%;

    &:not(:last-child) {
        border-bottom: 1px solid rgba(193, 198, 213, 0.35);
    }
`;

export const TabletMenuItem = styled(Link)`
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
`;

export const TabletDownloadItem = styled(TabletMenuItem)`
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
`;
