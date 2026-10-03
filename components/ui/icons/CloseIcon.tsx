import Image from "next/image";
import styled from "styled-components";

export const CloseIconContainer = styled.span`
    width: fit-content;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 767px) {
    
        img {
            width: 12px;
            height: 12px;
        }
    }
`;

type CloseIconProps = {
    width?: number;
    height?: number;
};

export default function CloseIcon({ width = 16, height = 16 }: CloseIconProps) {
    return (
        <CloseIconContainer aria-hidden="true">
            <Image
                src="/icons/close-icon.svg"
                alt=""
                width={width}
                height={height}
            />
        </CloseIconContainer>
    );
}
