const getValueInput = () => {
  let inputValue = document.getElementById('textSample').value;
  let selectedValue = document.getElementById('font').value;
  document.getElementById('valueInput').innerHTML = inputValue;
  document.getElementById('valueInput').className =
    selectedValue + ' display-1';
};
