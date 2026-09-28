"use client";

import { useState } from "react";
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

const previewTabs: {
  label: string;
  value: PreviewTabType;
}[] = [
  {
    label: "Storage Overview",
    value: "storage",
  },
  {
    label: "Large Files",
    value: "large",
  },
  {
    label: "Duplicate Files",
    value: "duplicate",
  },
];

const previewCards = [
  {
    icon: <FolderBreakdownIcon />,
    title: "Folder Breakdown",
    imageSrc: "/images/screenshots/folders-preview.png",
    description: (
      <>
        Inspect deeply nested directories to see where accumulated <br />
        gigabytes dwell.
      </>
    ),
  },
  {
    icon: <FileTypesDistributionIcon />,
    title: "File Types Distribution",
    imageSrc: "/images/screenshots/file-types-preview.png",
    description: (
      <>
        Isolate videos, disk images, archives, and system <br />
        configuration entries.
      </>
    ),
  },
  {
    icon: <NativeSettingsIcon />,
    title: "Native Settings",
    imageSrc: "/images/screenshots/settings-preview.png",
    description: (
      <>
        Lightweight, portable behavior with no intrusive system <br />
        background services.
      </>
    ),
  },
];

export default function HomeAppPreviewSection() {
  const [activeTab, setActiveTab] = useState<PreviewTabType>("storage");

  return (
    <HomeAppPreviewContainer>
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

            <HomeAppPreviewTabs>
              {previewTabs.map((tab) => (
                <PreviewTab
                  key={tab.value}
                  label={tab.label}
                  active={activeTab === tab.value}
                  onClick={() => setActiveTab(tab.value)}
                />
              ))}
            </HomeAppPreviewTabs>
          </HomeAppPreviewHeader>

          <HomeAppPreviewMain>
            <Image
              src="/images/screenshots/folders-preview.png"
              alt="Large File Explorer storage overview"
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