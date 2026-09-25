import styled from "styled-components";

export const BaseButton = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    height: 52px;
    padding: 14px 24px;
    border-radius: 8px;
    cursor: pointer;

    font-family: "Inter", sans-serif;
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: -0.16px;

    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const PrimaryButtonStyle = styled(BaseButton)`
    color: #ffffff;
    background-color: #0066CC;
    border: none;

`;

export const SecondaryButtonStyle = styled(BaseButton)`
    color: #131B2E;
    background-color: #ffffff;
    border: 1px solid #C1C6D5;
  
`;