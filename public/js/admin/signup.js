$(document).ready(function(){

    // on change of auth type id
    $('#auth_type_dropdown').on('change',function () {
        let auth_type_id = $(this).val();
        
        if(auth_type_id == 2){  // village leve
            $('#state_dropdown, #district_dropdown, #block_dropdown, #gp_dropdown').closest('.form-group').removeClass('d-none');
        }else if(auth_type_id == 3){    // block leve
            $('#state_dropdown, #district_dropdown, #block_dropdown').closest('.form-group').removeClass('d-none');
            $('#gp_dropdown').closest('.form-group').addClass('d-none');
        }else if(auth_type_id == 4){    // district leve
            $('#state_dropdown, #district_dropdown').closest('.form-group').removeClass('d-none');
            $('#block_dropdown, #gp_dropdown').closest('.form-group').addClass('d-none');
        }else if(auth_type_id == 5){    // state leve
            $('#state_dropdown').closest('.form-group').removeClass('d-none');
            $('#district_dropdown, #block_dropdown, #gp_dropdown').closest('.form-group').addClass('d-none');
        }else{
            $('#state_dropdown, #district_dropdown, #block_dropdown, #gp_dropdown').closest('.form-group').addClass('d-none');
            $(this).val('').change();
        }
       
    });

    // ----------------------- dynamically dropdown value changes-------------------
    
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

    // on page load
    setStateDropdownOptions(0);

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
    async function setStateDropdownOptions(state_id) {
        // fetching state data
        let all_states = await fetchApiData(`get-state/${state_id}`);
        let optionItems = '<option selected="" value="0">Select State</option>';

        optionItems = all_states.map(
            (item) =>
                `<option value=${item.state_id}>${item.state_name}</option>`
        );

        $("#state_dropdown").html(optionItems).val(1).change();
    }

    // creating dynamic district dropdown
    async function setDistrictDropdownOptions(state_id) {
        // fetching state data
        let districts = await fetchApiData(`get-district/${state_id}`);
        let optionItems = '<option selected="" value="0">Select District</option>';

        if (districts.length !== 0) {
            optionItems += districts.map(
                (item) =>
                    `<option value=${item.district_id}>${item.district_name}</option>`
            );
        } else {
            optionItems =
                '<option selected="" value="0">No district found in selected state!</option>';
        }

        $("#district_dropdown").html(optionItems);
    }

    // creating dynamic block dropdown
    async function setBlockDropdownOptions(district_id) {
        // fetching block data
        let blocks = await fetchApiData(`get-block/${district_id}`);
        let optionItems = '<option selected="" value="0">Select Block</option>';

        if (blocks.length !== 0) {
            optionItems += blocks.map(
                (item) =>
                    `<option value=${item.block_id}>${item.block_name}</option>`
            );
        } else {
            optionItems =
                '<option selected="" value="0">No block found in selected district!</option>';
        }

        $("#block_dropdown").html(optionItems);
    }

    // creating dynamic GP dropdown
    async function setGPDropdownOptions(block_id) {
        // fetching GP data
        let GPs = await fetchApiData(`get-gp/${block_id}`);
        let optionItems = '<option selected="" value="0">Select Gramp-Panchayat</option>';

        if (GPs.length !== 0) {
            optionItems += GPs.map(
                (item) => `<option value=${item.gp_id}>${item.gp_name}</option>`
            );
        } else {
            optionItems =
                '<option selected="" value="0">No gram-panchayat found in selected block!</option>';
        }

        $("#gp_dropdown").html(optionItems);
    }

    // removing error indicator
    $('input[type="text"], textarea').on("input", function () {
        $(this).removeClass("is-invalid");
        $(this).parent().next("span").addClass("d-none");
    });
    $('input[type="checkbox"]').on("click", function () {
        $(this).removeClass("is-invalid");
    });
    $("select").on("change", function () {
        $(this).removeClass("is-invalid");
        $(this).parent().next("span").addClass("d-none");
    });
});