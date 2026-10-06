
import styled from "styled-components";
import Image from "next/image";


export const MicrosoftIconContainer = styled.div`
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
            width: 16px;
            height: 16px;
        }
    }
`;


type MicrosoftIconProps = {
    width?: number;
    height?: number;
}


export default function MicrosoftIcon({ width = 20, height = 20 }: MicrosoftIconProps) {
    return (
        <>
            <MicrosoftIconContainer>
                <Image 
                    src="/images/logo/logos_microsoft-icon.svg"
                    alt="Windows 아이콘"
                    width={width}
                    height={height}
                />
            </MicrosoftIconContainer>
        </>
    )
}
