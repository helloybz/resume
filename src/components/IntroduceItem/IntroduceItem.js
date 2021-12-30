import { ContentPaste } from "@mui/icons-material";
import { List, ListItemText, ListItem, Grid, Typography } from "@mui/material";


export function IntroduceItem({ printable = false, description }) {
    var descriptions = description.split('\n')
    return (
        <Grid
            item xs={12} component={ListItem}
            container
            alignItems="baseline"
            rowSpacing={1}
            sx={{ "mb": "0.5rem", fontStyle: 'italic' }}
        >
            {descriptions.map((item, i) => {
                return (<Grid key={i} item>{item}</Grid>)
            })}
        </Grid >
    )
}