// src/app/(features)/dashboard/page.tsx
"use client";

import { Box } from "@mui/material";
import NotificationSection from "@/components/fs-kt-0001/NotificationSection/NotificationSection";
import SeminarListSection from "@/components/fs-kt-0001/SeminarListSection/SeminarListSection";
import NewsFeedSection from "@/components/fs-kt-0001/NewsFeedSection/NewsFeedSection";

export default function DashboardPage() {
  return (
    <Box sx={{ p: 3, bgcolor: "#f5f5f5", minHeight: "100vh" }}>
      <NotificationSection />
      <SeminarListSection />
      <NewsFeedSection />
    </Box>
  );
}
