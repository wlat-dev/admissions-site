let counselors = [
    {
        name: "Jane Smith",
        bio: "Jane has been working in the college admissions field for over 10 years. She has helped hundreds of students get into their dream schools.",
        responseTime: "3 days",
        achievements: "Successfully helped 50 students get into Ivy League schools",
        rating: 5,
        price: 100,
        avatar: "jane-avatar.jpg"
    },
    {
        name: "John Doe",
        bio: "John has a proven track record of success in the college admissions process. He has helped students from a wide range of backgrounds and schools.",
        responseTime: "2 days",
        achievements: "Successfully helped 30 students get into top-ranked universities",
        rating: 4.5,
        price: 90,
        avatar: "john-avatar.jpg"
    },
    {
        name: "Anna Lee",
        bio: "Anna has extensive experience in college admissions, including a background in college counseling and test preparation.",
        responseTime: "1 day",
        achievements: "Successfully helped 20 students get into Ivy League schools",
        rating: 4,
        price: 80,
        avatar: "anna-avatar.jpg"
    },
    {
        name: "Michael Brown",
        bio: "Michael is a former admissions officer at a top-ranked university and has helped students from diverse backgrounds and schools.",
        responseTime: "2 days",
        achievements: "Successfully helped 15 students get into Ivy League schools",
        rating: 4.5,
        price: 110,
        avatar: "michael-avatar.jpg"
    },
    {
        name: "Emily Davis",
        bio: "Emily is a seasoned college admissions consultant with a strong background in essay writing and interview preparation.",
        responseTime: "3 days",
        achievements: "Successfully helped 25 students get into top-ranked universities",
        rating: 4.8,
        price: 120,
        avatar: "emily-avatar.jpg"
    }
];

function displayCounselors() {
    let counselorCards = "";
    for (let i = 0; i < counselors.length; i++) {
        counselorCards += `
                <article class="counselor-card">
                        <img src="${counselors[i].avatar}" alt="Counselor Avatar" class="avatar">
                        <h4>${counselors[i].name}</h4>
                        <p>${counselors[i].bio}</p>
                        <ul>
                        <li>Response Time: ${counselors[i].responseTime}</li>
                        <li>Notable Achievements: ${counselors[i].achievements}</li>
                        <li>Star Rating: ${counselors[i].rating}</li>
                        <li>Pricing: ${counselors[i].price}</li>
                    </ul>

                    <button onclick="viewProfile(${i})">View Profile</button>
                </article>`
    }
    document.getElementById("counselors").innerHTML = counselorCards;
}

function renderCounselors(counselors) {
    let counselorsContainer = document.getElementById("counselors");
    counselorsContainer.innerHTML = "";

    counselors.forEach(counselor => {
        let counselorCard = document.createElement("article");
        counselorCard.classList.add("counselor-card");

        let avatar = document.createElement("img");
        avatar.src = counselor.avatar;
        avatar.alt = "Counselor Avatar";
        avatar.classList.add("avatar");

        let name = document.createElement("h4");
        name.innerHTML = counselor.name;

        let bio = document.createElement("p");
        bio.innerHTML = counselor.bio;

        let details = document.createElement("ul");

        let responseTime = document.createElement("li");
        responseTime.innerHTML = `Response Time: ${counselor.responseTime}`;

        let achievements = document.createElement("li");
        achievements.innerHTML = `Notable Achievements: ${counselor.achievements}`;

        let rating = document.createElement("li");
        rating.innerHTML = `Star Rating: ${counselor.rating}`;

        let price = document.createElement("li");
        price.innerHTML = `Pricing: $${counselor.price}/hour`;

        let viewProfile = document.createElement("button");
        viewProfile.innerHTML = "View Profile";

        details.appendChild(responseTime);
        details.appendChild(achievements);
        details.appendChild(rating);
        details.appendChild(price);

        counselorCard.appendChild(avatar);
        counselorCard.appendChild(name);
        counselorCard.appendChild(bio);
        counselorCard.appendChild(details);
        counselorCard.appendChild(viewProfile);

        counselorsContainer.appendChild(counselorCard);
    });
}


function viewProfile(index) {
    let counselor = counselors[index];
    alert(`Name: ${counselor.name}\nBio: ${counselor.bio}\nResponse Time: ${counselor.responseTime}\nNotable Achievements: ${counselor.achievements}\nStar Rating: ${counselor.rating}\nPricing: ${counselor.price}`);
}

// call the displayCounselors function to display the counselors on page load
displayCounselors();

function filterCounselors() {
    let filteredCounselors = counselors.slice(); // make a copy of the array so we don't modify the original
    let responseTimeFilter = document.getElementById("response-time-filter").value;
    let ratingFilter = document.getElementById("rating-filter").value;
    let priceFilter = document.getElementById("price-filter").value;

    if (responseTimeFilter !== "all") {
        filteredCounselors = filteredCounselors.filter(counselor => counselor.responseTime === responseTimeFilter);
    }
    if (ratingFilter !== "0") {
        filteredCounselors = filteredCounselors.filter(counselor => counselor.rating >= ratingFilter);
    }
    if (priceFilter !== "all") {
        filteredCounselors = filteredCounselors.filter(counselor => counselor.price >= priceFilter);
    }
    // Re-render the filtered counselors
    renderCounselors(filteredCounselors);
}

function sortCounselors() {
    let sortBy = document.getElementById("sort-by").value;
    let sortedCounselors = counselors.slice().sort((a, b) => {
        if (a[sortBy] < b[sortBy]) {
            return -1;
        }
        if (a[sortBy] > b[sortBy]) {
            return 1;
        }
        return 0;
    });
    // Re-render the sorted counselors
    renderCounselors(sortedCounselors);

}
