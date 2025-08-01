import { useState } from 'react';
import GameSelector from './GameSelector';
import ModeSelector from './ModeSelector';
import ShowOddsToggle from './ShowOddsToggle';
import TimeLimitInput from './TimeLimitInput';

export default function MainMenu() {
    const [game, setGame] = useState('blackjack');
    const [mode, setMode] = useState('Timed');
    const [showOdds, setShowOdds] = useState(true);
    const [timeLimit, setTimeLimit] = useState(60);
    const [selectedOdds, setSelectedOdds] = useState([]);

    const handleStart = () => {
        console.log({ game, node, showOdds, timeLimit, selectedOdds });
    };

    return (
        <div className='main-menu'>
            <h1>Casino Math Trainer</h1>
            <GameSelector value={game} onChange={setGame} />
            <ModeSelector value={mode} onChange={setMode} />
            <ShowOddsToggle value={showOdds} onChange={setShowOdds} />
            <TimeLimitInput value={timeLimit} onChange={setTimeLimit} />
        </div>
    )
}