import styled from "styled-components"
import Image from "next/image"

const FileTypesDistributionIconContainer = styled.div`
    width: fit-content;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
`



export default function FileTypesDistributionIcon() {
    return (
        <>
            <FileTypesDistributionIconContainer>
                <Image 
                    src="/icons/file-types-distribution-icon.svg"
                    alt="folder-breakdown-icon"
                    width={15}
                    height={12}
                />
            </FileTypesDistributionIconContainer>
        </>
    )
}