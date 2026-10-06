import styled from "styled-components"
import Image from "next/image"

const FileTypesDistributionIconContainer = styled.div`
    width: fit-content;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (min-width: 768px) and (max-width: 1024px) {
        width: 12px;
        height: 10px;
    }

    @media (max-width: 767px) {
        width: 12px;
        height: 10px;
        flex-shrink: 0;
    }
`



export default function FileTypesDistributionIcon() {
    return (
        <>
            <FileTypesDistributionIconContainer>
                <Image 
                    src="/icons/file-types-distribution-icon.svg"
                    alt="파일 형식별 분포 아이콘"
                    width={15}
                    height={12}
                />
            </FileTypesDistributionIconContainer>
        </>
    )
}
