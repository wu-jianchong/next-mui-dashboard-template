// components/NavigationSection.tsx
"use client";

import { Box, Stack, Typography, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";

/**
 * ナビゲーションセクション（Logo + 站点名 + ハンバーガーメニュー）
 * @param onMenuClick - モバイルメニュー打开回调
 */
interface NavigationSectionProps {
  onMenuClick?: () => void;
}

export const NavigationSection = ({
  onMenuClick,
}: NavigationSectionProps): JSX.Element => {
  const companyName = "〇〇〇株式会社";
  const userName = "〇〇〇 〇〇〇様";
  const lastLoginDate = "2025/08/27";
  const lastLoginTime = "12:13:14";

  return (
    <Box
      component="header"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        py: 3,
        px: 4,
        backgroundColor: "transparent",
      }}
    >
      {/* 左侧：Logo + 站点名 */}
      <Stack direction="row" spacing={3} alignItems="center">
        <Box
          component="img"
          src="/images/logo_tb_header.png"
          alt="Logo tb header"
          sx={{
            height: 27,
            width: "auto",
          }}
        />
        <Typography
          sx={{
            fontFamily: "'Noto Sans JP', sans-serif",
            fontSize: 14,
            lineHeight: "21px",
            color: "text.secondary",
          }}
        >
          証券代行お客様サイト
        </Typography>
      </Stack>

      {/* 右侧：用户信息 + ハンバーガーメニュー */}
      <Stack spacing={1} alignItems="flex-end">
        <Stack direction="row" spacing={2}>
          <Typography
            sx={{
              fontFamily: "'Noto Sans JP', sans-serif",
              fontSize: 14,
              lineHeight: "21px",
              color: "text.primary",
            }}
          >
            {companyName}
          </Typography>
          <Typography
            sx={{
              fontFamily: "'Noto Sans JP', sans-serif",
              fontSize: 14,
              lineHeight: "21px",
              color: "text.primary",
            }}
          >
            {userName}
          </Typography>
        </Stack>

        <Stack direction="row" spacing={2} alignItems="center">
          <Typography
            sx={{
              fontFamily: "'Noto Sans JP', sans-serif",
              fontSize: 12,
              lineHeight: "18px",
              color: "text.secondary",
            }}
          >
            前回ログイン日時
          </Typography>
          <Stack direction="row" spacing={0.5}>
            <Typography
              sx={{
                fontFamily: "'Noto Sans JP', sans-serif",
                fontSize: 12,
                lineHeight: "18px",
                color: "text.secondary",
              }}
            >
              {lastLoginDate}
            </Typography>
            <Typography
              sx={{
                fontFamily: "'Noto Sans JP', sans-serif",
                fontSize: 12,
                lineHeight: "18px",
                color: "text.secondary",
              }}
            >
              {lastLoginTime}
            </Typography>
          </Stack>

          {/* ハンバーガーメニュー：モバイルのみ */}
          {onMenuClick && (
            <IconButton
              onClick={onMenuClick}
              sx={{
                display: { xs: "flex", md: "none" },
                color: "#000",
                p: 0.5,
                ml: 1,
              }}
            >
              <MenuIcon fontSize="small" />
            </IconButton>
          )}
        </Stack>
      </Stack>
    </Box>
  );
};

export default NavigationSection;
