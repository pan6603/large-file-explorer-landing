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
`


export default function DownloadBoxIcon() {
    return (
        <DownloadBoxIconContainer>
            <Image 
                src="/icons/download-box-icon.svg"
                alt="download-box-icon"
                width={23}
                height={23}
            />
        </DownloadBoxIconContainer>
    )
}