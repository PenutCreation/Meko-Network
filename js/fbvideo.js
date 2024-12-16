    // Function to convert fb-video divs to embedded videos
        function convertToFacebookVideos() {
            const videoDivs = document.querySelectorAll(
              '.fb-video[data-fb-url]:not([data-processed])');
            
            videoDivs.forEach(div => {
                const videoURL = div.getAttribute('data-fb-url');
                
                // Set attributes for Facebook video rendering
                div.setAttribute('data-href', videoURL);
                div.setAttribute('data-width', '500'); // Adjust width as needed
                div.setAttribute('data-allowfullscreen', 'true');
                div.setAttribute('data-processed', 'true'); // Mark as processed to avoid re-parsing
            });

            // Parse updated content with Facebook SDK
            FB.XFBML.parse();
        }

        // Initial conversion
        convertToFacebookVideos();

        // Observe DOM changes for new fb-video elements
        const observer = new MutationObserver(() => {
            convertToFacebookVideos();
        });

        // Start observing the document body for added nodes
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });