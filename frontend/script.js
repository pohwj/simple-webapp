async function enterWork() {
    const childName = document.getElementById('childName').value;

    // Gather all the checked tasks
    const checkboxes = document.querySelectorAll('input[name="workDescription"]:checked');
    let selectedTasks = [];
    checkboxes.forEach((checkbox) => {
        selectedTasks.push(checkbox.value);
    });

    // Convert the selected tasks into a single string
    const workDescription = selectedTasks.join(', ');

    try {
        // Send a POST request to the server to enter the work.
        const response = await fetch('https://apdyxohm4opolgwd5yijbenvum0eqkil.lambda-url.ap-southeast-1.on.aws/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                childName: childName,
                workDescription: workDescription
            })
        });

        // Check if the response is successful (status code in the range 200-299).
        if (!response.ok) {
            throw new Error('Server response was not ok.');
        }

        // Optionally, handle the response data.
        const data = await response.json();
        alert('Work entry created successfully!');
    } catch (error) {
        // Handle any errors.
        alert('Error creating work entry: ' + error.message);
    }
}

