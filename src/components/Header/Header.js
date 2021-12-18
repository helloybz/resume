import { Grid } from "@mui/material"
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';

import { Contact } from "./Contact.js";
import { HeaderDivider } from "./HeaderDivider.js";

export function Header({ printable = false, name, position, email, github }) {
    return (
        <Grid container alignItems="flex-end" sx={{ padding: { "xs": printable ? "0 1rem" : "0", "md": "0 1rem" } }}>
            <Grid item xs={12} sx={{
                "fontSize": "4rem",
                "fontWeight": "bold"
            }}>
                {name}
            </Grid>
            <Grid item xs={printable ? 8 : 12} md={8} sx={{
                "fontSize": "2.5rem",
                "fontWeight": "light",
                "flexGrow": 1,
            }}>
                {position}
            </Grid>
            <Grid item xs={printable ? 'auto' : 12} md={'auto'}
                container
                className="contacts"
                direction="column"
                justifyContent="flex-end"
                alignItems="baseline"
            >
                <Contact printable={printable} icon={<MailIcon />} value={email} />
                <Contact printable={printable} icon={<GitHubIcon />} value={github} />
            </Grid >

            <HeaderDivider />

        </Grid >
    )
};

