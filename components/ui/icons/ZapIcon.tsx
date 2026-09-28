import styled from "styled-components";
import Image from "next/image";

export const ZapIconContainer = styled.div`
    max-width: 40px;
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #D7E3FF;
    border-radius: 8px;
`;


export default function ZapIcon() {
    return (
        <>
            <ZapIconContainer>
                <Image 
                    src="/icons/zap-icon.svg"
                    alt="zap-icon"
                    width={18}
                    height={18}
                />
            </ZapIconContainer>
        </>
    )
}