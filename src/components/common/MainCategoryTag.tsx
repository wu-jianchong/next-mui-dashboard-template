// src/components/common/MainCategoryTag.tsx
import { Box, Typography } from "@mui/material";

interface MainCategoryTagProps {
  label: string;
  bgColor: string;
  textColor: string;
  width?: number; // 中间文字区宽度
}

export const MainCategoryTag = ({
  label,
  bgColor,
  textColor,
  width = 64,
}: MainCategoryTagProps) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", height: 22 }}>
      {/* 左侧三角：右下部分（从右上到左下） */}
      <Box
        sx={{
          width: 10,
          height: 22,
          bgcolor: bgColor,
          clipPath: "polygon(100% 0, 100% 100%, 0 100%)",
          flex: "none",
        }}
      />

      {/* 中间文字区 */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width,
          height: 22,
          bgcolor: bgColor,
          px: "8px",
          py: "2px",
        }}
      >
        <Typography
          sx={{
            fontFamily: "'Noto Sans JP', sans-serif",
            fontWeight: 600,
            fontSize: 12,
            lineHeight: "150%",
            color: textColor,
            whiteSpace: "nowrap",
          }}
        >
          {label}
        </Typography>
      </Box>

      {/* 右侧三角：左上部分（从右上到左下） */}
      <Box
        sx={{
          width: 10,
          height: 22,
          bgcolor: bgColor,
          clipPath: "polygon(0 0, 100% 0, 0 100%)",
          flex: "none",
        }}
      />
    </Box>
  );
};

export default MainCategoryTag;
