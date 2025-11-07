// src/components/layout/Header.tsx
"use client";

import { AppBar, Toolbar, Box, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

/**
 * ヘッダー
 * - PC：正常显示
 * - モバイル：右上ハンバーガーメニュー
 */
export default function Header({ onMenuClick }: { onMenuClick?: () => void }) {
  return (
    <AppBar
      position="fixed"
      color="transparent"
      elevation={0}
      sx={{
        height: 80,
        zIndex: (theme) => theme.zIndex.drawer + 1,
        borderBottom: "1px solid #e0e0e0",
        bgcolor: "white",
      }}
    >
      <Toolbar sx={{ height: "100%", p: 2, justifyContent: "space-between" }}>
        {/* 左：ロゴ图片 */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box
            component="img"
            src="/images/mizuho-logo.png"
            alt="Mizuho Logo"
            sx={{
              height: 72,
              width: "auto",
            }}
          />
        </Box>

        {/* 中：サブタイトル（PCのみ） */}
        <Box
          sx={{
            flexGrow: 1,
            textAlign: "left",
            fontSize: 12,
            pl: 2,
            display: { xs: "none", md: "block" },
          }}
        >
          <div>証券代行お客様サイト</div>
        </Box>

        {/* 右：ユーザー情報 + ハンバーガーメニュー（モバイルのみ） */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Box
            sx={{
              textAlign: "right",
              fontSize: 12,
              display: { xs: "none", md: "block" },
            }}
          >
            <div>○○○株式会社 ○○○○様</div>
            <div>前回ログイン日時 2025/09/27 12:13:14</div>
          </Box>
          {onMenuClick && (
            <IconButton
              onClick={onMenuClick}
              sx={{ display: { xs: "flex", md: "none" } }}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
