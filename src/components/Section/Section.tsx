import * as React from "react";
import Box, { BoxProps } from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { SxProps } from "@mui/system";

import Text from "@components/Text";
import Media, { MediaProps } from "@components/Media";

export interface SectionProps {
  title?: string;
  body?: string;
  backgroundColor?: string;
  background?: MediaProps;
  color?: string;
  children?: React.ReactElement | React.ReactElement[];
  sx?: SxProps;
}

const Root = styled(Box)<
  BoxProps<React.ElementType> & { hasBackground?: boolean }
>(({ hasBackground }) => ({
  ...(hasBackground && {
    minHeight: 500,
  }),
}));

export default function Section({
  title,
  body,
  backgroundColor,
  background,
  color,
  children,
  sx,
}: SectionProps) {
  return (
    <Root
      width={1}
      display="flex"
      position="relative"
      hasBackground={!!background}
      sx={sx}
    >
      <Box bgcolor={backgroundColor} color={color} width={1} zIndex={10} py={4}>
        <Container
          maxWidth="xl"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {title && (
            <Typography variant="h3" textAlign="center" sx={{ mb: 6 }}>
              {title}
            </Typography>
          )}
          {body && <Text sx={{ textAlign: "center", mb: 6 }}>{body}</Text>}
          {children}
        </Container>
      </Box>
      {background && <Media {...background} layout="fill" />}
    </Root>
  );
}
