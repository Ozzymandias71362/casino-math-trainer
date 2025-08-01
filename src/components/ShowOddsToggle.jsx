export default function ShowOddsToggle({ checked, onChange }) {
    return (
        <div>
            <label>
                <input 
                    type="checkbox"
                    checked={checked}
                    onChange={(e) => onChange(e.target.checked)} 
                />
                Show odds?
            </label>
        </div>
    );
}