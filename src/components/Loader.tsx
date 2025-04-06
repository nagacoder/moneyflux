'use client';

interface LoaderProps {
  isActive: boolean;
}

export default function Loader({ isActive }: LoaderProps) {
  if (!isActive) return null;
  
  return (
    <div className="loader-container active">
      <div className="loader"></div>
      <p>Loading data...</p>
    </div>
  );
}