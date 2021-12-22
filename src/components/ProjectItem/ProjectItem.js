import { Grid, List, ListItem, ListItemText, Typography } from "@mui/material";


export function ProjectItem({ printable = false, name, at, duration, description }) {
    var descriptionByLine = description.split('\n')
    return (
        <Grid item xs={12} container sx={{ padding: { "xs": printable ? "0" : "1rem 0", "md": "0" } }}>
            <Grid item xs={12} component={Typography} sx={{ "fontSize": "h6.fontSize" }}>
                {name}
            </Grid>
            <Grid item xs={12} component={Typography} sx={{ "fontSize": "1rem" }}>
                기간: {duration}
            </Grid>

            <Grid item xs={12} component={List} container sx={{ "marginTop": "0.5rem" }}>
                {descriptionByLine.map((line, i) => (
                    <Grid
                        item
                        container alignItems="flex-start"
                        columns={36}
                        component={ListItem}
                        sx={{ "padding": 0, "marginBottom": "0.5rem" }}
                        key={i}
                    >
                        <Grid item xs={'auto'} sx={{ "marginRight": { "xs": "0.1rem", "md": '0.2rem' } }}>-</Grid>
                        <Grid item xs={35} component={ListItemText}>
                            {line.trim()}
                        </Grid>
                    </Grid>
                ))}
            </Grid>
        </Grid >
    )
}