import React from 'react';

export interface TweetProps {
    url: string;
    altText?: string;
}

const Tweet: React.FC<TweetProps> = (props) => {
    return (
        <blockquote className="twitter-tweet" data-align="center">
            <a href={props.url} data-dnt="true">
                {props.altText}
            </a>
        </blockquote>
    );
};

export default Tweet;