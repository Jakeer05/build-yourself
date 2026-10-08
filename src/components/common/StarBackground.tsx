import React from 'react';

export const StarBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Nebula Gradients */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute top-1/4 -right-40 w-[30rem] h-[30rem] bg-violet-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl" />
      {/* Star Grid Pattern */}
      <div className="absolute inset-0 star-bg opacity-30" />
    </div>
  );
};
