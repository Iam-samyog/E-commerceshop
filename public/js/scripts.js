window.onload = function() {
    const menuBtn = document.getElementById("menuBtn");
    const mobileMenu = document.getElementById("mobileMenu");
    const mobileSearchBtn = document.getElementById("mobileSearchBtn");

    // Toggle mobile menu
    if (menuBtn && mobileMenu) {
        menuBtn.onclick = function() {
            const currentDisplay = window.getComputedStyle(mobileMenu).display;
            mobileMenu.style.display = (currentDisplay === "block") ? "none" : "block";
            console.log("Menu button clicked");
        };
    } else {
        console.error("Menu button or mobile menu not found");
    }

    // Toggle mobile search input
    if (mobileSearchBtn) {
        mobileSearchBtn.onclick = function() {
            console.log("Search button clicked");

            let searchContainer = document.getElementById("mobileSearchContainer");

            if (searchContainer) {
                searchContainer.remove();
            } else {
                searchContainer = document.createElement("div");
                searchContainer.id = "mobileSearchContainer";
                searchContainer.style.padding = "10px";
                searchContainer.style.backgroundColor = "#fff";
                searchContainer.style.borderTop = "1px solid #eee";

                searchContainer.innerHTML = 
                    <div style="display: flex; background-color: #F0F0F0; border-radius: 25px; padding: 8px 16px;">
                        <i class="bi bi-search" style="color: #909090; margin-right: 8px;"></i>
                        <input
                            type="text"
                            style="background-color: #F0F0F0; border: none; width: 100%; outline: none; color:black;"
                            placeholder="Search for products..."
                        />
                    </div>
                ;

                // Insert after the mobile menu
                mobileMenu.parentNode.insertBefore(searchContainer, mobileMenu.nextSibling);
            }
        };
    } else {
        console.error("Mobile search button not found");
    }
};