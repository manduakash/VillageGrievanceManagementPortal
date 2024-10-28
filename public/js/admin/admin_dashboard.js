$(document).ready(function () {
    
    getComplaintsByComplaintID(0);
    $(function() {
        $("#table")
        .DataTable({
            "scrollCollapse": true,
            "scrollX": true,
            responsive: false,
            lengthChange: false,
            autoWidth: false,
            paging: true,
            dom: 'Bfrtip',
            buttons: [
                "copy",
                "csv",
                "excel",
                "pdf",
                "print",
                "colvis",
            ],
        })
        .buttons()
        .container()
        .appendTo("#table .col-md-6:eq(0)");
    });

    // Async function to fetch data from the API
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
            return data;
        } catch (error) {
            // Handle any errors that occurred during the fetch
            console.error("There was a problem with the fetch operation:", error);
        }
    }

    // api function for fetch complaints 
    async function getComplaintsByComplaintID(ComplaintID) {
        let all_complaints = await fetchApiData(`get-complaints/${ComplaintID}`);
        console.log(all_complaints);
        let rows = '';
        rows = all_complaints.map(
            (item) =>
                `<tr>
                    <td>${item.complaint_type_id == 1 ? 'Education Releated' : item.complaint_type_id == 2 ? 'Health Releated' : item.complaint_type_id == 3 ? 'Development Releated' : '-' }</td>
                    <td>${item.anonymous_flag ? "Not available" : item.complainant_name}</td>
                    <td>${item.anonymous_flag ? "Not available" : item.user.username}</td>
                    <td>${item.likes_count} person(s)</td>
                    <td>${item.gram_panchayat.gp_name}</td>
                    <td>${formatTimestampToDate(item.created_at)}</td>
                    <td>${item.complaint_status_id == 0 ? 'Resovled' : item.complaint_status_id == 1 ? 'Pending (Village Level)' : item.complaint_status_id == 2 ? 'Pending (Block Level)' : item.complaint_status_id == 3 ? 'Pending (District Level)' : item.complaint_status_id == 4 ? 'Pending (State Level)' : '-'}</td>
                    <td class="text-center"><a href="get-complaint-by-id?ComplaintID=${item.id}" class="btn btn-sm rounded-pill btn-light shadow"><i class="fa fa-eye text-primary"></i></a></td>
                </tr>`
        );

        
        if ($.fn.DataTable.isDataTable('#table')) {
            $('#table').DataTable().destroy();
        }
        $("#table tbody").html(rows);
        $("#table")
        .DataTable({
            "scrollCollapse": true,
            "scrollX": true,
            responsive: false,
            lengthChange: false,
            autoWidth: false,
            paging: true,
            dom: 'Bfrtip',
            buttons: [
                "copy",
                "csv",
                "excel",
                "pdf",
                "print",
                "colvis",
            ],
        })
        .buttons()
        .container()
        .appendTo("#table .col-md-6:eq(0)");
    }

    function formatTimestampToDate(timestamp) {
        // Create a new Date object using the timestamp
        const date = new Date(timestamp);
      
        // Extract the day, month, and year from the date object
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed, so we add 1
        const year = date.getFullYear();
      
        // Format the date as dd-mm-yyyy
        const formattedDate = `${day}-${month}-${year}`;
      
        return formattedDate;
      }

});