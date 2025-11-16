function openForm(product, price) {
    document.getElementById("orderForm").style.display = "block";
    document.getElementById("product").value = product + " - " + price;
}

function closeForm() {
    document.getElementById("orderForm").style.display = "none";
}

// FORM EMAIL SUBMIT (Formspree)
const form = document.getElementById("form");
form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = new FormData(form);
    const response = await fetch("YOUR_FORMSPREE_URL", {
        method: "POST",
        body: data,
        headers: { "Accept": "application/json" }
    });

    if (response.ok) {
        alert("Order placed successfully! Check your email.");
        closeForm();
        form.reset();
    } else {
        alert("There was an issue, please try again.");
    }
});
