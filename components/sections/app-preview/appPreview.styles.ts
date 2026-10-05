import styled from "styled-components";


export const HomeAppPreviewContainer = styled.section`
    width: 100%;
    height: auto;
    background-color: #FAF8FF;
    border: 1px solid rgba(193, 198, 213, 0.3);
`;

export const HomeAppPreviewWrapper = styled.div`
    max-width: 1280px;
    width: 100%;
    height: 1429px;
    padding: 96px 20px;
    margin: 0 auto;

    @media (min-width: 768px) and (max-width: 1024px) {
        max-width: 1024px;
        height: auto;
        padding: 72px 32px;
    }

    @media (max-width: 767px) {
        max-width: 100%;
        height: auto;
        padding: 48px 16px;
    }
`

export const HomeAppPreviewContent = styled.div`
    max-width: 1240px;
    width: 100%;
    height: 1235px;
    padding: 0 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    @media (min-width: 768px) and (max-width: 1024px) {
        max-width: 960px;
        height: auto;
        padding: 0;

        gap: 32px;
        justify-content: flex-start;
    }

    @media (max-width: 767px) {
        max-width: 100%;
        width: 100%;
        height: auto;
        padding: 0;

        gap: 32px;
        justify-content: flex-start;
    }
`

export const HomeAppPreviewHeader = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;

    @media (min-width: 768px) and (max-width: 1024px) {
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        gap: 24px;
    }

    @media (max-width: 767px) {
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        gap: 20px;
    }
`;

export const HomeAppPreviewIntro = styled.div`
    max-width: 548px;
    width: 100%;
    height: auto;

    @media (min-width: 768px) and (max-width: 1024px) {
        max-width: 520px;
        text-align: center;
        margin: 0 auto;
    }

    @media (max-width: 767px) {
        max-width: 360px;
        width: 100%;
        text-align: center;
        margin: 0 auto;
    }
`

export const HomeAppPreviewEyebrow = styled.span`
    font-family: "Inter", sans-serif;
    font-weight: 700;
    font-size: 11px;
    line-height: 16px;
    letter-spacing: 1.1px;
    text-align: left;

    color: #004e9f;

    @media (min-width: 768px) and (max-width: 1024px) {
        font-size: 10px;
        line-height: 14px;
        letter-spacing: 1px;
        text-align: center;
    }

    @media (max-width: 767px) {
        font-size: 10px;
        line-height: 14px;
        letter-spacing: 1px;
        text-align: center;
        
    }
`

export const HomeAppPreviewTitle = styled.h2`
    font-family: "Inter", sans-serif;
    font-weight: 700;
    font-size: 30px;
    line-height: 38px;
    letter-spacing: -0.6px;
    text-align: left;

    color: #131b2e;

    @media (min-width: 768px) and (max-width: 1024px) {
        font-size: 26px;
        line-height: 32px;
        letter-spacing: -0.52px;
        text-align: center;
    }

    @media (max-width: 767px) {
        font-size: 24px;
        line-height: 32px;
        letter-spacing: -0.48px;
        text-align: center;
    }
`

export const HomeAppPreviewDescription = styled.p`
    font-family: "Inter", sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0;
    text-align: left;

    color: #414753;

    @media (min-width: 768px) and (max-width: 1024px) {
        font-size: 12px;
        line-height: 16px;
        text-align: center;
    }

    @media (max-width: 767px) {
        font-size: 12px;
        line-height: 18px;
        text-align: center;
    }

`

export const HomeAppPreviewTabs = styled.div`
    width: fit-content;
    height: 42px;
    display: flex;
    padding: 4px;
    align-items: center;
    justify-content: space-between;
    background: #E2E7FF;
    border-radius: 12px;

    @media (min-width: 768px) and (max-width: 1024px) {
        height: 38px;
        padding: 3px;
        border-radius: 10px;
    }

    @media (max-width: 767px) {
        width: 100%;
        max-width: 360px;
        height: 40px;
        padding: 3px;
        border-radius: 10px;
        gap: 2px;
    }
`



export const HomeAppPreviewMain = styled.div`
    width: fit-content;
    height: 837px;
    border-radius: 12px;

    &:focus-visible {
        outline: 2px solid #004e9f;
        outline-offset: 4px;
    }

    @media (min-width: 768px) and (max-width: 1024px) {
        width: 100%;
        height: auto;
        border-radius: 10px;
        overflow: hidden;

        img {
            width: 100%;
            height: auto;
            display: block;
        }
    }

    @media (max-width: 767px) {
        width: 100%;
        height: auto;
        border-radius: 8px;
        overflow: hidden;

        img {
            width: 100%;
            height: auto;
            display: block;
        }
    }
`

export const HomeAppPreviewGrid = styled.div`
    width: 100%;
    height: 230px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 767px) {
        height: auto;
        flex-direction: column;
        align-items: stretch;
        justify-content: flex-start;
        gap: 24px;
    }
`
