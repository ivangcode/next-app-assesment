import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import { Library } from "@/types";
import { Button, Card, CardContent, Collapse, Typography } from "@mui/material";

export function BookCard({ item }: { item: Library }) {
  const [showDescription, setShowDescription] = useState(false);
  const router = useRouter();

  const seeDetails = "Ver detalles";

  const toggleDescription = () => {
    setShowDescription((prevState) => !prevState);
  };

  return (
    <li>
      <Card
        sx={{
          maxWidth: 300,
          minHeight: 430,
          display: "flex",
          alignItems: "center",
          justifyContent: 'space-around',
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
        <CardContent sx={{ width: "100%", padding: 1 }}>
          <Button
            sx={{ textTransform: "none", fontWeight: 'bold' }}
            size="large"
            color="inherit"
            onClick={toggleDescription}
          >
            {item.book.title}
          </Button>
          <Collapse in={showDescription} timeout="auto" unmountOnExit>
            <Typography paragraph>{item.book.synopsis}</Typography>
          </Collapse>
        </CardContent>
        <Button
          sx={{ marginBottom: 2}}
          size="small"
          variant="outlined"
          onClick={() => router.push(`book/${item.book.ISBN}`)}
        >
          {seeDetails}
        </Button>
      </Card>
    </li>
  );
}
