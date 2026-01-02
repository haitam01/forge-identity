import { FC } from "react";
import { ForgeFinalLogo } from "./ForgeFinalLogo";

/**
 * FORGE HERO HOODIE — TECH PACK
 * Factory-Ready Manufacturing Specifications
 * Version 1.0 — FINAL
 */

export const ForgeTechPack: FC = () => {
  return (
    <div className="space-y-16">
      {/* HEADER */}
      <div className="bg-black text-white p-8 border-2 border-white">
        <div className="flex justify-between items-start mb-8">
          <div>
            <p className="text-sm text-gray-400 font-mono">TECH PACK v1.0</p>
            <h1 className="text-4xl font-bold tracking-tight mt-2">FORGE HERO HOODIE</h1>
            <p className="text-gray-400 mt-2">Factory-Ready Manufacturing Specifications</p>
          </div>
          <div className="text-right">
            <ForgeFinalLogo size={48} color="white" />
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm font-mono border-t border-gray-700 pt-6">
          <div>
            <p className="text-gray-500">STYLE NO.</p>
            <p className="font-bold">FRG-HD-001</p>
          </div>
          <div>
            <p className="text-gray-500">SEASON</p>
            <p className="font-bold">ALL-SEASON</p>
          </div>
          <div>
            <p className="text-gray-500">CATEGORY</p>
            <p className="font-bold">PERFORMANCE</p>
          </div>
          <div>
            <p className="text-gray-500">STATUS</p>
            <p className="font-bold text-green-400">APPROVED</p>
          </div>
        </div>
      </div>

      {/* 1. PRODUCT OVERVIEW */}
      <section>
        <SectionHeader number="1" title="PRODUCT OVERVIEW" />
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <SpecRow label="Product Name" value="FORGE HERO HOODIE" />
            <SpecRow label="Style Number" value="FRG-HD-001" />
            <SpecRow label="Category" value="Performance / Training Hoodie" />
            <SpecRow label="Target Market" value="Athletes, gym training, serious performance" />
            <SpecRow label="Fit" value="Athletic / Structured" />
            <SpecRow label="Gender" value="Unisex" />
            <SpecRow label="Season" value="All-season training" />
            <SpecRow label="Size Range" value="S / M / L / XL / XXL" />
          </div>
          <div className="bg-gray-100 p-6">
            <p className="text-sm font-mono text-gray-500 mb-4">DESIGN INTENT</p>
            <p className="text-sm leading-relaxed">
              Premium heavyweight training hoodie built for serious athletes. 
              Minimal branding, maximum durability. Structured fit allows full 
              range of motion without excess fabric. Industrial construction 
              designed to withstand intense training sessions.
            </p>
          </div>
        </div>
      </section>

      {/* 2. FLAT TECHNICAL DRAWINGS */}
      <section>
        <SectionHeader number="2" title="FLAT TECHNICAL DRAWINGS" />
        <div className="grid md:grid-cols-2 gap-8">
          {/* FRONT VIEW */}
          <div className="bg-white border-2 border-black p-8">
            <p className="text-xs font-mono text-gray-500 mb-4">FRONT VIEW</p>
            <svg viewBox="0 0 300 400" className="w-full h-auto">
              {/* Hood */}
              <path
                d="M100 80 Q150 40 200 80 L200 100 Q150 70 100 100 Z"
                fill="none"
                stroke="black"
                strokeWidth="2"
              />
              {/* Hood inner layer */}
              <path
                d="M110 85 Q150 55 190 85"
                fill="none"
                stroke="black"
                strokeWidth="1"
                strokeDasharray="4,2"
              />
              
              {/* Body */}
              <path
                d="M80 100 L100 100 L100 80 Q150 50 200 80 L200 100 L220 100 
                   L260 140 L260 200 L240 200 L240 340 L60 340 L60 200 L40 200 
                   L40 140 Z"
                fill="none"
                stroke="black"
                strokeWidth="2"
              />
              
              {/* Shoulder seam lines */}
              <line x1="100" y1="100" x2="80" y2="100" stroke="black" strokeWidth="1" />
              <line x1="200" y1="100" x2="220" y2="100" stroke="black" strokeWidth="1" />
              
              {/* Armhole */}
              <path d="M80 100 Q60 150 60 200" fill="none" stroke="black" strokeWidth="1" />
              <path d="M220 100 Q240 150 240 200" fill="none" stroke="black" strokeWidth="1" />
              
              {/* Sleeve seams */}
              <line x1="40" y1="140" x2="40" y2="200" stroke="black" strokeWidth="1" />
              <line x1="260" y1="140" x2="260" y2="200" stroke="black" strokeWidth="1" />
              
              {/* Cuffs */}
              <rect x="35" y="190" width="30" height="15" fill="none" stroke="black" strokeWidth="1" />
              <rect x="235" y="190" width="30" height="15" fill="none" stroke="black" strokeWidth="1" />
              
              {/* Kangaroo pocket */}
              <path
                d="M90 240 Q150 250 210 240 L210 300 Q150 310 90 300 Z"
                fill="none"
                stroke="black"
                strokeWidth="1.5"
              />
              {/* Pocket opening */}
              <line x1="100" y1="270" x2="140" y2="270" stroke="black" strokeWidth="1" />
              <line x1="160" y1="270" x2="200" y2="270" stroke="black" strokeWidth="1" />
              
              {/* Bottom hem rib */}
              <rect x="60" y="330" width="180" height="15" fill="none" stroke="black" strokeWidth="1" />
              
              {/* Logo placement - LEFT CHEST */}
              <rect x="95" y="140" width="30" height="35" fill="none" stroke="black" strokeWidth="1" strokeDasharray="3,3" />
              <text x="110" y="160" fontSize="6" textAnchor="middle" fill="gray">LOGO</text>
              
              {/* Construction callout lines */}
              <line x1="95" y1="157" x2="30" y2="157" stroke="gray" strokeWidth="0.5" />
              <circle cx="30" cy="157" r="3" fill="gray" />
              
              <line x1="150" y1="50" x2="150" y2="20" stroke="gray" strokeWidth="0.5" />
              <circle cx="150" cy="20" r="3" fill="gray" />
              
              <line x1="90" y1="270" x2="30" y2="270" stroke="gray" strokeWidth="0.5" />
              <circle cx="30" cy="270" r="3" fill="gray" />
              
              <line x1="60" y1="340" x2="30" y2="370" stroke="gray" strokeWidth="0.5" />
              <circle cx="30" cy="370" r="3" fill="gray" />
            </svg>
            
            {/* Callout labels */}
            <div className="mt-4 space-y-1 text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-gray-400"></span>
                <span>Double-layer hood, structured</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-gray-400"></span>
                <span>Embroidered F logo, 3-4cm</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-gray-400"></span>
                <span>Kangaroo pocket, reinforced</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-gray-400"></span>
                <span>Ribbed hem, high recovery</span>
              </div>
            </div>
          </div>
          
          {/* BACK VIEW */}
          <div className="bg-white border-2 border-black p-8">
            <p className="text-xs font-mono text-gray-500 mb-4">BACK VIEW</p>
            <svg viewBox="0 0 300 400" className="w-full h-auto">
              {/* Hood */}
              <path
                d="M100 80 Q150 40 200 80 L200 100 Q150 70 100 100 Z"
                fill="none"
                stroke="black"
                strokeWidth="2"
              />
              
              {/* Body */}
              <path
                d="M80 100 L100 100 L100 80 Q150 50 200 80 L200 100 L220 100 
                   L260 140 L260 200 L240 200 L240 340 L60 340 L60 200 L40 200 
                   L40 140 Z"
                fill="none"
                stroke="black"
                strokeWidth="2"
              />
              
              {/* Center back seam */}
              <line x1="150" y1="100" x2="150" y2="330" stroke="black" strokeWidth="0.5" strokeDasharray="4,4" />
              
              {/* Shoulder seams - reinforced */}
              <line x1="100" y1="100" x2="80" y2="100" stroke="black" strokeWidth="2" />
              <line x1="200" y1="100" x2="220" y2="100" stroke="black" strokeWidth="2" />
              
              {/* Armhole */}
              <path d="M80 100 Q60 150 60 200" fill="none" stroke="black" strokeWidth="1" />
              <path d="M220 100 Q240 150 240 200" fill="none" stroke="black" strokeWidth="1" />
              
              {/* Cuffs */}
              <rect x="35" y="190" width="30" height="15" fill="none" stroke="black" strokeWidth="1" />
              <rect x="235" y="190" width="30" height="15" fill="none" stroke="black" strokeWidth="1" />
              
              {/* Bottom hem rib */}
              <rect x="60" y="330" width="180" height="15" fill="none" stroke="black" strokeWidth="1" />
              
              {/* NO BACK GRAPHIC - clean */}
              <text x="150" y="220" fontSize="8" textAnchor="middle" fill="gray" fontStyle="italic">NO PRINT</text>
              
              {/* Construction callouts */}
              <line x1="100" y1="100" x2="30" y2="80" stroke="gray" strokeWidth="0.5" />
              <circle cx="30" cy="80" r="3" fill="gray" />
              
              <line x1="240" y1="200" x2="280" y2="200" stroke="gray" strokeWidth="0.5" />
              <circle cx="280" cy="200" r="3" fill="gray" />
            </svg>
            
            {/* Callout labels */}
            <div className="mt-4 space-y-1 text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-gray-400"></span>
                <span>Reinforced shoulder seams</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-gray-400"></span>
                <span>Ribbed cuffs, high recovery</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MATERIAL & FABRIC SPECIFICATIONS */}
      <section>
        <SectionHeader number="3" title="MATERIAL & FABRIC SPECIFICATIONS" />
        <div className="grid md:grid-cols-2 gap-8">
          <div className="border-2 border-black p-6 space-y-6">
            <div>
              <p className="text-xs font-mono text-gray-500 mb-2">MAIN FABRIC</p>
              <div className="space-y-2">
                <SpecRow label="Weight" value="450 GSM" />
                <SpecRow label="Composition" value="80% Cotton / 20% Polyester" />
                <SpecRow label="Construction" value="French Terry" />
                <SpecRow label="Feel" value="Heavy, structured, breathable" />
                <SpecRow label="Finish" value="Matte (no shine)" />
              </div>
            </div>
            <div>
              <p className="text-xs font-mono text-gray-500 mb-2">RIBBING</p>
              <div className="space-y-2">
                <SpecRow label="Application" value="Cuffs, hem, hood edge" />
                <SpecRow label="Type" value="2x2 rib" />
                <SpecRow label="Properties" value="High recovery, reinforced" />
              </div>
            </div>
          </div>
          <div className="border-2 border-black p-6">
            <p className="text-xs font-mono text-gray-500 mb-4">FABRIC REQUIREMENTS</p>
            <div className="space-y-3">
              <RequirementRow label="Pre-shrunk" required />
              <RequirementRow label="Anti-pilling" required />
              <RequirementRow label="Colorfast (deep black retention)" required />
              <RequirementRow label="Wash-tested (30+ cycles)" required />
              <RequirementRow label="Moisture-wicking interior" required />
              <RequirementRow label="No chemical odor" required />
            </div>
          </div>
        </div>
      </section>

      {/* 4. COLOR SPECIFICATIONS */}
      <section>
        <SectionHeader number="4" title="COLOR SPECIFICATIONS" />
        <div className="grid md:grid-cols-3 gap-6">
          <div className="border-2 border-black overflow-hidden">
            <div className="h-32 bg-black"></div>
            <div className="p-4 space-y-2">
              <p className="font-bold">PRIMARY — JET BLACK</p>
              <p className="text-xs font-mono text-gray-500">PANTONE Black 6 C</p>
              <p className="text-xs font-mono text-gray-500">HEX #0A0A0A</p>
              <p className="text-xs text-gray-600">All main fabric, thread</p>
            </div>
          </div>
          <div className="border-2 border-black overflow-hidden">
            <div className="h-32 bg-white border-b"></div>
            <div className="p-4 space-y-2">
              <p className="font-bold">LOGO — WHITE</p>
              <p className="text-xs font-mono text-gray-500">PANTONE White</p>
              <p className="text-xs font-mono text-gray-500">HEX #FFFFFF</p>
              <p className="text-xs text-gray-600">Embroidery thread only</p>
            </div>
          </div>
          <div className="border-2 border-black overflow-hidden">
            <div className="h-32" style={{ backgroundColor: '#FF5A00' }}></div>
            <div className="p-4 space-y-2">
              <p className="font-bold">ACCENT — FORGE ORANGE</p>
              <p className="text-xs font-mono text-gray-500">PANTONE 1665 C</p>
              <p className="text-xs font-mono text-gray-500">HEX #FF5A00</p>
              <p className="text-xs text-gray-600">Internal tag ONLY (optional)</p>
            </div>
          </div>
        </div>
        <div className="mt-6 bg-red-50 border border-red-200 p-4">
          <p className="text-sm font-bold text-red-800">⚠️ COLOR RESTRICTION</p>
          <p className="text-sm text-red-700 mt-1">
            No orange on main fabric. Orange is permitted ONLY on internal labels if used.
          </p>
        </div>
      </section>

      {/* 5. LOGO & BRANDING PLACEMENT */}
      <section>
        <SectionHeader number="5" title="LOGO & BRANDING PLACEMENT" />
        <div className="grid md:grid-cols-2 gap-8">
          {/* Placement diagram */}
          <div className="bg-white border-2 border-black p-8">
            <p className="text-xs font-mono text-gray-500 mb-4">EMBROIDERY PLACEMENT — FRONT</p>
            <svg viewBox="0 0 200 280" className="w-full max-w-[300px] mx-auto">
              {/* Simplified hoodie outline */}
              <path
                d="M60 60 Q100 30 140 60 L140 70 L160 70 L180 100 L180 140 L165 140 
                   L165 250 L35 250 L35 140 L20 140 L20 100 L40 70 L60 70 Z"
                fill="#1a1a1a"
                stroke="black"
                strokeWidth="2"
              />
              
              {/* Logo placement zone */}
              <rect x="50" y="95" width="35" height="40" fill="none" stroke="white" strokeWidth="2" strokeDasharray="4,2" />
              
              {/* The F logo */}
              <g transform="translate(52, 97) scale(0.35)">
                <path
                  d="M0 0 L50 0 L80 0 L50 30 L50 18 L22 18 L22 42 L45 42 L45 58 L22 58 L22 100 L0 100 L0 0 Z"
                  fill="white"
                />
              </g>
              
              {/* Measurement lines */}
              <line x1="67" y1="70" x2="67" y2="95" stroke="#FF5A00" strokeWidth="1" />
              <line x1="60" y1="70" x2="74" y2="70" stroke="#FF5A00" strokeWidth="1" />
              <line x1="60" y1="95" x2="74" y2="95" stroke="#FF5A00" strokeWidth="1" />
              <text x="78" y="85" fontSize="8" fill="#FF5A00">7cm</text>
              
              <line x1="35" y1="115" x2="50" y2="115" stroke="#FF5A00" strokeWidth="1" />
              <line x1="35" y1="108" x2="35" y2="122" stroke="#FF5A00" strokeWidth="1" />
              <line x1="50" y1="108" x2="50" y2="122" stroke="#FF5A00" strokeWidth="1" />
              <text x="30" y="130" fontSize="8" fill="#FF5A00">3cm</text>
            </svg>
            
            <div className="mt-6 space-y-2 text-sm">
              <SpecRow label="Position" value="Left chest" />
              <SpecRow label="Distance from center" value="3 cm" />
              <SpecRow label="Distance from shoulder" value="7 cm" />
              <SpecRow label="Logo width" value="3.5 cm" />
              <SpecRow label="Logo height" value="4.4 cm" />
            </div>
          </div>
          
          {/* Specifications */}
          <div className="space-y-6">
            <div className="border-2 border-black p-6">
              <p className="text-xs font-mono text-gray-500 mb-4">EMBROIDERY SPECIFICATIONS</p>
              <div className="space-y-2">
                <SpecRow label="Type" value="Flat embroidery" />
                <SpecRow label="Stitch Density" value="High (5-6 stitches/mm)" />
                <SpecRow label="Thread" value="Rayon, 40wt" />
                <SpecRow label="Backing" value="Tear-away stabilizer" />
                <SpecRow label="Edge Quality" value="Clean, no fraying" />
              </div>
            </div>
            
            <div className="border-2 border-black p-6">
              <p className="text-xs font-mono text-gray-500 mb-4">FILE REQUIREMENTS</p>
              <div className="space-y-2">
                <SpecRow label="Format" value="DST, PES, or EMB" />
                <SpecRow label="Source" value="Vector (AI/SVG)" />
                <SpecRow label="Colors" value="Single color only" />
                <SpecRow label="No gradients" value="Required" />
              </div>
            </div>
            
            <div className="border-2 border-black p-6">
              <p className="text-xs font-mono text-gray-500 mb-4">DURABILITY REQUIREMENTS</p>
              <div className="space-y-2">
                <RequirementRow label="No fraying after 30 washes" required />
                <RequirementRow label="Sweat-resistant" required />
                <RequirementRow label="Color retention" required />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CONSTRUCTION DETAILS */}
      <section>
        <SectionHeader number="6" title="CONSTRUCTION DETAILS" />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <DetailCard
            title="HOOD"
            specs={[
              "Double-layer construction",
              "Structured shape (no collapse)",
              "NO drawstrings",
              "Reinforced edge stitching"
            ]}
          />
          <DetailCard
            title="SHOULDERS"
            specs={[
              "Reinforced seam construction",
              "Clean industrial stitching",
              "5-thread overlock",
              "Durable for intense movement"
            ]}
          />
          <DetailCard
            title="POCKET"
            specs={[
              "Kangaroo style",
              "Reinforced entry points",
              "Bar-tack at stress points",
              "Clean edge finish"
            ]}
          />
          <DetailCard
            title="CUFFS & HEM"
            specs={[
              "2x2 ribbed construction",
              "High elastic recovery",
              "Width: 7cm",
              "Pre-shrunk treatment"
            ]}
          />
        </div>
        
        {/* Stitch specifications */}
        <div className="mt-8 border-2 border-black p-6">
          <p className="text-xs font-mono text-gray-500 mb-4">STITCH SPECIFICATIONS</p>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <p className="font-bold mb-2">Main Seams</p>
              <p className="text-sm text-gray-600">5-thread overlock</p>
              <p className="text-sm text-gray-600">3.5 stitches per cm</p>
            </div>
            <div>
              <p className="font-bold mb-2">Topstitch</p>
              <p className="text-sm text-gray-600">Single needle lockstitch</p>
              <p className="text-sm text-gray-600">3.0 stitches per cm</p>
            </div>
            <div>
              <p className="font-bold mb-2">Bartacks</p>
              <p className="text-sm text-gray-600">42-stitch bartack</p>
              <p className="text-sm text-gray-600">All stress points</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. MEASUREMENTS & SIZE GRADING */}
      <section>
        <SectionHeader number="7" title="MEASUREMENTS & SIZE GRADING" />
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border-2 border-black text-sm">
            <thead>
              <tr className="bg-black text-white">
                <th className="border border-gray-700 p-3 text-left">MEASUREMENT (cm)</th>
                <th className="border border-gray-700 p-3 text-center">S</th>
                <th className="border border-gray-700 p-3 text-center">M</th>
                <th className="border border-gray-700 p-3 text-center bg-orange-600">L (BASE)</th>
                <th className="border border-gray-700 p-3 text-center">XL</th>
                <th className="border border-gray-700 p-3 text-center">XXL</th>
                <th className="border border-gray-700 p-3 text-center">TOL.</th>
              </tr>
            </thead>
            <tbody>
              <MeasurementRow label="A. Chest Width (½)" values={[54, 57, 60, 63, 66]} tolerance="±1" />
              <MeasurementRow label="B. Body Length" values={[68, 71, 74, 77, 80]} tolerance="±1" />
              <MeasurementRow label="C. Sleeve Length" values={[62, 64, 66, 68, 70]} tolerance="±1" />
              <MeasurementRow label="D. Shoulder Width" values={[46, 48, 50, 52, 54]} tolerance="±1" />
              <MeasurementRow label="E. Sleeve Opening" values={[11, 12, 13, 14, 15]} tolerance="±0.5" />
              <MeasurementRow label="F. Cuff Width (½)" values={[9, 9.5, 10, 10.5, 11]} tolerance="±0.5" />
              <MeasurementRow label="G. Hem Width (½)" values={[48, 51, 54, 57, 60]} tolerance="±1" />
              <MeasurementRow label="H. Hood Height" values={[32, 33, 34, 35, 36]} tolerance="±1" />
              <MeasurementRow label="I. Hood Width" values={[26, 27, 28, 29, 30]} tolerance="±0.5" />
            </tbody>
          </table>
        </div>
        
        {/* Measurement diagram */}
        <div className="mt-8 bg-white border-2 border-black p-8">
          <p className="text-xs font-mono text-gray-500 mb-4">MEASUREMENT POINTS</p>
          <svg viewBox="0 0 400 350" className="w-full max-w-[500px] mx-auto">
            {/* Hoodie outline */}
            <path
              d="M140 80 Q200 40 260 80 L260 100 L300 100 L350 150 L350 220 L320 220 
                 L320 320 L80 320 L80 220 L50 220 L50 150 L100 100 L140 100 Z"
              fill="none"
              stroke="black"
              strokeWidth="2"
            />
            
            {/* A - Chest Width */}
            <line x1="80" y1="160" x2="320" y2="160" stroke="#FF5A00" strokeWidth="2" />
            <text x="200" y="155" fontSize="12" textAnchor="middle" fill="#FF5A00" fontWeight="bold">A</text>
            
            {/* B - Body Length */}
            <line x1="340" y1="100" x2="340" y2="320" stroke="#FF5A00" strokeWidth="2" />
            <text x="355" y="210" fontSize="12" fill="#FF5A00" fontWeight="bold">B</text>
            
            {/* C - Sleeve Length */}
            <line x1="100" y1="100" x2="50" y2="220" stroke="#FF5A00" strokeWidth="2" />
            <text x="55" y="160" fontSize="12" fill="#FF5A00" fontWeight="bold">C</text>
            
            {/* D - Shoulder Width */}
            <line x1="100" y1="100" x2="300" y2="100" stroke="#FF5A00" strokeWidth="2" />
            <text x="200" y="95" fontSize="12" textAnchor="middle" fill="#FF5A00" fontWeight="bold">D</text>
            
            {/* E - Sleeve Opening */}
            <line x1="50" y1="215" x2="50" y2="225" stroke="#FF5A00" strokeWidth="2" />
            <text x="35" y="225" fontSize="12" fill="#FF5A00" fontWeight="bold">E</text>
            
            {/* G - Hem Width */}
            <line x1="80" y1="315" x2="320" y2="315" stroke="#FF5A00" strokeWidth="2" />
            <text x="200" y="330" fontSize="12" textAnchor="middle" fill="#FF5A00" fontWeight="bold">G</text>
            
            {/* H - Hood Height */}
            <line x1="200" y1="40" x2="200" y2="100" stroke="#FF5A00" strokeWidth="2" />
            <text x="210" y="70" fontSize="12" fill="#FF5A00" fontWeight="bold">H</text>
          </svg>
        </div>
        
        {/* Fit notes */}
        <div className="mt-6 bg-gray-100 p-6">
          <p className="font-bold mb-3">FIT NOTES</p>
          <ul className="space-y-2 text-sm">
            <li>• Athletic/structured fit — not oversized, not slim</li>
            <li>• Allows full range of motion for training</li>
            <li>• Sits clean on shoulders without excess</li>
            <li>• Does not cling to waist</li>
            <li>• Hood stays structured when worn</li>
          </ul>
        </div>
      </section>

      {/* 8. LABELING & PACKAGING */}
      <section>
        <SectionHeader number="8" title="LABELING & PACKAGING" />
        <div className="grid md:grid-cols-2 gap-8">
          <div className="border-2 border-black p-6">
            <p className="text-xs font-mono text-gray-500 mb-4">INTERNAL LABELS</p>
            <div className="space-y-4">
              <div>
                <p className="font-bold">Main Label (Neck)</p>
                <p className="text-sm text-gray-600 mt-1">Woven label, 5cm x 2cm</p>
                <p className="text-sm text-gray-600">Black background, white text</p>
                <p className="text-sm text-gray-600">Content: FORGE logo, size, "Made in [Country]"</p>
              </div>
              <div>
                <p className="font-bold">Care Label</p>
                <p className="text-sm text-gray-600 mt-1">Printed satin, side seam</p>
                <p className="text-sm text-gray-600">Standard care symbols</p>
                <p className="text-sm text-gray-600">Machine wash cold, tumble dry low</p>
              </div>
            </div>
          </div>
          
          <div className="border-2 border-black p-6">
            <p className="text-xs font-mono text-gray-500 mb-4">PACKAGING</p>
            <div className="space-y-3">
              <SpecRow label="Primary" value="Matte black polybag" />
              <SpecRow label="Alternative" value="Recycled kraft bag" />
              <SpecRow label="Closure" value="FORGE logo sticker (optional)" />
              <SpecRow label="Folding" value="Standard retail fold" />
            </div>
            <div className="mt-4 bg-red-50 border border-red-200 p-3">
              <p className="text-xs text-red-700">
                ⚠️ No glossy packaging. No plastic-heavy branding.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. QUALITY CONTROL CHECKLIST */}
      <section>
        <SectionHeader number="9" title="QUALITY CONTROL CHECKLIST" />
        <div className="border-2 border-black">
          <div className="bg-black text-white p-4">
            <p className="font-bold">FACTORY MUST VERIFY</p>
          </div>
          <div className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <QCItem label="Fabric weight consistency (450 GSM ±5%)" />
                <QCItem label="Logo placement accuracy (±3mm)" />
                <QCItem label="Stitch strength (pull test passed)" />
                <QCItem label="Color consistency (Pantone match)" />
                <QCItem label="No loose threads" />
                <QCItem label="Proper fit vs measurement table" />
              </div>
              <div className="space-y-3">
                <QCItem label="Seam integrity (no puckering)" />
                <QCItem label="Embroidery quality (clean edges)" />
                <QCItem label="Label placement correct" />
                <QCItem label="Zipper/fastener function (if any)" />
                <QCItem label="Pre-shrunk verification" />
                <QCItem label="Anti-pilling test passed" />
              </div>
            </div>
          </div>
          
          <div className="border-t-2 border-black bg-red-50 p-6">
            <p className="font-bold text-red-800 mb-3">❌ REJECT IF:</p>
            <ul className="space-y-2 text-sm text-red-700">
              <li>• Logo is misaligned by more than 5mm</li>
              <li>• Fabric feels light or cheap (below 430 GSM)</li>
              <li>• Hoodie loses shape after first wash</li>
              <li>• Embroidery has loose threads or fraying</li>
              <li>• Color fades after 5 washes</li>
              <li>• Measurements outside tolerance</li>
            </ul>
          </div>
        </div>
      </section>

      {/* APPROVAL SIGNATURES */}
      <section className="bg-black text-white p-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <p className="text-2xl font-bold">TECH PACK APPROVAL</p>
            <p className="text-gray-400 text-sm mt-1">FORGE HERO HOODIE — FRG-HD-001</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-400">VERSION 1.0</p>
            <p className="text-sm text-gray-400">FINAL — APPROVED FOR PRODUCTION</p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 border-t border-gray-700 pt-8">
          <div>
            <p className="text-xs text-gray-500 mb-2">DESIGN APPROVAL</p>
            <div className="border-b border-gray-600 h-12"></div>
            <p className="text-xs text-gray-500 mt-2">Name / Date</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 mb-2">PRODUCTION APPROVAL</p>
            <div className="border-b border-gray-600 h-12"></div>
            <p className="text-xs text-gray-500 mt-2">Name / Date</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 mb-2">QUALITY APPROVAL</p>
            <div className="border-b border-gray-600 h-12"></div>
            <p className="text-xs text-gray-500 mt-2">Name / Date</p>
          </div>
        </div>
      </section>
    </div>
  );
};

