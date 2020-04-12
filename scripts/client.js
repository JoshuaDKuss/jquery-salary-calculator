$(document).ready(onReady);

let formData = [];


function addItems() {
    // console.log('in addItems');
    // get user inputs & place into object
    //if ($('#eFirstName').val() === '') {
    //alert('Enter Information In All Fields');
    //} // end no description
    //if ($('#eLastName').val() === '') {
    //alert('Enter Information In All Fields');
    //} // 
    //if ($('#eId').val() === '') {
    //alert('Enter Information In All Fields');
    //} // 
    //if ($('#eTitle').val() === '') {
    //alert('Enter Information In All Fields');
    //} // 
    //if ($('#aSalary').val() === '') {
    //  alert('Enter Information In All Fields');
    //} // 
    //else {
    // get user inputs & place into an object
    let infoToAdd = {
            eFirstName: $('#eFirstName').val(),
            eLastName: $('#eLastName').val(),
            eId: $('#eId').val(),
            eTitle: $('#eTitle').val(),
            aSalary: $('#aSalary').val()
        } // end itemsToAdd
        /*if (verbose)*/
    console.log('itemsToAdd:', infoToAdd);
    // push object into our inventory array
    formData.push(infoToAdd);
    /////////console.log('formData:', formData);
    // empty the inputs
    $('#eFirstName').val('');
    $('#eLastName').val('');
    $('#eId').val('');
    $('#eTitle').val('');
    $('#aSalary').val('');
    displayFormData();
} // end has description

//console.log(addItems());
//console.log(itemsToAdd);

function displayFormData() {
    /*if (verbose)*/
    console.log('in displayFormData:', formData);
    // target output ul by ID
    let el = $('#tableBody');
    // empty ul
    el.empty();
    $('#totalMonthSal').empty();
    let totalMonthSal = 0;
    // loop through inventory
    for (let i = 0; i < formData.length; i++) {
        // append each item to ul
        el.append(`
            <tr>
            <td>${formData[i].eFirstName}</td>
            <td>${formData[i].eLastName}</td>
            <td>${formData[i].eId}</td>
            <td>${formData[i].eTitle}</td>
            <td>${formData[i].aSalary}</td>
            <td><button class="deleteBtn">Delete</button></td>
            </tr>`)
            //<td>${formData[i].aSalary}</td>`) / / end append
            // add salaries to total (and divide by 12)
        totalMonthSal += (Number(`${formData[i].aSalary}`) / 12); //////
        //tried parseInt & Number
    } // end for /////////
    //return totalMonthSal;
    console.log(totalMonthSal);

    //delete
    $('.deleteBtn').on('click', deleteBtn);
    $('#totalMonthSal').append(totalMonthSal.toLocaleString('en-US'));
    //$('#totalMonthSal').append(totalMonthSal);

    if (totalMonthSal > 20000) {
        console.log('More than 20k!');
        $('#totalMonthSalDiv').addClass('redBar')
    }
} // display formData

//console.log(displayFormData());

function deleteBtn() {
    console.log('in deleteBtn');
    $(this).parent().parent().remove();
}

function onReady() {
    //console.log('in onReady');
    $('#submitBtn').on('click', addItems); //$('.deleteBtn ').on('click', deleteBtn);
}