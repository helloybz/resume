import { Grid, List, ListItem, Typography } from "@mui/material";


export function ProjectItem({ name, at, description }) {
    return (
        <Grid item xs={12} component={ListItem} container>
            <Grid item xs={12} component={Typography} sx={{ "fontSize": "h6.fontSize" }}>
                {name + " "}+ ( {at})
            </Grid>
            <Grid item xs={12} container component={List}>
                <Grid item xs={12} component={ListItem}>
                    <Typography paragraph>
                        {description}
                    </Typography>
                </Grid>
            </Grid>
        </Grid >
    )
}