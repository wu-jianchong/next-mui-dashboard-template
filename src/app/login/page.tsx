"use client";

import { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Divider,
  Link,
  Alert,
} from "@mui/material";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError(true);
    } else {
      setError(false);
      // 登录成功后跳转
      router.push("/information");
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 2,
      }}
    >
      <Paper
        elevation={3}
        sx={{
          width: "100%",
          maxWidth: 420,
          p: 4,
          borderRadius: 3,
          textAlign: "center",
        }}
      >
        {/* サービスロゴ */}
        <Box sx={{ mb: 3 }}>
          <Box
            sx={{
              display: "inline-block",
              px: 3,
              py: 1,
              border: "2px solid #333",
              borderRadius: "8px",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            サービスロゴ
          </Box>
        </Box>

        {/* SAML SSO 登录按钮 */}
        <Button
          fullWidth
          variant="outlined"
          size="large"
          sx={{
            mb: 3,
            py: 1.5,
            fontSize: "16px",
            borderRadius: "8px",
            textTransform: "none",
          }}
        >
          SAML SSOでログイン
        </Button>

        <Divider sx={{ mb: 3 }}>
          <Typography variant="body2" color="text.secondary">
            または
          </Typography>
        </Divider>

        {/* 表单 */}
        <Box component="form" onSubmit={handleSubmit}>
          {error && (
            <Alert severity="error" sx={{ mb: 2, borderRadius: "8px" }}>
              メールアドレスまたはパスワードが違います
            </Alert>
          )}

          <TextField
            fullWidth
            label="メールアドレス"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin="normal"
            required
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "8px",
              },
            }}
          />

          <TextField
            fullWidth
            label="パスワード"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            margin="normal"
            required
            sx={{
              mb: 3,
              "& .MuiOutlinedInput-root": {
                borderRadius: "8px",
              },
            }}
          />

          <Button
            fullWidth
            type="submit"
            variant="contained"
            size="large"
            sx={{
              py: 1.5,
              fontSize: "16px",
              borderRadius: "8px",
              textTransform: "none",
              backgroundColor: "#1976d2",
              "&:hover": { backgroundColor: "#1565c0" },
            }}
          >
            ログイン
          </Button>
        </Box>

        {/* 底部链接 */}
        <Box sx={{ mt: 4, fontSize: "14px" }}>
          <Link
            href="#"
            underline="hover"
            color="primary"
            display="block"
            sx={{ mb: 1 }}
          >
            パスワードを忘れた方はこちら
          </Link>
          <Link
            href="#"
            underline="hover"
            color="primary"
            display="block"
            sx={{ mb: 3 }}
          >
            新規登録の方はこちら
          </Link>
          <Typography variant="caption" color="text.secondary">
            システムの利用規約
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
}
