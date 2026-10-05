import {
    FooterContainer,
    FooterWrapper,
    FooterContent,
    FooterBrand,
    FooterBrandTitleContainer,
    FooterBrandTitle,
    FooterBrandDescription,
    FooterLinks,
    FooterLink,
    FooterPlatform
} from "@/components/layout/footer/Footer.styles"
import LogoIcon from "@/components/layout/header/LogoIcon";


export default function Footer() {
    return (
        <>
            <FooterContainer>
                <FooterWrapper>
                    <FooterContent>
                        <FooterBrand>
                            <FooterBrandTitleContainer>
                                <LogoIcon />
                                <FooterBrandTitle>FileMap</FooterBrandTitle>
                            </FooterBrandTitleContainer>
                            <FooterBrandDescription>
                                © 2026 FileMap. <br className="tablet-br" />
                                Free & Open Source native Windows utility. Released under MIT License.
                            </FooterBrandDescription>
                        </FooterBrand>
                        <FooterLinks>
                            <FooterLink 
                                href="https://github.com/pan6603/large-file-explorer-downloads/releases/tag/v1.0.0"
                                target="_blank"
                                >
                                    v1.0.0 Release Notes
                            </FooterLink>

                            <FooterLink
                                href="https://github.com/pan6603/large-file-explorer-downloads"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                GitHub Repository
                            </FooterLink>
                            <FooterLink 
                                href="https://github.com/pan6603/large-file-explorer-downloads/issues"
                                target="_blank"
                            >
                                    Bug Tracker
                            </FooterLink>
                            <FooterPlatform>Windows 10 / 11 (64-bit)</FooterPlatform>
                        </FooterLinks>
                    </FooterContent>
                </FooterWrapper>
            </FooterContainer>
        </>
    )
}