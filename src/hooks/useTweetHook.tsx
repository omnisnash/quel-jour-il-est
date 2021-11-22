import content from './../content.json';

export interface TweetReference {
    lang: string;
    url: string;
}

export interface TweetList {
    days: {
        [key: number]: TweetReference[];
    }
}

const useTweetHook = () => {
    const tweetList: TweetList = content;

    const getTweetForDay = (dayIndex: number): TweetReference | null => {
        if (dayIndex < 0 || dayIndex > 7) {
            return null;
        }

        const tweets: TweetReference[] = tweetList.days[dayIndex];

        if (!tweets || tweets.length === 0) {
            return null;
        }

        return tweets[Math.floor(Math.random() * tweets.length)];
    }

    return {
        getTweetForDay
    }
};

export default useTweetHook;