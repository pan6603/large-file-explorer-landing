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
    HomeCTASourceRepository,
    SourceRepositoryText
} from "@/components/sections/cta/cta.styles"
import DownloadBoxIcon from "@/components/ui/icons/DownloadBoxIcon"
import WindowsIcon from "@/components/ui/icons/WindowsIcon"
import GithubIcon from "@/components/ui/icons/GithubIcon";

export default function HomeCta() {
    return (
        <>
            <HomeCtaSection>
                <HomeCtaContainer>
                    <HomeCtaWrapper>
                        <HomeCtaContent>
                            <DownloadBoxIcon />
                            <HomeCTAHeading>Take control of your storage.</HomeCTAHeading>
                            <HomeCTADescription>
                                Find large and duplicate files without digging through folders manually. Completely free <br />
                                and open-source desktop utility.
                            </HomeCTADescription>
                            <HomeCTAButtons>
                                <HomeCTADownloadButton href="">
                                    <WindowsIcon />
                                    <HomeCTADownloadButtonText>Download for Windows</HomeCTADownloadButtonText>
                                </HomeCTADownloadButton>
                                <HomeCTASourceRepository href="">
                                    <GithubIcon />
                                    <SourceRepositoryText>Source Repository</SourceRepositoryText>
                                </HomeCTASourceRepository>

                            </HomeCTAButtons>
                            <HomeCTAMeta>v1.0.0 · Windows 64-bit · Downloaded via GitHub Releases · 100% Free & Open Source</HomeCTAMeta>
                        </HomeCtaContent>
                    </HomeCtaWrapper>
                </HomeCtaContainer>
            </HomeCtaSection>
        </>
    )
}