// Helper Components
const SectionHeader: FC<{ number: string; title: string }> = ({ number, title }) => (
  <div className="flex items-center gap-4 mb-6 border-b-2 border-black pb-4">
    <span className="bg-black text-white w-10 h-10 flex items-center justify-center font-bold text-lg">
      {number}
    </span>
    <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
  </div>
);

const SpecRow: FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="flex justify-between text-sm">
    <span className="text-gray-600">{label}</span>
    <span className="font-mono font-bold">{value}</span>
  </div>
);

const RequirementRow: FC<{ label: string; required?: boolean }> = ({ label, required }) => (
  <div className="flex items-center gap-2 text-sm">
    <span className={`w-5 h-5 rounded flex items-center justify-center text-xs ${required ? 'bg-green-500 text-white' : 'bg-gray-200'}`}>
      {required ? '✓' : '○'}
    </span>
    <span>{label}</span>
  </div>
);

const DetailCard: FC<{ title: string; specs: string[] }> = ({ title, specs }) => (
  <div className="border-2 border-black p-4">
    <p className="font-bold mb-3 pb-2 border-b border-gray-300">{title}</p>
    <ul className="space-y-1 text-sm">
      {specs.map((spec, i) => (
        <li key={i} className="text-gray-600">• {spec}</li>
      ))}
    </ul>
  </div>
);

const MeasurementRow: FC<{ label: string; values: number[]; tolerance: string }> = ({ label, values, tolerance }) => (
  <tr className="border-b border-gray-300">
    <td className="border border-gray-300 p-3 font-medium bg-gray-50">{label}</td>
    {values.map((v, i) => (
      <td key={i} className={`border border-gray-300 p-3 text-center font-mono ${i === 2 ? 'bg-orange-50 font-bold' : ''}`}>
        {v}
      </td>
    ))}
    <td className="border border-gray-300 p-3 text-center font-mono text-gray-500">{tolerance}</td>
  </tr>
);

const QCItem: FC<{ label: string }> = ({ label }) => (
  <div className="flex items-center gap-3">
    <span className="w-5 h-5 border-2 border-black rounded flex-shrink-0"></span>
    <span className="text-sm">{label}</span>
  </div>
);

export default ForgeTechPack;
