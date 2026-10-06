"use client";

import {
    HomeFeaturesSection,
    HomeHeroContainer,
    HomeFeaturesContent,
    HomeFeaturesHeader,
    HomeFeaturesEyebrow,
    HomeFeaturesGrid,
    HomeFeaturesTitle,
    HomeFeaturesDescription,
} from "@/components/sections/features/features.styles";
import FeatureCard from "@/components/ui/cards/FeatureCard";

const FEATURES = [
    {
        imageSrc: "/icons/storage-overview-icon.svg",
        title: "저장 공간 현황",
        subtitle: "저장 공간 사용량 확인",
        description:
            "폴더 전체 크기와 항목 수, 계층별 용량 분포를 한눈에 확인하세요.",
    },
    {
        imageSrc: "/icons/large-files-finder-icon.svg",
        title: "대용량 파일 찾기",
        subtitle: "대용량 파일 빠르게 찾기",
        description:
            "100MB부터 수 GB까지 기준을 직접 설정해 용량을 많이 차지하는 파일을 빠르게 찾아보세요.",
    },
    {
        imageSrc: "/icons/duplicate-files-icon.svg",
        title: "중복 파일 찾기",
        subtitle: "SHA-256으로 중복 파일 확인",
        description:
            "SHA-256 체크섬을 비교해 내용이 같은 파일을 정확하게 찾고 잘못된 삭제를 방지합니다.",
    },
    {
        imageSrc: "/icons/advanced-filters-icon.svg",
        title: "고급 필터",
        subtitle: "크기·확장자·수정일로 필터링",
        description:
            "파일 크기, 확장자(.zip, .mp4, .iso), 수정 날짜 범위를 지정해 원하는 파일만 손쉽게 골라보세요.",
    },
    {
        imageSrc: "/icons/folder-analysis-icon.svg",
        title: "폴더별 분석",
        subtitle: "폴더별 저장 공간 분석",
        description:
            "하위 폴더까지 분석해 용량을 많이 차지하는 위치를 빠르게 찾아보세요.",
    },
    {
        imageSrc: "/icons/fast-file-search-icon.svg",
        title: "빠른 파일 검색",
        subtitle: "파일 이름으로 빠르게 검색",
        description:
            "검색한 폴더에서 파일 이름을 실시간으로 조회해 오래된 보관 파일도 빠르게 찾을 수 있습니다.",
    },
] as const;

const handleFeaturesClick = (
    event: React.MouseEvent<HTMLAnchorElement>
) => {
    event.preventDefault();

    document.getElementById("features")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
    });
};

export default function HomeFeatures() {
    return (
        <HomeFeaturesSection id="features" onClick={handleFeaturesClick}>
            <HomeHeroContainer>
                <HomeFeaturesContent>
                    <HomeFeaturesHeader>
                        <HomeFeaturesEyebrow>주요 기능</HomeFeaturesEyebrow>

                        <HomeFeaturesTitle>빠르고 명확한 저장 공간 분석</HomeFeaturesTitle>

                        <HomeFeaturesDescription>
                            불필요한 기능이나 무거운 백그라운드 작업 없이,
                            저장 공간을 되찾는 데 필요한 기능만 담았습니다.
                        </HomeFeaturesDescription>
                    </HomeFeaturesHeader>

                    <HomeFeaturesGrid>
                        {FEATURES.map((feature) => (
                            <FeatureCard
                                key={feature.title}
                                imageSrc={feature.imageSrc}
                                featureTitle={feature.title}
                                featureCardSubtitle={feature.subtitle}
                                featureDescription={feature.description}
                            />
                        ))}
                    </HomeFeaturesGrid>
                </HomeFeaturesContent>
            </HomeHeroContainer>
        </HomeFeaturesSection>
    );
}
