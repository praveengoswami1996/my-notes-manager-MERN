import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MainSection from "@/components/MainSection";

export default function HomePage() {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <Header />
      <MainSection />
      <Footer />
    </div>
  )
}