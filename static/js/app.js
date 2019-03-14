// Assign the data from `data.js` to a descriptive variable
var tableData = data;

// Select table body from html
tabelebody = d3.select("tbody")

// fuction to add data in table
function addData(data){
    //empty table body
    tabelebody.text("")
    //pick each key value pair from data file and add to table
    data.forEach(function(sights) {
        new_row = tabelebody.append("tr")
        Object.entries(sights).forEach(function([key, value]){
            new_cell = new_row.append("td").text(value)
        })
    })
}

// calling fuction to add data to table
addData(tableData)

// Select filter button 
var filterbtn = d3.select("#filter-btn");

filterbtn.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  // compare inputValue to table data and print filtered results
  var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);

  addData(filteredData);

})