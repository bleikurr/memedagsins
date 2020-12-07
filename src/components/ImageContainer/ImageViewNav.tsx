import { Button, ButtonGroup } from '@material-ui/core';
import React from 'react';

type Props = {
   memeCount: number;
   memeIndex: number;
   setMemeIndex: (index: number) => void;
};

export default function ImageViewNav(props: Props) {
    const { memeCount, memeIndex, setMemeIndex } = props;

    const decreaseMemeIndex = () => {
        if (memeIndex === 0) return;
        setMemeIndex(memeIndex - 1);
    }

    const increaseMemeIndex = () => {
        if (memeIndex === (memeCount - 1)) return;
        setMemeIndex(memeIndex + 1);
    }

    return (
        <ButtonGroup 
            id="image-view-nav"
            color="primary" 
            aria-label="outlined primary button group"
        >
            {memeIndex > 0 && <Button 
                className="nav-center" 
                variant="contained" color="primary"
                onClick={decreaseMemeIndex}>Fyrri
            </Button> }
            {memeIndex < (memeCount - 1) && <Button
                variant="contained"
                color="primary"
                onClick={increaseMemeIndex}
            >
            Næsta
            </Button> }
        </ButtonGroup>
    )
}