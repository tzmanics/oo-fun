import * as React from "react";
import MuiCard from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import Link, { LinkProps } from "@components/Link";
import Text from "@components/Text";
import { MediaProps } from "@components/Media";

export interface CardProps {
  title?: string;
  body?: string;
  variant?: any;
  actions?: LinkProps[];
  link?: LinkProps;
  media?: MediaProps;
  reverse?: boolean;
}

export default function Card({
  title,
  body,
  variant,
  media,
  actions,
  link,
  reverse,
}: CardProps) {
  const card = (
    <MuiCard
      variant={variant}
      sx={{
        ...(reverse && { flexDirection: "row-reverse" }),
      }}
    >
      {media && (
        <CardMedia
          component="img"
          height="140"
          image={media.src}
          alt={media.title}
        />
      )}
      <Box
        flex="50%"
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        justifyContent="center"
      >
        <CardContent>
          {title && (
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
          )}
          {body && <Text>{body}</Text>}
        </CardContent>
        <CardActions>
          {actions?.map((action) => (
            <Link key={action.id} {...action} />
          ))}
        </CardActions>
      </Box>
    </MuiCard>
  );

  if (link)
    return (
      <Box
        sx={{ textDecoration: "none" }}
        component={Link}
        noLinkStyle
        {...link}
      >
        {card}
      </Box>
    );

  return card;
}
