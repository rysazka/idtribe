import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// Fungsi Render Navbar
export function renderUserNavbar(activePage) {
    const navHTML = `
        <a href="dashboard.html" class="brand">
            <div class="brand-icon">ID</div>
            <span class="brand-text">ID-TRIBE</span>
        </a>
        
        <div class="nav-menu">
            <a href="dashboard.html" class="nav-link ${activePage === 'dashboard' ? 'active' : ''}">Beranda</a>
            <a href="training-hub.html" class="nav-link ${activePage === 'training' ? 'active' : ''}">Alur Program</a>
            <a href="articles.html" class="nav-link ${activePage === 'articles' ? 'active' : ''}">Wawasan</a>
            <a href="about.html" class="nav-link ${activePage === 'about' ? 'active' : ''}">Tentang Kami</a>
        </div>

        <div class="user-section" style="display: flex; gap: 10px; align-items: center;">
             <a href="dashboard.html" class="btn-nav" style="background:none; color:var(--dark); box-shadow:none; padding: 0;">
                <i class="fas fa-user-circle" style="font-size: 1.5rem;"></i>
            </a>
            <button id="navLogoutBtn" style="border:none; background: #fee2e2; color:#b91c1c; padding: 5px 10px; border-radius: 8px; cursor: pointer; font-weight: bold;">
                <i class="fas fa-sign-out-alt"></i>
            </button>
        </div>
    `;

    const container = document.getElementById('navbar-container');
    if (container) {
        container.innerHTML = navHTML;
        container.className = 'navbar'; // Pastikan class navbar terpasang
    }

    // Attach Logout
    setTimeout(() => {
        const btnLogout = document.getElementById('navLogoutBtn');
        if (btnLogout) {
            btnLogout.addEventListener('click', () => {
                const auth = getAuth();
                signOut(auth).then(() => window.location.href = "login.html");
            });
        }
    }, 500);
}

// Fungsi Render Background Blobs
export function renderBackground() {
    const bgHTML = `
        <div class="blob blob-1"></div>
        <div class="blob blob-2"></div>
    `;
    const bgContainer = document.createElement('div');
    bgContainer.className = 'bg-shapes';
    bgContainer.innerHTML = bgHTML;
    document.body.prepend(bgContainer);
}