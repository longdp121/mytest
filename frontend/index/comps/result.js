function html(data) {
    return `
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${data.name}</h5>
            <p class="card-text">${data.userName}</p>
        </div>
    </div>
    `
};

module.exports = html;