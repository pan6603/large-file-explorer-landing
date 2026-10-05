import styled from "styled-components"
import Image from "next/image"

const FolderBreakdownIconContainer = styled.div`
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