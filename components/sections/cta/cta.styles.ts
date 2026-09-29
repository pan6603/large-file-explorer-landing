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
    background: #FAF8FF;
    display: flex;
    align-items: center;
    justify-content: center;
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
`

export const HomeCtaContent = styled.div`
    max-width: 672px;
    width: 100%;
    height: 296px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`


export const HomeCTAHeading = styled.h2`
    font-family: "Inter", sans-serif;
    font-size: 30px;
    font-weight: 700;
    line-height: 38px;
    letter-spacing: -0.6px;
    text-align: center;
    color: #131b2e;
`

export const HomeCTADescription = styled.p`
    font-family: "Inter", sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.16px;
    text-align: center;
    color: #414753;
`


export const HomeCTAButtons = styled.div`
    max-width: 672px;
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
`

export const HomeCTAMeta = styled.p`
    font-family: "Inter", sans-serif;
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0;
    text-align: center;
    color: #727784;
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
`

export const HomeCTADownloadButtonText = styled.span`
    font-family: "Inter", sans-serif;
    font-size: 15px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: -0.16px;
    text-align: center;
    color: #ffffff;
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

