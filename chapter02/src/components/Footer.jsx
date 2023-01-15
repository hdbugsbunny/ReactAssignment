import { Box, Typography } from "@mui/material";

function Footer() {
  return (
    <Box bgcolor="primary.main" p={2} sx={{ marginTop: "8.1rem" }}>
      <Typography variant="body2" align="center">
        Copyright © {new Date().getFullYear()} Harshit Durgapal
      </Typography>
    </Box>
  );
}

export default Footer;
