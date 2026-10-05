"use client";

import {
    HomeCtaSection,
    HomeCtaContainer,
    HomeCtaWrapper,
    HomeCtaContent,
    HomeCTAHeading,
    HomeCTADescription,
    HomeCTAButtons,
    HomeCTAMeta,
    HomeCTADownloadButton,
    HomeCTADownloadButtonText,
} from "@/components/sections/cta/cta.styles"
import DownloadBoxIcon from "@/components/ui/icons/DownloadBoxIcon"
import WindowsIcon from "@/components/ui/icons/WindowsIcon"

const handleCtaClick = (
    event: React.MouseEvent<HTMLAnchorElement>
) => {
    event.preventDefault();

    document.getElementById("documentation")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
    });
};

export default function HomeCta() {
    return (
        <>
            <HomeCtaSection id="documentation" onClick={handleCtaClick}>
                <HomeCtaContainer>
                    <HomeCtaWrapper>
                        <HomeCtaContent>
                            <DownloadBoxIcon />
                            <HomeCTAHeading>Take control of your storage.</HomeCTAHeading>
                            <HomeCTADescription>
                                Find large and duplicate files effortlessly. A fast, free, and open-source desktop utility.
                            </HomeCTADescription>
                            <HomeCTAButtons>
                                <HomeCTADownloadButton href="https://github.com/pan6603/large-file-explorer-downloads/releases/download/v1.0.1/FileMap-amd64-installer.exe">
                                    <WindowsIcon />
                                    <HomeCTADownloadButtonText>Download for Windows</HomeCTADownloadButtonText>
                                </HomeCTADownloadButton>

                            </HomeCTAButtons>
                            <HomeCTAMeta>v1.0.0 · Windows 64-bit · Downloaded via GitHub Releases · 100% Free & Open Source</HomeCTAMeta>
                        </HomeCtaContent>
                    </HomeCtaWrapper>
                </HomeCtaContainer>
            </HomeCtaSection>
        </>
    )
}