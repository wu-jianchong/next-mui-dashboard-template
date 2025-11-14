"use client";

import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

type ErrorType = "maintenance" | "system" | "access" | "timeout";

interface ErrorPageProps {
  type?: ErrorType;
}

// 维护图标：人 + 齿轮
const MaintenanceIcon = () => (
  <svg
    width="80"
    height="80"
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="50" cy="30" r="15" fill="none" stroke="#666" strokeWidth="3" />
    <path
      d="M50 45 Q40 55 35 70 Q35 80 45 85 L55 85 Q65 80 65 70 Q60 55 50 45"
      fill="none"
      stroke="#666"
      strokeWidth="3"
    />
    <circle cx="70" cy="65" r="20" fill="none" stroke="#666" strokeWidth="3" />
    <circle cx="70" cy="65" r="12" fill="none" stroke="#666" strokeWidth="2" />
    {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
      <rect
        key={deg}
        x="67"
        y="43"
        width="6"
        height="10"
        fill="#666"
        transform={`rotate(${deg} 70 65)`}
      />
    ))}
  </svg>
);

// 警告图标（系统/访问/超时通用）
const WarningIcon = ({ fill = "#d32f2f" }: { fill?: string }) => (
  <svg
    width="80"
    height="80"
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M50 15 L90 85 L10 85 Z"
      fill={fill}
      stroke={
        fill === "#9c27b0"
          ? "#7b1fa2"
          : fill === "#f57c00"
          ? "#e65100"
          : "#b71c1c"
      }
      strokeWidth="3"
    />
    <circle cx="50" cy="40" r="5" fill="white" />
    <rect x="47" y="50" width="6" height="25" fill="white" rx="1" />
  </svg>
);

export default function ErrorPage({ type = "system" }: ErrorPageProps) {
  const theme = useTheme();

  const isMaintenance = type === "maintenance";
  const isSystem = type === "system";
  const isAccess = type === "access";
  const isTimeout = type === "timeout";

  if (![isMaintenance, isSystem, isAccess, isTimeout].some(Boolean))
    return null;

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#fff",
        fontFamily: '"Meiryo", "Hiragino Sans", sans-serif',
      }}
    >
      {/* 顶部 Logo */}
      <Box sx={{ py: 3, textAlign: "center" }}>
        <Box
          sx={{
            display: "inline-block",
            px: 3,
            py: 1,
            border: "2px solid #333",
            borderRadius: "8px",
            fontSize: "24px",
            fontWeight: "bold",
          }}
        >
          サービスロゴ
        </Box>
      </Box>

      <Box sx={{ borderTop: "1px solid #ddd" }} />

      {/* 标题栏 */}
      <Box sx={{ py: 2, textAlign: "center", backgroundColor: "#f9f9f9" }}>
        <Typography
          variant="h6"
          sx={{
            display: "inline-block",
            backgroundColor: isMaintenance
              ? "#1976d2"
              : isSystem
              ? "#d32f2f"
              : isAccess
              ? "#f57c00"
              : "#9c27b0", // 紫色
            color: "white",
            px: 3,
            py: 1,
            borderRadius: "6px",
            fontWeight: "bold",
          }}
        >
          {isMaintenance
            ? "メンテナンス"
            : isSystem
            ? "システムエラー"
            : isAccess
            ? "アクセスエラー"
            : "タイムアウトエラー"}
        </Typography>
      </Box>

      <Box sx={{ borderTop: "1px solid #ddd" }} />

      {/* 主内容区 */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: 3,
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: 700,
            p: 4,
            border: "2px solid #ddd",
            borderRadius: "12px",
            textAlign: "center",
            backgroundColor: "#fafafa",
          }}
        >
          {/* 维护中 */}
          {isMaintenance && (
            <>
              <Typography variant="h5" sx={{ mb: 3, fontWeight: "bold" }}>
                ただいまメンテナンス中です。
              </Typography>
              <Box sx={{ my: 4 }}>
                <MaintenanceIcon />
              </Box>
              <Typography
                variant="body1"
                sx={{ color: "#555", lineHeight: 1.8, whiteSpace: "pre-line" }}
              >
                {`ただいま、メンテナンスによりサービスがご利用できない状態となっております。
ご不便をおかけいたしますが、今しばらくお待ちください。`}
              </Typography>
            </>
          )}

          {/* 系统错误 */}
          {isSystem && (
            <>
              <Typography variant="h5" sx={{ mb: 3, fontWeight: "bold" }}>
                エラーが発生しました
              </Typography>
              <Box sx={{ my: 4 }}>
                <WarningIcon fill="#d32f2f" />
              </Box>
              <Typography
                variant="body1"
                sx={{ color: "#555", lineHeight: 1.8, whiteSpace: "pre-line" }}
              >
                {`データを取得できませんでした。
再読み込みを行ってください。`}
              </Typography>
            </>
          )}

          {/* 访问错误 */}
          {isAccess && (
            <>
              <Typography variant="h5" sx={{ mb: 3, fontWeight: "bold" }}>
                お探しのページは見つかりませんでした
              </Typography>
              <Box sx={{ my: 4 }}>
                <WarningIcon fill="#f57c00" />
              </Box>
              <Typography
                variant="body1"
                sx={{ color: "#555", lineHeight: 1.8, whiteSpace: "pre-line" }}
              >
                {`申し訳ございません。
お探しのページは移動または削除された可能性があります。
お手数ですがトップページからやり直してください。`}
              </Typography>
            </>
          )}

          {/* 超时错误 */}
          {isTimeout && (
            <>
              <Typography variant="h5" sx={{ mb: 3, fontWeight: "bold" }}>
                タイムアウトエラー
              </Typography>
              <Box sx={{ my: 4 }}>
                <WarningIcon fill="#9c27b0" />
              </Box>
              <Typography
                variant="body1"
                sx={{ color: "#555", lineHeight: 1.8, whiteSpace: "pre-line" }}
              >
                {`15分以上操作がなかったため、セッションタイムアウトが発生しました。
一度ブラウザを終了し、ログインし直してください。`}
              </Typography>
            </>
          )}
        </Box>
      </Box>

      <Box sx={{ borderTop: "1px solid #ddd" }} />

      {/* 底部 Footer */}
      <Box sx={{ py: 4, textAlign: "center" }}>
        <Typography variant="body2" color="text.secondary">
          フッター
        </Typography>
      </Box>
    </Box>
  );
}
