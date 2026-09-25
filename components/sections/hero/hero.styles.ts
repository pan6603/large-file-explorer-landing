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
`;

export const StatusIndicator = styled.div`
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #007934;
`;

export const ReleaseBadgeText = styled.span`
    font-family: "Inter", sans-serif;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0;
    text-align: center;

    color: #004e9f;
`;


export const Divider = styled.div`
    font-family: "Inter", sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0;
    text-align: center;

    color: #c1c6d5;
`;

export const PlatformText = styled.span`
    font-family: "Inter", sans-serif;
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0;
    text-align: center;
    color: #414753;
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
`;


export const HomeHeroDescription = styled.p`
    font-family: "Inter", sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.16px;
    text-align: center;
    color: #414753;
`;


export const HomeHeroActions = styled.div`
    max-width: 1192px;
    width: 100%;
    height: 66px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
`;

export const ReleaseMeta = styled.div`
    max-width: 1192px;
    width: 100%;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ReleaseMetaText = styled.p`
    font-family: "Inter", sans-serif;
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0;
    text-align: center;

    color: #727784;
`

export const AppPreview = styled.div`
    width: fit-content;
    height: auto;
 
`;