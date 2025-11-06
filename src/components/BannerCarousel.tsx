// src/components/BannerCarousel.tsx
"use client";

import { useState } from "react";
import { Box, IconButton, Card, CardContent, Typography } from "@mui/material";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

/**
 * バナーデータ
 * - title: タイトル
 * - content: 内容テキスト
 */
const banners = [
  {
    title: "ここにタイトルが入ります。...",
    content: "テキストテキストテキストテキストテキストテキスト",
  },
  {
    title: "別のタイトル",
    content: "別の内容別の内容別の内容別の内容別の内容",
  },
  {
    title: "重要なお知らせ",
    content: "システムメンテナンスのお知らせシステムメンテナンスのお知らせ",
  },
];

/**
 * バナーカルーセルコンポーネント
 * - 左右ボタンでスライド
 * - ループ対応
 * - レスポンシブ
 */
export default function BannerCarousel() {
  const [index, setIndex] = useState(0);
  const maxIndex = banners.length - 1;

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
  };

  return (
    <Card sx={{ my: 3, position: "relative", boxShadow: 3, borderRadius: 2 }}>
      <CardContent
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          p: 3,
        }}
      >
        {/* 左矢印 */}
        <IconButton
          onClick={handlePrev}
          sx={{
            bgcolor: "white",
            boxShadow: 1,
            "&:hover": { bgcolor: "#f5f5f5" },
          }}
        >
          <ArrowLeftIcon />
        </IconButton>

        {/* 中央内容 */}
        <Box sx={{ textAlign: "center", flex: 1, px: 2 }}>
          <Typography
            variant="h6"
            gutterBottom
            sx={{
              fontWeight: 700,
              fontSize: { xs: "1rem", sm: "1.25rem" },
            }}
          >
            {banners[index].title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              fontSize: { xs: "0.875rem", sm: "1rem" },
              lineHeight: 1.6,
            }}
          >
            {banners[index].content}
          </Typography>
        </Box>

        {/* 右矢印 */}
        <IconButton
          onClick={handleNext}
          sx={{
            bgcolor: "white",
            boxShadow: 1,
            "&:hover": { bgcolor: "#f5f5f5" },
          }}
        >
          <ArrowRightIcon />
        </IconButton>
      </CardContent>

      {/* ドットインジケーター（オプション） */}
      <Box sx={{ display: "flex", justifyContent: "center", gap: 1, pb: 2 }}>
        {banners.map((_, i) => (
          <Box
            key={i}
            sx={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              bgcolor: i === index ? "primary.main" : "grey.400",
              transition: "all 0.3s",
            }}
          />
        ))}
      </Box>
    </Card>
  );
}
