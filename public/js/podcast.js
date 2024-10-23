// Get references to the DOM elements
const playButton = document.getElementById('playButton');
const audio = document.getElementById('podcastAudio');
const timelineBar = document.getElementById('timelineBar');
const durationDisplay = document.getElementById('duration');

// Ensure the audio is ready to play
audio.addEventListener('canplay', () => {
    console.log('Audio file loaded successfully.');
});

// Toggle Play/Pause functionality
playButton.addEventListener('click', () => {
    if (audio.paused) {
        audio.play().then(() => {
            playButton.textContent = 'Pause'; // Change button text to "Pause"
        }).catch(error => {
            console.log('Audio playback error:', error);
        });
    } else {
        audio.pause();
        playButton.textContent = 'Play';  // Change button text back to "Play"
    }
});

// Update the timeline and display the current time
audio.addEventListener('timeupdate', () => {
    const currentTime = audio.currentTime;
    const duration = audio.duration;

    // Update the timeline bar value
    if (!isNaN(duration)) {
        timelineBar.value = (currentTime / duration) * 100;
    }

    // Update the time display
    const minutes = Math.floor(currentTime / 60);
    const seconds = Math.floor(currentTime % 60);
    durationDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
});

// Allow user to change the position of the audio by moving the timeline bar
timelineBar.addEventListener('input', () => {
    const duration = audio.duration;
    if (!isNaN(duration)) {
        const value = timelineBar.value;

        // Update the current time of the audio
        audio.currentTime = (value / 100) * duration;
    }
});

// Error handling for the audio element
audio.addEventListener('error', (e) => {
    console.error('Error loading audio file:', e);
    alert('Error loading the podcast file. Please try again later.');
});