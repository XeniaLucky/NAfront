document.addEventListener('DOMContentLoaded', function () {
    console.log('DOMContentLoaded event fired!');
    const cardsContainer = document.getElementById('cards-container');
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    let currentCardIndex = 0;
    let cardsData = [];
    let intervalId;
    function createCard(userData) {
        return `
            <div class="profile-content">
                <div class="profile-header">
                    <div class="profile-main">
                        <img id="profile-image" src="${userData.imageUrl}" alt="Profile Picture">
                        <div class="profile-details">
                            <h1 id="profile-name">${userData.name}</h1>
                            <p id="profile-title">${userData.title}</p>
                            <p id="profile-location">${userData.address.city}, USA · Fulltime Freelancer</p>
                        </div>
                    </div>
                    <div class="skills">
                        <button class="skill-button">Figma</button>
                        <button class="skill-button">UI Design</button>
                        <button class="skill-button">UX Design</button>
                    </div>
                </div>
                <hr class="profile-separator">
                <div class="content-row">
                    <div class="about-me">
                        <h2>About Me</h2>
                        <p id="about-me-text">${userData.aboutMe}</p>
                    </div>
                    <div class="contact-info">
                        <div class="contact-item">
                            <img src="./img/email.png" class="contact-icon" alt="Email Icon">
                            <p class="contact-text">Email</p>
                            <span id="contact-email">${userData.email}</span>
                        </div>
                        <div class="contact-item">
                            <img src="./img/phone.png" class="contact-icon" alt="Phone Icon">
                            <p class="contact-text">Phone number</p>
                            <span id="contact-phone">${userData.phone}</span>
                        </div>
                        <button class="contact-button download-resume">Download Resume</button>
                        <button class="contact-button message">Message</button>
                    </div>
                                        <div class="portfolio">
                        <h2>Portfolio</h2>
                        <div class="portfolio-grid">
                            <div class="portfolio-item">
                                <img src="img/card_1.png" alt="Portfolio Item 1">
                            </div>
                            <div class="portfolio-item">
                                <img src="img/card_2.png" alt="Portfolio Item 2">
                            </div>
                            <div class="portfolio-item">
                                <img src="img/card_3.png" alt="Portfolio Item 3">
                            </div>
                        </div>
                    </div>
                    <div class="work-experience">
                        <h2>Work Experience</h2>
                    </div>
                </div>
            </div>
        `;
    }
    function showCard(index) {
        if (cardsContainer) {
            cardsContainer.innerHTML = createCard(cardsData[index]);
        }
        else {
            console.error('Element with id "cards-container" not found.');
        }
    }
    function fetchAndCreateCards() {
        fetch(apiUrl)
            .then(response => response.json())
            .then(users => {
            const enrichedUsers = users.map((user) => (Object.assign(Object.assign({}, user), { imageUrl: './img/avatar_1.png', title: 'Senior Product Designer', aboutMe: "Hi, I'm a final year student completing a bachelor's In information Technology in QUT, with experience. We are the company behind the wildly successful DIY channel 5-Minute Crafts, the inspirational and creative channel Bright Side." })));
            cardsData = enrichedUsers;
            if (cardsContainer) {
                showCard(currentCardIndex);
                intervalId = setInterval(nextCard, 10000);
            }
            else {
                console.error('Element with id "cards-container" not found.');
            }
        })
            .catch(error => console.error('Error fetching users:', error));
    }
    function nextCard() {
        currentCardIndex = (currentCardIndex + 1) % cardsData.length;
        showCard(currentCardIndex);
    }
    fetchAndCreateCards();
});