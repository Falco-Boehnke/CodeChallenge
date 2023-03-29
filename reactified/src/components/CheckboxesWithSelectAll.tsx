export const CheckboxesWithSelectAll = () => {
  return (
    <>
      <div className="checkbox-solution-wrapper">
        <label>
          <input type="checkbox" className="checkbox-input" value="First" />1
        </label>
        <label>
          <input type="checkbox" className="checkbox-input" value="Second" />2
        </label>
        <label>
          <input type="checkbox" className="checkbox-input" value="Third" />3
        </label>
        <div>
          <label htmlFor="select-all__input" id="select-all__input-label">
            <input
              id="select-all__input"
              type="checkbox"
              className="checkbox-input__select-all"
            />
            <span id="select-all__input-label-text">Select All</span>
          </label>
        </div>
      </div>
      <div>
        <h2>Your Choices</h2>
        <p id="paragraph__checkbox-output">No Choice</p>
      </div>
    </>
  );
};
