import styled from "styled-components";



export const HomeHeroSection = styled.section`
    width: 100%;
    height: auto;
    background: linear-gradient(
    90deg,
    #faf8ff 0%,
    #faf8ff 50%,
    #f2f3ff 100%
  );

    border: 1px solid rgba(193, 198, 213, 0.3);
`;

export const HomeHeroContainer = styled.div`
    max-width: 1280px;
    width: 100%;
    height: 1236px;
    background: linear-gradient(
    90deg,
    #faf8ff 0%,
    #faf8ff 50%,
    #f2f3ff 100%
  );
    display: flex;
    align-items: center;
    justify-content: center;

    margin: 0 auto;

    @media (min-width: 768px) and (max-width: 1024px) {
        height: auto;
        align-items: flex-start;
        padding-top: 72px;
    }

    @media (max-width: 767px) {
        height: auto;
        min-height: 760px;
        align-items: flex-start;
        padding: 48px 16px 0;
    }

`;


export const HomeHeroContent = styled.div`
    max-width: 1240px;
    width: 100%;
    height: 1059px;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;


    @media (min-width: 768px) and (max-width: 1024px) {
        height: auto;
        justify-content: flex-start;
        gap: 32px;
        padding: 0 32px;
    }

    @media (max-width: 767px) {
        max-width: 100%;
        height: auto;
        justify-content: flex-start;
        gap: 24px;
        padding: 0;
    }
`;

export const ReleaseBadge = styled.div`
    max-width: 315px;
    width: 100%;
    height: 26px;
    background-color: #D7E3FF;
    border-radius: 9999px;
    padding-left: 12px;
    padding-right: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 767px) {
        max-width: 280px;
        height: 24px;
        padding: 0 10px;
    }
`;

export const StatusIndicator = styled.div`
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #007934;

    @media (max-width: 767px) {
        width: 6px;
        height: 6px;
        flex-shrink: 0;
    }
`;

export const ReleaseBadgeText = styled.span`
    font-family: "Inter", sans-serif;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0;
    text-align: center;
    color: #004e9f;

    @media (max-width: 767px) {
        font-size: 11px;
        line-height: 14px;
        white-space: nowrap;
    }
`;


export const Divider = styled.div`
    font-family: "Inter", sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0;
    text-align: center;

    color: #c1c6d5;

    @media (max-width: 767px) {
        font-size: 11px;
        line-height: 14px;
    }
`;

export const PlatformText = styled.span`
    font-family: "Inter", sans-serif;
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0;
    text-align: center;
    color: #414753;

    @media (max-width: 767px) {
        font-size: 11px;
        line-height: 14px;
    }
`;

export const HomeHeroTitleWrapper = styled.div`
    max-width: 768px;
    width: 100%;
    height: 116px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const HomeHeroTitle = styled.h1`
    font-family: "Inter", sans-serif;
    font-size: 48px;
    font-weight: 700;
    line-height: 56px;
    letter-spacing: -1.2px;
    text-align: center;
    color: #131b2e;

    @media (min-width: 768px) and (max-width: 1024px) {
        font-size: 40px;
        line-height: 48px;
        letter-spacing: -1px;
    }

    @media (max-width: 767px) {
        font-size: 32px;
        line-height: 40px;
        letter-spacing: -0.8px;
    }
`;


export const HomeHeroDescription = styled.p`
    font-family: "Inter", sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.16px;
    text-align: center;
    color: #414753;

    @media (min-width: 768px) and (max-width: 1024px) {
        font-size: 15px;
        line-height: 22px;
        letter-spacing: -0.15px;
    }

    @media (max-width: 767px) {
        font-size: 14px;
        line-height: 21px;
        letter-spacing: -0.14px;
    }

`;


export const HomeHeroActions = styled.div`
    max-width: 1192px;
    width: 100%;
    height: 66px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;

    @media (max-width: 767px) {
        height: 52px;
        gap: 12px;
    }
`;

export const ReleaseMeta = styled.div`
    max-width: 1192px;
    width: 100%;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 767px) {
        height: auto;
        padding: 0 8px;
    }
`;

export const ReleaseMetaText = styled.p`
    font-family: "Inter", sans-serif;
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0;
    text-align: center;

    color: #727784;

    @media (min-width: 768px) and (max-width: 1024px) {
        font-size: 12px;
        line-height: 16px;
    }

    @media (max-width: 767px) {
        font-size: 11px;
        line-height: 16px;
    }
`

export const AppPreview = styled.div`
    width: 100%;
    max-width: 1024px;
    height: auto;

    img {
        width: 100%;
        height: auto;
        display: block;
    }

    /* 태블릿 */
    @media (min-width: 768px) and (max-width: 1024px) {
        width: calc(100% - 64px);
        max-width: 920px;
    }

    /* 데스크톱 */
    @media (min-width: 1025px) {
        width: calc(100% - 80px);
        max-width: 1024px;
    }

    /* 모바일 */
    @media (max-width: 767px) {
        width: 100%;
        max-width: 520px;
    }
`;