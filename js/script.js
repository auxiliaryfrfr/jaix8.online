document.addEventListener('click', (event) => {
    const planeDiv = document.createElement('div');
    planeDiv.classList.add('svg-container', 'click-plane');
    
    planeDiv.style.left = `${event.clientX}px`;
    planeDiv.style.top = `${event.clientY}px`;
    
    planeDiv.innerHTML = `
        <svg viewBox="0 0 24 24" fill="none" stroke="#2c3e50" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="22" y1="2" x2="11" y2="13"></line>
            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
        </svg>
    `;
    
    document.body.appendChild(planeDiv);
    
    setTimeout(() => {
        planeDiv.remove();
    }, 2000);
});