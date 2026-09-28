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
        Zero telemetry bloat, zero background <br />
        services, and zero unsolicited <br />
        notifications. Just a clean disk analyzer <br />
        when you need it.
      </>
    ),
  },
  {
    icon: <ZapIcon />,
    title: "Engineered Fast",
    description: (
      <>
        Traverses NTFS and exFAT filesystem <br />
        structures with optimized asynchronous <br />
        scanning routines that respect CPU <br />
        resources.
      </>
    ),
  },
  {
    icon: <WindowsFocusedIcon />,
    title: "Windows Focused",
    description: (
      <>
        Respects standard Windows <br />
        conventions, path formats, and system <br />
        drive structures (Windows 10 and <br />
        Windows 11 64-bit compatible).
      </>
    ),
  },
  {
    icon: <MousePointerClickIcon />,
    title: "Easy to Use",
    description: (
      <>
        Intuitive folder picker and instant rescan <br />
        controls. No terminal syntax or complex <br />
        command line flags to memorize.
      </>
    ),
  },
];

export default function HomeBenefits() {
  return (
    <HomeBenefitsSection>
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