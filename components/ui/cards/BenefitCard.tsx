import {
    BenefitCardContainer,
    BenefitCardTitle,
    BenefitCardDescription
} from "@/components/ui/cards/card.styles"
import { ReactNode } from "react"


type BenefitCardProps = {
    icon: ReactNode;
    title: string;
    description: ReactNode;
}


export default function BenefitCard({ icon, description, title }: BenefitCardProps) {
    return (
        <>
            <BenefitCardContainer>
                {icon}
                <BenefitCardTitle>{title}</BenefitCardTitle>
                <BenefitCardDescription>{description}</BenefitCardDescription>
                
            </BenefitCardContainer>
        </>
    )
}