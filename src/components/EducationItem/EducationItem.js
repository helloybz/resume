import { ListItem, Grid, Typography } from "@mui/material";


export function EducationItem({ name, major, degree, from, to }) {
    return (
        <Grid
            item xs={12} component={ListItem}
            container
            alignItems="baseline"
            rowSpacing={1}
            sx={{ "mb": "0.5rem" }}
        >

            <Grid item xs={12} component={Typography}
                sx={{
                    "fontSize": "1.15rem",
                    "fontWeight": "600",
                    "textDecoration": "underline",
                }}>
                {major + " " + degree}
            </Grid>

            <Grid item xs={6}
                component={Typography}
            >
                {name}
            </Grid>

            <Grid item xs={6}
                component={Typography}>
                {from + " ~ " + to}
            </Grid>
        </Grid >
    )
}