import { Grid, ListItem, Typography } from "@mui/material";

export function Contact({ icon, value }) {
    return (
        <Grid
            item xs={12} component={ListItem}
            container
            justifyContent="flex-end"
            sx={{
                "padding": "0",
                "margin": "0"
            }}
        >
            <Grid item xs={1} component={icon}
                sx={{
                    "fontSize": "1rem",
                }} />
            <Grid item xs={11} component={Typography}
                sx={{
                    "fontSize": "1rem",
                }}>
                {value}
            </Grid>
        </Grid>
    )
}