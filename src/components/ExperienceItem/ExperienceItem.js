import { Grid, List, ListItem } from "@mui/material";


export function ExperienceItem({ category, items }) {
    return (
        <Grid item xs={12} component={ListItem} container>
            <Grid item xs={9} sx={{ "fontWeight": "450" }}>
                {category}
            </Grid>
            <Grid item xs={12} component={List} container>
                {items.map((item, i) => {
                    return (
                        <Grid key={i} item xs={12} container component={ListItem}>
                            <Grid item xs={12}
                                sx={{ "textDecoration": "underline" }}>
                                {item.what}
                            </Grid>
                            <Grid item xs={6}>
                                {"@" + item.at}
                            </Grid>
                            <Grid item xs={6}>
                                {item.from} ~ {item.to}
                            </Grid>
                        </Grid>
                    )
                })}
            </Grid>
        </Grid >
    )
}