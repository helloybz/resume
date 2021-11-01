import { ListItem, Grid } from "@mui/material";


export function CareerItem({ name, department, from, to, position }) {

    return (
        <Grid item xs={12} component={ListItem} container>
            <Grid item xs={2}>{name}</Grid>
            <Grid item xs={2}>{department}</Grid>
            <Grid item xs={2}>{position}</Grid>
            <Grid item xs={2}>{from} ~ {to}</Grid>
        </Grid>
    )
}