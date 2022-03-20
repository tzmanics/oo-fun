import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid, { GridProps } from "@mui/material/Grid";

export interface FlexGridProps extends GridProps {
  title?: string;
}

export default function FlexGrid({ children, title, sx }: FlexGridProps) {
  return (
    <Box sx={sx}>
      {title && (
        <Typography variant="h3" textAlign="center" sx={{ mb: 6 }}>
          {title}
        </Typography>
      )}
      <Grid container justifyContent="space-around" alignItems="center">
        {children && !Array.isArray(children) && <Grid item>{children}</Grid>}
        {children &&
          Array.isArray(children) &&
          children.map((item) => (
            <Grid key={item.key} item>
              {item}
            </Grid>
          ))}
      </Grid>
    </Box>
  );
}
