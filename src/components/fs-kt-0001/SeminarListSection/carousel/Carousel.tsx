// components/Carousel.tsx
"use client";

import React from "react";
import { Box, Stack, Typography } from "@mui/material";

interface Seminar {
  id: number;
  image: string;
  title: string;
  description: string;
}

interface CarouselProps {
  seminars: Seminar[];
  activeIndex: number;
}

export default function Carousel({ seminars, activeIndex }: CarouselProps) {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        height: 196,
      }}
    >
      <Stack
        direction="row"
        spacing={3}
        alignItems="center"
        justifyContent="center"
        sx={{
          position: "relative",
          height: "100%",
          transition: "transform 0.3s ease-in-out",
        }}
      >
        {seminars.map((seminar, index) => {
          const isActive = index === activeIndex;
          const isPrev = index === activeIndex - 1;
          const isNext = index === activeIndex + 1;
          const isVisible = isActive || isPrev || isNext;

          if (!isVisible) return null;

          return (
            <Box
              key={seminar.id}
              sx={{
                display: "flex",
                width: 778,
                height: 168,
                boxShadow: "0px 2px 16px rgba(9, 26, 71, 0.16)",
                opacity: isActive ? 1 : 0.3,
                transition: "opacity 0.3s ease-in-out",
                flexShrink: 0,
              }}
            >
              <Box
                component="img"
                src={seminar.image}
                alt="Seminar"
                sx={{
                  width: 298,
                  height: 168,
                  objectFit: "cover",
                }}
              />
              <Stack
                spacing={2}
                sx={{
                  width: 480,
                  bgcolor: "white",
                  px: 6,
                  py: 2,
                  justifyContent: "center",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "'Noto Sans JP', sans-serif",
                    fontWeight: 700,
                    fontSize: 16,
                    lineHeight: 1.5,
                    color: "black",
                  }}
                >
                  {seminar.title}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "'Noto Sans JP', sans-serif",
                    fontWeight: 400,
                    fontSize: 16,
                    lineHeight: 1.5,
                    color: "black",
                  }}
                >
                  {seminar.description}
                </Typography>
              </Stack>
            </Box>
          );
        })}
      </Stack>
    </Box>
  );
}
