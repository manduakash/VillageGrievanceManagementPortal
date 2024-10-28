
async function addDisagree(complaintId, userId) {
    const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

    try {
        const response = await fetch('/disagree', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': csrfToken,
            },
            body: JSON.stringify({
                complaint_id: complaintId,
                user_id: userId,
            }),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
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
        console.error('There was a problem with the fetch operation:', error);
        return false;
    }
}

// Usage example
// Replace 3 and 1 with your actual complaint_id and user_id
// addDisagree(3, 1); 
