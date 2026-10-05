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

    @media (min-width: 768px) and (max-width: 1024px) {
        max-width: none;
        width: 100%;
        height: 200px;
        padding: 20px;
        border-radius: 10px;
    }

    @media (max-width: 767px) {
        max-width: none;
        width: 100%;
        height: auto;
        min-height: 180px;
        padding: 20px;
        gap: 4px;
        border-radius: 10px;
    }
`

export const FeatureTitleContainer = styled.div`
    max-width: 331px;
    width: 100%;
    height: 40px;

    @media (min-width: 768px) and (max-width: 1024px) {
        max-width: none;
        min-height: 20px;
    }

    @media (max-width: 767px) {
        max-width: none;
        width: 100%;
        height: auto;
        min-height: 40px;
        
    }
`

export const FeatureTitle = styled.h3`
    font-family: "Inter", sans-serif;
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0;

    text-align: left;
    color: #131b2e;

    @media (min-width: 768px) and (max-width: 1024px) {
        font-size: 14px;
        line-height: 20px;
    }

    @media (max-width: 767px) {
        font-size: 13px;
        line-height: 18px;
        letter-spacing: 0;
    }
`;


export const FeatureCardSubtitle = styled.span`
    font-size: 11px;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: 0.66px;

    text-align: left;
    color: #004e9f;

    @media (min-width: 768px) and (max-width: 1024px) {
        font-size: 10px;
        line-height: 14px;
        letter-spacing: 0.4px;
    }

    @media (max-width: 767px) {
        font-size: 10px;
        line-height: 14px;
        letter-spacing: 0.4px;
    }
`


export const FeatureDescription = styled.p`
    font-family: "Inter", sans-serif;
    font-size: 13px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0;

    text-align: left;
    color: #414753;

    @media (min-width: 768px) and (max-width: 1024px) {
        font-size: 12px;
        line-height: 16px;
    }

    @media (max-width: 767px) {
        font-size: 12px;
        line-height: 18px;
    }
`


export const AppPreviewCardHeader = styled.div`
    width: 100%;
    height: 16px;
    display: flex;
    gap: 8px;
    align-items: center;

    @media (max-width: 767px) {
        width: 100%;
        height: auto;
        min-height: 16px;
        gap: 8px;
        align-items: center;
    }
`

export const AppPreviewCardTitle = styled.span`
    font-family: "Inter", sans-serif;
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0;
    text-align: left;
    color: #004e9f;

    @media (min-width: 768px) and (max-width: 1024px) {
        font-size: 11px;
        line-height: 16px;
    }

    @media (max-width: 767px) {
        font-size: 11px;
        line-height: 16px;
    }
`


export const AppPreviewCardDescription = styled.p`
    width: 100%;
    height: auto;

    font-family: "Inter", sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0;

    text-align: left;
    color: #414753;

    @media (min-width: 768px) and (max-width: 1024px) {
        width: 100%;
        font-size: 9px;
        line-height: 14px;
    }

    @media (max-width: 767px) {
        width: 100%;
        font-size: 11px;
        line-height: 16px;
    }
`;


export const BenefitCardContainer = styled.div`
    max-width: 280px;
    width: 100%;
    height: 216px;
    padding: 24px;
    background: #FAF8FF;
    border: #C1C6D5;
    border-radius: 12px;

    @media (min-width: 768px) and (max-width: 1024px) {
        max-width: none;
        width: 100%;
        height: 180px;
        padding: 20px;
        border-radius: 10px;
    }

    @media (max-width: 767px) {
        max-width: none;
        width: 100%;
        height: auto;
        min-height: 160px;
        padding: 20px;
        border-radius: 10px;
    }
`


export const BenefitCardTitle = styled.h3`
    font-family: "Inter", sans-serif;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0;
    text-align: left;
    color: #131b2e;

    @media (min-width: 768px) and (max-width: 1024px) {
        font-size: 14px;
        line-height: 20px;
    }

    @media (max-width: 767px) {
        font-size: 14px;
        line-height: 20px;
        text-align: left;
    }
`


export const BenefitCardDescription = styled.p`
    font-family: "Inter", sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 19.5px;
    letter-spacing: 0;
    text-align: left;
    color: #414753;

    @media (min-width: 768px) and (max-width: 1024px) {
        font-size: 11px;
        line-height: 18px;
    }

    @media (max-width: 767px) {
        font-size: 11px;
        line-height: 18px;
        text-align: left;
    }
`