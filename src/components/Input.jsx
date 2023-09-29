import React from "react";

export default function Input({ label, type, placeholder, value, onChange }) {
  return (
    <div className="py-3">
      <label className="text-neutral-200 text-lg font-semibold">{label}</label>

      {type == "text" ? (
        <div className="pt-2">
          <input
            className="bg-neutral-300 text-neutral-700 placeholder:text-neutral-700 px-3 py-1 rounded-md outline-none"
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
          />
        </div>
      ) : (
        <input
          className="h-5 w-5 accent-amber-400 rounded ml-3"
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      )}
    </div>
  );
}
