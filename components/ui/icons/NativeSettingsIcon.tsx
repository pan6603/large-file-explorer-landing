import styled from "styled-components"
import Image from "next/image"

const NativeSettingsIconContainer = styled.div`
    width: fit-content;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (min-width: 768px) and (max-width: 1024px) {
        width: 12px;
        height: 10px;
    }
`



export default function NativeSettingsIcon() {
    return (
        <>
            <NativeSettingsIconContainer>
                <Image 
                    src="/icons/native-settings-icon.svg"
                    alt="folder-breakdown-icon"
                    width={15}
                    height={12}
                />
            </NativeSettingsIconContainer>
        </>
    )
}