$(".upload-btn").on("click", function () {
    try {
        let this_btn = $(this);
        let doc_parent_div = this_btn.closest(".input-group");
        doc_parent_div.find('.err-msg').addClass('invisible');
        doc_parent_div.find(".ComplaintImage").removeClass('is-invalid');
        let fileInput = doc_parent_div.find(".ComplaintImage")[0];
        let file_array = fileInput.files[0];
        let username = $("#username").val();
        let type = file_array["type"].split("/");
        let random_no = Math.floor(Math.random() * 900) + 100;
        let uniqueFileName = `complaint-image-${username.slice(
            1,
            5
        )}-${username.slice(-5)}-${random_no}.${type[1]}`;
        $("#complaint_image_url").val(uniqueFileName);
        let formData = new FormData();
        formData.append("file", fileInput.files[0]);
        formData.append("fileName", uniqueFileName);
        let file_size = doc_parent_div
            .find(".ComplaintImage")
            .data("file-size"); // eg. (150KB)
        let file_type = doc_parent_div
            .find(".ComplaintImage")
            .data("file-type"); // eg. image/png, image/jpp

        if (parseInt(file_size + "999") < file_array["size"]) {
            Swal.fire({
                icon: "warning",
                title: "Failed!",
                text: "Please upload image whose size is max 2 MB or below",
            });
        } else if (
            file_type == "image" &&
            !(
                file_array["type"] == "image/png" ||
                file_array["type"] == "image/jpg" ||
                file_array["type"] == "image/jpeg"
            )
        ) {
            Swal.fire({
                icon: "warning",
                title: "Invalid File Type!",
                text: "Please upload only jpg, jpeg or png.",
            });
        } else if (
            file_type == "pdf" &&
            file_array["type"] != "application/pdf"
        ) {
            Swal.fire({
                icon: "warning",
                title: "Invalid File Type!",
                text: "Please upload only pdf.",
            });
        } else {
            // Call StoragePut with a callback function
            StoragePut(formData, function (resp) {
                console.log(resp);
                if (resp) {
                    doc_parent_div.find(".upload-btn").addClass("d-none");
                    doc_parent_div.find(".delete-btn").removeClass("d-none");
                    Swal.fire({
                        icon: "success",
                        title: "Uploaded!",
                        text: "Document has been uploaded.",
                    });
                } else {
                    Swal.fire({
                        icon: "warning",
                        title: "Failed!",
                        text: "Failed to upload document.",
                    });
                }
            });
        }
    } catch (error) {
        console.log(error);
    }
});
$(".delete-btn").on("click", function () {
    let this_btn = $(this);
    let doc_parent_div = this_btn.closest(".input-group");
    let fileName = $("#complaint_image_url").val();

    // Call StoragePut with a callback function
    StorageDelete(fileName, function (resp) {
        if (resp) {
            doc_parent_div.find(".ComplaintImage").val(null);
            doc_parent_div.find(".upload-btn").removeClass("d-none");
            doc_parent_div.find(".delete-btn").addClass("d-none");
            Swal.fire({
                icon: "success",
                title: "Deleted!",
                text: "Document has been deleted.",
            });
        } else {
            Swal.fire({
                icon: "warning",
                title: "Failed!",
                text: "Failed to deleted.",
            });
        }
    });
});
// Async function to fetch data from the state API
async function fetchApiData(api) {
    try {
        // Make the fetch request
        const response = await fetch(api);

        // Check if the response is ok (status code 200-299)
        if (!response.ok) {
            throw new Error(
                "Network response was not ok " + response.statusText
            );
        }

        // Parse the JSON data from the response
        const data = await response.json();

        // Log the data to the console (or handle it as needed)
        console.log(data);

        // You can return the data if needed
        return data["data"];
    } catch (error) {
        // Handle any errors that occurred during the fetch
        console.error("There was a problem with the fetch operation:", error);
    }
}

