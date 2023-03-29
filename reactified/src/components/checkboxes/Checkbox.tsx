import { ChangeEvent } from "react";

interface CheckboxProps {
  key: string;
  isChecked: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  label: string;
}

export const Checkbox = ({
  key,
  onChange,
  isChecked,
  value,
  label,
}: CheckboxProps) => {
  return (
    <label>
      <input
        key={key}
        type="checkbox"
        className="checkbox-input"
        checked={isChecked}
        onChange={onChange}
        value={value}
      />
      {label}
    </label>
  );
};
