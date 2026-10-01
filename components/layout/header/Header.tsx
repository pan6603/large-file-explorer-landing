"use client";

import { useState } from "react";

import {
    DownloadButton,
    DownloadButtonText,
    GitHubButton,
    GitHubButtonText,
    HeaderActions,
    HeaderContainer,
    HeaderInner,
    HeaderLogo,
    LogoIconText,
    MenuButton,
    NavContainer,
    NavItem,
    TabletDownloadItem,
    TabletMenu,
    TabletMenuEntry,
    TabletMenuItem,
    TabletMenuList,
} from "@/components/layout/header/Header.styles";
import LogoIcon from "@/components/layout/header/LogoIcon";
import CloseIcon from "@/components/ui/icons/CloseIcon";
import GithubIcon from "@/components/ui/icons/GithubIcon";
import HamburgerIcon from "@/components/ui/icons/HamburgerIcon";
import WindowsIcon from "@/components/ui/icons/WindowsIcon";

const GITHUB_RELEASE_URL =
    "https://github.com/pan6603/large-file-explorer-downloads/releases/tag/v1.0.0";
const WINDOWS_DOWNLOAD_URL =
    "https://github.com/pan6603/large-file-explorer-downloads/releases/download/v1.0.0/large-file-explorer-amd64-installer.exe";

const NAV_ITEMS = [
    { label: "Features", href: "#features" },
    { label: "Screenshots", href: "#screenshots" },
    { label: "Performance", href: "#performance" },
    { label: "Documentation", href: "#documentation" },
] as const;

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <HeaderContainer>
            <HeaderInner>
                <HeaderLogo>
                    <LogoIcon />
                    <LogoIconText>Large File Explorer</LogoIconText>
                </HeaderLogo>

                <NavContainer aria-label="Primary navigation">
                    {NAV_ITEMS.map(({ label, href }) => (
                        <NavItem key={href} href={href}>
                            {label}
                        </NavItem>
                    ))}
                </NavContainer>

                <HeaderActions>
                    <GitHubButton href={GITHUB_RELEASE_URL}>
                        <GithubIcon />
                        <GitHubButtonText>GitHub</GitHubButtonText>
                    </GitHubButton>

                    <DownloadButton href={WINDOWS_DOWNLOAD_URL}>
                        <WindowsIcon width={16} height={16} />
                        <DownloadButtonText>Download for Windows</DownloadButtonText>
                    </DownloadButton>

                    <MenuButton
                        type="button"
                        onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
                        aria-label={
                            isMenuOpen
                                ? "Close navigation menu"
                                : "Open navigation menu"
                        }
                        aria-expanded={isMenuOpen}
                        aria-controls="tablet-navigation-menu"
                    >
                        {isMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
                    </MenuButton>
                </HeaderActions>
            </HeaderInner>

            {isMenuOpen && (
                <TabletMenu
                    id="tablet-navigation-menu"
                    aria-label="Tablet navigation"
                >
                    <TabletMenuList>
                        {NAV_ITEMS.map(({ label, href }) => (
                            <TabletMenuEntry key={href}>
                                <TabletMenuItem href={href} onClick={closeMenu}>
                                    {label}
                                </TabletMenuItem>
                            </TabletMenuEntry>
                        ))}

                        <TabletMenuEntry>
                            <TabletMenuItem
                                href={GITHUB_RELEASE_URL}
                                onClick={closeMenu}
                            >
                                <GithubIcon />
                                GitHub
                            </TabletMenuItem>
                        </TabletMenuEntry>

                        <TabletMenuEntry>
                            <TabletDownloadItem
                                href={WINDOWS_DOWNLOAD_URL}
                                onClick={closeMenu}
                            >
                                <WindowsIcon width={16} height={16} />
                                Download for Windows
                            </TabletDownloadItem>
                        </TabletMenuEntry>
                    </TabletMenuList>
                </TabletMenu>
            )}
        </HeaderContainer>
    );
}
