import Image from "next/image";
import {
    LogoIconContainer
} from "@/components/layout/header/Header.styles";




export default function LogoIcon() {
    return (
        <>
           <LogoIconContainer>
                <Image
                    src="/images/logo/file-map-logo.svg"
                    alt="logo"
                    width={48}
                    height={32}
                />
           </LogoIconContainer>
        </>
    )
}
