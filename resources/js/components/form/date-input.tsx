interface Props {
  label: string;
  value: string | null;
  error?: string;
  onChange: (value: string) => void;
}

export default function DateInput({ label, value, error, onChange }: Props) {
  return (
    <div>
      <label className="block mb-1 font-semibold">{label}</label>
      <input
        type="date"
        value={value ?? ''}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full border rounded px-3 py-2 ${error ? 'border-red-500' : ''
          }`}
      />
      {error && (
        <p className="text-red-600 text-sm mt-1">{error}</p>
      )}
    </div>
  );
}
