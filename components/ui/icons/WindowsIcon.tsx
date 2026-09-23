import styled from "styled-components";
import Image from "next/image";


export const WindowsIconContainer = styled.div`
    width: fit-content;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
`;



export default function WindowsIcon() {
    return (
        <>
            <WindowsIconContainer>
                <Image 
                    src="/icons/windows-icon.svg"
                    alt="windows-icon"
                    width={16}
                    height={16}
                />
            </WindowsIconContainer>
        </>
    )
}