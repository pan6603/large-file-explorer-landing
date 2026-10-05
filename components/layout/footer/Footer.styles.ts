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

    @media (min-width: 768px) and (max-width: 1024px) {
        padding: 24px 32px;
    }

    @media (max-width: 767px) {
        height: auto;
        padding: 32px 16px;
        align-items: flex-start;
        justify-content: center;
    }
`


export const FooterWrapper = styled.div`
    max-width: 1280px;
    width: 100%;
    height: 109px;
    padding-left: 20px;
    padding-right: 20px;

    @media (min-width: 768px) and (max-width: 1024px) {
        max-width: 1024px;
        height: auto;
        min-height: 80px;
        padding: 20px 24px;
    }

    @media (max-width: 767px) {
        max-width: 100%;
        width: 100%;
        height: auto;
        min-height: 0;
        padding: 0;
    }
`

export const FooterContent = styled.div`
    width: 100%;
    height: 108px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (min-width: 768px) and (max-width: 1024px) {
        height: auto;
        min-height: 80px;
        gap: 24px;
    }

    @media (max-width: 767px) {
        width: 100%;
        height: auto;
        min-height: 0;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        gap: 24px;
    }
`

export const FooterBrand = styled.div`
    max-width: 571px;
    width: 100%;
    height: 44px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (min-width: 768px) and (max-width: 1024px) {
        max-width: 420px;
        height: auto;
        gap: 4px;
    }

    @media (max-width: 767px) {
        max-width: 360px;
        width: 100%;
        height: auto;
        align-items: center;
        justify-content: flex-start;
        gap: 8px;
        text-align: center;
    }
`

export const FooterBrandTitleContainer = styled.div`
    max-width: 166px;
    width: 100%;
    height: 24px;
    display: flex;
    align-items: center;

    @media (min-width: 768px) and (max-width: 1024px) {
        max-width: 150px;
        height: 22px; 
    }

    @media (max-width: 767px) {
        max-width: 150px;
        width: 100%;
        height: auto;
        min-height: 22px;
        align-items: center;
        justify-content: center;
    }
`

export const FooterBrandTitle = styled.span`
    font-family: "Inter", sans-serif;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0;
    color: #131b2e;   

    @media (min-width: 768px) and (max-width: 1024px) {
        font-size: 14px;
        line-height: 22px;
    }

    @media (max-width: 767px) {
        font-size: 14px;
        line-height: 20px;
        text-align: center;
        white-space: nowrap;
    }
`


export const FooterBrandDescription = styled.p`
    font-family: "Inter", sans-serif;
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0;
    color: #414753;

    .tablet-br {
        display: none;
    }

    @media (min-width: 768px) and (max-width: 1024px) {
        font-size: 9px;
        line-height: 13px;

        .tablet-br {
            display: block;
        }
    }

    @media (max-width: 767px) {
        font-size: 10px;
        line-height: 15px;
        text-align: center;

        .tablet-br {
            display: none;
        }
    }
`

export const FooterLinks = styled.div`
    max-width: 533px;
    width: 100%;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (min-width: 768px) and (max-width: 1024px) {
        max-width: 420px;
        height: auto;
        gap: 16px;
    }

    @media (max-width: 767px) {
        max-width: 320px;
        width: 100%;
        height: auto;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        column-gap: 20px;
        row-gap: 12px;
    }
`


export const FooterLink = styled(Link)`
    font-family: "Inter", sans-serif;
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0;
    color: #414753;

    @media (min-width: 768px) and (max-width: 1024px) {
        font-size: 9px;
        line-height: 13px;
    }

    @media (max-width: 767px) {
        font-size: 11px;
        line-height: 16px;
        text-align: center;
        white-space: nowrap;
    }
`

export const FooterPlatform = styled.span`
    font-family: "Inter", sans-serif;
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0;
    color: #414753;

    @media (min-width: 768px) and (max-width: 1024px) {
        font-size: 9px;
        line-height: 13px;
    }

    @media (max-width: 767px) {
        font-size: 11px;
        line-height: 16px;
        text-align: center;
        white-space: nowrap;
    }
`