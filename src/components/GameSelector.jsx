export default function GameSelector({ value, onChange }) {
    return (
        <div>
            <label>Game:</label>
            <select value={value} onChange={(e) => onChange(e.target.value)}>
                <option value="blackjack">Blackjack</option>
                <option value="roulette">Roulette</option>
            </select>
        </div>
    );
}