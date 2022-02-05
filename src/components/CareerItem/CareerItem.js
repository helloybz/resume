import { Box, List, ListItem, Grid, Typography } from "@mui/material";

function HighlightedText({ text }) {
    return (
        <Box sx={{ display: 'inline', color: 'rgba(0,114,229,1)' }}>{text.slice(2)}</Box>
    )
}
export function CareerItem({ printable = false, name, department, from, to, position, forInMonth, reasonResign, description }) {
    var descriptions = description.split('\n')
    return (
        <Grid
            item xs={12} component={ListItem}
            container
            alignItems="baseline"
            rowSpacing={1}
            sx={{ "mb": "0.5rem" }}
        >
            <Grid container item xs={12} alignItems="baseline">
                <Grid item xs="auto" component={Typography}
                    sx={{
                        "fontSize": "1.15rem",
                        "fontWeight": "600",
                        "textDecoration": "underline",
                        "mr": 2,
                    }}>
                    {name}
                </Grid>

                <Grid item xs={6} sx={{
                    "fontSize": "1.1rem",
                }}>
                    {department}
                </Grid>
            </Grid>


            <Grid item container xs={printable ? 12 : 12} sx={{ marginBottom: "0.5rem" }}>
                <Grid item xs="auto" sx={{ "mr": 1 }}>{from + " ~ " + to} </Grid>
                <Grid item
                    sx={{
                        display: {
                            "xs": printable ? "flex" : "none",
                            "md": forInMonth === "" ? "none" : "flex"
                        }
                    }} >
                    ({forInMonth + "개월"}{reasonResign})
                </Grid>
            </Grid>

            <Grid item xs={12} container component={List}>
                {descriptions.map((item, i) => {
                    var items = item.split('\t')
                    return (<Grid
                        item
                        container alignItems="flex-start"
                        columns={36}
                        component={ListItem}
                        sx={{ "padding": 0, "marginBottom": "0.5rem" }}
                        key={i}
                    >
                        {items.map((item_, j) => {
                            return (<Grid item xs={35} key={j}
                                sx={{
                                    fontWeight: j === 0 ? "bold" : "",
                                    paddingLeft: j === 0 ? "0.5rem" : "1.5rem",
                                    marginBottom: j === 0 ? "0.5rem" : "0",
                                    marginTop: j === 0 ? "0.7rem" : "0.5rem",
                                }}>
                                {item_.startsWith("&h") ? <HighlightedText text={item_} /> : item_}
                            </Grid>)
                        })}
                    </Grid>)
                })}
            </Grid>
        </Grid >
    )
}