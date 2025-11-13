// src/app/seminar/[id]/page.tsx
"use client";

import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
  Chip,
  Stack,
  Divider,
} from "@mui/material";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useRouter } from "next/navigation";

// 模拟数据（实际项目中从 API 获取）
const seminarDetail = {
  title: "2025年秋の株式実務セミナー",
  date: "2025/11/1",
  time: "15:00",
  type: "リアル",
  venue: "東京ホテル *****",
  speaker: "株式会社****",
  url: "https://example.com/seminar/123",
  capacity: "100名",
  period: "2025/10/1 ～ 2025/10/25",
  note: "※定員に達し次第、受付を終了いたします。",
  description:
    "近年は当社主催の株式実務セミナーを開催しておりますが、今回は特に「株式実務の最新動向」について解説いたします。\n当日は、専門家による講演のほか、質疑応答の時間を設けております。\n皆様のご参加をお待ちしております。",
  pdfs: [
    { name: "プログラム.pdf", size: "1.2MB" },
    { name: "会場案内図.pdf", size: "800KB" },
    { name: "講演資料①.pdf", size: "2.5MB" },
    { name: "講演資料②.pdf", size: "1.8MB" },
    { name: "参加申込書.pdf", size: "500KB" },
  ],
};

export default function SeminarDetailPage() {
  const router = useRouter();

  return (
    <Box sx={{ p: 3, bgcolor: "#f5f5f5", minHeight: "100vh" }}>
      {/* メインコンテンツ：居中布局 */}
      <Box sx={{ maxWidth: 1000, mx: "auto" }}>
        {/* ページタイトル */}
        <Typography variant="h6" fontWeight={700} mb={3} textAlign="center">
          セミナー
        </Typography>

        {/* セミナー基本情報 */}
        <Paper sx={{ p: 3, mb: 3, borderRadius: 2 }}>
          <Stack spacing={2}>
            {/* タイトル */}
            <Typography variant="h6" fontWeight={700} color="primary">
              {seminarDetail.title}
            </Typography>

            {/* テーブル形式の詳細情報 */}
            <TableContainer>
              <Table size="small">
                <TableBody>
                  <TableRow>
                    <TableCell
                      sx={{ fontWeight: 600, width: 120, bgcolor: "#f5f5f5" }}
                    >
                      開催日時
                    </TableCell>
                    <TableCell>
                      {seminarDetail.date} {seminarDetail.time}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 600, bgcolor: "#f5f5f5" }}>
                      開催形式
                    </TableCell>
                    <TableCell>
                      <Chip
                        label={seminarDetail.type}
                        size="small"
                        sx={{ bgcolor: "#e3f2fd", color: "#1565c0" }}
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 600, bgcolor: "#f5f5f5" }}>
                      会場
                    </TableCell>
                    <TableCell>{seminarDetail.venue}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 600, bgcolor: "#f5f5f5" }}>
                      講師
                    </TableCell>
                    <TableCell>{seminarDetail.speaker}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 600, bgcolor: "#f5f5f5" }}>
                      URL
                    </TableCell>
                    <TableCell>
                      <Typography
                        component="a"
                        href={seminarDetail.url}
                        target="_blank"
                        rel="noopener"
                        sx={{ color: "#1565c0", textDecoration: "underline" }}
                      >
                        {seminarDetail.url}
                      </Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 600, bgcolor: "#f5f5f5" }}>
                      定員
                    </TableCell>
                    <TableCell>{seminarDetail.capacity}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 600, bgcolor: "#f5f5f5" }}>
                      申込期間
                    </TableCell>
                    <TableCell>{seminarDetail.period}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 600, bgcolor: "#f5f5f5" }}>
                      備考
                    </TableCell>
                    <TableCell sx={{ color: "#d32f2f" }}>
                      {seminarDetail.note}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Stack>
        </Paper>

        {/* セミナー内容説明 */}
        <Paper sx={{ p: 3, mb: 3, borderRadius: 2 }}>
          <Typography variant="subtitle1" fontWeight={600} mb={2}>
            セミナー内容
          </Typography>
          <Typography
            whiteSpace="pre-line"
            sx={{ fontSize: 14, lineHeight: 1.8, color: "text.secondary" }}
          >
            {seminarDetail.description}
          </Typography>
        </Paper>

        {/* 添付ファイル */}
        <Paper sx={{ p: 3, mb: 3, borderRadius: 2 }}>
          <Typography variant="subtitle1" fontWeight={600} mb={2}>
            添付ファイル（5件まで添付可能）
          </Typography>
          <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
            {seminarDetail.pdfs.map((pdf, index) => (
              <Button
                key={index}
                variant="outlined"
                startIcon={<PictureAsPdfIcon />}
                sx={{
                  borderRadius: 2,
                  textTransform: "none",
                  color: "#d32f2f",
                  borderColor: "#d32f2f",
                  "&:hover": { bgcolor: "#ffebee", borderColor: "#d32f2f" },
                }}
              >
                <Box sx={{ textAlign: "left" }}>
                  <Typography fontSize={13} fontWeight={600}>
                    {pdf.name}
                  </Typography>
                  <Typography fontSize={11} color="text.secondary">
                    {pdf.size}
                  </Typography>
                </Box>
              </Button>
            ))}
          </Stack>
        </Paper>

        {/* アクションボタン */}
        <Stack spacing={2} alignItems="center">
          <Button
            variant="contained"
            size="large"
            sx={{
              borderRadius: 2,
              px: 6,
              fontWeight: 600,
              bgcolor: "#003087",
              "&:hover": { bgcolor: "#00205b" },
            }}
          >
            セミナーに申し込む
          </Button>

          <Button
            variant="outlined"
            startIcon={<ArrowBackIcon />}
            onClick={() => router.back()}
            sx={{
              borderRadius: 2,
              color: "#003087",
              borderColor: "#003087",
              "&:hover": { bgcolor: "#f0f7ff", borderColor: "#00205b" },
            }}
          >
            一覧に戻る
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}
