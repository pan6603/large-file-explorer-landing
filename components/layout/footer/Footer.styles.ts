import Link from "next/link";
import styled from "styled-components";


export const FooterContainer = styled.footer`
    width: 100%;
    height: auto;
    background: #F2F3FF;
    border-top: 1px solid rgba(193, 198, 213, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
`


export const FooterWrapper = styled.div`
    max-width: 1280px;
    width: 100%;
    height: 109px;
    padding-left: 20px;
    padding-right: 20px;
`

export const FooterContent = styled.div`
    width: 100%;
    height: 108px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const FooterBrand = styled.div`
    max-width: 571px;
    width: 100%;
    height: 44px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const FooterBrandTitleContainer = styled.div`
    max-width: 166px;
    width: 100%;
    height: 24px;
  
    display: flex;
    align-items: center;
`

export const FooterBrandTitle = styled.span`
    font-family: "Inter", sans-serif;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0;
    color: #131b2e;   
`


export const FooterBrandDescription = styled.p`
    font-family: "Inter", sans-serif;
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0;
    color: #414753;
`

export const FooterLinks = styled.div`
    max-width: 533px;
    width: 100%;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`


export const FooterLink = styled(Link)`
    font-family: "Inter", sans-serif;
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0;
    color: #414753;
`

export const FooterPlatform = styled.p`
    font-family: "Inter", sans-serif;
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0;
    color: #414753;
`