import styled from "styled-components";
import Image from "next/image";

export const DownloadIconContainer = styled.div`
    width: fit-content;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
`;

type DownloadIconProps = {
    width?: number;
    height?: number;
}


export default function DownloadIcon({ width = 13, height = 13 }: DownloadIconProps) {
    return (
        <>
            <DownloadIconContainer>
                <Image 
                    src="/icons/download-icon.svg"
                    alt="다운로드 아이콘"
                    width={width}
                    height={height}
                />
            </DownloadIconContainer>
        </>
    )
}
