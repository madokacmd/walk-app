interface Option {
  label: string;
  value: number;
}

interface Props {
  label: string;
  value: number;
  options: Option[];
  error?: string;
  onChange: (value: number) => void;
}

export default function RadioGroup({ label, value, options, error, onChange }: Props) {
  return (
    <div>
      <label className="block mb-1 font-semibold">{label}</label>

      <div className="flex gap-6">
        {options.map((opt) => (
          <label key={opt.value} className="flex items-center gap-1">
            <input
              type="radio"
              value={opt.value}
              checked={value === opt.value}
              onChange={() => onChange(opt.value)}
              className="cursor-pointer"
            />
            {opt.label}
          </label>
        ))}
      </div>

      {error && (
        <p className="text-red-600 text-sm mt-1">{error}</p>
      )}
    </div>
  );
}
