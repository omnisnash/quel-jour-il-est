import { format, getISODay } from 'date-fns';
import GithubCorner from './components/github-corner/GithubCorner';
import Tweet from './components/tweet/Tweet';
import useTweetHook from './hooks/useTweetHook';

function App() {
  const {getTweetForDay} = useTweetHook();

  const today = new Date();
  const dayIndex = getISODay(today);
  const tweet = getTweetForDay(dayIndex);

  return (
    <>
      {tweet ?
        <Tweet url={tweet.url} altText="Doesn't see the embeded tweet? Try disabling tracking protection" /> :
        <p>Oups, no tweet for this day 😶</p>
      }

      <p className="current-day">Look like it's <b>{format(today, 'iiii')}</b></p>
      
      <GithubCorner url={"https://github.com/omnisnash/quel-jour-il-est"}/>
    </>
  );
}

export default App;
