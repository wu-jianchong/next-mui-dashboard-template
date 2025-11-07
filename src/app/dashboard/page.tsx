// src/app/(features)/dashboard/page.tsx
import { Box } from "@mui/material";
import NoticeSection from "@/components/NoticeSection";
import BannerCarousel from "@/components/BannerCarousel";
import NewsList from "@/components/NewsList";

export default function DashboardPage() {
  return (
    <Box sx={{ p: 3, bgcolor: "#f5f5f5", minHeight: "100vh" }}>
      <Box
        sx={{ bgcolor: "white", p: 3, borderRadius: 2, mb: 4, boxShadow: 1 }}
      >
        <NoticeSection />
      </Box>
      <BannerCarousel />
      <NewsList />
    </Box>
  );
}
