// src/components/layout/Header.tsx
"use client";

import { AppBar, Toolbar, Typography, Box, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

/**
 * ヘッダーコンポーネント
 * - 画面上部に固定表示
 * - 左：ロゴ + サイト名
 * - 中：サブタイトル
 * - 右：ユーザー情報
 * - モバイル対応：ハンバーガーメニュー
 */
export default function Header({ onMenuClick }: { onMenuClick?: () => void }) {
  return (
    <AppBar
      position="fixed"
      color="transparent"
      elevation={0}
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        borderBottom: "1px solid #e0e0e0",
        bgcolor: "white",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", p: 2 }}>
        {/* 左：ロゴ + サイト名 */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          {/* ハンバーガーメニュー（モバイルのみ） */}
          {onMenuClick && (
            <IconButton
              sx={{ display: { xs: "block", md: "none" }, mr: 1 }}
              onClick={onMenuClick}
            >
              <MenuIcon />
            </IconButton>
          )}

          {/* ロゴ */}
          <Box
            sx={{
              width: 40,
              height: 40,
              bgcolor: "#003087",
              borderRadius: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontWeight: "bold",
              fontSize: 18,
            }}
          >
            M
          </Box>

          {/* サイト名 */}
          <Box sx={{ minWidth: 160 }}>
            <Typography
              variant="h6"
              sx={{ fontWeight: 700, fontSize: "1.4rem" }}
            >
              MIZUHO
            </Typography>
            <Typography variant="caption" sx={{ fontSize: 11 }}>
              みずほ信託銀行
            </Typography>
          </Box>
        </Box>

        {/* 中：サブタイトル */}
        <Box sx={{ flexGrow: 1, textAlign: "left", fontSize: 12, pl: 2 }}>
          <div>証券代行お客様サイト</div>
        </Box>

        {/* 右：ユーザー情報 */}
        <Box sx={{ textAlign: "right", fontSize: 12 }}>
          <div>○○○株式会社 ○○○○様</div>
          <div>前回ログイン日時 2025/09/27 12:13:14</div>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
