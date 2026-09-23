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
                        <NavItem href="">Features</NavItem>
                        <NavItem href="">Screenshots</NavItem>
                        <NavItem href="">Performance</NavItem>
                        <NavItem href="">Documentation</NavItem>
                    </NavContainer>

                    <HeaderActions>
                        <GitHubButton href="">
                            <GithubIcon />
                            <GitHubButtonText>GitHub</GitHubButtonText>
                        </GitHubButton>

                        <DownloadButton href="">
                            <WindowsIcon />
                            <DownloadButtonText>Download for Windows</DownloadButtonText>
                        </DownloadButton>
                    </HeaderActions>

                </HeaderInner>
            </HeaderContainer>
        </>
    )
}