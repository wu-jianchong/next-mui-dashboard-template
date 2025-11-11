"use client";

import { AppBar, Toolbar, Box, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

/**
 * ヘッダー
 * - 高度: 严格 47px（minHeight: "47px !important"）
 * - 背景：/images/header.png (1286x47)，contain 居中
 * - ユーザー情報：始终最右侧（PC/モバイル共通）
 * - モバイル：右上ハンバーガーメニュー
 */
export default function Header({ onMenuClick }: { onMenuClick?: () => void }) {
  return (
    <AppBar
      position="fixed"
      color="transparent"
      elevation={0}
      sx={{
        height: "47px",
        minHeight: "47px !important", // 强制覆盖 MUI 默认
        zIndex: (theme) => theme.zIndex.drawer + 1,
        borderBottom: "1px solid #e0e0e0",
        backgroundImage: 'url("/images/header.png")',
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "contain",
        bgcolor: "white",
      }}
    >
      <Toolbar
        sx={{
          minHeight: "47px !important", // 强制 Toolbar 高度
          height: "47px",
          padding: "0 16px", // 替代 p: 2，精确控制
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        {/* ユーザー情報 + ハンバーガーメニュー（最右） */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          {/* ユーザー情報：始终显示 */}
          <Box
            sx={{
              textAlign: "right",
              fontSize: 10,
              color: "#000",
              textShadow: "0 0 2px rgba(255,255,255,0.8)",
              lineHeight: 1.3,
            }}
          >
            <div>○○○株式会社 ○○○○様</div>
            <div>前回ログイン日時 2025/09/27 12:13:14</div>
          </Box>

          {/* ハンバーガーメニュー：モバイルのみ */}
          {onMenuClick && (
            <IconButton
              onClick={onMenuClick}
              sx={{
                display: { xs: "flex", md: "none" },
                color: "#000",
                p: 0.5,
              }}
            >
              <MenuIcon fontSize="small" />
            </IconButton>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
