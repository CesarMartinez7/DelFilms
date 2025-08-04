

export default function MovieDetailLoading() {
  return (
    <div className="flex flex-col justify-center items-center md:flex-row gap-8 animate-pulse w-full   h-[80vh] ">
      {/* Poster */}
      <div className="w-full md:w-64 h-[380px] bg-zinc-800 rounded-lg" />

      {/* Info */}
      <div className="flex flex-col gap-4 flex-1">
        {/* Title */}
        <div className="w-2/3 h-8 bg-zinc-800 rounded" />
        <div className="w-1/3 h-4 bg-zinc-800 rounded" />

        {/* Buttons */}
        <div className="flex gap-4 mt-2">
          <div className="w-20 h-10 bg-zinc-800 rounded" />
          <div className="w-24 h-10 bg-zinc-800 rounded" />
        </div>

        {/* Synopsis */}
        <div className="flex flex-col gap-2 mt-4">
          <div className="w-full h-4 bg-zinc-800 rounded" />
          <div className="w-5/6 h-4 bg-zinc-800 rounded" />
          <div className="w-4/6 h-4 bg-zinc-800 rounded" />
        </div>

        {/* Genres */}
        <div className="flex gap-2 mt-4">
          {Array(4)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="w-20 h-6 bg-zinc-800 rounded-full" />
            ))}
        </div>

        {/* Release & Rating */}
        <div className="flex gap-8 mt-6">
          <div className="flex flex-col gap-1">
            <div className="w-16 h-4 bg-zinc-800 rounded" />
            <div className="w-24 h-6 bg-zinc-800 rounded" />
          </div>
          <div className="flex flex-col gap-1">
            <div className="w-16 h-4 bg-zinc-800 rounded" />
            <div className="w-12 h-6 bg-zinc-800 rounded" />
          </div>
        </div>
      </div>
    </div>
  );
}
