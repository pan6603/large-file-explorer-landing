import styled from "styled-components";
import Image from "next/image";


export const GithubIconContainer = styled.div`
    width: fit-content;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
`;



export default function GithubIcon() {
    return (
        <>
            <GithubIconContainer>
                <Image 
                    src="/icons/github-icon.svg"
                    alt="github-icon"
                    width={16}
                    height={16}
                />
            </GithubIconContainer>
        </>
    )
}