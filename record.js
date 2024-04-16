document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const tableBody = document.querySelector("tbody");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        
        const name = document.getElementById("name").value;
        const employeeId = document.getElementById("employeeID").value;
        const department = document.getElementById("department").value;
        const experience = parseInt(document.getElementById("exp").value);
        const email = document.getElementById("email").value;
        const mobile = document.getElementById("mbl").value;

        
        let role;
        if (experience > 5) {
            role = "Senior";
        } else if (experience >= 2 && experience <= 5) {
            role = "Junior";
        } else {
            role = "Fresher";
        }

        
        const newRow = document.createElement("tr");
        newRow.innerHTML = `
            <td>${name}</td>
            <td>${employeeId}</td>
            <td>${department}</td>
            <td>${experience}</td>
            <td>${email}</td>
            <td>${mobile}</td>
            <td>${role}</td>
            <td><button onclick="deleteRow(this)">Delete</button></td>
        `;

        
        tableBody.appendChild(newRow);

    
        form.reset();
    });
});

function deleteRow(btn) {
    const row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
}