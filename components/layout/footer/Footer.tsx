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
                                © 2024 Large File Explorer. Free & Open Source native Windows utility. Released under MIT License.
                            </FooterBrandDescription>
                        </FooterBrand>
                        <FooterLinks>
                            <FooterLink href="...">v1.0.0 Release Notes</FooterLink>
                            <FooterLink href="...">GitHub Repository</FooterLink>
                            <FooterLink href="...">Bug Tracker</FooterLink>
                            <FooterPlatform>Windows 10 / 11 (64-bit)</FooterPlatform>
                        </FooterLinks>
                    </FooterContent>
                </FooterWrapper>
            </FooterContainer>
        </>
    )
}