// src/app/(features)/dashboard/page.tsx
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Chip,
  Divider,
  Button,
} from "@mui/material";
import {
  Notifications,
  Description,
  Article,
  ChevronRight,
} from "@mui/icons-material";

export default function TopPage() {
  const notices = [
    {
      date: "2025/07/17",
      type: "重要",
      title: "運営担当者からのお知らせ",
      urgent: true,
    },
    { date: "2025/07/17", type: "", title: "お知らせタイトル3", urgent: false },
  ];

  const news = [
    {
      date: "2025/07/24",
      category: "提案資料",
      sub: "証券代行部/大阪証券代行部",
      title: "提案資料③",
      new: true,
    },
    {
      date: "2025/07/17",
      category: "各種お知らせ",
      sub: "マニュアル・連絡先一覧等",
      title: "○○についての連絡",
      new: true,
    },
    {
      date: "2025/07/10",
      category: "レポート",
      sub: "ニュースリリース",
      title: "証券代行フラッシュ",
      new: false,
    },
    {
      date: "2025/07/09",
      category: "レポート",
      sub: "ニュースリリース",
      title: "有価証券報告書の早期開示について",
      new: false,
    },
    {
      date: "2025/07/09",
      category: "メインカテゴリ",
      sub: "サブカテゴリ",
      title: "ここにタイトルが入ります。",
      new: false,
    },
  ];

  return (
    <Box sx={{ p: 3, bgcolor: "background.default", minHeight: "100vh" }}>
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        トップ
      </Typography>

      {/* お知らせ */}
      <Box sx={{ bgcolor: "white", p: 3, borderRadius: 2, mb: 4 }}>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          重要なお知らせ
        </Typography>
        <List>
          {notices.map((n, i) => (
            <ListItem key={i} sx={{ py: 1 }}>
              <ListItemText
                primary={
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Typography variant="body2" color="text.secondary">
                      {n.date}
                    </Typography>
                    {n.urgent && (
                      <Chip label="重要" size="small" color="error" />
                    )}
                    <Typography variant="body1">{n.title}</Typography>
                  </Box>
                }
              />
              <ChevronRight />
            </ListItem>
          ))}
        </List>
      </Box>

      {/* 新着情報 */}
      <Box sx={{ bgcolor: "white", p: 3, borderRadius: 2 }}>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          新着情報
        </Typography>
        <List>
          {news.map((item, i) => (
            <ListItem
              key={i}
              sx={{
                py: 1.5,
                borderBottom: i === news.length - 1 ? "none" : "1px solid #eee",
              }}
            >
              <ListItemIcon sx={{ minWidth: 36 }}>
                {item.new ? <Notifications color="primary" /> : <Article />}
              </ListItemIcon>
              <ListItemText
                primary={
                  <Box>
                    <Typography variant="caption" color="text.secondary">
                      {item.date} {item.category && `【${item.category}】`}
                    </Typography>
                    <Typography
                      variant="body1"
                      fontWeight={item.new ? "bold" : "normal"}
                    >
                      {item.title}
                      {item.new && (
                        <Chip
                          label="NEW"
                          size="small"
                          color="primary"
                          sx={{ ml: 1 }}
                        />
                      )}
                    </Typography>
                    {item.sub && (
                      <Typography variant="caption" color="text.secondary">
                        {item.sub}
                      </Typography>
                    )}
                  </Box>
                }
              />
              <ChevronRight />
            </ListItem>
          ))}
        </List>
        <Box sx={{ textAlign: "center", mt: 3 }}>
          <Button variant="outlined" endIcon={<ChevronRight />}>
            一覧はこちら
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
