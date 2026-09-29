import styled from "styled-components";
import Image from "next/image";


export const GithubIconContainer = styled.div`
    width: fit-content;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
`;


type GithubIconProps = {
    width?: number;
    height?: number;
}


export default function GithubIcon({ width = 16, height = 16 }: GithubIconProps) {
    return (
        <>
            <GithubIconContainer>
                <Image 
                    src="/icons/github-icon.svg"
                    alt="github-icon"
                    width={width}
                    height={height}
                />
            </GithubIconContainer>
        </>
    )
}