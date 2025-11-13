// components/SeminarListSection.tsx
"use client";

import React, { useState } from "react";
import { Box, Stack } from "@mui/material";
import Carousel from "./Carousel/Carousel";
import CarouselArrow from "./CarouselArrow/CarouselArrow";

const seminarData = [
  {
    id: 1,
    image: "/images/carousel.png",
    title:
      "ここにタイトルが入ります。ここにタイトルが入ります。ここにタイトルが入ります。",
    description:
      "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
  },
  {
    id: 2,
    image: "/images/carousel.png",
    title:
      "ここにタイトルが入ります。ここにタイトルが入ります。ここにタイトルが入ります。",
    description:
      "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
  },
  {
    id: 3,
    image: "/images/carousel.png",
    title:
      "ここにタイトルが入ります。ここにタイトルが入ります。ここにタイトルが入ります。",
    description:
      "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
  },
  {
    id: 4,
    image: "/images/carousel.png",
    title:
      "ここにタイトルが入ります。ここにタイトルが入ります。ここにタイトルが入ります。",
    description:
      "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
  },
  {
    id: 5,
    image: "/images/carousel.png",
    title:
      "ここにタイトルが入ります。ここにタイトルが入ります。ここにタイトルが入ります。",
    description:
      "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
  },
];

export default function SeminarListSection() {
  const [activeIndex, setActiveIndex] = useState(1);

  const handlePrevious = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : seminarData.length - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev < seminarData.length - 1 ? prev + 1 : 0));
  };

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <Stack spacing={2} alignItems="center" sx={{ width: "100%" }}>
      {/* カルーセル + 矢印の親コンテナ（相対位置） */}
      <Box sx={{ position: "relative", width: "100%" }}>
        {/* カルーセル本体 */}
        <Carousel seminars={seminarData} activeIndex={activeIndex} />

        {/* 左右矢印：相対位置で Carousel に紐づけ */}
        <CarouselArrow direction="left" onClick={handlePrevious} />
        <CarouselArrow direction="right" onClick={handleNext} />
      </Box>

      {/* ページネーション（矢印の外） */}
      <Stack direction="row" spacing={0} alignItems="center">
        {seminarData.map((_, index) => (
          <Box
            key={index}
            onClick={() => handleDotClick(index)}
            sx={{
              width: index === activeIndex ? 64 : 25,
              height: 8,
              bgcolor: index === activeIndex ? "#1a237e" : "#e0e0e0",
              cursor: "pointer",
              transition: "all 0.3s ease-in-out",
              "&:hover": { opacity: 0.8 },
            }}
          />
        ))}
      </Stack>
    </Stack>
  );
}
