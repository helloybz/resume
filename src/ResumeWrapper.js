import { Fab, Grid } from "@mui/material";
import { forwardRef, useRef } from "react";
import PrintIcon from '@mui/icons-material/Print';
import { useReactToPrint } from "react-to-print";

import { Resume } from "./Resume"
import "./Resume.css";

export function ResumeWrapper() {
    const handlePrint = useReactToPrint({
        content: () => resumeRef.current,
    });

    const PrintableResume = forwardRef((props, ref) => (
        <div ref={ref} >
            <Resume printable />
        </div>
    ))
    const resumeRef = useRef(null)
    return (
        <Grid className="wrapper" container justifyContent="center" sx={{ padding: { "xs": "0", "md": "3rem 0" } }}>
            {/* Resume for print */}
            <Grid
                item
                xs={12}
                sx={{
                    "paddingTop": {
                        "xs": "0",
                        "md": "3rem",
                    },
                    "maxWidth": "210mm",
                    "displayPrint": "flex",
                    "display": "none",
                }}
            >
                <PrintableResume ref={resumeRef} />
            </Grid>

            {/* Resume for show */}
            <Grid
                item
                sx={{
                    "displayPrint": "none",
                }}
            >
                <Resume />
            </Grid>

            {/* Print Button */}
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

        </Grid >
    )
}
