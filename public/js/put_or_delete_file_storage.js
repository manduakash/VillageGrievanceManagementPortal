function StoragePut(PutFileInput, callback) {
    $.ajax({
        url: "upload",
        type: "POST",
        dataType: "json",
        data: PutFileInput,
        processData: false,
        contentType: false,
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        success: function (response) {
            callback(true);
        },
        error: function (xhr, status, error) {
            callback(false);
        },
    });
}

function StorageDelete(fileName, callback) {
    $.ajax({
        url: "delete",
        type: "POST",
        dataType:'json',
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        data: { fileName: fileName },
        success: function (response) {
            // Handle success response
            callback(true);
        },
        error: function (xhr, status, error) {
            console.log(xhr.responseText); // Log the response text
            console.log(status); // Log the status
            console.log(error); // Log the error
            callback(false);
        },
    });
}

