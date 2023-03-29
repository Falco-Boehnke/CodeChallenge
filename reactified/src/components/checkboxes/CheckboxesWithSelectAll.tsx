import { ChangeEvent, useEffect, useRef, useState } from "react";
import { Checkbox } from "./Checkbox";

interface CheckboxProps {
  label: string;
  value: string;
}
interface CheckboxesWithSelectProps {
  checkboxes: Array<CheckboxProps>;
}

export const CheckboxesWithSelectAll = ({
  checkboxes,
}: CheckboxesWithSelectProps) => {
  const [isAllSelected, setIsAllSelected] = useState(false);
  const [checkboxStates, setCheckboxStates] = useState<boolean[]>(
    new Array(checkboxes.length).fill(false)
  );
  const [selections, setSelections] = useState<string[]>([]);
  // const [selectionCount, setSelectionCount] = useState<number>(0);

  const onChangeCheckbox = (itemIndex: number) => {
    const updatedCheck = checkboxStates.map((item, index) =>
      index === itemIndex ? !item : item
    );
    setCheckboxStates(updatedCheck);

    const mapSelectionsToValues = (isSelected: boolean, index: number) => {
      return isSelected ? checkboxes[index].value : null;
    };

    setSelections(
      updatedCheck.map(mapSelectionsToValues).filter(Boolean) as string[]
    );

    if (updatedCheck.every(Boolean)) {
      setIsAllSelected(true);
    } else {
      setIsAllSelected(false);
    }
  };

  const onSelectAllChange = (isAllSelectedFlag: boolean) => {
    const synchronizedCheckboxes = checkboxStates.map(() => isAllSelectedFlag);
    setCheckboxStates(synchronizedCheckboxes);
    setSelections(
      synchronizedCheckboxes
        .map((isSelected: boolean, index: number) => {
          return isSelected ? checkboxes[index].value : null;
        })
        .filter(Boolean) as string[]
    );
  };

  return (
    <>
      <div className="checkbox-solution-wrapper">
        {checkboxes.map((checkbox, index) => {
          return (
            <Checkbox
              key={`checkbox-${index}`}
              onChange={() => onChangeCheckbox(index)}
              isChecked={!!checkboxStates[index]}
              value={checkbox.value}
              label={checkbox.label}
            />
          );
        })}
        <div>
          <Checkbox
            key={`checkbox-select-all`}
            onChange={() => {
              setIsAllSelected(!isAllSelected);
              onSelectAllChange(!isAllSelected);
            }}
            isChecked={isAllSelected}
            value=""
            label={isAllSelected ? "Deselect All" : "Select All"}
          />
        </div>
      </div>
      <div className="checkbox-solution-wrapper">
        <h2>Your Choices</h2>
        <div id="paragraph__checkbox-output">
          <ul>
            {Array.from(selections.values()).map((value, index) => (
              <li key={`selecion-p-${index}`}>{value}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
