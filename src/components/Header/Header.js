import { Grid, List } from "@mui/material"
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';

import { Name } from "./Name.js";
import { Position } from "./Position.js";
import { Contact } from "./Contact.js";
import { HeaderDivider } from "./HeaderDivider.js";

export function Header({ name, position, email, github }) {
    return (
        <Grid container alignItems="flex-end">

            <Grid item xs={12} md={6} lg={8} container componet={List}>
                <Name>{name}</Name>
                <Position>{position}</Position>
            </Grid>

            <Grid
                item xs={12} md={6} lg={4}
                component={List}
                container
                className="contacts"
                direction="column"
                justifyContent="flex-end"
                alignItems="baseline"
            >
                <Contact icon={MailIcon} value={email} />
                <Contact icon={GitHubIcon} value={github} />
            </Grid >

            <HeaderDivider />

        </Grid >
    )
};

