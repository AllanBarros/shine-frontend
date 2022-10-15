import { Grid } from "@mui/material";
import SignUpForm from "../components/sign_up_form";

function Login() {
    return (
        <Grid container justifyItems="center" alignItems="center">
            <Grid item xs={12} md={12}>
                <SignUpForm isLogin={true}/>
            </Grid>
        </Grid>
    )
}

export default Login;