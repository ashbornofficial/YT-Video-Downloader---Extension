let appSettings = {
    showInVideoButton: false
};

const updateState = () => {
    chrome.storage.local.get(['showInVideoButton'], (result) => {
        appSettings.showInVideoButton = result.showInVideoButton || false;
        runDomInjection();
    });
};

chrome.storage.onChanged.addListener((changes) => {
    if (changes.showInVideoButton) {
        updateState();
    }
});

const createButton = (isShorts) => {
    const btn = document.createElement('a');
    btn.id = 'ytvd-download-btn';
    if (isShorts) btn.classList.add('shorts-mode');

    btn.innerHTML = `
        <svg height="24" viewBox="0 0 24 24" width="24" style="fill: currentColor;">
            <path d="M17 18v1H6v-1h11zm-.5-6.6-.7-.7-3.8 3.7V4h-1v10.4l-3.8-3.8-.7.7 5 5 5-4.9z"></path>
        </svg>
        <span>Download</span>
    `;

    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const newUrl = window.location.href
            .replace('youtube.com', 'yout.com')
            .replace('youtu.be', 'yout.com');
        window.open(newUrl, '_blank');
    });

    return btn;
};

const showTooltip = (btn) => {
    const rect = btn.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return;

    const img = document.createElement('img');
    img.src = chrome.runtime.getURL('banner-tooltip.gif');
    img.className = 'ytvd-floating-gif';
    
    const top = rect.top + window.scrollY - 25;
    const left = rect.left + window.scrollX + (rect.width / 2) + 5;

    img.style.top = `${top}px`;
    img.style.left = `${left}px`;

    document.body.appendChild(img);
    setTimeout(() => {
        if (img.parentNode) img.remove();
    }, 2500);
};

const runDomInjection = () => {
    if (!appSettings.showInVideoButton) return;

    const normalContainer = document.querySelector('#top-level-buttons-computed');
    if (normalContainer && !normalContainer.querySelector('#ytvd-download-btn')) {
        const btn = createButton(false);
        normalContainer.appendChild(btn);
        setTimeout(() => showTooltip(btn), 100);
    }

    const shortsContainers = document.querySelectorAll('ytd-reel-player-overlay-renderer #actions');
    shortsContainers.forEach(container => {
        if (!container.querySelector('#ytvd-download-btn')) {
            const btn = createButton(true);
            container.appendChild(btn);
        }
    });
};

let observerTimeout;
const observer = new MutationObserver(() => {
    if (observerTimeout) return;
    observerTimeout = requestAnimationFrame(() => {
        runDomInjection();
        observerTimeout = null;
    });
});

updateState();
observer.observe(document.body, { childList: true, subtree: true });