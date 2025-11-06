import Link from "next/link";
import { Button, Container, Typography } from "@mui/material";

export default function Home() {
  return (
    <Container
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Typography variant="h3" gutterBottom>
        ようこそ！
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        ダッシュボードに移動します
      </Typography>
      <Button
        component={Link}
        href="/dashboard"
        variant="contained"
        size="large"
      >
        トップへ
      </Button>
    </Container>
  );
}
