export function createCard(image = "https://placehold.co/600x400/3388EE/FFFFFF/", title = "Placeholder", rating = -1) {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <img src="${image}" alt="Image">
        <div class="card-title">${title}</div>
        <div class="stars">${generateStars(rating)}</div>
    `;

    return card;
}

function generateStars(rating) {
    const maxStars = 5;
    let starsHtml = '';

    if (rating < 0 || rating > maxStars) {
        return '<b style = "color: #b0b0b0;">Sem avaliações</b>';
    }
    
    rating = Math.round(rating)

    for (let i = 1; i <= maxStars; i++) {
        starsHtml += i <= rating ? '⭐' : '☆';
    }

    return starsHtml;
}

function generateCards(){
    const cardContainers = document.querySelectorAll(".cardContainer");
    cardContainers.forEach(container => {
        const image = container.getAttribute("image");
        const title = container.getAttribute("id");
        const rating = container.getAttribute("rating");
        
        const cardElement = createCard(image, title, rating);
    });
}