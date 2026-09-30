import {
    HeaderContainer,
    HeaderInner,
    HeaderLogo,
    LogoIconText,
    NavContainer,
    NavItem,
    HeaderActions,
    GitHubButton,
    GitHubButtonText,
    DownloadButton,
    DownloadButtonText
} from "@/components/layout/header/header.styles";
import LogoIcon from "@/components/layout/header/LogoIcon";
import WindowsIcon from "@/components/ui/icons/WindowsIcon";
import GithubIcon from "@/components/ui/icons/GithubIcon";



export default function Header() {
    return (
        <>
            <HeaderContainer>
                <HeaderInner>
                    <HeaderLogo>
                        <LogoIcon />
                        <LogoIconText>Large File Explorer</LogoIconText>
                    </HeaderLogo>

                    <NavContainer>
                        <NavItem href="#features">Features</NavItem>
                        <NavItem href="#screenshots">Screenshots</NavItem>
                        <NavItem href="#performance">Performance</NavItem>
                        <NavItem href="#documentation">Documentation</NavItem>
                    </NavContainer>

                    <HeaderActions>
                        <GitHubButton href="https://github.com/pan6603/large-file-explorer-downloads/releases/tag/v1.0.0">
                            <GithubIcon />
                            <GitHubButtonText>GitHub</GitHubButtonText>
                        </GitHubButton>

                        <DownloadButton href="https://github.com/pan6603/large-file-explorer-downloads/releases/download/v1.0.0/large-file-explorer-amd64-installer.exe">
                            <WindowsIcon width={16}height={16} />
                            <DownloadButtonText>Download for Windows</DownloadButtonText>
                        </DownloadButton>
                    </HeaderActions>

                </HeaderInner>
            </HeaderContainer>
        </>
    )
}