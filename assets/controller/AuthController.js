$(document).ready(function () {

    $("#login-submit-btn").on("click", function () {

        const email = $("#login-email").val();
        const password = $("#login-password").val();


        if (!email || !password) {
            alert("Please enter both email and password.");
        }


        var settings = {
            "url": "http://localhost:4010/green-shadow/api/v1/auth/signIn",
            "method": "POST",
            "timeout": 0,
            "headers": {
              "Content-Type": "application/json"
            },
            "data": JSON.stringify({
              "email": email,
              "password": password
            }),
          };
          
        $.ajax(settings)
            .done(function (response) {
                const token = response.token;
                console.log(response);
                if (token) {
                    document.cookie = "token= "+token;
                    console.log("Token received: ", token);
                    $("#navigation").css({ display: "block" });
                    $("#login_page").css({ display: "none" });
                    $("#register_page").css({ display: "none" });
                    $("#dashboard_page").css({ display: "block" });
                    $("#staff_page").css({ display: "none" });
                    $("#field_page").css({ display: "none" });
                    $("#crop_page").css({ display: "none" });
                    $("#vehicle_page").css({ display: "none" });
                    $("#equipment_page").css({ display: "none" });
                    $("#log_page").css({ display: "none" });
                    $("#user_page").css({ display: "none" });
                } else {
                    alert("Login successful, but token not received.");
                }
            })
            .fail(function (response) {
                alert("Login failed, please try again.");
            });

    });

    $("#register-submit-btn").on("click", function (e) {
        e.preventDefault();

        const email = $("#register-email").val();
        const role = $("#staffRoleSelect option:selected").val();
        const password = $("#register-password").val();

        console.log(email)
        console.log(password)

        // Create a FormData object to handle multipart/form-data
        const formData = new FormData();

        // Append email and password to the FormData object
        formData.append("email", email);
        formData.append("password", password);
        formData.append("role", role);


        if (!role || !email || !password) {
            alert("Please enter both email and password.");
            return;
        }


        $.ajax({
            url: "http://localhost:4010/green-shadow/api/v1/auth/signup",
            type: "POST",
            data: formData,
            processData: false,
            contentType: false,
            success: function (response) {
                const token = response.token;
                if (token) {
                    localStorage.setItem("jwtToken", token);
                    console.log("Token received: ", token);
                } else {
                    alert("Signup successful, token not recieved.");
                }
            },
            error: function () {
                alert("Signup failed, please try again.");
            },
        });
    });

});