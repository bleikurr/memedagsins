import React from 'react';

const MEME_HOST = process.env.MEME_HOST;
const PROTOCOL = process.env.MEME_PROTOCOL;

type State = {
    memeIndex: number;
    memeCount: number;
    memeUrl: string;
    isLoading: boolean;
}

export default class  ImageViewContainer extends React.Component<unknown, State> {
    constructor(props: unknown) {
        super(props);
        this.state = {
            memeIndex: -1,
            memeCount: -1,
            memeUrl: '',
            isLoading: false,
        }

        this.setLoading = this.setLoading.bind(this);
    }

    setLoading = (isLoading: boolean) => this.setState(state => ({ ...state, isLoading }));

    async componentDidMount() {
        const response = await fetch(`${PROTOCOL}://${MEME_HOST}/get_meme`);
        if (response.status === 200) {
            const res = await response.json();
            this.setState({
                memeCount: res.meme_count,
                memeIndex: res.current_meme,
                memeUrl: res.meme_url,
            });
        }
    }

    render() {
        return <p>Banana</p>
    }
}