// Get references to the DOM elements
const playButton = document.getElementById('playButton');
const audio = document.getElementById('podcastAudio');
const timelineBar = document.getElementById('timelineBar');
const durationDisplay = document.getElementById('duration');
const forwardButton = document.getElementById('forwardButton');
const backwardButton = document.getElementById('backwardButton');

// Function to update the displayed time and progress bar
function updateTimeline() {
    if (!isNaN(audio.duration)) {
        const progress = (audio.currentTime / audio.duration) * 100;
        timelineBar.value = progress;
        
        const minutes = Math.floor(audio.currentTime / 60);
        const seconds = Math.floor(audio.currentTime % 60);
        durationDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }
}

// Ensure the audio is loaded before allowing controls to work
audio.addEventListener('loadedmetadata', () => {
    console.log('Audio metadata loaded. Duration:', audio.duration);
    updateTimeline(); // Initial update of the timeline
});

// Play/Pause button functionality
playButton.addEventListener('click', () => {
    if (audio.paused) {
        audio.play().then(() => {
            playButton.textContent = 'Pause';
        }).catch(error => {
            console.log('Audio playback error:', error);
        });
    } else {
        audio.pause();
        playButton.textContent = 'Play';
    }
});

// Forward 10 seconds
forwardButton.addEventListener('click', () => {
    if (!isNaN(audio.duration)) {
        audio.currentTime = Math.min(audio.currentTime + 10, audio.duration);
        console.log("Skipped forward to:", audio.currentTime);
        updateTimeline();
    } else {
        console.log("Audio duration not loaded yet.");
    }
});

// Backward 10 seconds
backwardButton.addEventListener('click', () => {
    if (!isNaN(audio.duration)) {
        audio.currentTime = Math.max(audio.currentTime - 10, 0);
        console.log("Skipped backward to:", audio.currentTime);
        updateTimeline();
    } else {
        console.log("Audio duration not loaded yet.");
    }
});

// Sync the timeline bar with the current audio position
audio.addEventListener('timeupdate', () => {
    updateTimeline();
});

// Allow user to seek to a different time by moving the timeline bar
timelineBar.addEventListener('input', () => {
    if (!isNaN(audio.duration)) {
        const seekTime = (timelineBar.value / 100) * audio.duration;
        audio.currentTime = seekTime;
        console.log("Timeline bar set current time to:", seekTime);
        updateTimeline();
    }
});

// Error handling for audio element
audio.addEventListener('error', (e) => {
    console.error('Error loading audio file:', e);
    alert('Error loading the podcast file. Please try again later.');
});


// Get elements for the modal
const modal = document.getElementById("transcriptModal");
const btn = document.getElementById("transcriptButton");
const closeBtn = document.querySelector(".close-button");

if (modal && btn && closeBtn) {
    // Open modal
    btn.addEventListener("click", () => {
        modal.style.display = "block";
    });

    // Close modal when 'x' is clicked
    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Close modal when clicking outside of it
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
} else {
    console.error("Modal elements were not found in the DOM.");
}