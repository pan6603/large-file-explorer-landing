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
        title: "Storage Overview",
        subtitle: "저장 공간 사용 현황 확인",
        description:
            "Visualize total folder size, item counts, and hierarchical storage distribution at a single glance with zero delay.",
    },
    {
        imageSrc: "/icons/large-files-finder-icon.svg",
        title: "Large Files Finder",
        subtitle: "용량이 큰 파일 빠르게 탐색",
        description:
            "Spot massive disk-hugging files instantly with customizable threshold filters ranging from 100 MB up to multi-gigabytes.",
    },
    {
        imageSrc: "/icons/duplicate-files-icon.svg",
        title: "Duplicate Files Detection",
        subtitle: "SHA-256 기반 중복 파일 탐지",
        description:
            "Accurately detect identical files using rigorous SHA-256 cryptographic checksum analysis, preventing mistaken deletions.",
    },
    {
        imageSrc: "/icons/advanced-filters-icon.svg",
        title: "Advanced Filters",
        subtitle: "크기, 확장자, 수정일 기준 필터",
        description:
            "Slice and isolate data effortlessly by size brackets, extension groups (.zip, .mp4, .iso), or date modified ranges.",
    },
    {
        imageSrc: "/icons/folder-analysis-icon.svg",
        title: "Folder Analysis",
        subtitle: "폴더별 저장 공간 분석",
        description:
            "Deep-dive into nested directories to isolate exact storage hogging branches without wading through Windows properties panels.",
    },
    {
        imageSrc: "/icons/fast-file-search-icon.svg",
        title: "Fast File Search",
        subtitle: "파일 이름으로 빠른 검색",
        description:
            "Instant real-time keyword querying across scanned directories, enabling rapid pinpointing of forgotten archives.",
    },
] as const;

export default function HomeFeatures() {
    return (
        <HomeFeaturesSection>
            <HomeHeroContainer>
                <HomeFeaturesContent>
                    <HomeFeaturesHeader>
                        <HomeFeaturesEyebrow>
                            KEY FEATURES
                        </HomeFeaturesEyebrow>

                        <HomeFeaturesTitle>
                            Engineered for speed and clarity
                        </HomeFeaturesTitle>

                        <HomeFeaturesDescription>
                            Everything you need to regain disk space without
                            unnecessary clutter or sluggish background tasks.
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