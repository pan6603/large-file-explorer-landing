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
    title: "깔끔하고 간결하게",
    description: (
      <>
        원격 분석이나 백그라운드 서비스 없이 핵심 기능에만 집중했습니다.
      </>
    ),
  },
  {
    icon: <ZapIcon />,
    title: "빠른 처리 속도",
    description: (
      <>
        CPU와 시스템 자원 사용을 낮게 유지하면서 빠르게 스캔합니다.
      </>
    ),
  },
  {
    icon: <WindowsFocusedIcon />,
    title: "Windows에 최적화",
    description: (
      <>
        Windows 표준과 파일 시스템, 익숙한 데스크톱 흐름에 맞춰 설계했습니다.
      </>
    ),
  },
  {
    icon: <MousePointerClickIcon />,
    title: "누구나 쉽게",
    description: (
      <>
        폴더를 고르고 스캔을 시작하세요. 언제든 간단히 다시 스캔할 수 있습니다.
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
              FileMap을 선택하는 이유
            </HomeBenefitsEyebrow>

            <HomeBenefitsTitle>
              빠르고 가볍게, Windows답게
            </HomeBenefitsTitle>

            <HomeBenefitsDescription>
              Windows 데스크톱 환경에 꼭 맞게, 불필요한 요소 없이
              만들었습니다.
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
