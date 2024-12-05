$(document).ready(function () {

    var recordIndex = undefined;

    loadTableEquipment()

    let equipmentCodeError = true;
    let equipmentNameError = true;
    let equipmentTypeError = true;
    let equipmentStatusError = true;
    let equipmentStaffError = true;
    let equipmentFieldError = true;

    function getCookie(cname) {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for(let i = 0; i <ca.length; i++) {
          let c = ca[i];
          while (c.charAt(0) == ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
          }
        }
        return "";
    }


    function loadTableEquipment() {
        $('#equipment-table').empty();
        console.log("Loading table...");
        
        $.ajax({
            url: "http://localhost:4010/green-shadow/api/v1/equipments",
            headers: {
                'Authorization': `Bearer ${getCookie('token')}`,
            }, 
            method: "GET",
            success: function (results) {
                $('#equipment-table').empty();
                results.forEach(function (post) {
                    var record = `<tr>
                                    <td>${post.equipmentId}</td>     
                                    <td>${post.equipmentName}</td>
                                    <td>${post.equipmentType}</td>     
                                    <td>${post.equipmentStatus}</td>     
                                    <td>${post.staffId}</td>
                                    <td>${post.fieldCode}</td>
                                </tr>`;        
                                
                $('#equipment-table').append(record);
                });
                $('#equipmentCount').text(results.length);
            },
            error: function (error) {
                console.log(error);
                alert("An error occurred while fetching the posts.");
            }
        });
    }

    function validateEquipmentCode(){
        var isValidateEquipmentCode = new RegExp("^E\\d{3}$");
        if ($('#equipmentCode').val() === "") {
            $("#equipmentCode").css({"border-color": "red"});
            $("#equipmentCodeCheck").empty();
            $("#equipmentCodeCheck").append("equipment Code missing");
            equipmentCodeError = false;
            return false;
        } else if (!isValidateEquipmentCode.test($('#equipmentCode').val())) {
            $("#equipmentCode").css({"border-color": "red"});
            $("#equipmentCodeCheck").empty();
            $("#equipmentCodeCheck").append("Invalid equipment Code");
            equipmentCodeError = false;
            return false;
        } else {
            $("#equipmentCode").css({"border-color": "green"});
            $("#equipmentCodeCheck").empty();
            equipmentCodeError = true;
        }
    }

    function validateEquipmentName(){
        var isValidateEquipmentName = new RegExp("^[A-Za-z0-9 ]{5,50}$");
        if ($('#equipmentName').val() === "") {
            $("#equipmentName").css({"border-color": "red"});
            $("#equipmentNameCheck").empty();
            $("#equipmentNameCheck").append("equipment Name missing");
            equipmentNameError = false;
            return false;
        } else if (!isValidateEquipmentName.test($('#equipmentName').val())) {
            $("#equipmentName").css({"border-color": "red"});
            $("#equipmentNameCheck").empty();
            $("#equipmentNameCheck").append("Invalid equipment Name");
            equipmentNameError = false;
            return false;
        } else {
            $("#equipmentName").css({"border-color": "green"});
            $("#equipmentNameCheck").empty();
            equipmentNameError = true;
        }
    }

    function validateEquipmentType(){
        var isValidateEquipmentType = new RegExp("^[A-Za-z0-9 ]{5,50}$");
        if ($('#equipmentType option:selected').text() === "") {
            $("#equipmentType").css({"border-color": "red"});
            $("#equipmentTypeCheck").empty();
            $("#equipmentTypeCheck").append("equipment Type missing");
            equipmentTypeError = false;
            return false;
        } else if (!isValidateEquipmentType.test($('#equipmentType option:selected').val())) {
            $("#equipmentType").css({"border-color": "red"});
            $("#equipmentTypeCheck").empty();
            $("#equipmentTypeCheck").append("Invalid equipment Type");
            equipmentTypeError = false;
            return false;
        } else {
            $("#equipmentType").css({"border-color": "green"});
            $("#equipmentTypeCheck").empty();
            equipmentTypeError = true;
        }
    }

    function validateEquipmentStatus(){
        var isValidateEquipmentStatus = new RegExp("^[A-Za-z0-9 ]{5,50}$");
        if ($('#equipmentStatus option:selected').text() === "") {
            $("#equipmentStatus").css({"border-color": "red"});
            $("#equipmentStatusCheck").empty();
            $("#equipmentStatusCheck").append("equipment Status missing");
            equipmentStatusError = false;
            return false;
        } else if (!isValidateEquipmentStatus.test($('#equipmentStatus option:selected').val())) {
            $("#equipmentStatus").css({"border-color": "red"});
            $("#equipmentStatusCheck").empty();
            $("#equipmentStatusCheck").append("Invalid equipment Status");
            equipmentStatusError = false;
            return false;
        } else {
            $("#equipmentStatus").css({"border-color": "green"});
            $("#equipmentStatusCheck").empty();
            equipmentStatusError = true;
        }
    }

    function validateEquipmentStaffCode(){
        var isValidateEquipmentStaffCode = new RegExp("^S\\d{3}$");
        if ($('#equipmentStaffSelectID option:selected').text() === "") {
            $("#equipmentStaffSelectID").css({"border-color": "red"});
            $("#equipmentStaffCodeCheck").empty();
            $("#equipmentStaffCodeCheck").append("equipment StaffCode missing");
            equipmentStaffError = false;
            return false;
        } else if (!isValidateEquipmentStaffCode.test($('#equipmentStaffSelectID option:selected').val())) {
            $("#equipmentStaffSelectID").css({"border-color": "red"});
            $("#equipmentStaffCodeCheck").empty();
            $("#equipmentStaffCodeCheck").append("Invalid equipment StaffCode");
            equipmentStaffError = false;
            return false;
        } else {
            $("#equipmentStaffSelectID").css({"border-color": "green"});
            $("#equipmentStaffCodeCheck").empty();
            equipmentStaffError = true;
        }
    }

    function validateEquipmentField(){
        var isValidateEquipmentField = new RegExp("^F\\d{3}$");
        if ($('#equipmentFieldSelectID option:selected').val() === "") {
            $("#equipmentFieldSelectID").css({"border-color": "red"});
            $("#equipmentFieldCheck").empty();
            $("#equipmentFieldCheck").append("equipment Field missing");
            equipmentFieldError = false;
            return false;
        } else if (!isValidateEquipmentField.test($('#equipmentFieldSelectID option:selected').val())) {
            $("#equipmentFieldSelectID").css({"border-color": "red"});
            $("#equipmentFieldCheck").empty();
            $("#equipmentFieldCheck").append("Invalid equipment Field");
            equipmentFieldError = false;
            return false;
        } else {
            $("#equipmentFieldSelectID").css({"border-color": "green"});
            $("#equipmentFieldCheck").empty();
            equipmentFieldError = true;
        }
    }


    function updateEquipmentStaffIDs() {
        $("#equipmentStaffSelectID").empty();

        const defaultOption = document.createElement("option");
        defaultOption.text = "Select staff ID";
        defaultOption.value = ""; // Set an empty value for the default option
        $('#equipmentStaffSelectID').append(defaultOption);

        // Fetch customer data from the server
        $.ajax({
            url: "http://localhost:4010/green-shadow/api/v1/staff",
            type: "GET",
            headers: { "Content-Type": "application/json", 'Authorization': `Bearer ${getCookie('token')}` },
            success: (res) => {
                // Assuming `res` is an array of customer objects
                res.forEach(staff => {
                    const option = document.createElement("option");
                    option.value = staff.staffId; // Set value to customer ID
                    option.text = staff.staffId; // Display customer ID in dropdown
                    $('#equipmentStaffSelectID').append(option);
                });
            },
            error: (res) => {
                console.error('Error fetching staff data:', res);
            }
        });
    }

    $('#equipmentStaffSelectID').on('focus', () => {
        updateEquipmentStaffIDs();
    });

    function updateEquipmentFieldIDs() {
        $('#equipmentFieldSelectID').empty();
    
        const defaultOption = document.createElement("option");
        defaultOption.text = "Select field ID";
        defaultOption.value = ""; // Set an empty value for the default option
        $('#equipmentFieldSelectID').append(defaultOption);
    
        // Fetch customer data from the server
        $.ajax({
            url: "http://localhost:4010/green-shadow/api/v1/fields",
            type: "GET",
            headers: {"Content-Type": "application/json", 'Authorization': `Bearer ${getCookie('token')}`},
            success: (res) => {
                // Assuming `res` is an array of customer objects
                res.forEach(field => {
                    const option = document.createElement("option");
                    option.value = field.fieldCode; // Set value to customer ID
                    option.text = field.fieldCode; // Display customer ID in dropdown
                    $('#equipmentFieldSelectID').append(option);
                });
            },
            error: (res) => {
                console.error('Error fetching field data:', res);
            }
        });
    }
    
    $('#equipmentFieldSelectID').on('focus', () => {
        updateEquipmentFieldIDs()    
    });


    


    $("#equipment-table").on('click', 'tr', function () {
        recordIndex = $(this).index();
        console.log(recordIndex);

        // Assuming your table cells (td) are in the same order as: ID, Name, Address, Phone
        let equipmentCode = $(this).find("td:eq(0)").text();  
        let equipmentName = $(this).find("td:eq(1)").text();  
        let equipmentType = $(this).find("td:eq(2)").text();  
        let equipmentStatus = $(this).find("td:eq(3)").text(); 
        let equipmentStaffCode = $(this).find("td:eq(4)").text(); 
        let equipmentFieldCode = $(this).find("td:eq(5)").text();

        // Setting the values in the form fields
        $('#equipmentCode').val(equipmentCode);
        $('#equipmentName').val(equipmentName);
        $('#equipmentType option:selected').text(equipmentType);
        $('#equipmentStatus option:selected').text(equipmentStatus);
        $('#equipmentStaffSelectID option:selected').text(equipmentStaffCode);
        $('#equipmentFieldSelectID option:selected').text(equipmentFieldCode);


        // Debugging logs
        console.log("equipmentCode:", equipmentCode);
        console.log("equipmentName:", equipmentName);
        console.log("equipmentType:", equipmentType);
        console.log("equipmentStatus:", equipmentStatus);
        console.log("equipmentStaffCode:", equipmentStaffCode);
        console.log("equipmentFieldCode:", equipmentFieldCode);

    });

    $('#search-equipment-btn').on('click', () => {
        let equipmentId = $('#equipmentCode').val();
        console.log("Searching for equipment with ID:", equipmentId);
        $.ajax({
            url: "http://localhost:4010/green-shadow/api/v1/equipments/"+equipmentId,
            type: "GET",
            headers: {"Content-Type": "application/json", 'Authorization': `Bearer ${getCookie('token')}`},
            success: (res) => {
                console.log(JSON.stringify(res));
                if (res && JSON.stringify(res).toLowerCase().includes("not found")) {
                    alert("Equipment not found");
                } else {
                    $('#equipmentName').val(res.equipmentName);
                    $('#equipmentType option:selected').text(res.equipmentType);
                    $('#equipmentStatus option:selected').text(res.equipmentStatus);
                    $('#equipmentStaffSelectID option:selected').text(res.staffId);
                    $('#equipmentFieldSelectID option:selected').text(res.fieldCode);
                }
            },
            error: (res) => {
                console.error(res);
            }
        });
    });

    // Add a button to trigger the collection of data
    $("#add-equipment-btn").click(function () {
        validateEquipmentCode()
        validateEquipmentName()
        validateEquipmentType()
        validateEquipmentStatus()
        validateEquipmentStaffCode()
        validateEquipmentField()

        if (equipmentCodeError === true && equipmentNameError === true && equipmentTypeError === true && equipmentStatusError === true && equipmentStaffError === true && equipmentFieldError === true) {
            var equipmentCode = $("#equipmentCode").val();
            var equipmentName = $("#equipmentName").val();
            var equipmentType = $("#equipmentType option:selected").text();
            var equipmentStatus = $("#equipmentStatus option:selected").text();
            var equipmentStaff = $("#equipmentStaffSelectID option:selected").text();
            var equipmentField = $("#equipmentFieldSelectID option:selected").text();


            $.ajax({
                url: "http://localhost:4010/green-shadow/api/v1/equipments/"+equipmentCode,
                type: "GET",
                headers: {"Content-Type": "application/json", 'Authorization': `Bearer ${getCookie('token')}`},
                success: (res) => {
                    if (res && JSON.stringify(res).toLowerCase().includes("not found")) {
                        var form = new FormData();
                        form.append("equipmentId", equipmentCode);
                        form.append("equipmentName", equipmentName);
                        form.append("equipmentType", equipmentType);
                        form.append("equipmentStatus", equipmentStatus);
                        form.append("staffId", equipmentStaff);
                        form.append("fieldCode", equipmentField);


                        var settings = {
                            "url": "http://localhost:4010/green-shadow/api/v1/equipments",
                            "method": "POST",
                            "timeout": 0,
                            "processData": false,
                            "mimeType": "multipart/form-data",
                            "contentType": false,
                            "data": form,
                            "headers": {
                                'Authorization': `Bearer ${getCookie('token')}`
                            }
                        };
            
                        $.ajax(settings).done(function (response) {
                            loadTableEquipment();
                            alert("Successfully added the equipment !");
                            console.log("Response:", response);
                        }).fail(function (error) {
                            alert("Failed to add the equipment !");
                            console.error("Error:", error);
                        });
                    } else{
                        alert("equipment exists");
                        console.log("vehicle equipment exists");
                    }
                },
                error: (res) => {
                    console.error(res);
                }
            });

            

            // Debug logs
            console.log("equipmentCode:", equipmentCode);
            console.log("equipmentName:", equipmentName);
            console.log("equipmentType:", equipmentType);
            console.log("equipmentStatus:", equipmentStatus);
            console.log("equipmentStaff:", equipmentStaff);
            console.log("equipmentField:", equipmentField);
        }
    });

    $("#delete-equipment-btn").click(function () {
        var equipmentCode = $("#equipmentCode").val();

        if (!equipmentCode) {
            alert("Please enter a equipment code to delete.");
            return;
        }

        var settings = {
            "url": "http://localhost:4010/green-shadow/api/v1/equipments/"+equipmentCode,
            
            "method": "DELETE",
            "timeout": 0,
            "headers": {
                "Authorization": `Bearer ${getCookie('token')}`
            }
        };
          
        $.ajax(settings)
            .done(function (response) {
                alert("vehicle deleted successfully!");
                console.log("Response Data:", response);
                // Optionally refresh the table or UI
                loadTableEquipment(); // Call your function to reload the table
            })
            .fail(function (jqXHR, textStatus, errorThrown) {
                console.error("Error:", textStatus, errorThrown);
                alert("Failed to delete the vehicle. Please try again.");
            });
        
    });
    
    $("#update-equipment-btn").click(function () {
        validateEquipmentCode()
        validateEquipmentName()
        validateEquipmentType()
        validateEquipmentStatus()
        validateEquipmentStaffCode()
        validateEquipmentField()


        if (equipmentCodeError === true && equipmentNameError === true && equipmentTypeError === true && equipmentStatusError === true && equipmentStaffError === true && equipmentFieldError === true) {
            var equipmentCode = $("#equipmentCode").val();
            var equipmentName = $("#equipmentName").val();
            var equipmentType = $("#equipmentType option:selected").text();
            var equipmentStatus = $("#equipmentStatus option:selected").text();
            var equipmentStaff = $("#equipmentStaffSelectID option:selected").text();
            var equipmentField = $("#equipmentFieldSelectID option:selected").text();


            $.ajax({
                url: "http://localhost:4010/green-shadow/api/v1/equipments/"+equipmentCode,
                type: "GET",
                headers: {"Content-Type": "application/json", 'Authorization': `Bearer ${getCookie('token')}`},
                success: (res) => {
                    
                    if (res && JSON.stringify(res).toLowerCase().includes("not found")) {
                        alert("Equipment does not exist");
                    } else {
                        var form = new FormData();
                        form.append("equipmentId", equipmentCode);
                        form.append("equipmentName", equipmentName);
                        form.append("equipmentType", equipmentType);
                        form.append("equipmentStatus", equipmentStatus);
                        form.append("staffId", equipmentStaff);
                        form.append("fieldCode", equipmentField);


                        var settings = {
                            "url": "http://localhost:4010/green-shadow/api/v1/equipments",
                            "method": "POST",
                            "timeout": 0,
                            "processData": false,
                            "mimeType": "multipart/form-data",
                            "contentType": false,
                            "headers": {
                                "Authorization": `Bearer ${getCookie('token')}`
                            },
                            "data": form
                            
                        };
            
                        $.ajax(settings).done(function (response) {
                            loadTableEquipment();
                            alert("Successfully updated the equipment!");
                            console.log("Response:", response);
                        }).fail(function (error) {
                            alert("Failed to update the equipment!");
                            console.error("Error:", error);
                        });
                    }
                },
                error: (res) => {
                    console.error(res);
                }
            });
        }

    });
    

    $('#clear-equipment-btn').on('click', () => {
        clearFields();
    });

    function clearFields() {
        $('#equipmentCode').val("");
        $('#equipmentName').val("");
        $('#equipmentType').val("");
        $('#equipmentStatus').val("");
        $('#equipmentStaffSelectID').val("");
        $('#equipmentFieldSelectID').val("");
    }

});
