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
                    alt="download-icon"
                    width={19}
                    height={19}
                />
            </FeatureIconContainer>
          
        </>
    )
}