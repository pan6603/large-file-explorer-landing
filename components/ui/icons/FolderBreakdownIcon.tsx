import styled from "styled-components"
import Image from "next/image"

const FolderBreakdownIconContainer = styled.div`
    width: fit-content;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
`



export default function FolderBreakdownIcon() {
    return (
        <>
            <FolderBreakdownIconContainer>
                <Image 
                    src="/icons/folder-breakdown-icon.svg"
                    alt="folder-breakdown-icon"
                    width={15}
                    height={12}
                />
            </FolderBreakdownIconContainer>
        </>
    )
}