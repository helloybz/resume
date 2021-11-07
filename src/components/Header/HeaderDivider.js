import { Grid, Divider } from "@mui/material";

export function HeaderDivider() {
    return (
        <Grid item xs={12} sx={{
            "mt": {
                "xs": "0",
                "md": "2rem"
            },
        }}>
            <Divider variant="fullWidth" sx={{
                "borderBottomWidth": {
                    "xs": "0.1rem",
                    "md": "0.2rem"
                },
                "borderColor": "#000",
            }} />
        </Grid>
    )
}