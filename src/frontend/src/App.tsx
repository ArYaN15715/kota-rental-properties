import FeaturedProperties from "@/components/FeaturedProperties";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import InquirySection from "@/components/InquirySection";
import LocalAuthority from "@/components/LocalAuthority";
import MobileBottomCTA from "@/components/MobileBottomCTA";
import Navbar from "@/components/Navbar";
import SearchSection from "@/components/SearchSection";
import Testimonials from "@/components/Testimonials";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import WhyChooseUs from "@/components/WhyChooseUs";
import { Toaster } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 1000 * 60 * 5, retry: 1 } },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div
        className="min-h-screen bg-background font-body overflow-x-hidden"
        data-ocid="app.page"
      >
        <Navbar />
        <main>
          <HeroSection />
          <SearchSection />
          <FeaturedProperties />
          <WhyChooseUs />
          <LocalAuthority />
          <Testimonials />
          <InquirySection />
        </main>
        <Footer />
        <WhatsAppFloat />
        <MobileBottomCTA />
        <Toaster position="top-right" richColors />
      </div>
    </QueryClientProvider>
  );
}
