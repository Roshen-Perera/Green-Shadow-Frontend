$(document).ready(function () {

    var recordIndex = undefined;

    loadTableLog()

    let logCodeError = true;
    let logDateError = true;
    let logDetailsError = true;
    let logImageError = true;
    let logFieldCodeError = true;
    let logCropCodeError = true;
    let logStaffCodeError = true;

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


    function loadTableLog() {
        $('#log-table').empty();
        console.log("Loading table...");

        $.ajax({
            url: "http://localhost:4010/green-shadow/api/v1/log",
            method: "GET",
            headers: {
                'Authorization': `Bearer ${getCookie('token')}`,
            }, 
            success: function (results) {
                $('#log-table').empty();
                results.forEach(function (post) {
                    var record = `<tr>
                                    <td>${post.logCode}</td>     
                                    <td>${post.logDate}</td>
                                    <td>${post.details}</td>     
                                    <td>
                                        <img src="data:image/png;base64,${post.observedImage}" width="100px">
                                    </td>
                                    <td>${post.fieldCode}</td>
                                    <td>${post.cropCode}</td>     
                                    <td>${post.staffId}</td>
                                </tr>`;

                    $('#log-table').append(record);
                });
                $('#logCount').text(results.length);
            },
            error: function (error) {
                console.log(error);
                alert("An error occurred while fetching the posts.");
            }
        });
    }

    function validateLogCode() {
        // var isValidLogCode = new RegExp("^L\\d{3}$");
        if ($('#logCode').val() === "") {
            $("#logCode").css({ "border-color": "red" });
            $("#logCodeCheck").empty();
            $("#logCodeCheck").append("Log Code missing");
            logCodeError = false;
            return false;
            // } else if (!isValidLogCode.test($('#cropCode').val())) {
            //     $("#logCode").css({"border-color": "red"});
            //     $("#logCodeCheck").empty();
            //     $("#logCodeCheck").append("Invalid crop Code");
            //     logCodeError = false;
            return false;
        } else {
            $("#logCode").css({ "border-color": "green" });
            $("#logCodeCheck").empty();
            logCodeError = true;
        }
    }

    function validateLogDate() {
        // var isValidLogDate = new RegExp("^L\\d{3}$");
        if ($('#logDate').val() === "") {
            $("#logDate").css({ "border-color": "red" });
            $("#logDateCheck").empty();
            $("#logDateCheck").append("Log Date missing");
            logDateError = false;
            return false;
            // } else if (!isValidLogDate.test($('#cropDate').val())) {
            //     $("#logDate").css({"border-color": "red"});
            //     $("#logDateCheck").empty();
            //     $("#logDateCheck").append("Invalid log Date");
            //     logDateError = false;
            //     return false;
        } else {
            $("#logDate").css({ "border-color": "green" });
            $("#logDateCheck").empty();
            logDateError = true;
        }
    }

    function validateLogDetails() {
        // var isValidLogDetails = new RegExp("^L\\d{3}$");
        if ($('#logDetails').val() === "") {
            $("#logDetails").css({ "border-color": "red" });
            $("#logDetailsCheck").empty();
            $("#logDetailsCheck").append("Log Details missing");
            logDetailsError = false;
            return false;
            // } else if (!isValidLogDetails.test($('#cropDetails').val())) {
            //     $("#logDetails").css({"border-color": "red"});
            //     $("#logDetailsCheck").empty();
            //     $("#logDetailsCheck").append("Invalid log Details");
            //     logDetailsError = false;
            //     return false;
        } else {
            $("#logDetails").css({ "border-color": "green" });
            $("#logDetailsCheck").empty();
            logDetailsError = true;
        }
    }

    function validateLogImage() {
        // var isValidLogImage = new RegExp("^L\\d{3}$");

        if ($('#logImage').val() === "") {
            $("#logImage").css({ "border-color": "red" });
            $("#logImageCheck").empty();
            $("#logImageCheck").append("Log Image missing");
            logImageError = false;
            return false;
            // } else if (!isValidLogImage.test($('#cropImage').val())) {
            //     $("#logImage").css({"border-color": "red"});
            //     $("#logImageCheck").empty();
            //     $("#logImageCheck").append("Invalid log Image");
            //     logImageError = false;
            //     return false;
        } else {
            $("#logImage").css({ "border-color": "green" });
            $("#logImageCheck").empty();
            logImageError = true;
        }
    }

    function validateLogFieldCode() {
        // var isValidLogFieldCode = new RegExp("^L\\d{3}$");
        if ($('#logFieldCode option:selected').text() === "") {
            $("#logFieldCode").css({ "border-color": "red" });
            $("#logFieldCodeCheck").empty();
            $("#logFieldCodeCheck").append("Log FieldCode missing");
            logFieldCodeError = false;
            return false;
            // } else if (!isValidLogFieldCode.test($('#cropFieldCode option:selected').text())) {
            //     $("#logFieldCode").css({"border-color": "red"});
            //     $("#logFieldCodeCheck").empty();
            //     $("#logFieldCodeCheck").append("Invalid log FieldCode");
            //     logFieldCodeError = false;
            //     return false;
        } else {
            $("#logFieldCode").css({ "border-color": "green" });
            $("#logFieldCodeCheck").empty();
            logFieldCodeError = true;
        }
    }

    function validateLogCropCode() {
        // var isValidLogCropCode = new RegExp("^L\\d{3}$");
        if ($('#logCropCode option:selected').text() === "") {
            $("#logCropCode").css({ "border-color": "red" });
            $("#logCropCodeCheck").empty();
            $("#logCropCodeCheck").append("Log CropCode missing");
            logCropCodeError = false;
            return false;
            // } else if (!isValidLogCropCode.test($('#cropCropCode option:selected').text())) {
            //     $("#logCropCode").css({"border-color": "red"});
            //     $("#logCropCodeCheck").empty();
            //     $("#logCropCodeCheck").append("Invalid log CropCode");
            //     logCropCodeError = false;
            //     return false;
        } else {
            $("#logCropCode").css({ "border-color": "green" });
            $("#logCropCodeCheck").empty();
            logCropCodeError = true;
        }
    }

    function validateLogStaffCode() {
        // var isValidLogStaffCode = new RegExp("^L\\d{3}$");
        if ($('#logStaffCode option:selected').text() === "") {
            $("#logStaffCode").css({ "border-color": "red" });
            $("#logStaffCodeCheck").empty();
            $("#logStaffCodeCheck").append("Log StaffCode missing");
            logStaffCodeError = false;
            return false;
            // } else if (!isValidLogStaffCode.test($('#cropStaffCode option:selected').text())) {
            //     $("#logStaffCode").css({"border-color": "red"});
            //     $("#logStaffCodeCheck").empty();
            //     $("#logStaffCodeCheck").append("Invalid log StaffCode");
            //     logStaffCodeError = false;
            //     return false;
        } else {
            $("#logStaffCode").css({ "border-color": "green" });
            $("#logStaffCodeCheck").empty();
            logStaffCodeError = true;
        }
    }

    function updateLogFieldIDs() {
        $('#logFieldCode').empty();
        const defaultOption = document.createElement("option");
        defaultOption.text = "Select field ID";
        defaultOption.value = ""; // Set an empty value for the default option
        $('#logFieldCode').append(defaultOption);

        // Fetch customer data from the server
        $.ajax({
            url: "http://localhost:4010/green-shadow/api/v1/fields",
            type: "GET",
            headers: { "Content-Type": "application/json" , 'Authorization': `Bearer ${getCookie('token')}`},
            success: (res) => {
                // Assuming `res` is an array of customer objects
                res.forEach(field => {
                    const option = document.createElement("option");
                    option.value = field.fieldCode; // Set value to customer ID
                    option.text = field.fieldCode; // Display customer ID in dropdown
                    $('#logFieldCode').append(option);
                });
            },
            error: (res) => {
                console.error('Error fetching field data:', res);
            }
        });
    }

    $('#logFieldCode').on('focus', () => {
        updateLogFieldIDs();
    });

    function updatelogCropIDs() {
        $('#logCropCode').empty();

        const defaultOption = document.createElement("option");
        defaultOption.text = "Select Crop ID";
        defaultOption.value = ""; // Set an empty value for the default option
        $('#logCropCode').append(defaultOption);

        // Fetch customer data from the server
        $.ajax({
            url: "http://localhost:4010/green-shadow/api/v1/crop",
            type: "GET",
            headers: { "Content-Type": "application/json", 'Authorization': `Bearer ${getCookie('token')}` },
            success: (res) => {
                // Assuming `res` is an array of customer objects
                res.forEach(crop => {
                    const option = document.createElement("option");
                    option.value = crop.code; // Set value to customer ID
                    option.text = crop.code; // Display customer ID in dropdown
                    $('#logCropCode').append(option);
                });
            },
            error: (res) => {
                console.error('Error fetching Crop data:', res);
            }
        });
    }

    $('#logCropCode').on('focus', () => {
        updatelogCropIDs();
    });

    function updatelogStaffIDs() {
        $("#logStaffCode").empty();

        const defaultOption = document.createElement("option");
        defaultOption.text = "Select staff ID";
        defaultOption.value = ""; // Set an empty value for the default option
        $('#logStaffCode').append(defaultOption);

        // Fetch customer data from the server
        $.ajax({
            url: "http://localhost:4010/green-shadow/api/v1/staff",
            type: "GET",
            headers: { "Content-Type": "application/json" , 'Authorization': `Bearer ${getCookie('token')}`},
            success: (res) => {
                // Assuming `res` is an array of customer objects
                res.forEach(staff => {
                    const option = document.createElement("option");
                    option.value = staff.staffId; // Set value to customer ID
                    option.text = staff.staffId; // Display customer ID in dropdown
                    $('#logStaffCode').append(option);
                });
            },
            error: (res) => {
                console.error('Error fetching staff data:', res);
            }
        });
    }

    $('#logStaffCode').on('focus', () => {
        updatelogStaffIDs();
    });



    $("#log-table").on('click', 'tr', function () {
        recordIndex = $(this).index();
        console.log(recordIndex);

        // Assuming your table cells (td) are in the same order as: ID, Name, Address, Phone
        var logCode = $(this).find("td:eq(0)").text();
        var logDate = $(this).find("td:eq(1)").text();
        var logDetails = $(this).find("td:eq(2)").text();
        var logImage = $(this).find("td:eq(3)").text();
        var logFieldCode = $(this).find("td:eq(4)").text();
        var logCropCode = $(this).find("td:eq(5)").text();
        var logStaffCode = $(this).find("td:eq(6)").text();


        // Setting the values in the form fields
        $('#logCode').val(logCode);
        $('#logDate').val(logDate);
        $('#logDetails').val(logDetails);
        $('#logFieldCode option:selected').text(logFieldCode);
        $('#logCropCode option:selected').text(logCropCode);
        $('#logStaffCode option:selected').text(logStaffCode);


        // Debugging logs
        console.log("Log Code:", logCode);
        console.log("Log Date:", logDate);
        console.log("Log Details:", logDetails);
        console.log("Log Image:", logImage);
        console.log("Log Field Code:", logFieldCode);
        console.log("Log Crop Code:", logCropCode);
        console.log("Log Staff Code:", logStaffCode);

    });

    $('#search-log-btn').on('click', () => {
        let logId = $('#logCode').val();
        console.log("Searching for log with ID:", logId);
        $.ajax({
            url: "http://localhost:4010/green-shadow/api/v1/log/" + logId,
            type: "GET",
            headers: { "Content-Type": "application/json", 'Authorization': `Bearer ${getCookie('token')}` },
            success: (res) => {
                console.log(JSON.stringify(res));
                $('#logCode').val(res.logCode);
                $('#logDate').val(res.logDate);
                $('#logDetails').val(res.details);
                $('#logImage').val(res.observedImage);
                $('#logFieldCode option:selected').text(res.fieldCode);
                $('#logCropCode option:selected').text(res.cropCode);
                $('#logStaffCode option:selected').text(res.staffId);

            },
            error: (res) => {
                console.error(res);
            }
        });
    });

    // Add a button to trigger the collection of data
    $("#add-log-btn").click(function () {
        validateLogCode()
        validateLogDate()
        validateLogDetails()
        //  validateLogImage()
        validateLogFieldCode()
        validateLogCropCode()
        validateLogStaffCode()

        if (logCodeError === true && logDateError === true && logDetailsError === true && logImageError === true && logFieldCodeError === true && logCropCodeError === true && logStaffCodeError === true) {
            var logCode = $("#logCode").val();
            var logDate = $("#logDate").val();
            var logDetails = $("#logDetails").val();
            var logImage = $("#logImage").prop('files')[0];
            var logFieldCode = $("#logFieldCode option:selected").text();
            var logCropCode = $("#logCropCode option:selected").text();
            var logStaffCode = $("#logStaffCode option:selected").text();

            $.ajax({
                url: "http://localhost:4010/green-shadow/api/v1/log/" + logCode,
                type: "GET",
                headers: { "Content-Type": "application/json" , 'Authorization': `Bearer ${getCookie('token')}`},
                success: (res) => {
                    if (res && JSON.stringify(res).toLowerCase().includes("not found")) {
                        var form = new FormData();
                        form.append("logCode", logCode);
                        form.append("logDate", logDate);
                        form.append("details", logDetails);
                        form.append("fieldCode", logFieldCode);
                        form.append("cropCode", logCropCode);
                        form.append("staffId", logStaffCode);
                        if (logImage) {
                            form.append("observedImage", logImage, logImage.name);
                        }

                        var settings = {
                            "url": "http://localhost:4010/green-shadow/api/v1/log",
                            "method": "POST",
                            "timeout": 0,
                            "processData": false,
                            "mimeType": "multipart/form-data",
                            "contentType": false,
                            "headers": {
                                'Authorization': `Bearer ${getCookie('token')}`,
                            }, 
                            "data": form
                        };

                        $.ajax(settings).done(function (response) {
                            loadTableLog();
                            alert("Successfully added the log!");
                            console.log("Response:", response);
                        }).fail(function (error) {
                            alert("Failed to add the log!");
                            console.error("Error:", error);
                        });
                    } else {
                        console.log("Log already exists");
                        alert("Log already exists");
                    }
                },
                error: (res) => {
                    console.error(res);
                }
            });



            // Debug logs
            console.log("Log Code:", logCode);
            console.log("Log Date:", logDate);
            console.log("Log Details:", logDetails);
            console.log("Log Image:", logImage);
            console.log("Log Field Code:", logFieldCode);
            console.log("Log Crop Code:", logCropCode);
            console.log("Log Staff Code:", logStaffCode);

        }
    });

    $("#delete-log-btn").click(function () {
        var logCode = $("#logCode").val();

        if (!logCode) {
            alert("Please enter a log code to delete.");
            return;
        }

        var settings = {
            "url": "http://localhost:4010/green-shadow/api/v1/log/" + logCode,
            "method": "DELETE",
            "headers": {
                'Authorization': `Bearer ${getCookie('token')}`,
            }, 
            "timeout": 0,
        };

        $.ajax(settings)
            .done(function (response) {
                alert("log deleted successfully!");
                console.log("Response Data:", response);
                // Optionally refresh the table or UI
                loadTableLog(); // Call your function to reload the table
            })
            .fail(function (jqXHR, textStatus, errorThrown) {
                console.error("Error:", textStatus, errorThrown);
                alert("Failed to delete the log. Please try again.");
            });

    });

    $("#update-log-btn").click(function () {
        validateLogCode()
        validateLogDate()
        validateLogDetails()
        //validateLogImage()
        validateLogFieldCode()
        validateLogCropCode()
        validateLogStaffCode()

        if (logCodeError === true && logDateError === true && logDetailsError === true && logImageError === true && logFieldCodeError === true && logCropCodeError === true && logStaffCodeError === true) {
            var logCode = $("#logCode").val();
            var logDate = $("#logDate").val();
            var logDetails = $("#logDetails").val();
            var logImage = $("#logImage").prop('files')[0];
            var logFieldCode = $("#logFieldCode option:selected").text();
            var logCropCode = $("#logCropCode option:selected").text();
            var logStaffCode = $("#logStaffCode option:selected").text();



            $.ajax({
                url: "http://localhost:4010/green-shadow/api/v1/log/" + logCode,
                type: "GET",
                headers: { "Content-Type": "application/json", 'Authorization': `Bearer ${getCookie('token')}` },
                success: (res) => {

                    if (res && JSON.stringify(res).toLowerCase().includes("not found")) {
                        alert("Log does not exist");
                    } else {
                        var form = new FormData();
                        form.append("logCode", logCode);
                        form.append("logDate", logDate);
                        form.append("details", logDetails);
                        form.append("fieldCode", logFieldCode);
                        form.append("cropCode", logCropCode);
                        form.append("staffId", logStaffCode);
                        if (logImage) {
                            form.append("observedImage", logImage, logImage.name);
                        }

                        var settings = {
                            "url": "http://localhost:4010/green-shadow/api/v1/log",
                            "method": "POST",
                            "timeout": 0,
                            "processData": false,
                            "mimeType": "multipart/form-data",
                            "headers": {
                                'Authorization': `Bearer ${getCookie('token')}`,
                            }, 
                            "contentType": false,
                            "data": form
                        };

                        $.ajax(settings).done(function (response) {
                            loadTableLog();
                            alert("Successfully updated the log!");
                            console.log("Response:", response);
                        }).fail(function (error) {
                            alert("Failed to add the log!");
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


    $('#clear-crop-btn').on('click', () => {
        clearFields();
    });

    function clearFields() {
        $('#cropCode').val("");
        $('#cropCommonName').val("");
        $('#cropScientificName').val("");
        $('#cropCategory').val("");
        $('#cropSeason').val("");
        $('#fieldSelectID').val("");
    }

});
