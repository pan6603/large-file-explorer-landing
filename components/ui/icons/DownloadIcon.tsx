import styled from "styled-components";
import Image from "next/image";

export const DownloadIconContainer = styled.div`
    width: fit-content;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
`;


export default function DownloadIcon() {
    return (
        <>
            <DownloadIconContainer>
                <Image 
                    src="/icons/download-icon.svg"
                    alt="download-icon"
                    width={13}
                    height={13}
                />
            </DownloadIconContainer>
        </>
    )
}