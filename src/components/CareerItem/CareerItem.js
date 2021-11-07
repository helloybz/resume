import { ListItem, Grid, Typography } from "@mui/material";


export function CareerItem({ name, department, from, to, position, forInMonth }) {
    return (
        <Grid item xs={12} component={ListItem} container alignItems="baseline" rowSpacing={1} sx={{ "mb": "0.5rem" }}>

            <Grid container item xs={"auto"} md={6} lg={4} alignItems="baseline">

                <Grid item xs="auto" component={Typography}
                    sx={{
                        "fontSize": "1.15rem",
                        "fontWeight": "600",
                        "textDecoration": "underline",
                        "mr": 2,
                    }}>
                    {name}
                </Grid>

                <Grid item xs="auto" sx={{
                    "fontSize": "1.1rem",
                }}>
                    {department}
                </Grid>

            </Grid>

            <Grid item xs={12} md={"auto"} lg={4}>
                {position}
            </Grid>

            <Grid item container xs={12} lg={4}>
                <Grid item xs={9} md={4} lg={8}>{from + " ~ " + to}</Grid>
                <Grid item xs={3}>({forInMonth + "개월"})</Grid>
            </Grid>
        </Grid >
    )
}