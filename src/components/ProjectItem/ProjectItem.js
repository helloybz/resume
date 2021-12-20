import { Grid, Typography } from "@mui/material";


export function ProjectItem({ printable = false, name, at, description }) {
    var descriptionByLine = description.split('\n')
    return (
        <Grid item xs={12} container sx={{ padding: { "xs": printable ? "0" : "1rem" } }}>

            <Grid item xs={12} component={Typography} sx={{ "fontSize": "h6.fontSize" }}>
                {name + " "}  ({at})
            </Grid>

            <Grid item xs={12} container>
                {descriptionByLine.map((line, i) => (
                    <Grid item xs={12} key={i} sx={{ "pt": 0, "pb": 0 }} >
                        <Typography paragraph sx={{ "mb": "0.9rem" }}>
                            {line}
                        </Typography>
                    </Grid>
                ))}
            </Grid>
        </Grid >
    )
}