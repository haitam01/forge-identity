import { FC } from "react";
import { ForgeLogoMinimal } from "../ForgeLogoMinimal";

/**
 * FORGE APP INTERFACE
 * 
 * Dark-mode industrial control panel aesthetic
 * Dashboard with gauges and bars
 * Orange only for progress/intensity
 */
export const ForgeAppInterface: FC = () => {
  return (
    <div className="space-y-16">
      {/* App Screens */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Home Screen */}
        <div className="text-center">
          <div className="aspect-[9/19] bg-forge-black border-2 border-forge-steel/30 rounded-[2rem] overflow-hidden relative">
            {/* Status bar */}
            <div className="h-6 bg-forge-black flex items-center justify-between px-6">
              <span className="text-[10px] text-forge-steel-light">9:41</span>
              <div className="w-12 h-4 bg-forge-black rounded-full" />
              <div className="flex items-center gap-1">
                <div className="w-4 h-2 border border-forge-steel-light rounded-sm">
                  <div className="w-3/4 h-full bg-forge-steel-light" />
                </div>
              </div>
            </div>
            
            {/* App content */}
            <div className="p-4 h-[calc(100%-1.5rem)] flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-forge-steel/20">
                <ForgeLogoMinimal size={24} color="white" />
                <p className="font-heading text-sm">FORGE</p>
                <div className="w-8 h-8 rounded-full bg-forge-steel/20" />
              </div>
              
              {/* Main gauge */}
              <div className="flex-1 flex flex-col items-center justify-center py-6">
                <div className="relative w-32 h-32">
                  {/* Gauge background */}
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <circle
                      cx="50" cy="50" r="45"
                      fill="none"
                      stroke="hsl(0 0% 15%)"
                      strokeWidth="6"
                    />
                    <circle
                      cx="50" cy="50" r="45"
                      fill="none"
                      stroke="hsl(21 100% 50%)"
                      strokeWidth="6"
                      strokeDasharray="283"
                      strokeDashoffset="70"
                      strokeLinecap="butt"
                      transform="rotate(-90 50 50)"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <p className="font-heading text-3xl text-forge-white">78%</p>
                    <p className="text-[8px] text-forge-steel uppercase tracking-wider">Weekly Goal</p>
                  </div>
                </div>
                <p className="text-xs text-forge-steel mt-4">4 of 5 sessions complete</p>
              </div>
              
              {/* Quick stats */}
              <div className="grid grid-cols-3 gap-2 pb-4">
                <div className="bg-forge-steel/10 p-2 text-center">
                  <p className="font-heading text-lg text-forge-ember">245</p>
                  <p className="text-[8px] text-forge-steel">REPS</p>
                </div>
                <div className="bg-forge-steel/10 p-2 text-center">
                  <p className="font-heading text-lg text-forge-white">12K</p>
                  <p className="text-[8px] text-forge-steel">VOLUME</p>
                </div>
                <div className="bg-forge-steel/10 p-2 text-center">
                  <p className="font-heading text-lg text-forge-white">52</p>
                  <p className="text-[8px] text-forge-steel">MIN</p>
                </div>
              </div>
              
              {/* Today's workout card */}
              <div className="bg-forge-steel/10 border border-forge-steel/20 p-3">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-[10px] text-forge-ember uppercase tracking-wider">Today</p>
                    <p className="font-heading text-sm text-forge-white mt-1">PUSH DAY</p>
                    <p className="text-[10px] text-forge-steel mt-1">6 exercises • 45 min</p>
                  </div>
                  <div className="w-10 h-10 bg-forge-ember flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3">
                      <path d="M5 12h14m-7-7l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Bottom nav */}
              <div className="mt-auto pt-4 flex justify-around border-t border-forge-steel/20">
                <div className="flex flex-col items-center">
                  <div className="w-5 h-5 bg-forge-ember" />
                  <span className="text-[8px] text-forge-ember mt-1">Home</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-5 h-5 bg-forge-steel/50" />
                  <span className="text-[8px] text-forge-steel mt-1">Train</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-5 h-5 bg-forge-steel/50" />
                  <span className="text-[8px] text-forge-steel mt-1">Stats</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-5 h-5 bg-forge-steel/50" />
                  <span className="text-[8px] text-forge-steel mt-1">Profile</span>
                </div>
              </div>
            </div>
          </div>
          <p className="mt-4 font-heading text-forge-steel-light">HOME</p>
          <p className="text-xs text-forge-steel">Industrial gauge dashboard</p>
        </div>

        {/* Workout Screen */}
        <div className="text-center">
          <div className="aspect-[9/19] bg-forge-black border-2 border-forge-steel/30 rounded-[2rem] overflow-hidden relative">
            <div className="h-6 bg-forge-black flex items-center justify-between px-6">
              <span className="text-[10px] text-forge-steel-light">9:41</span>
              <div className="w-12 h-4 bg-forge-black rounded-full" />
              <div className="flex items-center gap-1">
                <div className="w-4 h-2 border border-forge-steel-light rounded-sm">
                  <div className="w-3/4 h-full bg-forge-steel-light" />
                </div>
              </div>
            </div>
            
            <div className="p-4 h-[calc(100%-1.5rem)] flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between pb-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M19 12H5m7-7l-7 7 7 7" />
                </svg>
                <p className="font-heading text-sm">PUSH DAY</p>
                <div className="w-5" />
              </div>
              
              {/* Timer */}
              <div className="text-center py-4 border-b border-forge-steel/20">
                <p className="font-heading text-4xl text-forge-white tracking-widest font-mono">12:34</p>
                <p className="text-[10px] text-forge-steel mt-1">ELAPSED TIME</p>
              </div>
              
              {/* Current exercise */}
              <div className="py-4 border-b border-forge-steel/20">
                <p className="text-[10px] text-forge-ember uppercase tracking-wider">Current</p>
                <p className="font-heading text-lg text-forge-white mt-1">BENCH PRESS</p>
                <div className="flex gap-4 mt-2">
                  <div>
                    <p className="font-heading text-2xl text-forge-white">80<span className="text-sm text-forge-steel">kg</span></p>
                    <p className="text-[8px] text-forge-steel">WEIGHT</p>
                  </div>
                  <div>
                    <p className="font-heading text-2xl text-forge-ember">8<span className="text-sm text-forge-steel">/12</span></p>
                    <p className="text-[8px] text-forge-steel">REPS</p>
                  </div>
                  <div>
                    <p className="font-heading text-2xl text-forge-white">3<span className="text-sm text-forge-steel">/4</span></p>
                    <p className="text-[8px] text-forge-steel">SETS</p>
                  </div>
                </div>
              </div>
              
              {/* Set progress bars */}
              <div className="py-4 space-y-2">
                <div className="flex gap-1">
                  <div className="flex-1 h-2 bg-forge-ember" />
                  <div className="flex-1 h-2 bg-forge-ember" />
                  <div className="flex-1 h-2 bg-forge-ember" />
                  <div className="flex-1 h-2 bg-forge-steel/30" />
                </div>
                <p className="text-[8px] text-forge-steel">SET PROGRESS</p>
              </div>
              
              {/* Up next */}
              <div className="mt-auto space-y-2">
                <p className="text-[10px] text-forge-steel uppercase tracking-wider">Up Next</p>
                <div className="bg-forge-steel/10 p-2 flex justify-between items-center">
                  <p className="text-xs text-forge-steel-light">Incline Dumbbell Press</p>
                  <p className="text-xs text-forge-steel">4×10</p>
                </div>
                <div className="bg-forge-steel/5 p-2 flex justify-between items-center">
                  <p className="text-xs text-forge-steel">Cable Flyes</p>
                  <p className="text-xs text-forge-steel">3×15</p>
                </div>
              </div>
            </div>
          </div>
          <p className="mt-4 font-heading text-forge-steel-light">WORKOUT</p>
          <p className="text-xs text-forge-steel">Control panel interface</p>
        </div>

        {/* Progress Screen */}
        <div className="text-center">
          <div className="aspect-[9/19] bg-forge-black border-2 border-forge-steel/30 rounded-[2rem] overflow-hidden relative">
            <div className="h-6 bg-forge-black flex items-center justify-between px-6">
              <span className="text-[10px] text-forge-steel-light">9:41</span>
              <div className="w-12 h-4 bg-forge-black rounded-full" />
              <div className="flex items-center gap-1">
                <div className="w-4 h-2 border border-forge-steel-light rounded-sm">
                  <div className="w-3/4 h-full bg-forge-steel-light" />
                </div>
              </div>
            </div>
            
            <div className="p-4 h-[calc(100%-1.5rem)] flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between pb-3 border-b border-forge-steel/20">
                <p className="font-heading text-sm">PROGRESS</p>
                <p className="text-[10px] text-forge-steel">THIS MONTH</p>
              </div>
              
              {/* Main stat */}
              <div className="py-6 text-center">
                <p className="text-[10px] text-forge-steel uppercase tracking-wider">Total Volume</p>
                <p className="font-heading text-5xl text-forge-white mt-2">48,250</p>
                <p className="text-xs text-forge-ember mt-1">↑ 12% from last month</p>
              </div>
              
              {/* Bar chart */}
              <div className="flex-1 flex items-end gap-1 px-2 pb-4 border-b border-forge-steel/20">
                {[40, 65, 50, 80, 70, 90, 85, 60, 95, 75, 88, 92].map((height, i) => (
                  <div key={i} className="flex-1 flex flex-col justify-end">
                    <div 
                      className={`w-full ${i === 8 ? 'bg-forge-ember' : 'bg-forge-steel/50'}`}
                      style={{ height: `${height}%` }}
                    />
                  </div>
                ))}
              </div>
              
              {/* Stats grid */}
              <div className="py-4 grid grid-cols-2 gap-2">
                <div className="bg-forge-steel/10 p-2">
                  <p className="text-[8px] text-forge-steel">WORKOUTS</p>
                  <p className="font-heading text-xl text-forge-white">18</p>
                </div>
                <div className="bg-forge-steel/10 p-2">
                  <p className="text-[8px] text-forge-steel">AVG DURATION</p>
                  <p className="font-heading text-xl text-forge-white">54<span className="text-sm">m</span></p>
                </div>
                <div className="bg-forge-steel/10 p-2">
                  <p className="text-[8px] text-forge-steel">BEST BENCH</p>
                  <p className="font-heading text-xl text-forge-ember">100kg</p>
                </div>
                <div className="bg-forge-steel/10 p-2">
                  <p className="text-[8px] text-forge-steel">STREAK</p>
                  <p className="font-heading text-xl text-forge-white">12<span className="text-sm">d</span></p>
                </div>
              </div>
            </div>
          </div>
          <p className="mt-4 font-heading text-forge-steel-light">PROGRESS</p>
          <p className="text-xs text-forge-steel">Technical data display</p>
        </div>
      </div>

      {/* Design Principles */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-6 border border-forge-steel/20">
          <p className="font-heading text-forge-ember mb-2">DARK MODE ONLY</p>
          <p className="text-sm text-forge-steel">No light theme. Industrial control panels are dark. The forge is dark. The app is dark.</p>
        </div>
        <div className="p-6 border border-forge-steel/20">
          <p className="font-heading text-forge-white mb-2">ANGULAR ICONS</p>
          <p className="text-sm text-forge-steel">All icons sharp and geometric. No rounded corners, no friendly curves. Precision instruments.</p>
        </div>
        <div className="p-6 border border-forge-steel/20">
          <p className="font-heading text-forge-white mb-2">ORANGE = INTENSITY</p>
          <p className="text-sm text-forge-steel">Orange appears only where effort is being measured or action is required. Never decorative.</p>
        </div>
      </div>
    </div>
  );
};

export default ForgeAppInterface;
