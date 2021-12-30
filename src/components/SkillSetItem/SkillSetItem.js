import { Grid } from "@mui/material";


export function SkillSetItem({ printable = false, category, items }) {
    return (
        <Grid item xs={'auto'} container sx={{ "padding": '0 1rem', marginBottom: "0.2rem", }}>
            <Grid item xs={12} sx={{ "fontWeight": "450", "textDecoration": "underline" }}>
                {category}
            </Grid>
            <Grid item xs={'12'} container >
                {items.map((item, i) => {
                    return (
                        <Grid key={i} item xs={'auto'} sx={{ margin: "0 0.5rem" }} >
                            {/* <Grid item xs={12} sx={{ "margin": "0 0.3rem" }}> */}
                            {item.name} ({item.score})
                            {/* </Grid> */}
                        </Grid>
                    )
                })}
            </Grid>
        </Grid >
    )
}