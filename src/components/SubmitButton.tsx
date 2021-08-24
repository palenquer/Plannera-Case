import React from "react";

export default function SubmitButton({ onClick }) {
  return (
    <button
      className="w-screen bg-main hover:bg-hover active:bg-click text-white border-t-2 border-gray-600 h-12 fixed bottom-0 font-bold"
      onClick={onClick}
    >
      Ver Despesas
    </button>
  );
}
