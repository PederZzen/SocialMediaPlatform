/**
 * Navbar
 */

const navBar = document.querySelector("header").innerHTML = `
<nav class="navbar navbar-expand-md p-4 mb-2 bg-secondary border-bottom">
    <div class="container">
        <a class="navbar-brand text-primary fw-bold" href="./home.html">The Real fakebook</a>          
        <button class="navbar-toggler border-0" data-bs-toggle="collapse" data-bs-target="#nav" aria-controls="nav" aria-label="Expand Navigation">
            <div class="fw-bold text-primary">Menu</div>
        </button>
        <div class="collapse navbar-collapse" id="nav">
            <span class="me-auto"></span>                 
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a href="../home.html" class="nav-link text-white fw-bold">Feed</a>
                </li>
                <li class="nav-item">
                    <a href="../profile.html" class="nav-link text-white fw-bold">Profile</a>
                </li>
                <li>
                    <a href="../index.html" id="logOut" class=" nav-item nav-link text-white fw-bold">Log out</a>
                </li>
            </ul>                    
        </div>
    </div>
</nav>`;

/**
 * Log Out
 */

const logOutBtn = document.querySelector("#logOut").addEventListener("click", () => {
    window.location.href = "../index.html";
    localStorage.clear();
});

const token = localStorage.getItem("accessToken");

if (!token) {
    window.location.href = "../index.html";
}