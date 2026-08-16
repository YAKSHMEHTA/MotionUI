import React from "react";

export const DemoCard = () => {
  return (
    <div className="flex w-full max-w-100 h-140 flex-col py-30   overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900 text-white shadow-xl transition-all duration-300 hover:border-neutral-700 hover:shadow-2xl">
      {/* Top Banner / Visual Slot */}
      <div className="relative h-44 w-full  bg-gradient-to-br from-indigo-500/20 via-neutral-900 to-purple-500/10 p-4">
        <span className="absolute top-4 left-4 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-400 backdrop-blur-sm">
          Vertical Component
        </span>
      </div>

      {/* Card Content Stack */}
      <div className="flex flex-1 flex-col p-6">
        <span className="mb-1 text-xs text-neutral-500">Aug 2026</span>
        <h3 className="mb-2 text-xl font-semibold tracking-tight text-neutral-100">
          Vertical UI Card
        </h3>
        <p className="mb-6 text-sm leading-relaxed text-neutral-400">
          A vertically stacked card component featuring a media header area,
          structured text body, and responsive action controls.
        </p>

        {/* Footer Aligned to Bottom */}
        <div className="mt-auto flex items-center justify-between border-t border-neutral-800/80 pt-4">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-full border border-neutral-700 bg-neutral-800 text-xs font-semibold text-neutral-300">
              UI
            </div>
            <span className="text-xs text-neutral-400">Motion Repo</span>
          </div>

          <button
            type="button"
            className="rounded-lg bg-neutral-100 px-3.5 py-1.5 text-xs font-medium text-neutral-900 transition-colors hover:bg-white active:scale-95"
          >
            Explore
          </button>
        </div>
      </div>
    </div>
  );
};

export default DemoCard;
