import { Grid, List } from "@mui/material";


export function BodySectionWrapper({ printable = false, content, itemComponent }) {
    var ItemComponent = itemComponent

    return (
        <Grid container sx={{ "mt": "1.2rem" }}>
            <Grid
                item xs={12}
                sx={{
                    "fontSize": "h5.fontSize",
                    "fontWeight": "bold",
                }}
            >
                {content.title}
            </Grid>
            <Grid item xs={12} container component={List}>
                {content.items.map((item, i) => {
                    return (
                        <ItemComponent printable={printable} key={i}
                            {...item}
                        />
                    )
                })}
            </Grid>
        </Grid>
    )
}