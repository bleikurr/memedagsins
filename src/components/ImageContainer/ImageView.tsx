import { Card, CircularProgress } from '@material-ui/core';
import React from 'react';
import { cursorTo } from 'readline';

type Props = {
    memeUrl: string;
    setLoading: (isLoading: boolean) => void;
    cardRef: React.MutableRefObject<HTMLElement>;
};

export default function ImageView(props: Props) {
    const { memeUrl, setLoading, cardRef } = props;

    const showImage = () => {
        setLoading(false);
        cardRef.current.style.display = 'block';
    }

    return (
        <div className="card-container" >
            <Card
                ref={cardRef}
                style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    padding: "10px",
                    alignSelf: "center",
                    display: 'none',
                }}

            >
                <img 
                src={memeUrl} 
                onLoad={showImage}
                style={{
                    maxHeight: "100%",
                    maxWidth: "100%"
                }}/>
            </Card>
        </div>
        
    );
}