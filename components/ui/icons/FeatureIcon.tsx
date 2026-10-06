import styled from "styled-components";
import Image from "next/image";

export const FeatureIconContainer = styled.div`
    max-width: 48px;
    width: 100%;
    height: 48px;
    background: #D7E3FF;

    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;

    img {
        width: 19px;
        height: 19px;
    }

    @media (min-width: 768px) and (max-width: 1024px) {
        width: 40px;
        height: 40px;
        border-radius: 7px;

        img {
            width: 16px;
            height: 16px;
        }
    }

    @media (max-width: 767px) {
        max-width: 40px;
        width: 40px;
        height: 40px;
        border-radius: 7px;
        flex-shrink: 0;

        img {
            width: 16px;
            height: 16px;
        }
    }
`;


type FeatureIconProps = {
    imageSrc: string
}


export default function FeatureIcon({
    imageSrc
}: FeatureIconProps) {
    return (
        <>
            <FeatureIconContainer>
                <Image 
                    src={imageSrc}
                    alt="기능 아이콘"
                    width={19}
                    height={19}
                />
            </FeatureIconContainer>
          
        </>
    )
}
