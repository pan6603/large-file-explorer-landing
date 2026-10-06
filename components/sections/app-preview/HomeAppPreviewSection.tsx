"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import Image from "next/image";

import {
  HomeAppPreviewContainer,
  HomeAppPreviewWrapper,
  HomeAppPreviewContent,
  HomeAppPreviewHeader,
  HomeAppPreviewIntro,
  HomeAppPreviewEyebrow,
  HomeAppPreviewTitle,
  HomeAppPreviewDescription,
  HomeAppPreviewTabs,
  HomeAppPreviewMain,
  HomeAppPreviewGrid,
} from "@/components/sections/app-preview/appPreview.styles";

import PreviewTab from "@/components/ui/tabs/PreviewTab";
import AppPreviewCard from "@/components/ui/cards/AppPreviewCard";

import FolderBreakdownIcon from "@/components/ui/icons/FolderBreakdownIcon";
import FileTypesDistributionIcon from "@/components/ui/icons/FileTypesDistributionIcon";
import NativeSettingsIcon from "@/components/ui/icons/NativeSettingsIcon";

type PreviewTabType = "storage" | "large" | "duplicate";

type PreviewImage = {
  src: string;
  alt: string;
};

type PreviewTabItem = {
  label: string;
  value: PreviewTabType;
  image: PreviewImage;
};

const previewTabs: readonly PreviewTabItem[] = [
  {
    label: "저장 공간 현황",
    value: "storage",
    image: {
      src: "/images/screenshots/app-storage-overview-preview.png",
      alt: "FileMap 저장 공간 현황과 폴더별 크기",
    },
  },
  {
    label: "대용량 파일",
    value: "large",
    image: {
      src: "/images/hero/app-hero-preview.png",
      alt: "FileMap 대용량 파일 목록",
    },
  },
  {
    label: "중복 파일",
    value: "duplicate",
    image: {
      src: "/images/screenshots/app-duplicate-files-preview.png",
      alt: "FileMap 중복 파일 비교 목록",
    },
  },
];

const previewPanelId = "app-preview-panel";

const previewCards = [
  {
    icon: <FolderBreakdownIcon />,
    title: "폴더별 용량",
    imageSrc: "/images/screenshots/app-folders-preview.png",
    description: (
      <>
        어떤 폴더가 가장 많은 공간을 사용하는지 확인하세요.
      </>
    ),
  },
  {
    icon: <FileTypesDistributionIcon />,
    title: "파일 형식별 분포",
    imageSrc: "/images/screenshots/app-file-types-preview.png",
    description: (
      <>
        어떤 파일 형식이 가장 많은 공간을 사용하는지 확인하세요.
      </>
    ),
  },
  {
    icon: <NativeSettingsIcon />,
    title: "앱 설정",
    imageSrc: "/images/screenshots/app-settings-preview.png",
    description: (
      <>
        작업 방식에 맞게 앱을 설정하세요.
      </>
    ),
  },
];

export default function HomeAppPreviewSection() {
  const [activeTab, setActiveTab] = useState<PreviewTabType>("storage");
  const tabRefs = useRef<Partial<Record<PreviewTabType, HTMLButtonElement | null>>>({});

  const activePreview =
    previewTabs.find((tab) => tab.value === activeTab)?.image ??
    previewTabs[0].image;

  const selectAndFocusTab = (tab: PreviewTabItem) => {
    setActiveTab(tab.value);
    tabRefs.current[tab.value]?.focus();
  };

  const handleTabKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
    currentTab: PreviewTabItem,
  ) => {
    const currentIndex = previewTabs.findIndex(
      (tab) => tab.value === currentTab.value,
    );

    if (currentIndex === -1) return;

    let nextIndex: number | null = null;

    switch (event.key) {
      case "ArrowRight":
        nextIndex = (currentIndex + 1) % previewTabs.length;
        break;
      case "ArrowLeft":
        nextIndex =
          (currentIndex - 1 + previewTabs.length) % previewTabs.length;
        break;
      case "Home":
        nextIndex = 0;
        break;
      case "End":
        nextIndex = previewTabs.length - 1;
        break;
      default:
        return;
    }

    event.preventDefault();
    selectAndFocusTab(previewTabs[nextIndex]);
  };

  return (
    <HomeAppPreviewContainer id="screenshots">
      <HomeAppPreviewWrapper>
        <HomeAppPreviewContent>
          <HomeAppPreviewHeader>
            <HomeAppPreviewIntro>
              <HomeAppPreviewEyebrow>
                FileMap 미리보기
              </HomeAppPreviewEyebrow>

              <HomeAppPreviewTitle>
                깔끔하고 직관적인 화면
              </HomeAppPreviewTitle>

              <HomeAppPreviewDescription>
                Windows 사용자에게 익숙한 Microsoft Fluent Design을 바탕으로
                설계했습니다.
              </HomeAppPreviewDescription>
            </HomeAppPreviewIntro>

            <HomeAppPreviewTabs role="tablist" aria-label="앱 화면 미리보기">
              {previewTabs.map((tab) => (
                <PreviewTab
                  key={tab.value}
                  ref={(element) => {
                    tabRefs.current[tab.value] = element;
                  }}
                  id={`app-preview-tab-${tab.value}`}
                  panelId={previewPanelId}
                  label={tab.label}
                  active={activeTab === tab.value}
                  onClick={() => selectAndFocusTab(tab)}
                  onKeyDown={(event) => handleTabKeyDown(event, tab)}
                />
              ))}
            </HomeAppPreviewTabs>
          </HomeAppPreviewHeader>

          <HomeAppPreviewMain
            id={previewPanelId}
            role="tabpanel"
            aria-labelledby={`app-preview-tab-${activeTab}`}
            tabIndex={0}
          >
            <Image
              key={activePreview.src}
              src={activePreview.src}
              alt={activePreview.alt}
              width={1192}
              height={837}
            />
          </HomeAppPreviewMain>

          <HomeAppPreviewGrid>
            {previewCards.map((card) => (
              <AppPreviewCard
                key={card.title}
                icon={card.icon}
                title={card.title}
                imageSrc={card.imageSrc}
                description={card.description}
              />
            ))}
          </HomeAppPreviewGrid>
        </HomeAppPreviewContent>
      </HomeAppPreviewWrapper>
    </HomeAppPreviewContainer>
  );
}
