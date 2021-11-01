import { Grid, List, Typography } from "@mui/material"
import { CareerItem } from "../CareerItem/CareerItem"
import "./Career.css"

export function Career({ career }) {
    return (
        <Grid container className="sectionContainer">
            <Grid item xs={3} className="tabTitle">
                <Typography variant="h4">
                    경력
                </Typography>
            </Grid>
            <Grid item xs={12} container component={List} className="Items">
                {career.map((item, i) => {
                    return (
                        <CareerItem key={i}
                            {...item}
                        />
                    )
                })}
            </Grid>
        </Grid>
    )
}