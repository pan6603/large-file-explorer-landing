"use client";

import { useState } from "react";

import {
    DownloadButton,
    DownloadButtonText,
    HeaderActions,
    HeaderContainer,
    HeaderInner,
    HeaderLogo,
    LogoIconText,
    MenuButton,
    NavContainer,
    NavItem,
    ResponsiveMenu,
    ResponsiveMenuEntry,
    ResponsiveMenuItem,
    ResponsiveMenuList,
    ResponsiveDownloadItem,
} from "@/components/layout/header/Header.styles";
import LogoIcon from "@/components/layout/header/LogoIcon";
import CloseIcon from "@/components/ui/icons/CloseIcon";
import HamburgerIcon from "@/components/ui/icons/HamburgerIcon";
import WindowsIcon from "@/components/ui/icons/WindowsIcon";

const WINDOWS_DOWNLOAD_URL =
    "";

const NAV_ITEMS = [
    { label: "주요 기능", href: "#features" },
    { label: "미리보기", href: "#screenshots" },
    { label: "성능", href: "#performance" },
    { label: "사용 안내", href: "#documentation" },
] as const;

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <HeaderContainer>
            <HeaderInner>
                <HeaderLogo>
                    <LogoIcon />
                    <LogoIconText>FileMap</LogoIconText>
                </HeaderLogo>

                <NavContainer aria-label="주요 탐색 메뉴">
                    {NAV_ITEMS.map(({ label, href }) => (
                        <NavItem key={href} href={href}>
                            {label}
                        </NavItem>
                    ))}
                </NavContainer>

                <HeaderActions>

                    <DownloadButton href={WINDOWS_DOWNLOAD_URL}>
                        <WindowsIcon width={16} height={16} />
                        <DownloadButtonText>MicroSoft Store 출시 예정</DownloadButtonText>
                    </DownloadButton>

                    <MenuButton
                        type="button"
                        onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
                        aria-label={
                            isMenuOpen
                                ? "탐색 메뉴 닫기"
                                : "탐색 메뉴 열기"
                        }
                        aria-expanded={isMenuOpen}
                        aria-controls="tablet-navigation-menu"
                    >
                        {isMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
                    </MenuButton>
                </HeaderActions>
            </HeaderInner>

            {isMenuOpen && (
                <ResponsiveMenu
                    id="responsive-navigation-menu"
                    aria-label="반응형 탐색 메뉴"
                >
                    <ResponsiveMenuList>
                        {NAV_ITEMS.map(({ label, href }) => (
                            <ResponsiveMenuEntry key={href}>
                                <ResponsiveMenuItem href={href} onClick={closeMenu}>
                                    {label}
                                </ResponsiveMenuItem>
                            </ResponsiveMenuEntry>
                        ))}

                        <ResponsiveMenuEntry>
                            <ResponsiveDownloadItem
                                href={WINDOWS_DOWNLOAD_URL}
                                onClick={closeMenu}
                            >
                                <WindowsIcon width={16} height={16} />
                                Windows용 다운로드
                            </ResponsiveDownloadItem>
                        </ResponsiveMenuEntry>
                    </ResponsiveMenuList>
                </ResponsiveMenu>
            )}
        </HeaderContainer>
    );
}
