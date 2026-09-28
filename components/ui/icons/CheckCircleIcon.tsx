import styled from "styled-components";
import Image from "next/image";

export const CheckCircleIconContainer = styled.div`
    max-width: 40px;
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #D7E3FF;
    border-radius: 8px;
`;


export default function CheckCircleIcon() {
    return (
        <>
            <CheckCircleIconContainer>
                <Image 
                    src="/icons/check-circle-icon.svg"
                    alt="check-circle-icon"
                    width={18}
                    height={18}
                />
            </CheckCircleIconContainer>
        </>
    )
}