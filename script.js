
let jsonData;
async function fetchData() {
    try {
        const response = await fetch("https://www.nobroker.in/prophub/wp-content/uploads/2022/05/dataSample.json");
        const data = await response.json();
        jsonData = data;
   
        processData(jsonData);

    } catch (error) {

        console.error("Error:", error);
    }
}


let TableData=document.querySelector('table')

let html = `     
<tr class="row">
    <th>Name</th>
    <th>Phone-No</th>
    <th>Age</th>
    <th>Country</th>

</tr>

`
function processData(data) {

    data && data.map((ele) => {

        const { name, phone, age, country } = ele
        html += 
        `<tr>
            <td>${name}</td>
            <td>${phone}</td>
            <td>${age}</td>
            <td>${country}</td>

        </tr>`

    })

    displayTableData(html);

}

function displayTableData(html) {
    const TableData = document.querySelector("table");
    TableData.innerHTML = html.trim();
  }
