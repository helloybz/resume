import { Grid, ListItem, Typography } from "@mui/material";

export function Position({ children }) {
    return (
        <Grid item xs={12} component={ListItem} sx={{ padding: "0" }}>
            <Typography sx={{
                "fontSize": "2.5rem",
                "fontWeight": "light"
            }}>{children}</Typography>
        </Grid>
    )
}