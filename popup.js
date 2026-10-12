const CONTACT_URL = 'https://github.com/ashbornofficial';

const translations = {
  en: {
    desc: "Select your preferred downloader:",
    btn: "DOWNLOAD VIDEO",
    btnNoVideo: "No YT video on current tab",
    err: "Please open a YouTube video first!",
    footer: "Powered by Ashborn",
    contact: "Contact Developer",
    settings: "Settings",
    language: "Language",
    enableDownload: "Enable Popup Button",
    enableInVideo: "Show Button under Video",
    downloadsDisabled: "Downloads are disabled in settings",
  },
  hi: {
    desc: "अपना पसंदीदा डाउनलोडर चुनें:",
    btn: "वीडियो डाउनलोड करें",
    btnNoVideo: "इस टैब में कोई YouTube वीडियो नहीं है",
    err: "कृपया पहले कोई YouTube वीडियो खोलें!",
    footer: "Powered by Ashborn",
    contact: "डेवलपर से संपर्क करें",
    settings: "सेटिंग्स",
    language: "भाषा",
    enableDownload: "पॉपअप बटन चालू करें",
    enableInVideo: "वीडियो के नीचे बटन दिखाएं",
    downloadsDisabled: "सेटिंग्स में डाउनलोड बंद हैं",
  },
  si: {
    desc: "ඔබේ ඩවුන්ලෝඩරය තෝරන්න:",
    btn: "වීඩියෝව බාගත කරන්න",
    btnNoVideo: "මෙම ටැබයේ YouTube වීඩියෝවක් නොමැත",
    err: "කරුණාකර පළමුව YouTube වීඩියෝවක් විවෘත කරන්න!",
    footer: "Powered by Ashborn",
    contact: "සංවර්ධකයා අමතන්න",
    settings: "සැකසීම්",
    language: "භාෂාව",
    enableDownload: "Popup බටනය සක්‍රිය කරන්න",
    enableInVideo: "වීඩියෝව යට බටනය පෙන්වන්න",
    downloadsDisabled: "සැකසීම් වලින් බාගත කිරීම් අක්‍රිය කර ඇත",
  },
  ta: {
    desc: "பதிவிறக்கியைத் தேர்ந்தெடுக்கவும்:",
    btn: "வீடியோவைப் பதிவிறக்கு",
    err: "முதலில் YouTube வீடியோவைத் திறக்கவும்!",
    footer: "Powered by Ashborn",
    contact: "டெவலப்பரை தொடர்பு கொள்ளவும்",
    btnNoVideo: "தற்போதைய டேபில் YouTube வீடியோ இல்லை",
    settings: "அமைப்புகள்",
    language: "மொழி",
    enableDownload: "பாப்அப் பொத்தானை இயக்கு",
    enableInVideo: "வீடியோவின் கீழ் பொத்தானைக் காட்டு",
    downloadsDisabled: "அமைப்புகளில் பதிவிறக்கங்கள் முடக்கப்பட்டுள்ளன",
  }
};

const descText = document.getElementById('descText');
const downloadBtn = document.getElementById('downloadBtn');
const footerText = document.getElementById('footerText');
const messageDiv = document.getElementById('message');
const contactLink = document.getElementById('contactLink');
const settingsBtn = document.getElementById('settingsBtn');
const backBtn = document.getElementById('backBtn');
const mainScreen = document.getElementById('mainScreen');
const settingsScreen = document.getElementById('settingsScreen');
const settingsLangSelect = document.getElementById('settingsLangSelect');
const settingsTitle = document.querySelector('.settings-header h2');
const languageLabel = document.querySelector('.setting-label');

const enableDownloadToggle = document.getElementById('enableDownloadToggle');
const enableDownloadLabel = document.querySelector('label[for="enableDownloadToggle"]');
const showInVideoToggle = document.getElementById('showInVideoToggle');
const showInVideoLabel = document.querySelector('label[for="showInVideoToggle"]');


let currentLang = 'en';
let downloadEnabled = true;
let showInVideo = false;

function loadSettings() {
  if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
    chrome.storage.local.get(['language', 'downloadEnabled', 'showInVideoButton'], (result) => {
      if (result.language) currentLang = result.language;
      if (typeof result.downloadEnabled !== 'undefined') downloadEnabled = result.downloadEnabled;
      if (typeof result.showInVideoButton !== 'undefined') showInVideo = result.showInVideoButton;

      settingsLangSelect.value = currentLang;
      enableDownloadToggle.checked = downloadEnabled;
      showInVideoToggle.checked = showInVideo;

      setLanguageStrings();
      updateDownloadButtonState();
    });
  } else {
    setLanguageStrings();
    updateDownloadButtonState();
  }
}

function saveSettings() {
  if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
    chrome.storage.local.set({
      language: currentLang,
      downloadEnabled: downloadEnabled,
      showInVideoButton: showInVideo
    });
  }
}

