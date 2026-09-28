import styled from "styled-components";
import Image from "next/image";

export const MousePointerClickIconContainer = styled.div`
    max-width: 40px;
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #D7E3FF;
    border-radius: 8px;
`;


export default function MousePointerClickIcon() {
    return (
        <>
            <MousePointerClickIconContainer>
                <Image 
                    src="/icons/mouse-pointercick-icon.svg"
                    alt="mouse-pointercick-icon"
                    width={18}
                    height={18}
                />
            </MousePointerClickIconContainer>
        </>
    )
}