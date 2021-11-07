import { Grid, List } from "@mui/material";

function Title({ title }) {
    return (
        <Grid item xs={12}
            sx={{
                fontSize: {
                    "xs": "h5.fontSize",
                    "md": "h4.fontSize",
                },
                fontWeight: {
                    "xs": "bold",
                    "lg": "400",
                }
            }}>{title}</Grid>
    )
}

function ItemList({ items, itemComponent }) {
    var ItemComponent = itemComponent
    return (
        <Grid item xs={12} container component={List}>
            {items.map((item, i) => {
                return (
                    <ItemComponent key={i}
                        {...item}
                    />
                )
            })}
        </Grid>
    )
}
export function BodySectionWrapper({ content, itemComponent }) {
    return (
        <Grid container sx={{ "mt": { "xs": "1.5rem", "md": "1.8rem", "lg": "2.3rem" } }}>
            <Title title={content.title} />
            <ItemList items={content.items} itemComponent={itemComponent} />
        </Grid>
    )
}