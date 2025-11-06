// src/components/NoticeSection.tsx
import { Box, Typography, Chip } from "@mui/material";

/**
 * お知らせデータ
 * - date: 日付
 * - important: 重要フラグ
 * - title: お知らせタイトル
 */
const notices = [
  { date: "2025/07/17", important: true, title: "運営担当者からのお知らせ" },
  { date: "2025/07/17", important: false, title: "お知らせタイトル3" },
];

/**
 * 重要なお知らせセクション
 * - 横並びレイアウト
 * - 重要項目は赤文字＋赤タグ
 * - 各項目下に区切り線
 * - 右側矢印
 */
export default function NoticeSection() {
  return (
    <Box sx={{ display: "flex", gap: 3, alignItems: "flex-start" }}>
      {/* 左：固定タイトル */}
      <Typography
        variant="h6"
        sx={{
          fontWeight: 700,
          whiteSpace: "nowrap",
          minWidth: 120,
          pt: 0.5,
        }}
      >
        重要なお知らせ
      </Typography>

      {/* 右：可変幅コンテンツ */}
      <Box sx={{ flex: 1 }}>
        {notices.map((n, i) => (
          <Box
            key={i}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              my: 1,
              fontSize: 14,
              pb: 1,
              borderBottom: "1px solid",
              borderColor: "divider",
            }}
          >
            {/* 日付 */}
            <Typography sx={{ minWidth: 90, color: "text.secondary" }}>
              {n.date}
            </Typography>

            {/* 重要タグ（重要時のみ表示） */}
            <Box
              sx={{ minWidth: 40, display: "flex", justifyContent: "center" }}
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
                    // 关键：移除圆角
                    borderRadius: 0,
                  }}
                >
                  重要
                </Box>
              ) : (
                <Box sx={{ width: 40 }} />
              )}{" "}
            </Box>

            {/* タイトル */}
            <Typography
              sx={{
                flex: 1,
                color: n.important ? "error.main" : "text.primary",
                fontWeight: n.important ? 700 : 400,
              }}
            >
              {n.title}
            </Typography>

            {/* 右矢印 */}
            <Box sx={{ color: "text.secondary", fontWeight: 300 }}>→</Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
