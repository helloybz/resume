import { Grid, ListItem, Typography } from "@mui/material";

export function Name({ children }) {
    return (
        <Grid item xs={12} component={ListItem} sx={{ padding: "0" }}>
            <Typography sx={{
                "fontSize": "4rem",
                "fontWeight": "bold"
            }}>{children}</Typography>
        </Grid>
    )
}