const setLanguageStrings = () => {
  const lang = currentLang;
  const t = translations[lang] || translations.en;

  descText.textContent = t.desc;
  downloadBtn.textContent = t.btn;
  footerText.textContent = t.footer;
  contactLink.textContent = t.contact || 'Contact Developer';
  contactLink.href = CONTACT_URL;

  if (settingsTitle) settingsTitle.textContent = t.settings;
  if (languageLabel) languageLabel.textContent = t.language;
  
  if (enableDownloadLabel) enableDownloadLabel.textContent = t.enableDownload;
  if (showInVideoLabel) showInVideoLabel.textContent = t.enableInVideo;

  if (!messageDiv.classList.contains('hidden') && Object.values(translations).some((tr) => tr.err === messageDiv.textContent)) {
    messageDiv.textContent = t.err;
  }
};

settingsBtn.addEventListener('click', () => {
  mainScreen.classList.add('hidden');
  settingsScreen.classList.remove('hidden');
  settingsLangSelect.value = currentLang;
});

backBtn.addEventListener('click', () => {
  settingsScreen.classList.add('hidden');
  mainScreen.classList.remove('hidden');
});

settingsLangSelect.addEventListener('change', () => {
  currentLang = settingsLangSelect.value;
  setLanguageStrings();
  updateDownloadButtonState();
  saveSettings();
});

enableDownloadToggle.addEventListener('change', () => {
  downloadEnabled = enableDownloadToggle.checked;
  updateDownloadButtonState();
  saveSettings();
});

showInVideoToggle.addEventListener('change', () => {
  showInVideo = showInVideoToggle.checked;
  saveSettings();
});

loadSettings();

let isYTVideoOnTab = false;

function isYouTubeVideo(url) {
  if (!url) return false;
  try {
    const u = new URL(url);
    const host = u.host.toLowerCase();
    const pathname = u.pathname.toLowerCase();
    if (host.includes('youtube.com')) {
      if (pathname.startsWith('/watch') || pathname.startsWith('/shorts') || pathname.startsWith('/embed')) return true;
      if (u.searchParams && u.searchParams.get('v')) return true;
    }
    if (host === 'youtu.be') {
      if (pathname.length > 1) return true;
    }
  } catch(e) {
    return false;
  }
  return false;
}

function updateDownloadButtonState() {
  const lang = currentLang;
  const t = translations[lang];
  isYTVideoOnTab = false;
  if (typeof chrome !== 'undefined' && chrome.tabs && chrome.tabs.query) {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (!tabs || tabs.length === 0 || !tabs[0]) {
        isYTVideoOnTab = false;
      } else {
        const url = tabs[0].url || '';
        isYTVideoOnTab = isYouTubeVideo(url);
      }
      
      const shouldDisable = !isYTVideoOnTab || !downloadEnabled;
      
      if (shouldDisable) {
        if (!downloadEnabled) {
          downloadBtn.textContent = translations[lang].downloadsDisabled;
        } else {
          downloadBtn.textContent = t.btnNoVideo || 'No YT video on current tab';
        }
        downloadBtn.classList.add('disabled');
        downloadBtn.setAttribute('disabled', 'disabled');
        messageDiv.classList.add('hidden');
      } else {
        downloadBtn.textContent = t.btn;
        downloadBtn.classList.remove('disabled');
        downloadBtn.removeAttribute('disabled');
      }
    });
  }
}

updateDownloadButtonState();

downloadBtn.addEventListener('click', () => {
  const currentLangValue = currentLang;
  if (!downloadEnabled) {
    messageDiv.textContent = translations[currentLangValue].downloadsDisabled;
    messageDiv.classList.remove('hidden');
    return;
  }
  if (!isYTVideoOnTab) {
    messageDiv.textContent = translations[currentLangValue].err;
    messageDiv.classList.remove('hidden');
    return;
  }

  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (!tabs || tabs.length === 0 || !tabs[0]) return;
    const currentUrl = tabs[0].url || '';
    const service = document.getElementById('serviceSelect').value;
    try {
      const u = new URL(currentUrl);
      if (service === 'yout') u.host = u.host.replace(/youtube\.com/ig, 'yout.com');
      else if (service === 'ss') u.host = u.host.replace(/youtube\.com/ig, 'ssyoutube.com');
      else if (service === 'vd') u.host = u.host.replace(/youtube\.com/ig, 'vdyoutube.com');
      else if (u.host === 'youtu.be') {
        if (service === 'yout') u.host = 'yout.com';
        else if (service === 'ss') u.host = 'ssyoutube.com';
        else if (service === 'vd') u.host = 'vdyoutube.com';
      }
      chrome.tabs.create({ url: u.toString() });
    } catch (err) {
      let newUrl = currentUrl;
      if (service === 'yout') newUrl = currentUrl.replace('youtube.com', 'yout.com').replace('youtu.be', 'yout.com');
      else if (service === 'ss') newUrl = currentUrl.replace('youtube.com', 'ssyoutube.com').replace('youtu.be', 'ssyoutube.com');
      else if (service === 'vd') newUrl = currentUrl.replace('youtube.com', 'vdyoutube.com').replace('youtu.be', 'vdyoutube.com');
      chrome.tabs.create({ url: newUrl });
    }
  });
});