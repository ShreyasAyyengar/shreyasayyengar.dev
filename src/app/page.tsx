'use client';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#1c0c58] text-white font-[family-name:var(--font-geist-sans)] relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2d1b7a] to-[#1c0c58] opacity-70"></div>

      {/* Subtle animated circles */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }}></div>
      <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '12s' }}></div>

      <div className="text-center p-8 max-w-md z-10 animate-fadeIn" style={{ animation: 'fadeIn 1.5s ease-out' }}>
        <h1 className="text-6xl font-bold mb-6 tracking-tight">Coming Soon</h1>
        <div className="w-24 h-1 bg-white/30 mx-auto mb-8 rounded-full"></div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
