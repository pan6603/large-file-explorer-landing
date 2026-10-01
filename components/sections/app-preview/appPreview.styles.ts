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
`

export const HomeAppPreviewHeader = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
`;

export const HomeAppPreviewIntro = styled.div`
    max-width: 548px;
    width: 100%;
    height: auto;
`

export const HomeAppPreviewEyebrow = styled.span`
    font-family: "Inter", sans-serif;
    font-weight: 700;
    font-size: 11px;
    line-height: 16px;
    letter-spacing: 1.1px;
    text-align: left;

    color: #004e9f;
`

export const HomeAppPreviewTitle = styled.h2`
    font-family: "Inter", sans-serif;
    font-weight: 700;
    font-size: 30px;
    line-height: 38px;
    letter-spacing: -0.6px;
    text-align: left;

    color: #131b2e;
`

export const HomeAppPreviewDescription = styled.p`
    font-family: "Inter", sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0;
    text-align: left;

    color: #414753;
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
`



export const HomeAppPreviewMain = styled.div`
    width: fit-content;
    height: 837px;
    border-radius: 12px;

    &:focus-visible {
        outline: 2px solid #004e9f;
        outline-offset: 4px;
    }
`

export const HomeAppPreviewGrid = styled.div`
    width: 100%;
    height: 230px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
