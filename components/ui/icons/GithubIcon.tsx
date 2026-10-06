import styled from "styled-components";
import Image from "next/image";


export const GithubIconContainer = styled.div`
    width: fit-content;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 767px) {
        img {
            width: 15px;
            height: 15px;
        }
    }
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
                    alt="GitHub 아이콘"
                    width={width}
                    height={height}
                />
            </GithubIconContainer>
        </>
    )
}
