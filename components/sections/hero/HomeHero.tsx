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
import { PrimaryButtonStyle } from "@/components/ui/buttons/button.styles";
import WindowsIcon from "@/components/ui/icons/WindowsIcon";
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
                            <PlatformText>Native Windows Desktop App</PlatformText>
                        </ReleaseBadge>

                        <HomeHeroTitleWrapper>
                            <HomeHeroTitle>
                                Find what's taking up your <br />
                                storage.
                            </HomeHeroTitle>
                        </HomeHeroTitleWrapper>

                        <HomeHeroDescription>
                            FileMap is a native Windows desktop app that helps you quickly find large files, <br />
                            duplicate files, and understand what's using your storage.
                        </HomeHeroDescription>

                        <HomeHeroActions>
                            <PrimaryButtonStyle href="">
                                <WindowsIcon />
                                Download for Windows
                                <DownloadIcon />
                            </PrimaryButtonStyle>
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