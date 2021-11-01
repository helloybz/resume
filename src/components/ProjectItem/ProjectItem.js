import { Grid, List, ListItem, Typography } from "@mui/material";


export function ProjectItem({ name, at, description }) {
    return (
        <Grid item xs={12} component={ListItem} container>
            <Grid item xs={12}>
                <Typography variant="h6">{name}({at})</Typography>
            </Grid>
            <Grid item xs={12} container component={List}>
                <Grid item xs={12} component={ListItem}>
                    <Typography paragraph>
                        {description}
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}