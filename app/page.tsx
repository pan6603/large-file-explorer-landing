import Header from "@/components/layout/header/Header";
import HomeHero from "@/components/sections/hero/HomeHero";
import HomeFeatures from "@/components/sections/features/HomeFeatures";
import HomeAppPreviewSection from "@/components/sections/app-preview/HomeAppPreviewSection"
import HomeBenefits from "@/components/sections/benefits/HomeBenefits"
import HomeCta from "@/components/sections/cta/HomeCta"
import Footer from "@/components/layout/footer/Footer"

export default function Home() {
  return (
    <>
      <Header />
      <HomeHero />
      <HomeFeatures />
      <HomeAppPreviewSection />
      <HomeBenefits />
      <HomeCta />
      <Footer />
    </>
  );
}
