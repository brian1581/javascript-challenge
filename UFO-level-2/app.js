// Get references to the tbody element, input fields and button
var $tbody = document.querySelector('tbody');
var $dateInput = document.querySelector('#datetime');
var $stateInput = document.querySelector('#state');
var $cityInput = document.querySelector('#city');
var $countryInput = document.querySelector('#country');
var $shapeInput = document.querySelector('#shape');
var $searchBtn = document.querySelector('#search');
var $resetBtn = document.querySelector('#reset');

// Add an event listener to the search buttom, call searchClick when clicked
$searchBtn.addEventListener('click', searchClick);

// Add an event listener to the reset button , call resetClick when clicked
$resetBtn.addEventListener('click', resetClick);

// Create a copy of the data
var tableData = data;

// Build table with non-filtered data
function renderTable() {
  $tbody.innerHTML = '';
  for (var i = 0; i < tableData.length; i++) {
    // Get current address object and fields
    var address = tableData[i];
    console.log(address)
    var fields = Object.keys(address);
    // Create new row in tbody, set index to be i + startingIndex
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      // For each field in address object, create new cell and set inner text to be current value at current address field
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = address[field];
    }
  }
}

// Build search table for filtered data
function searchClick() {
  var dateFiltered = $dateInput.value;
  var stateFiltered = $stateInput.value.trim().toLowerCase();
  var cityFiltered = $cityInput.value.trim().toLowerCase();
  var countryFiltered = $countryInput.value.trim().toLowerCase();
  var shapeFiltered = $shapeInput.value.trim().toLowerCase();

  // Filter on date
  if (dateFiltered != '') {
    tableData = data.filter(function (address) {
      var addressDate = address.datetime;
      return addressDate === filterDate;
    });
  }
  else { tableData };

  // Filter on state
  if (stateFiltered != '') {
    tableData = tableData.filter(function (address) {
      var addressState = address.state;
      return addressState === filterState;
    });
  }
  else { tableData };

  // Filter on city
  if (cityFiltered != '') {
    tableData = tableData.filter(function (address) {
      var addressCity = address.city;
      return addressCity === filterCity;
    });
  }
  else { tableData };

  // Filter on country
  if (countryFiltered != '') {
    tableData = tableData.filter(function (address) {
      var addressCountry = address.country;
      return addressCountry === filterCountry;
    });
  }
  else { tableData };

  // Filter on shape
  if (shapeFiltered != '') {
    tableData = tableData.filter(function (address) {
      var addressShape = address.shape;
      return addressShape === filterShape;
    });
  }
  else { tableData };

  renderTable();
}

// Clear all the fields
function resetClick(){
  renderTable();
}

// Render the table for the first time on page load
renderTable();