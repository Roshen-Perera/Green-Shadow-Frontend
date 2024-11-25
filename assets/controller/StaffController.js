$(document).ready(function () {
    loadTableField()
    let codeError = true;
    let nameError = true;
    let locationError = true;
    let sizeError = true;
    let image1Error = true;
    let image2Error = true;


    function loadTableField() {
        $('#field-table').empty();
        $.ajax({
            url: "http://localhost:4010/green-shadow/api/v1/fields",
            method: "GET",
            success: function (results) {
                $('#Field-table').empty();
                results.forEach(function (post) {
                    var record = `<tr>
                                    <td>${post.fieldCode}"</td>     
                                    <td>${post.fieldName}</td>
                                    <td>${post.location}</td>     
                                    <td>${post.extent}</td>
                                    <td>
                                        <img src="data:image/png;base64,${post.fieldImage1}" width="100px">
                                    </td>
                                    <td>
                                        <img src="data:image/png;base64,${post.fieldImage2}" width="100px">
                                    </td>
                                </tr>`;        
                $('#field-table').append(record);
                });
                $('#FieldCount').text(results.length);
            },
            error: function (error) {
                console.log(error);
                alert("An error occurred while fetching the posts.");
            }
        });
    }

    function validateCode(){
        var isValidFieldCode = new RegExp("^F\\d{3}$");
        if ($('#fieldCode').val() === "") {
            $("#fieldCode").css({"border-color": "red"});
            $("#fieldIdCheck").empty();
            $("#fieldIdCheck").append("Field Code missing");
            codeError = false;
            return false;
        } else if (!isValidFieldCode.test($('#fieldCode').val())) {
            $("#fieldCode").css({"border-color": "red"});
            $("#fieldIdCheck").empty();
            $("#fieldIdCheck").append("Invalid Field Code");
            codeError = false;
            return false;
        } else {
            $("#fieldCode").css({"border-color": "green"});
            $("#fieldIdCheck").empty();
            codeError = true;
        }
    }

    function validateName(){
        var isValidFieldName = new RegExp("^[A-Za-z0-9 ]{5,50}$");
        if ($('#fieldName').val() === "") {
            $("#fieldName").css({"border-color": "red"});
            $("#fieldNameCheck").empty();
            $("#fieldNameCheck").append("Field Name missing");
            nameError = false;
            return false;
        } else if (!isValidFieldName.test($('#fieldName').val())) {
            $("#fieldName").css({"border-color": "red"});
            $("#fieldNameCheck").empty();
            $("#fieldNameCheck").append("Invalid Field Name");
            nameError = false;
            return false;
        } else {
            $("#fieldName").css({"border-color": "green"});
            $("#fieldNameCheck").empty();
            nameError = true;
        }
    }

    function validateLocation(){
        var isValidFieldLocation = new RegExp("^[A-Za-z0-9 ,.-]{5,100}$");
        if ($('#fieldLocation').val() === "") {
            $("#fieldLocation").css({"border-color": "red"});
            $("#fieldLocationCheck").empty();
            $("#fieldLocationCheck").append("Field Location missing");
            locationError = false;
            return false;
        } else if (!isValidFieldLocation.test($('#fieldLocation').val())) {
            $("#fieldLocation").css({"border-color": "red"});
            $("#fieldLocationCheck").empty();
            $("#fieldLocationCheck").append("Invalid Field Location");
            locationError = false;
            return false;
        } else {
            $("#fieldLocation").css({"border-color": "green"});
            $("#fieldLocationCheck").empty();
            locationError = true;
        }
    }

    function validateSize(){
        var isValidFieldSize = new RegExp("^[0-9]{1,5}(\\.[0-9]{1,2})?$");
        if ($('#fieldSize').val() === "") {
            $("#fieldSize").css({"border-color": "red"});
            $("#fieldSizeCheck").empty();
            $("#fieldSizeCheck").append("Field Size missing");
            sizeError = false;
            return false;
        } else if (!isValidFieldSize.test($('#fieldSize').val())) {
            $("#fieldSize").css({"border-color": "red"});
            $("#fieldSizeCheck").empty();
            $("#fieldSizeCheck").append("Invalid Field Size");
            sizeError = false;
            return false;
        } else {
            $("#fieldSize").css({"border-color": "green"});
            $("#fieldSizeCheck").empty();
            sizeError = true;
        }
    }
    
    function validateImage01(){
        const image1 = $("#inputGroupFile01").prop('files')[0];
        if (!image1) {
            $("#inputGroupFile01").css({"border-color": "red"});
            $("#fieldImage01Check").empty();
            $("#fieldImage01Check").append("Field Image missing");
            image1Error = false;
            return false;
        } else {
            $("#inputGroupFile01").css({"border-color": "green"});
            $("#fieldImage01Check").empty();
            image1Error = true;
        }
    }

    function validateImage02(){
        const image2 = $("#inputGroupFile02").prop('files')[0];
        if (!image2) {
            $("#inputGroupFile02").css({"border-color": "red"});
            $("#fieldImage02Check").empty();
            $("#fieldImage02Check").append("Field Image missing");
            image2Error = false;
            return false;
        } else {
            $("#inputGroupFile02").css({"border-color": "green"});
            $("#fieldImage02Check").empty();
            image2Error = true;
        }
    }

    // Add a button to trigger the collection of data
    $("#add-field-btn").click(function () {
        validateCode()
        validateName()
        validateLocation()
        validateSize()
        validateImage01()
        validateImage02()
        if (codeError === true && nameError === true && locationError === true && sizeError === true && image1Error === true && image2Error === true) {
            // Collecting input values
            var fieldCode = $("#fieldCode").val();
            var fieldName = $("#fieldName").val();
            var fieldLocation = $("#fieldLocation").val();
            var fieldSize = $("#fieldSize").val();

            validateCode();

            // Accessing files from the input fields
            const image1 = $("#inputGroupFile01").prop('files')[0];
            const image2 = $("#inputGroupFile02").prop('files')[0];

            // Creating FormData and appending data
            var form = new FormData();
            form.append("fieldCode", fieldCode);
            form.append("fieldName", fieldName);
            form.append("location", fieldLocation);
            form.append("extent", fieldSize);

            // Append files only if they are selected
            if (image1) {
                form.append("fieldImage1", image1, image1.name);
            }
            if (image2) {
                form.append("fieldImage2", image2, image2.name);
            }

            // AJAX settings for sending the form data
            var settings = {
                "url": "http://localhost:4010/green-shadow/api/v1/fields",
                "method": "POST",
                "timeout": 0,
                "processData": false,
                "mimeType": "multipart/form-data",
                "contentType": false,
                "data": form
            };

            // Making the AJAX call
            $.ajax(settings).done(function (response) {
                alert("Successfully added the field!");
                console.log("Response:", response,200);
            }).fail(function (error) {
                //alert("Failed to add the field!");
                console.error("Error:", error);
            });

            // Debug logs
            console.log("Field Code:", fieldCode);
            console.log("Field Name:", fieldName);
            console.log("Location:", fieldLocation);
            console.log("Extent Size:", fieldSize); 
            console.log("Image 1:", image1 ? image1.name : "No file selected");
            console.log("Image 2:", image2 ? image2.name : "No file selected");
        }
    });


});
