import { Grid, ListItem, Typography } from "@mui/material";

export function Position({ children }) {
    return (
        <Grid item xs={12} component={ListItem} sx={{ padding: "0" }}>
            <Typography sx={{
                "fontSize": {
                    "xs": "h5.fontSize",
                    "md": "h4.fontSize",
                    "lg": "h3.fontSize",
                },
                "fontWeight": "light"
            }}>{children}</Typography>
        </Grid>
    )
}