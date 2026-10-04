import styled from "styled-components";

export const HomeFeaturesSection = styled.section`
    width: 100%;
    height: auto;
    background-color: #FFFFFF;
`;


export const HomeHeroContainer = styled.div`
    max-width: 1280px;
    width: 100%;
    height: 842px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;


    @media (min-width: 768px) and (max-width: 1024px) {
        height: auto;
        min-height: 900px;
        padding: 64px 0;
    }

    @media (max-width: 767px) {
        height: auto;
        min-height: 0;
        padding: 48px 16px;
        align-items: flex-start;
    }
`;

export const HomeFeaturesContent = styled.div`
    max-width: 1240px;
    width: calc(100% - 64px);
    height: 650px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    @media (min-width: 768px) and (max-width: 1024px) {
        max-width: 896px;
        width: calc(100% - 64px);
        height: 780px;
    }

    @media (max-width: 767px) {
        max-width: 100%;
        width: 100%;
        height: auto;
        justify-content: flex-start;
        gap: 40px;
    }
`;


export const HomeFeaturesHeader = styled.div`
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

        justify-content: flex-start;
        gap: 0px;
    }
`;


export const HomeFeaturesEyebrow = styled.div`
    width: fit-content;
    height: auto;
    font-family: "Inter", sans-serif;
    font-size: 11px;
    font-weight: 700;
    line-height: 16px;
    letter-spacing: 1.1px;
    text-align: center;

    color: #004e9f;

    @media (min-width: 768px) and (max-width: 1024px) {
        font-size: 11px;
        line-height: 16px;
        letter-spacing: 1.1px;
    }

    @media (max-width: 767px) {
        font-size: 10px;
        line-height: 14px;
        letter-spacing: 1px;
    }
`

export const HomeFeaturesTitle = styled.h2`
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
        letter-spacing: -0.52px;
    }

    @media (max-width: 767px) {
        font-size: 24px;
        line-height: 32px;
        letter-spacing: -0.48px;
    }
`

export const HomeFeaturesDescription = styled.p`
    font-family: "Inter", sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0;

    text-align: center;
    color: #414753;
    
    @media (min-width: 768px) and (max-width: 1024px) {
        font-size: 14px;
        line-height: 20px;
    }
`


export const HomeFeaturesGrid = styled.div`
    max-width: 1192px;
    width: 100%;
    height: 484px;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  

    @media (min-width: 768px) and (max-width: 1024px) {
        max-width: 770px;
        height: auto;
        gap: 16px;
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    @media (max-width: 767px) {
        max-width: 100%;
        width: 100%;
        height: auto;

        grid-template-columns: 1fr;
        gap: 16px;
    }
`;

