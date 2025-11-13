// src/components/common/NewsHeader.tsx
import { Stack, Typography } from "@mui/material";

interface NewsHeaderProps {
  date: string;
  isImportant?: boolean;
  title: string;
  titleColor?: string;
}

export const NewsHeader = ({
  date,
  isImportant = false,
  title,
  titleColor = "#E1462D",
}: NewsHeaderProps) => {
  return (
    <Stack direction="row" spacing={3} alignItems="center">
      {/* Date */}
      <Typography
        sx={{
          fontFamily: "'Noto Sans JP', sans-serif",
          fontSize: 14,
          fontWeight: 400,
          lineHeight: "150%",
          color: "#73788C",
          width: 74,
        }}
      >
        {date}
      </Typography>

      {/* Important Badge */}
      {isImportant && (
        <Typography
          sx={{
            fontFamily: "'Noto Sans JP', sans-serif",
            fontSize: 12,
            fontWeight: 600,
            lineHeight: "150%",
            color: "#FFFFFF",
            bgcolor: "#E1462D",
            px: 2,
            py: 0.25,
            textAlign: "center",
            width: 72,
            height: 22,
          }}
        >
          重要
        </Typography>
      )}

      {/* Title */}
      <Typography
        sx={{
          fontFamily: "'Noto Sans JP', sans-serif",
          fontSize: 16,
          fontWeight: 600,
          lineHeight: "150%",
          color: titleColor,
          flex: 1,
        }}
      >
        {title}
      </Typography>
    </Stack>
  );
};

export default NewsHeader;
