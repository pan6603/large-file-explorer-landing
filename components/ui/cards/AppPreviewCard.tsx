import Image from "next/image";
import styled from "styled-components";


import {
    AppPreviewCardHeader,
    AppPreviewCardDescription,
    AppPreviewCardTitle
} from "@/components/ui/cards/card.styles"
import { ReactNode } from "react";



const AppPreviewCardContainer = styled.div`
    width: fit-content;
    height: auto;
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 8px;

    @media (max-width: 767px) {
        width: 100%;
        height: auto;
        padding: 16px;
        gap: 10px;
    }
`



type AppPreviewCardProps = {
    icon: ReactNode;
    title: string;
    description: ReactNode;
    imageSrc: string;
}


export default function AppPreviewCard({ icon, title, description, imageSrc }: AppPreviewCardProps) {
    return (
        <>
            <AppPreviewCardContainer>
                <AppPreviewCardHeader>
                    {icon}
                    <AppPreviewCardTitle>{title}</AppPreviewCardTitle>
                </AppPreviewCardHeader>
                <AppPreviewCardDescription>{description}</AppPreviewCardDescription>
                <Image 
                    src={imageSrc}
                    alt="앱 기능 미리보기"
                    width={347}
                    height={132}
                />
            </AppPreviewCardContainer>
        </>
    )
}
