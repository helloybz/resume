import { ListItem, Grid, Typography } from "@mui/material";


export function EducationItem({ name, major, degree, from, to }) {
    return (
        <Grid item xs={12} component={ListItem} container alignItems="baseline" rowSpacing={1} sx={{ "mb": "0.5rem" }}>

            <Grid item xs={"auto"} md={6} lg={4} component={Typography}>
                {name}
            </Grid>

            <Grid item xs={12} md="auto" lg={4}
                component={Typography}
            >
                {major + " " + degree}
            </Grid>

            <Grid item xs={12} lg={4}
                component={Typography}>
                {from + " ~ " + to}
            </Grid>
        </Grid >
    )
}