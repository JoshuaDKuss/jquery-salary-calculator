console.log('js')

$(document).ready(onReady);

let formData = [];

function addItems() {
    console.log('in addItems');
    // get user inputs & place into object
    if ($('#eFirstName').val() === '') {
        alert('Enter Information In All Fields');
    } // end no description
    if ($('#eLastName').val() === '') {
        alert('Enter Information In All Fields');
    } // 
    if ($('#eId').val() === '') {
        alert('Enter Information In All Fields');
    } // 
    if ($('#eTitle').val() === '') {
        alert('Enter Information In All Fields');
    } // 
    if ($('#aSalary').val() === '') {
        alert('Enter Information In All Fields');
    } // 
    else {
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
        console.log('formData:', formData);
        // empty input
        //$('#eFirstName').val('');
        //$('#eLastName').val('');
        //$('#eId').val('');
        // $('#eTitle').val('');
        //  $('#aSalary').val('');
        //  displayFormData();
    } // end has description
}
//console.log('Jello World');
console.log(addItems());
//console.log(itemsToAdd);

function displayFormData() {
    /*if (verbose)*/
    console.log('in displayFormData:', formData);
    // target output ul by ID
    let el = $('#formDataOut');
    // empty ul
    el.empty();
    // loop through inventory
    for (let i = 0; i < formData.length; i++) {
        // append each item to ul
        el.append(`<td> 
            ${formData[i].eFirstName}
            ${formData[i].eLastName}
            ${formData[i].eId}
            ${formData[i].eTitle}
            ${formData[i].aSalary}}</td>`);
    } // end for //////////LI? TD?
} // displayInventory

console.log(displayFormData());

function onReady() {
    //console.log('in onReady');
    $('#submitBtn').on('click', addItems);
}