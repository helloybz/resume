import { ListItem, Grid } from "@mui/material";

export function EducationItem({ name, department, degree, from, to }) {
    return (
        <Grid item xs={12} component={ListItem} container>
            <Grid item xs={3}>{name}</Grid>
            <Grid item xs={2}>{department}</Grid>
            <Grid item xs={2}>{degree}</Grid>
            <Grid item xs={3}>{from} ~ {to}</Grid>
        </Grid>
    )
}