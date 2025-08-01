export default function ModeSelector({ value, onChange }) {
    return (
        <div>
            <label>Mode:</label>
            <select value={value} onChange={(e) => onChange(e.target.value)}>
                <option value="timed">Timed</option>
                <option value="practice">Practice</option>
            </select>
        </div>
    );
}