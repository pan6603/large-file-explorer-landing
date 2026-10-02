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

`;


export const HomeFeaturesHeader = styled.div`
    max-width: 672px;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
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
`;

