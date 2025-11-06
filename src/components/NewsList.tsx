// src/components/NewsList.tsx
import { Box, Typography, Chip } from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";
import AnnouncementIcon from "@mui/icons-material/Announcement";

/**
 * 新着情報データ
 * - date: 日付
 * - category: カテゴリ
 * - subCategory: サブカテゴリ
 * - title: タイトル
 * - icon: アイコン
 * - new: NEWフラグ
 */
const news = [
  {
    date: "2025/07/24",
    category: "提案資料",
    subCategory: "証券代行部/大阪証券代行部",
    title: "提案資料③",
    icon: <DescriptionIcon />,
    new: true,
  },
  {
    date: "2025/07/17",
    category: "各種お知らせ",
    subCategory: "マニュアル・連絡先一覧等",
    title: "○○についての連絡",
    icon: <DescriptionIcon />,
    new: true,
  },
  {
    date: "2025/07/10",
    category: "レポート",
    subCategory: "ニュース(シリーズ)",
    title: "証券代行フラッシュ",
    icon: <AnnouncementIcon />,
    new: false,
  },
  {
    date: "2025/07/09",
    category: "レポート",
    subCategory: "ニュース(シリーズ)",
    title: "有価証券報告書の早期開示について",
    icon: <AnnouncementIcon />,
    new: false,
  },
  {
    date: "2025/07/20",
    category: "メインカテゴリ",
    subCategory: "重要連絡事項",
    title: "システムメンテナンスのお知らせ",
    icon: <AnnouncementIcon />,
    new: false,
  },
];

/**
 * 斜角ラベルコンポーネント
 * - 斜角効果（transform: skewX）
 * - 色指定可能
 */
const SlantedTag = ({
  children,
  color,
}: {
  children: React.ReactNode;
  color: { bgcolor: string; color: string };
}) => {
  return (
    <Box
      sx={{
        display: "inline-block",
        position: "relative",
        px: 1.2,
        py: 0.3,
        fontSize: 11,
        fontWeight: 600,
        color: color.color,
        bgcolor: color.bgcolor,
        transform: "skewX(-12deg)",
        "& > span": {
          display: "inline-block",
          transform: "skewX(12deg)",
        },
      }}
    >
      <span>{children}</span>
    </Box>
  );
};

/**
 * 新着情報リストコンポーネント
 * - 斜角タグカテゴリ
 * - 色分け（提案資料/各種お知らせ/レポート/メインカテゴリ）
 * - NEWタグ
 * - ホバー効果（NEWなし項目）
 * - 一覧ボタン
 */
export default function NewsList() {
  /**
   * カテゴリ別色設定
   */
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "提案資料":
        return { bgcolor: "#e8f5e9", color: "#2e7d32" };
      case "各種お知らせ":
        return { bgcolor: "#fff8e1", color: "#f9a825" };
      case "レポート":
        return { bgcolor: "#e3f2fd", color: "#1565c0" };
      case "メインカテゴリ":
        return { bgcolor: "#fce4ec", color: "#c2185b" };
      default:
        return { bgcolor: "#f0f0f0", color: "text.primary" };
    }
  };

  const subCategoryColor = { bgcolor: "#f0f0f0", color: "#000000" };

  return (
    <Box
      sx={{
        bgcolor: "white",
        p: 2,
        borderRadius: 2,
        boxShadow: 1,
        height: "fit-content",
      }}
    >
      {/* タイトル + 青色下線 */}
      <Box sx={{ mb: 2 }}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            textAlign: "left",
          }}
        >
          新着情報
        </Typography>

        <Box
          sx={{
            width: 40,
            height: 4,
            bgcolor: "#003087",
            borderRadius: 2,
            mt: 0.5,
            ml: 0,
            boxShadow: "0 1px 3px rgba(0,48,135,0.2)",
          }}
        />
      </Box>

      {/* ニュースリスト */}
      <Box>
        {news.map((item, i) => {
          const categoryColor = getCategoryColor(item.category);

          return (
            <Box
              key={i}
              sx={{
                py: 1.5,
                borderBottom: "1px solid",
                borderColor: "divider",
                bgcolor: item.new ? "white" : "#f8f9fa",
                borderRadius: 1,
                cursor: "pointer",
                transition: "background-color 0.2s",
                "&:hover": {
                  bgcolor: "#e3f2fd",
                },
              }}
            >
              {/* 上段：アイコン + 日付 + カテゴリタグ */}
              <Box
                sx={{ display: "flex", alignItems: "center", gap: 1, mb: 0.5 }}
              >
                <Box sx={{ color: "text.secondary" }}>{item.icon}</Box>
                <Typography sx={{ fontSize: 13, minWidth: 85 }}>
                  {item.date}
                </Typography>

                <SlantedTag color={categoryColor}>{item.category}</SlantedTag>

                <SlantedTag color={subCategoryColor}>
                  {item.subCategory}
                </SlantedTag>
              </Box>

              {/* 下段：タイトル + NEWタグ */}
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Typography
                  sx={{
                    fontSize: 13,
                    fontWeight: "normal",
                  }}
                >
                  {item.title}
                </Typography>
                {item.new && (
                  <Chip
                    label="NEW"
                    size="small"
                    sx={{
                      bgcolor: "white",
                      color: "#003087",
                      fontWeight: 700,
                      borderRadius: 4,
                      height: 20,
                      fontSize: 11,
                      border: "none",
                      boxShadow: "none",
                    }}
                  />
                )}
              </Box>
            </Box>
          );
        })}
      </Box>

      {/* 一覧ボタン */}
      <Box sx={{ textAlign: "center", mt: 3 }}>
        <Chip
          label="一覧はこちら"
          clickable
          sx={{
            bgcolor: "white",
            color: "#003087",
            border: "1px solid #003087",
            fontWeight: 600,
            px: 3,
            py: 2,
            borderRadius: 0,
            fontSize: "1rem",
            transition: "all 0.2s",
            "&:hover": {
              bgcolor: "#f0f7ff",
              borderColor: "#00205b",
              boxShadow: 1,
            },
          }}
        />
      </Box>
    </Box>
  );
}
