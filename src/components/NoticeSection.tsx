// src/components/NoticeSection.tsx
import { Box, Typography } from "@mui/material";

const notices = [
  { date: "2025/07/17", important: true, title: "運営担当者からのお知らせ" },
  { date: "2025/07/17", important: false, title: "お知らせタイトル3" },
];

/**
 * 重要なお知らせセクション
 * - レスポンシブ対応
 */
export default function NoticeSection() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
      <Typography
        variant="h6"
        sx={{
          fontWeight: 700,
          fontSize: { xs: "1rem", sm: "1.125rem" },
          mb: 1,
        }}
      >
        重要なお知らせ
      </Typography>

      {notices.map((n, i) => (
        <Box
          key={i}
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: { xs: "flex-start", sm: "center" },
            gap: { xs: 0.5, sm: 1 },
            py: 1,
            borderBottom: "1px solid",
            borderColor: "divider",
            cursor: "pointer",
            transition: "background-color 0.2s",
            "&:hover": {
              bgcolor: "#e3f2fd",
            },
          }}
        >
          <Typography
            sx={{
              fontSize: 14,
              color: "text.secondary",
              minWidth: { sm: 90 },
              width: { xs: "100%", sm: "auto" },
            }}
          >
            {n.date}
          </Typography>

          <Box
            sx={{
              minWidth: { xs: "auto", sm: 40 },
              width: { xs: "fit-content", sm: "auto" },
              mb: { xs: 0.5, sm: 0 },
            }}
          >
            {n.important ? (
              <Box
                sx={{
                  bgcolor: "error.main",
                  color: "white",
                  fontWeight: 700,
                  fontSize: 12,
                  px: 1,
                  py: 0.5,
                  borderRadius: 0,
                  display: "inline-block",
                }}
              >
                重要
              </Box>
            ) : (
              <Box sx={{ width: { xs: 0, sm: 40 } }} />
            )}
          </Box>

          <Typography
            sx={{
              flex: 1,
              fontSize: 14,
              color: n.important ? "error.main" : "text.primary",
              fontWeight: n.important ? 700 : 400,
              wordBreak: "break-word",
            }}
          >
            {n.title}
          </Typography>

          <Box
            sx={{
              color: "text.secondary",
              fontSize: 18,
              ml: { xs: 0, sm: "auto" },
            }}
          >
            →
          </Box>
        </Box>
      ))}
    </Box>
  );
}
