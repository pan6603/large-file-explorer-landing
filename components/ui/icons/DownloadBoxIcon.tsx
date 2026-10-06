import styled from "styled-components"
import Image from "next/image"

export const DownloadBoxIconContainer = styled.div`
    max-width: 48px;
    width: 100%;
    height: 48px;
    background: #0066CC;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;

    @media (max-width: 767px) {
        max-width: 40px;
        width: 40px;
        height: 40px;
        border-radius: 10px;
        flex-shrink: 0;

        img,
        svg {
            width: 20px;
            height: 20px;
        }
    }
`


export default function DownloadBoxIcon() {
    return (
        <DownloadBoxIconContainer>
            <Image 
                src="/icons/download-box-icon.svg"
                alt="다운로드 상자 아이콘"
                width={23}
                height={23}
            />
        </DownloadBoxIconContainer>
    )
}
