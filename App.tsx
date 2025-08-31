import React from 'react';
import MushroomBackground from './components/MushroomBackground';
import ProfileSection from './components/ProfileSection';
import LinksSection from './components/LinksSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full bg-gradient-to-br from-green-900 via-black to-gray-900 text-white overflow-hidden animate-gradient-xy">
      <MushroomBackground />
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        {/* Floating Glassmorphism Card */}
        <div className="w-full max-w-md bg-black/30 backdrop-blur-lg border border-green-500/20 rounded-3xl shadow-2xl shadow-green-500/10 flex flex-col p-4 sm:p-6 max-h-[95vh] overflow-y-auto">
          <main className="flex flex-col items-center text-center w-full">
            <ProfileSection />
            <LinksSection />
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
