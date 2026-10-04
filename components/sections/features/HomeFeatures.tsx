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
        title: "Storage Overview",
        subtitle: "View Storage Usage",
        description:
            "Visualize total folder size, item counts, and hierarchical storage distribution at a single glance with zero delay.",
    },
    {
        imageSrc: "/icons/large-files-finder-icon.svg",
        title: "Large Files Finder",
        subtitle: "Quickly Find Large Files",
        description:
            "Spot massive disk-hugging files instantly with customizable threshold filters ranging from 100 MB up to multi-gigabytes.",
    },
    {
        imageSrc: "/icons/duplicate-files-icon.svg",
        title: "Duplicate Files Detection",
        subtitle: "Detect Duplicate Files Using SHA-256",
        description:
            "Accurately detect identical files using rigorous SHA-256 cryptographic checksum analysis, preventing mistaken deletions.",
    },
    {
        imageSrc: "/icons/advanced-filters-icon.svg",
        title: "Advanced Filters",
        subtitle: "Filter by Size, Extension, and Modified Date",
        description:
            "Slice and isolate data effortlessly by size brackets, extension groups (.zip, .mp4, .iso), or date modified ranges.",
    },
    {
        imageSrc: "/icons/folder-analysis-icon.svg",
        title: "Folder Analysis",
        subtitle: "Analyze Storage Usage by Folder",
        description:
            "Deep-dive into nested directories to isolate exact storage hogging branches without wading through Windows properties panels.",
    },
    {
        imageSrc: "/icons/fast-file-search-icon.svg",
        title: "Fast File Search",
        subtitle: "Quickly Search by File Name",
        description:
            "Instant real-time keyword querying across scanned directories, enabling rapid pinpointing of forgotten archives.",
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
                        <HomeFeaturesEyebrow>KEY FEATURES</HomeFeaturesEyebrow>

                        <HomeFeaturesTitle>Engineered for speed and clarity</HomeFeaturesTitle>

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