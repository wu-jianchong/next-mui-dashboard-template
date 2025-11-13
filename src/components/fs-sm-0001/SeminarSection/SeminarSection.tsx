// src/components/SeminarSection.tsx
import { Box, Stack, Typography } from "@mui/material";
import { SearchFormSection } from "./SearchFormSection";
import SeminarListSection from "./SeminarListSection";
import { TitleUnderline } from "@/components/common/TitleUnderline";

export const SeminarSection = (): JSX.Element => {
  return (
    <Stack spacing={4} component="section">
      {/* Title with reusable underline */}
      <Stack spacing={1}>
        <Typography
          variant="h5"
          component="h1"
          sx={{
            fontFamily: "'Noto Sans JP', sans-serif",
            fontWeight: 700,
            fontSize: 20,
            lineHeight: "30px",
            color: "#000000",
          }}
        >
          セミナー一覧
        </Typography>
        <TitleUnderline />
      </Stack>

      <SearchFormSection />
      <SeminarListSection />
    </Stack>
  );
};

export default SeminarSection;
