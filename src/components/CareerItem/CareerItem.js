import { ListItem, Grid, Typography } from "@mui/material";


export function CareerItem({ printable = false, name, department, from, to, position, forInMonth }) {
    return (
        <Grid
            item xs={12} component={ListItem}
            container
            alignItems="baseline"
            rowSpacing={1}
            sx={{ "mb": "0.5rem" }}
        >
            <Grid container item xs={12} alignItems="baseline">
                <Grid item xs="auto" component={Typography}
                    sx={{
                        "fontSize": "1.15rem",
                        "fontWeight": "600",
                        "textDecoration": "underline",
                        "mr": 2,
                    }}>
                    {name}
                </Grid>

                <Grid item xs={6} sx={{
                    "fontSize": "1.1rem",
                }}>
                    {department}
                </Grid>
            </Grid>

            <Grid item xs={printable ? 6 : 12} md={6}>
                {position}
            </Grid>

            <Grid item container xs={printable ? 6 : 6} >
                <Grid item xs="auto" sx={{ "mr": 1 }}>{from + " ~ " + to}</Grid>
                <Grid item sx={{ display: { "xs": printable ? "flex" : "none", "md": "flex" } }} > ({forInMonth + "개월"})</Grid>
            </Grid>
        </Grid >
    )
}