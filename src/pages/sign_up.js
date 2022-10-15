import { Grid } from "@mui/material";
import SignUpForm from "../components/sign_up_form";

function SignUp() {
    return (
        <Grid container justifyItems="center" alignItems="center">
            <Grid item xs={12} md={12}>
                <SignUpForm isLogin={false}/>
            </Grid>
        </Grid>
    )
}

export default SignUp;