import { Grid, ListItem, Typography } from "@mui/material";

export function Name({ children }) {
    return (
        <Grid item xs={12} component={ListItem} sx={{ padding: "0" }}>
            <Typography sx={{
                "fontSize": {
                    "xs": "h4.fontSize",
                    "md": "h2.fontSize",
                },
                "fontWeight": "bold"
            }}>{children}</Typography>
        </Grid>
    )
}