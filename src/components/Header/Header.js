import { Divider, Grid, List, ListItem, Typography } from "@mui/material"
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';
import "./Header.css"

export function Header({ name, position, email, github }) {
    return (
        <Grid container alignItems="flex-start">
            <Grid item xs={8} container componet={List}>
                <Grid xs={12} item componet={ListItem}>
                    <Typography variant="h2">{name}</Typography>
                </Grid>
                <Grid xs={12} item componet={ListItem}>
                    <Typography variant="h5">{position}</Typography>
                </Grid>
            </Grid>
            <Grid item xs={4} component={List} container className="contacts" alignItems="center">
                <Grid item xs={1} ><MailIcon /> </Grid>
                <Grid item xs={11} >{email}</Grid>
                <Grid item xs={1} ><GitHubIcon /> </Grid>
                <Grid item xs={11} >{github}</Grid>
                {/* <Grid item xs={12} component={ListItem} ><MailIcon /> {email}</Grid>
                <Grid item xs={12} component={ListItem} ><GitHubIcon /> {github}</Grid> */}
            </Grid>
            <Grid item xs={12} className="divider">
                <Divider variant="fullWidth" />
            </Grid>
        </Grid >
    )
};

