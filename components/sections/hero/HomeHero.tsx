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
                            <ReleaseBadgeText>v1.0.0 출시</ReleaseBadgeText>
                            <Divider>•</Divider>
                            <PlatformText>Windows 데스크톱 앱</PlatformText>
                        </ReleaseBadge>

                        <HomeHeroTitleWrapper>
                            <HomeHeroTitle>
                                내 저장 공간을 차지하는 <br />
                                파일을 한눈에
                            </HomeHeroTitle>
                        </HomeHeroTitleWrapper>

                        <HomeHeroDescription>
                            대용량 파일과 중복 파일을 빠르게 찾고 저장 공간 사용 현황을 한눈에 확인할 수 있는 <br />
                            Windows 파일 관리 도구입니다.
                        </HomeHeroDescription>

                        <HomeHeroActions>
                            <PrimaryButtonStyle href="">
                                <WindowsIcon />
                                MicroSoft Store 출시 예정
                                <DownloadIcon />
                            </PrimaryButtonStyle>
                        </HomeHeroActions>

                        <AppPreview>
                            <Image
                                src="/images/hero/app-hero-preview.png"
                                alt="FileMap 앱 화면 미리보기"
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
