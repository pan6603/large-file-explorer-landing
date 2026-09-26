import styled from "styled-components";


export const FeatureCardContainer = styled.div`
    max-width: 381px;
    width: 100%;
    height: 230px;
    padding: 24px;
    background: #FAF8FF;
    border: 1px solid rgba(193, 198, 213, 0.5);
    display: flex;
    flex-direction: column;
    gap: 4px;

    border-radius: 12px;
`

export const FeatureTitleContainer = styled.div`
    max-width: 331px;
    width: 100%;
    height: 40px;
`

export const FeatureTitle = styled.h3`
    font-family: "Inter", sans-serif;
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0;

    text-align: left;
    color: #131b2e;
`


export const FeatureCardSubtitle = styled.span`
    font-size: 11px;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: 0.66px;

    text-align: left;
    color: #004e9f;
`


export const FeatureDescription = styled.p`
    font-family: "Inter", sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0;

    text-align: left;
    color: #414753;
`