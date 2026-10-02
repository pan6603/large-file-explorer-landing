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
    label: "Storage Overview",
    value: "storage",
    image: {
      src: "/images/screenshots/storage-overview-preview.png",
      alt: "Large File Explorer storage overview showing folder sizes",
    },
  },
  {
    label: "Large Files",
    value: "large",
    image: {
      src: "/images/hero/app-preview.png",
      alt: "Large File Explorer list of large files",
    },
  },
  {
    label: "Duplicate Files",
    value: "duplicate",
    image: {
      src: "/images/screenshots/duplicate-files-preview.png",
      alt: "Large File Explorer duplicate files grouped for comparison",
    },
  },
];

const previewPanelId = "app-preview-panel";

const previewCards = [
  {
    icon: <FolderBreakdownIcon />,
    title: "Folder Breakdown",
    imageSrc: "/images/screenshots/folders-preview.png",
    description: (
      <>
        See which folders use the most space.
      </>
    ),
  },
  {
    icon: <FileTypesDistributionIcon />,
    title: "File Types Distribution",
    imageSrc: "/images/screenshots/file-types-preview.png",
    description: (
      <>
        See which file types use the most space.
      </>
    ),
  },
  {
    icon: <NativeSettingsIcon />,
    title: "Native Settings",
    imageSrc: "/images/screenshots/settings-preview.png",
    description: (
      <>
        Customize the app to fit your workflow.
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
                INSIDE LARGE FILE EXPLORER
              </HomeAppPreviewEyebrow>

              <HomeAppPreviewTitle>
                Explore the clean, intuitive interface
              </HomeAppPreviewTitle>

              <HomeAppPreviewDescription>
                Designed with Microsoft Fluent design paradigms for native
                Windows power users.
              </HomeAppPreviewDescription>
            </HomeAppPreviewIntro>

            <HomeAppPreviewTabs role="tablist" aria-label="App preview screenshots">
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
