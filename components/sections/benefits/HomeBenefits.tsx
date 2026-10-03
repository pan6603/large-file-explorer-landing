"use client";

import {
  HomeBenefitsSection,
  HomeBenefitsContainer,
  HomeBenefitsWrapper,
  HomeBenefitsHeader,
  HomeBenefitsGrid,
  HomeBenefitsEyebrow,
  HomeBenefitsTitle,
  HomeBenefitsDescription,
} from "@/components/sections/benefits/benefits.styles";

import BenefitCard from "@/components/ui/cards/BenefitCard";

import CheckCircleIcon from "@/components/ui/icons/CheckCircleIcon";
import ZapIcon from "@/components/ui/icons/ZapIcon";
import WindowsFocusedIcon from "@/components/ui/icons/WindowsFocusedIcon";
import MousePointerClickIcon from "@/components/ui/icons/MousePointerClickIcon";

const benefits = [
  {
    icon: <CheckCircleIcon />,
    title: "Pure & Simple",
    description: (
      <>
        No telemetry, background services, or unwanted distractions. Just a clean and focused
      </>
    ),
  },
  {
    icon: <ZapIcon />,
    title: "Engineered Fast",
    description: (
      <>
        Optimized scanning delivers fast results while keeping CPU and system resource usage low.
      </>
    ),
  },
  {
    icon: <WindowsFocusedIcon />,
    title: "Windows Focused",
    description: (
      <>
        Designed around standard Windows conventions, file systems, and familiar desktop workflows.
      </>
    ),
  },
  {
    icon: <MousePointerClickIcon />,
    title: "Easy to Use",
    description: (
      <>
        Choose a folder, start scanning, and rescan anytime with simple and intuitive controls.
      </>
    ),
  },
];

const handleBenefitsClick = (
    event: React.MouseEvent<HTMLAnchorElement>
) => {
    event.preventDefault();

    document.getElementById("performance")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
    });
};

export default function HomeBenefits() {
  return (
    <HomeBenefitsSection id="performance" onClick={handleBenefitsClick}>
      <HomeBenefitsContainer>
        <HomeBenefitsWrapper>
          <HomeBenefitsHeader>
            <HomeBenefitsEyebrow>
              WHY LARGE FILE EXPLORER
            </HomeBenefitsEyebrow>

            <HomeBenefitsTitle>
              Fast, native, and clutter-free
            </HomeBenefitsTitle>

            <HomeBenefitsDescription>
              Built specifically for the Windows desktop experience with zero
              baggage.
            </HomeBenefitsDescription>
          </HomeBenefitsHeader>

          <HomeBenefitsGrid>
            {benefits.map((benefit) => (
              <BenefitCard
                key={benefit.title}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
              />
            ))}
          </HomeBenefitsGrid>
        </HomeBenefitsWrapper>
      </HomeBenefitsContainer>
    </HomeBenefitsSection>
  );
}