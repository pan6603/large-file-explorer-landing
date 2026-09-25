import Image from "next/image";

import { 
    HomeHeroSection,
    HomeHeroContainer,
    HomeHeroContent,
    ReleaseBadge,
    StatusIndicator,
    ReleaseBadgeText,
    Divider,
    PlatformText,
    HomeHeroTitleWrapper,
    HomeHeroTitle,
    HomeHeroDescription,
    HomeHeroActions,
    ReleaseMeta,
    ReleaseMetaText,
    AppPreview
} from "@/components/sections/hero/hero.styles";
import { PrimaryButtonStyle, SecondaryButtonStyle } from "@/components/ui/buttons/button.styles";
import WindowsIcon from "@/components/ui/icons/WindowsIcon";
import GithubIcon from "@/components/ui/icons/GithubIcon";
import DownloadIcon from "@/components/ui/icons/DownloadIcon";

export default function HomeHero() {
    return (
        <>
            <HomeHeroSection>
                <HomeHeroContainer>

                    <HomeHeroContent>
                        <ReleaseBadge>
                            <StatusIndicator />
                            <ReleaseBadgeText>v1.0.0 Released</ReleaseBadgeText>
                            <Divider>•</Divider>
                            <PlatformText>Native Windows 64-bit utility</PlatformText>
                        </ReleaseBadge>

                        <HomeHeroTitleWrapper>
                            <HomeHeroTitle>
                                Find what's taking up your
                                storage.
                            </HomeHeroTitle>
                        </HomeHeroTitleWrapper>

                        <HomeHeroDescription>
                            Large File Explorer helps you quickly find large files, duplicate files, and understand what's <br />
                            using your Windows storage with zero system bloat.
                        </HomeHeroDescription>

                        <HomeHeroActions>
                            <PrimaryButtonStyle>
                                <WindowsIcon />
                                Download for Windows
                                <DownloadIcon />
                            </PrimaryButtonStyle>
                            
                            <SecondaryButtonStyle>
                                <GithubIcon />
                                View on GitHub
                            </SecondaryButtonStyle>
                        </HomeHeroActions>

                        <ReleaseMeta>
                            <ReleaseMetaText>v1.0.0 · Windows 64-bit · Free & Open Source · Downloaded via GitHub Releases</ReleaseMetaText>
                        </ReleaseMeta>

                        <AppPreview>
                            <Image
                                src="/images/hero/app-preview.png"
                                alt="app-preview"
                                width={1024}
                                height={683}
                            />
                        </AppPreview>
                    </HomeHeroContent>

                </HomeHeroContainer>
            </HomeHeroSection>
        </>
    )
}