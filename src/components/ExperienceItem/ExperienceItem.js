import { Grid, List, ListItem } from "@mui/material";


export function ExperienceItem({ category, items }) {
    return (
        <Grid item xs={12} component={ListItem} container>
            <Grid item xs={9}>{category}</Grid>
            <Grid item xs={12} component={List} container>
                {items.map((item, i) => {
                    return (
                        <Grid item xs={12} container component={ListItem}>
                            <Grid item xs={4}>
                                {item.what}
                            </Grid>
                            <Grid item xs={4}>
                                {item.at}
                            </Grid>
                            <Grid item xs={2}>
                                {item.from} ~ {item.to}
                            </Grid>
                        </Grid>
                    )
                })}
            </Grid>
        </Grid >
    )
}