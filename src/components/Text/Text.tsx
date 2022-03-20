import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { SxProps } from "@mui/system";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import Link from "@components/Link";
import Media from "@components/Media";

export interface TextProps {
  children?: string;
  sx?: SxProps;
}

const components: any = {
  p: Typography,
  a: Link,
  img: (data: any) => (
    <Box
      display="flex"
      justifyContent="center"
      my={8}
      position="relative"
      height={600}
    >
      <Media {...data} layout="fill" />
    </Box>
  ),
};

const Root = styled(Box, {
  name: "Text",
  slot: "Root",
})({});

export default function Text({ children, sx }: TextProps) {
  return (
    <Root sx={sx}>
      <ReactMarkdown components={components} remarkPlugins={[remarkGfm]}>
        {children || ""}
      </ReactMarkdown>
    </Root>
  );
}
