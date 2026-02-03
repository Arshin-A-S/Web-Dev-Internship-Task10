const fetchBtn = document.getElementById('fetch-btn');
const countryInput = document.getElementById('country-input');
const resultDiv = document.getElementById('country-info');
const loader = document.getElementById('loader');

async function getCountryData() {
    const name = countryInput.value.trim();
    console.log("Searching for:", name);

    if (!name) {
        alert("Please enter a country name!");
        return;
    }

    loader.classList.remove('hidden');
    resultDiv.innerHTML = "";

    try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`);
        console.log("API Response Status:", response.status); 

        if (!response.ok) {
            throw new Error("Country not found. Please check your spelling.");
        }

        const data = await response.json();
        const country = data[0]; 

        renderCountry(country);

    } catch (error) {
        console.error("Error caught:", error.message);
        resultDiv.innerHTML = `<p class="error-msg" style="color: #e74c3c; font-weight: bold;">${error.message}</p>`;
    } finally {
        loader.classList.add('hidden');
    }
}

function renderCountry(country) {
    resultDiv.innerHTML = `
        <div class="country-card">
            <img src="${country.flags.svg}" alt="Flag of ${country.name.common}" class="flag-img">
            <h3>${country.name.common}</h3>
            <p><strong>Capital:</strong> ${country.capital ? country.capital[0] : 'N/A'}</p>
            <p><strong>Region:</strong> ${country.region}</p>
            <p><strong>Population:</strong> ${country.population.toLocaleString()}</p>
        </div>
    `;
}

fetchBtn.addEventListener('click', getCountryData);

countryInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        getCountryData();
    }
});