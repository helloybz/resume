import { forwardRef, useRef } from 'react';
import { Button, Grid } from "@mui/material";
import { useReactToPrint } from "react-to-print";
import { Resume } from "./Resume"
import './ResumeWrapper.css';

export function ResumeWrapper() {
    const handlePrint = useReactToPrint({
        content: () => resumeRef.current,
    });

    const ReferredResume = forwardRef((props, ref) => (
        <div ref={ref} >
            <Resume />
        </div>
    ));
    const resumeRef = useRef()
    return (
        <Grid container justifyContent="center">
            <Grid item xs={12}>
                <Button onClick={handlePrint}>efef</Button>
            </Grid>
            <Grid item xs={8} className="resumeWrapper">
                <ReferredResume ref={resumeRef} />
            </Grid>
        </Grid >
    )
}
