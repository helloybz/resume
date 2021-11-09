import { Grid, List, ListItem, Typography } from "@mui/material";


export function ProjectItem({ name, at, description }) {
    var descriptionByLine = description.split('\n')
    return (
        <Grid item xs={12} component={ListItem} container>

            <Grid item xs={12} component={Typography} sx={{ "fontSize": "h6.fontSize" }}>
                {name + " "}  ({at})
            </Grid>

            <Grid item xs={12} container component={List}>
                {descriptionByLine.map((line, i) => (
                    <Grid item xs={12} component={ListItem} key={i} sx={{ "pt": 0, "pb": 0 }} >
                        <Typography paragraph sx={{ "mb": "0.9rem" }}>
                            {line}
                        </Typography>
                    </Grid>
                ))}
            </Grid>
        </Grid >
    )
}