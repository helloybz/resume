import { Grid, Divider } from "@mui/material";

export function HeaderDivider() {
    return (
        <Grid item xs={12} sx={{
            "mt": "0.5rem",
        }}>
            <Divider variant="fullWidth" sx={{
                "borderBottomWidth": "0.1rem",
                "borderColor": "#000",
            }} />
        </Grid>
    )
}