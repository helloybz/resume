import { Grid, ListItem, Typography } from "@mui/material";

export function Contact({ icon, value }) {
    return (
        <Grid conainer item component={ListItem} sx={{ padding: 0, margin: 0 }}>
            <Grid item xs={1} component={icon}
                sx={{
                    fontSize: {
                        "xs": "1rem",
                        "md": "1.25rem",
                    },
                }} />
            <Grid item xs={11} component={Typography}
                sx={{
                    fontSize: {
                        "xs": "1rem",
                        "md": "1.25rem",
                    }
                }}>
                {value}
            </Grid>
        </Grid>
    )
}