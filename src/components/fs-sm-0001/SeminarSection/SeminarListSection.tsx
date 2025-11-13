// src/components/SeminarListSection.tsx
"use client";

import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Box, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { StatusTag } from "@/components/common/StatusTag";

const seminars = [
  {
    id: "1",
    date: "2025/06/10",
    status: "申込受付中",
    category: "セミナー",
    hasDeadline: true,
    title: "IPOセミナー_2025年5月開催分",
    isEnded: false,
  },
  {
    id: "2",
    date: "2025/05/15",
    status: "申込受付中",
    category: "ウェビナー",
    hasDeadline: false,
    title: "IPOセミナー_2025年5月開催分",
    isEnded: false,
  },
  {
    id: "3",
    date: "2025/04/30",
    status: "申込受付中",
    category: "セミナー",
    hasDeadline: true,
    title:
      "セミナーのタイトルです。セミナーのタイトルです。セミナーのタイトルです。セミナーのタイトルです。セミナーのタイトルです。セミナーのタイトルです。",
    isEnded: false,
  },
  {
    id: "4",
    date: "2025/03/01",
    status: "オンデマンド",
    category: "ウェビナー",
    hasDeadline: false,
    title: "2027年春の議長セミナー",
    isEnded: false,
  },
  {
    id: "5",
    date: "2025/01/01",
    status: "アンケート",
    category: "ウェビナー",
    hasDeadline: false,
    title: "2024年春の議長セミナー",
    isEnded: false,
  },
  {
    id: "6",
    date: "2024/11/10",
    status: "公開終了",
    category: "セミナー",
    hasDeadline: false,
    title:
      "セミナーのタイトルです。セミナーのタイトルです。セミナーのタイトルです。セミナーのタイトルです。セミナーのタイトルです。セミナーのタイトルです。セミナーのタイトルです。セミナーのタイトルです。セミナーのタイトルです。セミナーの…",
    isEnded: true,
  },
  {
    id: "7",
    date: "2024/10/16",
    status: "公開終了",
    category: "ウェビナー",
    hasDeadline: false,
    title: "2024年春の議長セミナー",
    isEnded: true,
  },
];

const statusConfig: Record<
  string,
  { bgColor: string; textColor: string; width: number }
> = {
  申込受付中: { bgColor: "#DFE6FB", textColor: "#285BE1", width: 68 },
  アンケート: { bgColor: "#E5E8EE", textColor: "#4A4D5A", width: 68 },
  オンデマンド: { bgColor: "#E5E8EE", textColor: "#4A4D5A", width: 80 },
  公開終了: { bgColor: "#FFFFFF", textColor: "#73788C", width: 56 },
};

interface SeminarListSectionProps {
  onSeminarClick?: (id: string) => void;
}

export const SeminarListSection = ({
  onSeminarClick,
}: SeminarListSectionProps = {}) => {
  return (
    <Stack spacing={2}>
      <Box sx={{ borderBottom: "0.5px solid #E0E0E0", pb: 1, pr: 1 }}>
        <Stack direction="row" spacing={0.5} alignItems="flex-end">
          <Typography
            variant="h5"
            sx={{ fontWeight: 700, fontSize: "20px", lineHeight: "30px" }}
          >
            17
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontSize: "16px", lineHeight: "24px" }}
          >
            件
          </Typography>
        </Stack>
      </Box>

      <Stack spacing={1.5}>
        {seminars.map((seminar) => {
          const statusStyle = statusConfig[seminar.status];

          return (
            <Link
              key={seminar.id}
              href={`/seminars/${seminar.id}`}
              passHref
              legacyBehavior
            >
              <Box
                component="a"
                sx={{
                  display: "block",
                  bgcolor: seminar.isEnded ? "#F5F9FC" : "#FFFFFF",
                  boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.12)",
                  px: 4,
                  py: 3,
                  position: "relative",
                  cursor: "pointer",
                  textDecoration: "none",
                  "&:hover": {
                    boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.16)",
                  },
                }}
                onClick={(e) => {
                  e.preventDefault();
                  onSeminarClick?.(seminar.id);
                }}
              >
                <Stack direction="row" spacing={2}>
                  <Box sx={{ minWidth: "95px" }}>
                    <Typography
                      variant="body1"
                      sx={{
                        color: "#757575",
                        fontSize: "16px",
                        lineHeight: "24px",
                      }}
                    >
                      {seminar.date}
                    </Typography>
                  </Box>

                  <Stack spacing={2} sx={{ flex: 1 }}>
                    <Stack direction="row" spacing={2} alignItems="center">
                      <Stack direction="row" spacing={0} alignItems="center">
                        {statusStyle && (
                          <StatusTag
                            label={seminar.status}
                            bgColor={statusStyle.bgColor}
                            textColor={statusStyle.textColor}
                            width={statusStyle.width}
                          />
                        )}

                        <StatusTag
                          label={seminar.category}
                          bgColor="#F5F5F5"
                          textColor="#757575"
                          width={68}
                        />
                      </Stack>

                      {seminar.hasDeadline && (
                        <Stack
                          direction="row"
                          spacing={0.25}
                          alignItems="center"
                        >
                          <AccessTimeIcon
                            sx={{ fontSize: "13px", color: "#D32F2F" }}
                          />
                          <Typography
                            variant="caption"
                            sx={{
                              color: "#D32F2F",
                              fontSize: "12px",
                              lineHeight: "18px",
                            }}
                          >
                            締切間近
                          </Typography>
                        </Stack>
                      )}
                    </Stack>

                    <Typography
                      variant="body1"
                      sx={{
                        fontWeight: seminar.isEnded ? 400 : 700,
                        fontSize: "16px",
                        lineHeight: "24px",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                      }}
                    >
                      {seminar.title}
                    </Typography>
                  </Stack>
                </Stack>

                <Box
                  sx={{
                    position: "absolute",
                    left: "-1px",
                    bottom: 0,
                    width: "1px",
                    height: "1px",
                    bgcolor: "#1976D2",
                  }}
                />
              </Box>
            </Link>
          );
        })}
      </Stack>
    </Stack>
  );
};

export default SeminarListSection;
