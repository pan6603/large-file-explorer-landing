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



export default function Footer() {
    return (
        <>
            <FooterContainer>
                <FooterWrapper>
                    <FooterContent>
                        <FooterBrand>
                            <FooterBrandTitleContainer>
                                <FooterBrandTitle>Large File Explorer</FooterBrandTitle>
                            </FooterBrandTitleContainer>
                            <FooterBrandDescription>
                                © 2024 Large File Explorer. <br className="tablet-br" />
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