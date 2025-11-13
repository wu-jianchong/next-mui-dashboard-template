// components/layout/NavigationSection/NavigationSection.tsx
"use client";

import { Box, Stack, Typography, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

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
      {/* 左侧 */}
      <Stack direction="row" spacing={3} alignItems="center">
        <Box
          component="img"
          src="/images/logo_tb_header.png"
          alt="Logo"
          sx={{ height: 27 }}
        />
        <Typography sx={{ fontSize: 14, color: "text.secondary" }}>
          証券代行お客様サイト
        </Typography>
      </Stack>

      {/* 右侧 */}
      <Stack spacing={1} alignItems="flex-end">
        <Stack direction="row" spacing={2}>
          <Typography sx={{ fontSize: 14 }}>{companyName}</Typography>
          <Typography sx={{ fontSize: 14 }}>{userName}</Typography>
        </Stack>

        <Stack direction="row" spacing={2} alignItems="center">
          <Typography sx={{ fontSize: 12, color: "text.secondary" }}>
            前回ログイン日時
          </Typography>
          <Stack direction="row" spacing={0.5}>
            <Typography sx={{ fontSize: 12, color: "text.secondary" }}>
              {lastLoginDate}
            </Typography>
            <Typography sx={{ fontSize: 12, color: "text.secondary" }}>
              {lastLoginTime}
            </Typography>
          </Stack>

          {/* 汉堡菜单：只在移动端显示 */}
          {onMenuClick && (
            <IconButton
              onClick={onMenuClick}
              sx={{ color: "#000", p: 0.5, ml: 1 }}
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
