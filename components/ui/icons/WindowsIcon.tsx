import styled from "styled-components";
import Image from "next/image";


export const WindowsIconContainer = styled.div`
    width: fit-content;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (min-width: 768px) and (max-width: 1024px) {
        img {
            width: 18px;
            height: 18px;
        }
    }

    
    @media (max-width: 767px) {
        img {
            width: 15px;
            height: 15px;
        }
    }

    @media (max-width: 767px) {
        img {
            width: 16px;
            height: 16px;
        }
    }
`;


type WindowsIconProps = {
    width?: number;
    height?: number;
}


export default function WindowsIcon({ width = 20, height = 20 }: WindowsIconProps) {
    return (
        <>
            <WindowsIconContainer>
                <Image 
                    src="/icons/windows-icon.svg"
                    alt="windows-icon"
                    width={width}
                    height={height}
                />
            </WindowsIconContainer>
        </>
    )
}