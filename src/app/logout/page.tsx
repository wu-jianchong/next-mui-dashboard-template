"use client";

import { Box, Paper, Typography, Button } from "@mui/material";
import Link from "next/link";

export default function LogoutPage() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 2,
        pt: { xs: 1, sm: 2 }, // ← 关键：减少上边距
      }}
    >
      <Paper
        elevation={3}
        sx={{
          width: "100%",
          maxWidth: 420,
          p: { xs: 3, sm: 5 }, // 移动端减小内边距
          borderRadius: 3,
          textAlign: "center",
        }}
      >
        {/* サービスロゴ */}
        <Box sx={{ mb: 3 }}>
          <Box
            sx={{
              display: "inline-block",
              px: 3,
              py: 1,
              border: "2px solid #333",
              borderRadius: "8px",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            サービスロゴ
          </Box>
        </Box>

        {/* ログアウト完了メッセージ */}
        <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
          ログアウト完了
        </Typography>

        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          ログアウトしました。ご利用ありがとうございました。
        </Typography>

        {/* ログインページへ戻るボタン */}
        <Button
          component={Link}
          href="/login"
          variant="outlined"
          size="large"
          fullWidth
          sx={{
            py: 1.5,
            fontSize: "16px",
            borderRadius: "8px",
            textTransform: "none",
            borderColor: "#1976d2",
            color: "#1976d2",
            "&:hover": {
              borderColor: "#1565c0",
              backgroundColor: "rgba(25, 118, 210, 0.04)",
            },
          }}
        >
          ログインページ
        </Button>
      </Paper>
    </Box>
  );
}
