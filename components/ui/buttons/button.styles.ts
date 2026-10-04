import styled from "styled-components";
import Link from "next/link";


export const PrimaryButtonStyle = styled(Link)`
    color: #ffffff;
    background-color: #0066cc;
    border: none;

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

    @media (min-width: 768px) and (max-width: 1024px) {
        height: 48px;
        padding: 12px 20px;
        gap: 12px;

        font-size: 15px;
        line-height: 22px;
    }

    @media (max-width: 767px) {
        height: 48px;
        padding: 12px 20px;
        gap: 10px;

        font-size: 14px;
        line-height: 20px;
        letter-spacing: -0.14px;
    }
`;
