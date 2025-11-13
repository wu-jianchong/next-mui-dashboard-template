// src/components/layout/NavigationSection/NavigationSection.tsx
"use client";

import {
  Box,
  Stack,
  Typography,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

interface NavigationSectionProps {
  onMenuClick?: () => void;
}

export const NavigationSection = ({
  onMenuClick,
}: NavigationSectionProps): JSX.Element => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); // < 900px

  const companyName = "〇〇〇株式会社";
  const userName = "〇〇〇 〇〇〇様";
  const lastLoginDate = "2025/08/27";
  const lastLoginTime = "12:13:14";

  return (
    <Box
      component="header"
      sx={{
        py: 3,
        px: { xs: 2, sm: 3, md: 4 },
        backgroundColor: "transparent",
        borderBottom: "1px solid #eee",
      }}
    >
      {/* PC 端：水平布局 */}
      {!isMobile ? (
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          {/* 左侧：Logo + 站点名 */}
          <Stack direction="row" spacing={3} alignItems="center">
            <Box
              component="img"
              src="/images/logo_tb_header.png"
              alt="Logo"
              sx={{ height: 32 }}
            />
            <Typography
              sx={{
                fontSize: 16,
                fontWeight: 600,
                color: "primary.main",
              }}
            >
              MIZUHO
            </Typography>
            <Typography
              sx={{
                fontSize: 12,
                color: "text.secondary",
                ml: 1,
              }}
            >
              証券代行お客様サイト
            </Typography>
          </Stack>

          {/* 右侧：公司名 + 用户名 + 登录时间 */}
          <Stack alignItems="flex-end" spacing={0.5}>
            <Stack direction="row" spacing={2}>
              <Typography sx={{ fontSize: 14, color: "text.primary" }}>
                {companyName}
              </Typography>
              <Typography sx={{ fontSize: 14, color: "text.primary" }}>
                {userName}
              </Typography>
            </Stack>
            <Typography sx={{ fontSize: 12, color: "text.secondary" }}>
              前回ログイン日時 {lastLoginDate} {lastLoginTime}
            </Typography>
          </Stack>
        </Stack>
      ) : (
        /* 移动端 / 平板端：垂直布局，用户信息右对齐 */
        <Stack spacing={1}>
          {/* 第一行：Logo + 菜单 */}
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Stack direction="row" spacing={2} alignItems="center">
              <Box
                component="img"
                src="/images/logo_tb_header.png"
                alt="Logo"
                sx={{ height: 28 }}
              />
              <Stack>
                <Typography
                  sx={{
                    fontSize: 18,
                    fontWeight: 600,
                    color: "primary.main",
                    lineHeight: 1.2,
                  }}
                >
                  MIZUHO
                </Typography>
                <Typography
                  sx={{
                    fontSize: 11,
                    color: "text.secondary",
                  }}
                >
                  証券代行お客様サイト
                </Typography>
              </Stack>
            </Stack>

            {/* 汉堡菜单 */}
            {onMenuClick && (
              <IconButton onClick={onMenuClick} sx={{ color: "text.primary" }}>
                <MenuIcon />
              </IconButton>
            )}
          </Stack>

          {/* 第二部分：用户信息（右对齐） */}
          <Box
            sx={{
              textAlign: "right", // 改为右对齐
              mt: 1,
            }}
          >
            <Typography
              sx={{
                fontSize: 14,
                color: "text.primary",
                fontWeight: 500,
              }}
            >
              {companyName} {userName}
            </Typography>
            <Typography
              sx={{
                fontSize: 12,
                color: "text.secondary",
                mt: 0.5,
              }}
            >
              前回ログイン日時 {lastLoginDate} {lastLoginTime}
            </Typography>
          </Box>
        </Stack>
      )}
    </Box>
  );
};

export default NavigationSection;
