import Image from "next/image";
import styled from "styled-components";

export const HamburgerIconContainer = styled.span`
    width: fit-content;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
`;

type HamburgerIconProps = {
    width?: number;
    height?: number;
};

export default function HamburgerIcon({ width = 18, height = 18 }: HamburgerIconProps) {
    return (
        <HamburgerIconContainer aria-hidden="true">
            <Image
                src="/icons/hamburger-icon.svg"
                alt=""
                width={width}
                height={height}
            />
        </HamburgerIconContainer>
    );
}