$(document).ready(function () {
    // on page load
    setStateDropdownOptions();

    // on change of state
    $("#state_dropdown").on("change", function () {
        $("#district_dropdown option:selected").text("Please wait...");
        let state_id = $(this).val();
        if (state_id) {
            setDistrictDropdownOptions(state_id);
        }
    });

    // on change of district
    $("#district_dropdown").on("change", function () {
        $("#block_dropdown option:selected").text("Please wait...");
        let district_id = $(this).val();
        if (district_id) {
            setBlockDropdownOptions(district_id);
        }
    });

    // on change of block
    $("#block_dropdown").on("change", function () {
        $("#gp_dropdown option:selected").text("Please wait...");
        let block_id = $(this).val();
        if (block_id) {
            setGPDropdownOptions(block_id);
        }
    });

    // creating dynamic state dropdown
    async function setStateDropdownOptions() {
        // fetching state data
        let all_states = await fetchApiData("get-state/0");
        let optionItems = '<option selected="" value="">Select one</option>';

        optionItems = all_states.map(
            (item) =>
                `<option value=${item.state_id}>${item.state_name}</option>`
        );

        let state_id = $("#state_dropdown").data('state-id') || "";
        $("#state_dropdown").html(optionItems).val(state_id).change();
    }

    // creating dynamic district dropdown
    async function setDistrictDropdownOptions(state_id) {
        // fetching state data
        let districts = await fetchApiData(`get-district/${state_id}`);
        let optionItems = '<option selected="" value="">Select one</option>';

        if (districts.length !== 0) {
            optionItems += districts.map(
                (item) =>
                    `<option value=${item.district_id}>${item.district_name}</option>`
            );
        } else {
            optionItems =
                '<option selected="" value="">No district found in selected state!</option>';
        }

        let district_id = $("#district_dropdown").data('district-id') || "";
        $("#district_dropdown").html(optionItems).val(district_id).change();
    }

    // creating dynamic block dropdown
    async function setBlockDropdownOptions(district_id) {
        // fetching block data
        let blocks = await fetchApiData(`get-block/${district_id}`);
        let optionItems = '<option selected="" value="">Select one</option>';

        if (blocks.length !== 0) {
            optionItems += blocks.map(
                (item) =>
                    `<option value=${item.block_id}>${item.block_name}</option>`
            );
        } else {
            optionItems =
                '<option selected="" value="">No block found in selected district!</option>';
        }

        let block_id = $("#block_dropdown").data('block-id') || "";
        $("#block_dropdown").html(optionItems).val(block_id).change();
    }

    // creating dynamic GP dropdown
    async function setGPDropdownOptions(block_id) {
        // fetching GP data
        let GPs = await fetchApiData(`get-gp/${block_id}`);
        let optionItems = '<option selected="" value="">Select one</option>';

        if (GPs.length !== 0) {
            optionItems += GPs.map(
                (item) => `<option value=${item.gp_id}>${item.gp_name}</option>`
            );
        } else {
            optionItems =
                '<option selected="" value="">No gram-panchayat found in selected block!</option>';
        }

        let gp_id = $("#gp_dropdown").data('gp-id') || "";
        $("#gp_dropdown").html(optionItems).val(gp_id).change();
    }

    // removing error indicator
    $('input[type="text"], textarea').on("input", function () {
        $(this).removeClass("is-invalid");
        $(this).parent().next("span").addClass("invisible");
    });
    $('input[type="checkbox"]').on("click", function () {
        $(this).removeClass("is-invalid");
    });
    $("select").on("change", function () {
        $(this).removeClass("is-invalid");
        $(this).parent().next("span").addClass("invisible");
    });

    //on change of anonymous_flag
    $("#anonymous_flag").on("change", function () {
        if ($(this).is(":checked")) {
            //then change input type text to password of #complainant_name
            $("#complainant_name").attr("type", "password");
        }else{
            $("#complainant_name").attr("type", "text");
        }
    });

    // onclick of #complainant_name, #village, #state_dropdown, #district_dropdown, #block_dropdown, #gp_dropdown open a swal
    $("#complainant_name, #village, #state_dropdown, #district_dropdown, #block_dropdown, #gp_dropdown").on("click", function () {
        swal.fire({
            title: "This cannot be edited!",
            text: "If you want to change this goto profile and then change it from there",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        });
    });
});
