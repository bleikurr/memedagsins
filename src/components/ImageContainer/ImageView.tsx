import { Card, CircularProgress } from '@material-ui/core';
import React from 'react';

type Props = {
    memeUrl: string;
    isLoading: boolean;
};

export default function ImageView(props: Props) {
    const { memeUrl, isLoading } = props;

    return (
        <div className="card-container">
            {isLoading ? 
                <CircularProgress size='128px' /> 
                :
                <Card
                    style={{
                        maxWidth: '100%',
                        maxHeight: '100%',
                        padding: "10px",
                        alignSelf: "center",

                    }}
                >
                    <img 
                    src={memeUrl} 
                    style={{
                        maxHeight: "100%",
                        maxWidth: "100%"
                    }}/>
                </Card>
            }   
        </div>
        
    );
}