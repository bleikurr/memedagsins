import { CircularProgress } from '@material-ui/core';
import React from 'react';
import ImageView from './ImageView';
import ImageViewNav from './ImageViewNav';

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
            isLoading: true,
        }

        this.setLoading = this.setLoading.bind(this);
        this.updateIndex = this.updateIndex.bind(this);
        this.loadMeme = this.loadMeme.bind(this);
    }

    imgCard = React.createRef<HTMLElement>();

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

    loadMeme = async () => {
        const { memeIndex } = this.state;
        const response = await fetch(`${PROTOCOL}://${MEME_HOST}/get_meme?index=${memeIndex}`);

        if (response.status === 200) {
            const res = await response.json();
            this.setState({
                memeCount: res.meme_count,
                memeIndex: res.current_meme,
                memeUrl: res.meme_url,
            });
        }
    }

    updateIndex = (memeIndex: number) => {
        this.imgCard.current.style.display = 'none';
        this.setState(state => ({...state, memeIndex, isLoading: true,}), this.loadMeme);
    }

    render() {
        const { memeUrl, memeCount, memeIndex, isLoading } = this.state;

        return (
            <>
                { isLoading && <CircularProgress 
                    color="primary" 
                    size={128} 
                    style={{
                        position: 'absolute'
                }} />}
                <ImageView memeUrl={memeUrl} setLoading={this.setLoading} cardRef={this.imgCard} />
                <ImageViewNav
                memeCount={memeCount}
                memeIndex={memeIndex} 
                setMemeIndex={this.updateIndex} 
                />
            </>
        )
    }
}