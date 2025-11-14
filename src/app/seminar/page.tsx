// app/seminars/page.tsx
"use client";

import { Box } from "@mui/material";
import SeminarSection from "@/components/fs-sm/SeminarSection/SeminarSection";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export default function SeminarsPage() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box sx={{ bgcolor: "#F5F9FC", minHeight: "100vh", py: 4 }}>
        <Box sx={{ maxWidth: 1200, mx: "auto", px: { xs: 2, md: 3 } }}>
          <SeminarSection />
        </Box>
      </Box>
    </LocalizationProvider>
  );
}
