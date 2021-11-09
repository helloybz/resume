import { Fab, Grid } from "@mui/material";
import { forwardRef, useRef } from "react";
import PrintIcon from '@mui/icons-material/Print';
import { useReactToPrint } from "react-to-print";

import { Resume } from "./Resume"
import "./Resume.css";

export function ResumeWrapper() {
    const handlePrint = useReactToPrint({
        content: () => resumeRef.current,
        print: window.print
    });

    const PrintableResume = forwardRef((props, ref) => (
        <div ref={ref} >
            <Resume />
        </div>
    ))
    const resumeRef = useRef(null)
    return (
        <Grid container justifyContent="center">
            <Fab
                sx={{
                    position: "fixed",
                    right: {
                        "xs": "1rem",
                        "lg": "10rem"
                    },
                    bottom: {
                        "xs": "1rem",
                        "lg": "5rem"
                    },
                    zIndex: "20",
                    displayPrint: "none"
                }}
                onClick={handlePrint}
            >
                <PrintIcon />
            </Fab>

            <Grid
                item
                xs={12}
                sx={{
                    "paddingTop": {
                        "xs": "0",
                        "md": "3rem",
                    },
                    "maxWidth": "210mm",
                    "display": "none",
                    "displayPrint": "block",

                }}>
                <PrintableResume ref={resumeRef} />
            </Grid>

            <Grid
                item
                xs={12}
                sx={{
                    "paddingTop": {
                        "xs": "0",
                        "md": "3rem",
                    },
                    "maxWidth": "210mm",
                    "display": "block",
                    "displayPrint": "none",
                }}
            >
                <Resume />
            </Grid>
        </Grid >
    )
}
