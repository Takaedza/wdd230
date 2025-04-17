   // Function to check the day and display the banner
    function showBanner() {
        const today = new Date();
        const dayOfWeek = today.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
        // Show the banner only on Monday (1), Tuesday (2), and Wednesday (3)
        if (dayOfWeek >= 1 && dayOfWeek <= 3) {
            document.getElementById('banner').style.display = 'block';
        }
    }
    // Function to close the banner
    function closeBanner() {
        document.getElementById('banner').style.display = 'none';
    }
    // Call the showBanner function when the page loads
    window.addEventListener('load', showBanner);