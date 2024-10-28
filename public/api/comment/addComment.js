
async function addComment(complaintId, userId, comment) {
    const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

    console.log(
        'user_id: '+userId,
        ' | complaint_id: '+complaintId,
        ' | comment: '+comment
    )
    try {
        const response = await fetch('/addComment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': csrfToken,
            },
            body: JSON.stringify({
                user_id: userId,
                complaint_id: complaintId,
                comment: comment
            }),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok,', response.message);
        }

        const result = await response.json();

        if (result.message) {
            console.log(result.message);
            return true;
        } else {
            console.log('Unexpected response:', result);
            return false;
        }
    } catch (error) {
        console.log('There was a problem with the fetch operation:', error);
        return false;
    }
}

// Usage example
// Replace 3 and 1 with your actual complaint_id and user_id
// addComment(3, 1); 
