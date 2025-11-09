interface Props {
  label: string;
  value: string | null;
}

export default function DisplayField({ label, value }: Props) {
  return (
    <div>
      <label className="block mb-1 font-semibold">{label}</label>
      <p className="px-3 py-2 rounded bg-gray-100 dark:bg-gray-800">
        {value || '未設定'}
      </p>
    </div>
  );
}
