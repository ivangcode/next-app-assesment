import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import { Library } from "@/types";
import { Button, Card, CardContent, Typography } from "@mui/material";

export function BookCard({ item }: { item: Library }) {
  const router = useRouter();
  return (
    <li>
      <Card
        sx={{
          maxWidth: 300,
          minHeight: 420,
          display: "flex",
          alignItems: "center",
          position: "relative",
          flexDirection: "column",
        }}
        variant="outlined"
      >
        <Image
          src={item.book.cover}
          alt={item.book.title}
          width={200}
          height={300}
        />
        <CardContent sx={{ width: "100%", padding: 2 }}>
          <Typography gutterBottom variant="h5" component="h5"></Typography>
          {item.book.title}
        </CardContent>
        <Button
          sx={{ position: "absolute", bottom: 10 }}
          size="small"
          variant="outlined"
          onClick={() => router.push(`book/${item.book.ISBN}`)}
        >
          Ver detalles
        </Button>
      </Card>
    </li>
  );
}
