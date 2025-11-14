"use client";

import { Box, Typography, Button, Paper, Divider, Link } from "@mui/material";
import {
  Bookmark,
  BookmarkBorder,
  Download,
  ArrowBack,
} from "@mui/icons-material";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function InformationDetailPage() {
  const [bookmarked, setBookmarked] = useState(false);
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <Box sx={{ p: 3, maxWidth: 900, mx: "auto" }}>
      {/* 标题栏 */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          情報提供
        </Typography>
        <Box sx={{ display: "flex", gap: 1 }}>
          <Button
            variant="outlined"
            size="small"
            startIcon={
              bookmarked ? <Bookmark color="primary" /> : <BookmarkBorder />
            }
            onClick={() => setBookmarked(!bookmarked)}
          >
            {bookmarked ? "ブックマーク済" : "ブックマーク"}
          </Button>
          <Button
            variant="contained"
            size="small"
            startIcon={<Download />}
            sx={{ backgroundColor: "#1976d2" }}
          >
            PDFダウンロード
          </Button>
        </Box>
      </Box>

      <Divider sx={{ mb: 3 }} />

      {/* 内容区 */}
      <Paper sx={{ p: 4, backgroundColor: "#fafafa" }}>
        {/* タイトル */}
        <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
          解説動画配信のご案内【アクティビスト対応の実務】
        </Typography>

        {/* 本文 */}
        <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
          解説動画配信のご案内【アクティビスト対応の実務】
          <br />
          <br />
          「アクティビスト対応の実務～初動からその後の対応まで～」と題しまして、解説動画を掲載いたします。
          <br />
          <br />
          【講師】
          <br />
          第一部：野村證券法律事務所 弁護士／パートナー 弁護士 谷村 公信 氏
          <br />
          <br />
          【動画1.1～1.3（37分）】
          <br />
          「アクティビストおよびアクティビストのアプローチ（エンゲージメントの要求への対応）」
          <br />
          <Link
            href="https://platform.stream.co.jp/gsiservice/qi13/NTLUMeK9K8K9K3NDAK92Z8K9K23I6W2K9K23I5EA0J8650K3MDvoOc6YTonG"
            target="_blank"
            sx={{ color: "primary.main", textDecoration: "underline" }}
          >
            動画リンク（約37分）
          </Link>
          <br />
          <br />
          【動画2.1～2.3（29分）】
          <br />
          「買収提案／株式買い増しへの対応」「会社法に基づく株主権の行使への対応」「おわりに」
          <br />
          <Link
            href="https://platform.stream.co.jp/gsiservice/qi13/NTLUMeK9K8K9K3NDAK92Z8K9K23I6W2K9K23I5EA0J8650K3MDvoOc6YTonG"
            target="_blank"
            sx={{ color: "primary.main", textDecoration: "underline" }}
          >
            動画リンク（約29分）
          </Link>
          <br />
          <br />
          ＜ご注意事項＞
          <br />
          ・本動画は2025年3月6日に収録しております。
          <br />
          ・本資料および動画は、予告なく配信を停止させていただく場合がございます。
        </Typography>

        {/* PDF ダウンロードボタン */}
        <Box sx={{ textAlign: "center", my: 4 }}>
          <Button
            variant="outlined"
            startIcon={
              <Box
                component="img"
                src="/pdf-icon.svg"
                alt="PDF"
                sx={{ width: 24, height: 24 }}
              />
            }
            sx={{
              borderColor: "#d32f2f",
              color: "#d32f2f",
              "&:hover": {
                borderColor: "#b71c1c",
                backgroundColor: "rgba(211, 47, 47, 0.04)",
              },
            }}
          >
            アクティビスト対応の実務 資料 PDF
          </Button>
        </Box>

        {/* 閉じるボタン */}
        <Box sx={{ textAlign: "center", mt: 5 }}>
          <Button
            variant="contained"
            startIcon={<ArrowBack />}
            onClick={handleBack}
            sx={{ minWidth: 160, backgroundColor: "#9c27b0" }}
          >
            一覧に戻る
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}
