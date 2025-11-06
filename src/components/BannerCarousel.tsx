// src/components/BannerCarousel.tsx
"use client";

import { useState, useEffect } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

/**
 * バナーデータ（publicフォルダの画像）
 */
const banners = [
  {
    id: 1,
    image: "/kv_top_01.jpg",
    title: "ここにタイトル１が入ります。...",
    description: "テキストテキスト...\nテキストテキスト...",
  },
  {
    id: 2,
    image: "/kv_top_02.jpg",
    title: "ここにタイトル２が入ります。...",
    description: "テキストテキスト...\nテキストテキスト...",
  },
  {
    id: 3,
    image: "/kv_top_03.jpg",
    title: "ここにタイトル３が入ります。...",
    description: "テキストテキスト...\nテキストテキスト...",
  },
];

/**
 * バナーカルーセル（左図右文）
 * - PC：左右分割
 * - モバイル：上下排列
 * - 自動再生 + 手動切替
 */
export default function BannerCarousel() {
  const [index, setIndex] = useState(0);
  const maxIndex = banners.length - 1;

  // 自動再生
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, [maxIndex]);

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
  };

  const goToSlide = (i: number) => {
    setIndex(i);
  };

  const current = banners[index];

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        bgcolor: "white",
        borderRadius: 2,
        my: 3,
        boxShadow: 3,
        overflow: "hidden",
      }}
    >
      {/* PC：左右分割 */}
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          height: 300,
        }}
      >
        {/* 左：画像 */}
        <Box
          sx={{
            width: "50%",
            bgcolor: "#f5f5f5",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            p: 2,
          }}
        >
          <img
            src={current.image}
            alt={current.title}
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              objectFit: "contain",
            }}
          />
        </Box>

        {/* 右：テキスト */}
        <Box
          sx={{
            width: "50%",
            p: 4,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              mb: 2,
              color: "#003087",
            }}
          >
            {current.title}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              whiteSpace: "pre-line",
              lineHeight: 1.8,
            }}
          >
            {current.description}
          </Typography>
        </Box>
      </Box>

      {/* モバイル：上下排列 */}
      <Box
        sx={{
          display: { xs: "block", md: "none" },
          p: 3,
          textAlign: "center",
        }}
      >
        <Box sx={{ mb: 2 }}>
          <img
            src={current.image}
            alt={current.title}
            style={{
              maxWidth: "100%",
              height: "auto",
              borderRadius: 8,
            }}
          />
        </Box>
        <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
          {current.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {current.description}
        </Typography>
      </Box>

      {/* 共通：左右ボタン */}
      <IconButton
        onClick={handlePrev}
        sx={{
          position: "absolute",
          left: 8,
          top: "50%",
          transform: "translateY(-50%)",
          bgcolor: "rgba(255, 255, 255, 0.9)",
          "&:hover": { bgcolor: "white" },
        }}
      >
        <ArrowLeftIcon />
      </IconButton>

      <IconButton
        onClick={handleNext}
        sx={{
          position: "absolute",
          right: 8,
          top: "50%",
          transform: "translateY(-50%)",
          bgcolor: "rgba(255, 255, 255, 0.9)",
          "&:hover": { bgcolor: "white" },
        }}
      >
        <ArrowRightIcon />
      </IconButton>

      {/* ドットインジケーター */}
      <Box
        sx={{
          position: "absolute",
          bottom: 12,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: 1,
        }}
      >
        {banners.map((_, i) => (
          <Box
            key={i}
            onClick={() => goToSlide(i)}
            sx={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              bgcolor: i === index ? "#003087" : "grey.400",
              cursor: "pointer",
              transition: "all 0.3s",
            }}
          />
        ))}
      </Box>
    </Box>
  );
}
