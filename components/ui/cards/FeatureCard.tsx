import { ReactNode } from "react";

import { 
    FeatureCardContainer,
    FeatureTitleContainer,
    FeatureTitle,
    FeatureCardSubtitle,
    FeatureDescription
} from "@/components/ui/cards/card.styles"
import FeatureIcon from "@/components/ui/icons/FeatureIcon"


type FeatureCardProps = {
    imageSrc: string
    featureTitle: string
    featureCardSubtitle: string
    featureDescription: ReactNode;
}


export default function FeatureCard({
    imageSrc,
    featureTitle,
    featureCardSubtitle,
    featureDescription
}: FeatureCardProps) {
    return (
        <>
            <FeatureCardContainer>
                <FeatureIcon imageSrc={imageSrc} />
                <FeatureTitleContainer>
                    <FeatureTitle>{featureTitle}</FeatureTitle>
                </FeatureTitleContainer>

                <FeatureCardSubtitle>{featureCardSubtitle}</FeatureCardSubtitle>
                <FeatureDescription>{featureDescription}</FeatureDescription>
            </FeatureCardContainer>
            
        </>
    )
}