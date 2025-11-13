// src/components/common/TitleUnderline.tsx
import { Box } from "@mui/material";

export const TitleUnderline = () => {
  return (
    <Box sx={{ position: "relative", width: 34, height: 4 }}>
      {/* 左侧矩形：24px 深蓝 */}
      <Box
        sx={{
          position: "absolute",
          width: 24,
          height: 4,
          left: 0,
          top: 0,
          bgcolor: "#000066", // Mizuho Cosmic Red
        }}
      />
      {/* 右侧矩形：14px 红 */}
      <Box
        sx={{
          position: "absolute",
          width: 14,
          height: 4,
          left: 20,
          top: 0,
          bgcolor: "#FF0000", // Mizuho Horizon Red
        }}
      />
    </Box>
  );
};

export default TitleUnderline;
