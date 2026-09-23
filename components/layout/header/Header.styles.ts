import styled from "styled-components";
import Link from "next/link";

export const HeaderContainer = styled.header`
    width: 100%;
    height: auto;
    background-color: #FFFFFF;
    border: 1px solid #c1c6d566;
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
    background-color: #0066CC;
`;


export const LogoIconText = styled.span`
    width: fit-content;
    font-family: "Inter", sans-serif;
    font-weight: 700;
    font-size: 15px;
    color: #131B2E;
`;



export const NavContainer = styled.nav`
    max-width: 426px;
    width: 100%;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
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
`;

export const GitHubButton = styled(Link)`
    max-width: 86px;
    width: 100%;
    height: 30px;
    padding: 6px 12px;
    background-color: #FFFFFF;
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
    background-color: #0066CC;
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
    color: #FFFFFF;
`;

