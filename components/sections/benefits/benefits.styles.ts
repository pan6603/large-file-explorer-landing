import styled from "styled-components";



export const HomeBenefitsSection = styled.section`
    width: 100%;
    height: auto;
    background: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
`


export const HomeBenefitsContainer = styled.div`
    max-width: 1280px;
    width: 100%;
    height: 574px;  
    display: flex;
    align-items: center;
    justify-content: center;

    @media (min-width: 768px) and (max-width: 1024px) {
        max-width: 1024px;
        height: 680px;
        padding: 64px 32px;
    }

    @media (max-width: 767px) {
        max-width: 100%;
        height: auto;
        padding: 48px 16px;
        align-items: flex-start;
        justify-content: center;
    }
`

export const HomeBenefitsWrapper = styled.div`
    max-width: 1240px;
    width: 100%;
    height: 382px;
    padding-left: 24px;
    padding-right: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    @media (min-width: 768px) and (max-width: 1024px) {
        max-width: 960px;
        height: auto;
        padding: 0 32px;
        gap: 48px;
    }

    @media (max-width: 767px) {
        max-width: 100%;
        width: 100%;
        height: auto;
        padding: 0;
        gap: 40px;
        justify-content: flex-start;
    }
`

export const HomeBenefitsHeader = styled.div`
    max-width: 672px;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 767px) {
        max-width: 360px;
        width: 100%;
        height: auto;
        gap: 12px;
        align-items: center;
        justify-content: flex-start;
        text-align: center;
    }
`

export const HomeBenefitsGrid = styled.div`
    width: 100%;
    height: 216px;
    display: flex;
    gap: 24px;
    align-items: center;

    @media (min-width: 768px) and (max-width: 1024px) {
        height: auto;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
        align-items: stretch;
    }

    @media (max-width: 767px) {
        width: 100%;
        height: auto;
        display: grid;
        grid-template-columns: 1fr;
        gap: 16px;
        align-items: stretch;
    }
`

export const HomeBenefitsEyebrow = styled.span`
    font-family: "Inter", sans-serif;
    font-size: 11px;
    font-weight: 700;
    line-height: 16px;
    letter-spacing: 1.1px;
    text-align: center;
    color: #004E9F;

    @media (min-width: 768px) and (max-width: 1024px) {
        font-size: 10px;
        line-height: 14px;
        letter-spacing: 1px;
    }

    @media (max-width: 767px) {
        font-size: 10px;
        line-height: 14px;
        letter-spacing: 1px;
        text-align: center;
    }
`

export const HomeBenefitsTitle = styled.h2`
    font-family: "Inter", sans-serif;
    font-weight: 700;
    font-size: 30px;
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


export const HomeBenefitsDescription = styled.p`
    font-family: "Inter", sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0;
    text-align: center;
    color: #414753;

    @media (min-width: 768px) and (max-width: 1024px) {
        font-size: 12px;
        line-height: 18px;
    }

    @media (max-width: 767px) {
        font-size: 12px;
        line-height: 18px;
        text-align: center;
    }
`