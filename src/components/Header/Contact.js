import { Grid, Typography } from "@mui/material";

export function Contact({ printable = false, icon, value }) {
    return (
        <Grid
            item
            container
        >
            <Grid item xs={printable ? 2 : 1} md={2} >
                {icon}
            </Grid>
            <Grid item xs={printable ? 10 : 9} md={10}>
                <Typography>{value}</Typography>
            </Grid >
        </Grid >
    );
}