export default function TimeLimitInput({ value, onChange }) {
    return (
        <div>
            <label>
                Time limit (in seconds):
                <input 
                    type="number"
                    value={value}
                    onChange={(e) => onChange(e.target.checked)} 
                />
            </label>
        </div>
    );
}