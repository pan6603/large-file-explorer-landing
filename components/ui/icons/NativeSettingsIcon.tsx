import styled from "styled-components"
import Image from "next/image"

const NativeSettingsIconContainer = styled.div`
    width: fit-content;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
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