import styled from "styled-components";
import Link from "next/link";



export const HomeCtaSection = styled.section`
    width: 100%;
    height: auto;
    background: #FAF8FF;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const HomeCtaContainer = styled.div`
    max-width: 1280px;
    width: 100%;
    height: 570px;
    padding: 96px 20px;
    background: #FAF8FF;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (min-width: 768px) and (max-width: 1024px) {
        height: 480px;
        padding: 48px 32px;
    }

    @media (max-width: 767px) {
        max-width: 100%;
        height: auto;
        padding: 48px 16px;
        align-items: center;
        justify-content: center;
    }
`

export const HomeCtaWrapper = styled.div`
    max-width: 1192px;
    width: 100%;
    height: 410px;
    border-radius: 16px;
    background: linear-gradient(
    180deg,
    #E2E7FF 0%,
    #FFFFFF 50%,
    #F2F3FF 100%
    );
    border: 1px solid rgba(193, 198, 213, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;

    @media (min-width: 768px) and (max-width: 1024px) {
        max-width: 960px;
        width: 100%;
        height: 360px;
        border-radius: 14px;
    }

    @media (max-width: 767px) {
        max-width: 100%;
        width: 100%;
        height: auto;
        min-height: 420px;
        padding: 32px 20px;
        border-radius: 12px;
    }
    
`

export const HomeCtaContent = styled.div`
    max-width: 672px;
    width: 100%;
    height: 296px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    @media (min-width: 768px) and (max-width: 1024px) {
        max-width: 600px;
        height: 260px;
        padding: 0 24px;
    }

    @media (max-width: 767px) {
        max-width: 100%;
        width: 100%;
        height: auto;
        padding: 0;
        gap: 24px;
        align-items: center;
        justify-content: flex-start;
    }
`


export const HomeCTAHeading = styled.h2`
    font-family: "Inter", sans-serif;
    font-size: 30px;
    font-weight: 700;
    line-height: 38px;
    letter-spacing: -0.6px;
    text-align: center;
    color: #131b2e;

    @media (min-width: 768px) and (max-width: 1024px) {
        font-size: 26px;
        line-height: 34px;
        letter-spacing: -0.5px;
    }

    @media (max-width: 767px) {
        font-size: 24px;
        line-height: 32px;
        letter-spacing: -0.48px;
        text-align: center;
    }
`

export const HomeCTADescription = styled.p`
    font-family: "Inter", sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.16px;
    text-align: center;
    color: #414753;

    @media (min-width: 768px) and (max-width: 1024px) {
        font-size: 14px;
        line-height: 22px;
        letter-spacing: -0.14px;
    }

    @media (max-width: 767px) {
        font-size: 14px;
        line-height: 21px;
        letter-spacing: -0.14px;
        text-align: center;
    }
`


export const HomeCTAButtons = styled.div`
    max-width: 672px;
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;

    @media (min-width: 768px) and (max-width: 1024px) {
        max-width: 600px;
        gap: 12px;
    }

    @media (max-width: 767px) {
        max-width: 100%;
        width: 100%;
        height: auto;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 12px;
    }
`

export const HomeCTAMeta = styled.p`
    font-family: "Inter", sans-serif;
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0;
    text-align: center;
    color: #727784;

    @media (min-width: 768px) and (max-width: 1024px) {
        font-size: 11px;
        line-height: 15px;
    }

    @media (max-width: 767px) {
        max-width: 300px;
        width: 100%;
        font-size: 11px;
        line-height: 16px;
        text-align: center;
    }
`

export const HomeCTADownloadButton = styled(Link)`
    max-width: 272px;
    width: 100%;
    height: 56px;
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 16px 32px;
    border: none;
    border-radius: 8px;
    background: #0066cc;

    @media (min-width: 768px) and (max-width: 1024px) {
        max-width: 248px;
        height: 52px;
        padding: 14px 28px;
        gap: 10px;
    }

    @media (max-width: 767px) {
        max-width: 320px;
        width: 100%;
        height: 48px;
        padding: 0 20px;
        gap: 10px;
        justify-content: center;
        border-radius: 8px;
    }
`

export const HomeCTADownloadButtonText = styled.span`
    font-family: "Inter", sans-serif;
    font-size: 15px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: -0.16px;
    text-align: center;
    color: #ffffff;

    @media (min-width: 768px) and (max-width: 1024px) {
        font-size: 14px;
        line-height: 22px;
        letter-spacing: -0.14px;
    }

    @media (max-width: 767px) {
        font-size: 14px;
        line-height: 20px;
        letter-spacing: -0.14px;
        white-space: nowrap;
    }
`

export const HomeCTASourceRepository = styled(Link)`
    max-width: 212px;
    width: 100%;
    height: 58px;
    padding: 16px 24px;
    background: #ffffff;
    border: 1px solid #c1c6d5;
    border-radius: 8px;
    display: flex;
    gap: 8px;
    align-items: center;
`

export const SourceRepositoryText = styled.span`
    font-family: "Inter", sans-serif;
    font-size: 15px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: -0.16px;
    text-align: center;
    color: #131b2e;
`


export const MicrosoftStoreBadge = styled(Link)`
    max-width: 272px;
    width: 100%;
    height: 56px;
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 16px 32px;
    border: 1px solid #0066cc;
    border-radius: 8px;
    background: #FAF8FF;
    color: #0066cc;

    @media (min-width: 768px) and (max-width: 1024px) {
        max-width: 248px;
        height: 52px;
        padding: 14px 28px;
        gap: 10px;
    }

    @media (max-width: 767px) {
        max-width: 320px;
        width: 100%;
        height: 48px;
        padding: 0 20px;
        gap: 10px;
        justify-content: center;
        border-radius: 8px;
    }
`

const MicrosoftStoreIcon = styled.img``;


export const MicrosoftStoreText = styled.span`
    font-family: "Inter", sans-serif;
    font-size: 15px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: -0.16px;
    text-align: center;
    color: #0066cc;

    @media (min-width: 768px) and (max-width: 1024px) {
        font-size: 14px;
        line-height: 22px;
        letter-spacing: -0.14px;
    }

    @media (max-width: 767px) {
        font-size: 14px;
        line-height: 20px;
        letter-spacing: -0.14px;
        white-space: nowrap;
    }
`
