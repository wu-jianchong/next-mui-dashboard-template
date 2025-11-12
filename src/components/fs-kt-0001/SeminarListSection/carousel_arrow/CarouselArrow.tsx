// components/CarouselArrow.tsx
"use client";

import React from "react";
import { IconButton } from "@mui/material";
import ChevronLeft from "@mui/icons-material/ChevronLeft";
import ChevronRight from "@mui/icons-material/ChevronRight";

interface CarouselArrowProps {
  direction: "left" | "right";
  onClick: () => void;
}

export default function CarouselArrow({
  direction,
  onClick,
}: CarouselArrowProps) {
  return (
    <IconButton
      onClick={onClick}
      sx={{
        position: "absolute",
        [direction === "left" ? "left" : "right"]: 16,
        top: "50%", // 相对于 Carousel 的 196px
        transform: "translateY(-50%)", // 垂直居中
        bgcolor: "rgba(255, 255, 255, 0.9)",
        "&:hover": {
          bgcolor: "rgba(255, 255, 255, 1)",
        },
        zIndex: 2,
      }}
    >
      {direction === "left" ? (
        <ChevronLeft sx={{ fontSize: 40, color: "#1a237e" }} />
      ) : (
        <ChevronRight sx={{ fontSize: 40, color: "#1a237e" }} />
      )}
    </IconButton>
  );
}
