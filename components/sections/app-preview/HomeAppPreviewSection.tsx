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
    HomeAppPreviewGrid
} from "@/components/sections/app-preview/appPreview.styles"
import PreviewTab from "@/components/ui/tabs/PreviewTab"
import AppPreviewCard from "@/components/ui/cards/AppPreviewCard"
import FolderBreakdownIcon from "@/components/ui/icons/FolderBreakdownIcon"
import FileTypesDistributionIcon from "@/components/ui/icons/FileTypesDistributionIcon"
import NativeSettingsIcon from "@/components/ui/icons/NativeSettingsIcon"

export default function HomeAppPreviewSection() {
    const [activeTab, setActiveTab] = useState("storage");

    return (
        <>
            <HomeAppPreviewContainer>
                <HomeAppPreviewWrapper>
                    <HomeAppPreviewContent>

                        <HomeAppPreviewHeader>
                            <HomeAppPreviewIntro>
                                <HomeAppPreviewEyebrow>INSIDE LARGE FILE EXPLORER</HomeAppPreviewEyebrow>
                                <HomeAppPreviewTitle>Explore the clean, intuitive interface</HomeAppPreviewTitle>
                                <HomeAppPreviewDescription>Designed with Microsoft Fluent design paradigms for native Windows power users.</HomeAppPreviewDescription>
                            </HomeAppPreviewIntro>

                            <HomeAppPreviewTabs>
                                <PreviewTab 
                                    label="Storage Overview"
                                    active={activeTab === "storage"}
                                    onClick={() => setActiveTab("storage")}
                                />

                                <PreviewTab
                                    label="Large Files"
                                    active={activeTab === "large"}
                                    onClick={() => setActiveTab("large")}
                                />

                                <PreviewTab 
                                    label="Duplicate Files"
                                    active={activeTab === "duplicate"}
                                    onClick={() => setActiveTab("duplicate")}
                                />
                            </HomeAppPreviewTabs>

                        </HomeAppPreviewHeader>

                        <HomeAppPreviewMain>
                            <Image 
                                src="/images/screenshots/folders-preview.png"
                                alt="app-preview-folders"
                                width={1192}
                                height={837}
                            />
                        </HomeAppPreviewMain>
                        <HomeAppPreviewGrid>
                            <AppPreviewCard 
                                icon={<FolderBreakdownIcon />}
                                title="Folder Breakdown"
                                imageSrc="/images/screenshots/folders-preview.png"
                                description={
                                    <>
                                        Inspect deeply nested directories to see where accumulated <br />
                                        gigabytes dwell.
                                    </>
                                }
                            />
                            <AppPreviewCard 
                                icon={<FileTypesDistributionIcon />}
                                title="File Types Distribution"
                                imageSrc="/images/screenshots/file-types-preview.png"
                                description={
                                    <>
                                        Isolate videos, disk images, archives, and system <br />
                                        configuration entries.
                                    </>
                                }
                            />
                            <AppPreviewCard 
                                icon={<NativeSettingsIcon />}
                                title="Native Settings"
                                imageSrc="/images/screenshots/settings-preview.png" 
                                description={
                                    <>
                                        Lightweight, portable behavior with no intrusive system <br />
                                        background services. 
                                    </>
                                }
                            />
                        </HomeAppPreviewGrid>
                    </HomeAppPreviewContent>
                </HomeAppPreviewWrapper>
            </HomeAppPreviewContainer>
        </>
    )
}