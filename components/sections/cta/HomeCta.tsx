"use client";

import {
    HomeCtaSection,
    HomeCtaContainer,
    HomeCtaWrapper,
    HomeCtaContent,
    HomeCTAHeading,
    HomeCTADescription,
    HomeCTAButtons,
    MicrosoftStoreBadge,
    MicrosoftStoreText
    // HomeCTADownloadButton,
    // HomeCTADownloadButtonText,
} from "@/components/sections/cta/cta.styles"
import DownloadBoxIcon from "@/components/ui/icons/DownloadBoxIcon"
// import WindowsIcon from "@/components/ui/icons/WindowsIcon"
import MicrosoftIcon from "@/components/ui/icons/MicrosoftIcon"

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
                            <HomeCTAHeading>저장 공간을 한눈에 관리하세요.</HomeCTAHeading>
                            <HomeCTADescription>
                                대용량 파일과 중복 파일을 손쉽게 찾는 빠르고 무료인 오픈소스 Windows 파일 관리 도구입니다.
                            </HomeCTADescription>
                            <HomeCTAButtons>
                                {/* <HomeCTADownloadButton href="">
                                    <WindowsIcon />
                                    <HomeCTADownloadButtonText>Windows용 다운로드</HomeCTADownloadButtonText>
                                </HomeCTADownloadButton> */}
                                <MicrosoftStoreBadge href="">
                                    <MicrosoftIcon />
                                    <MicrosoftStoreText>MicroSoft Store 출시 예정</MicrosoftStoreText>
                                </MicrosoftStoreBadge>

                            </HomeCTAButtons>
                          
                        </HomeCtaContent>
                    </HomeCtaWrapper>
                </HomeCtaContainer>
            </HomeCtaSection>
        </>
    )
}
