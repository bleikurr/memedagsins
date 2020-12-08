import { Button, CircularProgress, FormControl, Input, InputLabel, TextField } from "@material-ui/core";
import { Done } from "@material-ui/icons";
import { BrowserHistory } from "history";
import React from "react";
import { withRouter } from 'react-router-dom';

const MEME_HOST = process.env.MEME_HOST;
const MEME_PROTOCOL = process.env.MEME_PROTOCOL;


type State = {
    url: string;
    passw: string;
    isLoading: boolean;
    passwErr: boolean;
    urlErr: boolean;
    err: boolean;
    success: boolean;
}

type Props = {
    history: BrowserHistory;
}

class SetMemeForm extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            url: '',
            passw: '',
            isLoading: false,
            passwErr: false,
            urlErr: false,
            err: false,
            success: false,
        }

        this.setURL = this.setURL.bind(this);
        this.setPassw = this.setPassw.bind(this);
        this.setLoading = this.setLoading.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    setURL = (url: string) => this.setState(state => ({...state, url}));
    setPassw = (passw: string) => this.setState(state => ({...state, passw}));
    setLoading = (isLoading: boolean) => this.setState(state => ({ ...state, isLoading }));

    onSubmit = async (e) => {
        e.preventDefault();
        const { url, passw } = this.state;

        let passwErr, urlErr = false;
        if (!url || url === "") urlErr = true;
        if (!passw || passw === "") passwErr = true;
        if (passwErr || urlErr) {
            this.setState(state => ({ ...state, passwErr, urlErr }));
            return;
        }

        this.setLoading(true);

        const params = new URLSearchParams({
            leyniord: passw,
            meme: url,
        });

        const postString = 
            `${MEME_PROTOCOL}://${MEME_HOST}/set_meme?${params.toString()}`;

        const response = await fetch(postString, {
            method: 'POST',
            mode: 'cors',
        });

        if (response.status === 202) {
            const { history } = this.props;
            this.setState({
                url: '',
                passw: '',
                isLoading: false,
                passwErr: false,
                err: false,
                success: true,
            });

            setTimeout(() => {
                history.push('/');
                this.setState(state => ({ ...state, success: false }))}
                , 1000);

            return;
        }

        if (response.status === 401) {
            this.setState(state => ({
                ...state,
                err: false,
                passwErr: true,
                passw: '',
                isLoading: false,
            }));
            return;
        }

        this.setState((state) => ({
            ...state, err: true, isLoading: false,
        }));
    }

    render() {
        const { url, passw, passwErr, err, isLoading, urlErr, success } = this.state;

        if (success) return <Done color="primary" style={{height: 64, width: 64}} />

        if (isLoading) return <CircularProgress  size={64}/>

        return (
            <form className="basic-form" onSubmit={this.onSubmit}>
                <TextField
                    className="basic-form-field"
                    id="Meme"
                    label="Meme URL"
                    variant="outlined"
                    error={urlErr || err}
                    onChange={(e) => this.setURL(e.target.value)}
                    value={url}
                />
                <TextField
                    className="basic-form-field"
                    id="leyniord"
                    label="Leyniorð"
                    variant="outlined"
                    type="password"
                    error={passwErr || err}
                    onChange={(e) => this.setPassw(e.target.value)}
                    value={passw}
                />
                <Button variant="contained" type="submit" color="primary" style={{display: 'none'}}>Senda</Button>
            </form>
        );
    }
    
}

export default withRouter(SetMemeForm);