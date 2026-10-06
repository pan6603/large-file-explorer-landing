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

    @media (min-width: 768px) and (max-width: 1024px) {
        max-width: 36px;
        height: 36px;
        border-radius: 7px;

        img {
            width: 16px;
            height: 16px;
        }
    }

    @media (max-width: 767px) {
        max-width: 36px;
        width: 36px;
        height: 36px;
        flex-shrink: 0;
        border-radius: 7px;

        img {
            width: 16px;
            height: 16px;
        }
    }
`;


export default function MousePointerClickIcon() {
    return (
        <>
            <MousePointerClickIconContainer>
                <Image 
                    src="/icons/mouse-pointercick-icon.svg"
                    alt="마우스 클릭 아이콘"
                    width={18}
                    height={18}
                />
            </MousePointerClickIconContainer>
        </>
    )
}
