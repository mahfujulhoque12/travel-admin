


// components/ReusableButton.tsx
import React from 'react';

interface ReusableButtonProps {
  label: string;
  onClick: () => void;
  className?: string;
}

const ReusableButton: React.FC<ReusableButtonProps> = ({ label, onClick, className }) => {
  return (
    <button onClick={onClick} className={`px-4 py-2 rounded ${className}`}>
      {label}
    </button>
  );
};

export default ReusableButton;
