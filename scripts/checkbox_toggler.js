const selections = new Map();
const checkboxes = Array.from(
  document.getElementsByClassName("checkbox-input")
);
const [selectAllCheckbox] = Array.from(
  document.getElementsByClassName("checkbox-input__select-all")
);
const selectAllLabel = document.getElementById("select-all__input-label-text");
const checkboxOutput = document.getElementById(
  "paragraph__checkbox-output"
);

function setSelectAllState(e) {
  selectAllCheckbox.checked = checkboxes.length === selections.size;
}

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", toggleSelectionEntry);
  checkbox.addEventListener("change", setSelectAllState);
});

function updateSelectAllText(event) {
  const selectAllLabelText = event.currentTarget.checked
    ? "Deselect All"
    : "Select All";
  selectAllLabel.innerText = selectAllLabelText;
}

function onSelectAll(event) {
  const isSelectAllChecked = event.currentTarget.checked;
  checkboxes.forEach((checkbox) => {
    const isChecked = checkbox.checked;
    if (isSelectAllChecked !== isChecked) checkbox.click();
  });
}

function toggleSelectionEntry(event) {
  const checkValue = event.currentTarget.value;
  selections.has(checkValue)
    ? selections.delete(checkValue)
    : selections.set(checkValue, checkValue);

  printSelectionEntries();
}

function printSelectionEntries() {
  const valuesString = Array.from(selections.values()).join(", ");
  checkboxOutput.innerHTML = valuesString
    ? valuesString
    : "No Choice";
}

selectAllCheckbox.addEventListener("change", onSelectAll);
selectAllCheckbox.addEventListener("change", updateSelectAllText);