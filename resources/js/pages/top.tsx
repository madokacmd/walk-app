import { Link, Head } from '@inertiajs/react';

export default function Top() {
  return (
    <>
      <Head title="トップ画面" />

      <div className="min-h-screen bg-[#fefcf8] flex flex-col items-center justify-center gap-12 text-center relative">
        <div className="flex flex-col items-center">
          <label htmlFor="area" className="text-gray-700 mb-2 text-sm">
            エリア入力
          </label>
          <input
            id="area"
            type="text"
            placeholder="例：渋谷、新宿…"
            className="border border-gray-300 rounded-lg px-4 py-2 w-60 text-center"
          />
        </div>

        <Link
          href="/open-map"
          className="bg-[#f5b5b5] text-white font-bold text-2xl tracking-widest py-10 px-14 rounded-xl shadow-md hover:bg-[#f08c8c] transition-all duration-300"
        >
          散歩する
        </Link>

        <Link
          href="/secret-mode"
          className="absolute bottom-12 bg-[#e7d8c9] text-gray-700 px-8 py-8 rounded-full shadow-md hover:bg-[#dfc8b7] transition"
        >
          シークレットモード
        </Link>
      </div>
    </>
  );
}
