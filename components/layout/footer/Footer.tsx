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
                                © 2026 FileMap. All rights reserved.
                            </FooterBrandDescription>
                        </FooterBrand>
                        <FooterLinks>
                            <FooterLink 
                                href=""
                                target="_blank"
                                >
                                    개인정보처리방침
                            </FooterLink>

                            <FooterLink
                                href=""
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                이용약관
                            </FooterLink>
                            <FooterLink 
                                href=""
                                target="_blank"
                            >
                                    고객지원
                            </FooterLink>
                        
                        </FooterLinks>
                    </FooterContent>
                </FooterWrapper>
            </FooterContainer>
        </>
    )
}
