import { Grid, List } from "@mui/material";

function Title({ title }) {
    return (
        <Grid
            item xs={12}
            sx={{
                "fontSize": "h5.fontSize",
                "fontWeight": "bold",
            }}
        >
            {title}
        </Grid>
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
        <Grid container sx={{ "mt": "1.2rem" }}>
            <Title title={content.title} />
            <ItemList items={content.items} itemComponent={itemComponent} />
        </Grid>
    )
}