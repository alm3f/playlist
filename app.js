const songs = [
  {
    title:  "WDYS",
    artist: "yedira ft. asheu",
    url:    "https://youtu.be/c3XBLOouM-w?si=Envzajz5VNN8O6IF",
    cover:  "yedira ft. asheu - WDYS (Official Lyric Video).jpg"
  },
  {
    title:  "Obvious",
    artist: "Jesse Barrera, Jeremy Passion, Gabe Bondoc",
    url:    "https://youtu.be/Jpe7oTMEy_Y?si=WzcXtbiYpJNz5Jag",
    cover:  "Jesse Barrera, Jeremy Passion, Gabe Bondoc - ＂Obvious＂ [Official Music Video].jpg"
  },
  {
    title:  "U(You)",
    artist: "KIDO3008",
    url:    "https://youtu.be/w68Tbwr_0ac?si=mkYbMregpGw0F-ja",
    cover:  "KIDO3008 - U(You) (Lyric Video).jpg"
  },
  {
    title:  "Love on Top",
    artist: "John Canada",
    url:    "Love on Top.mp3",
    cover:  "Love on Top.jpg"
  },
  {
    title:  "do me right",
    artist: "brb.",
    url:    "brb. - do me right (lyric video).mp3",
    cover:  "brb. - do me right (lyric video).jpg"
  },
  {
    title:  "your love",
    artist: "brb.",
    url:    "https://youtu.be/sI3YvD9pOgk?si=VT1zejudgVsTyraB",
    cover:  "your love - brb. and Jimmy Brown (Lyric Video).jpg"
  },
  {
    title:  "Once Upon a Time",
    artist: "Jeff Bernat",
    url:    "https://youtu.be/UuaIGT-ZlWA?si=7LcAYA1rixptEaQj",
    cover:  "Once Upon a Time.jpg"
  },
  {
    title:  "universe",
    artist: "thuy",
    url:    "https://youtu.be/CFtWAWnlUv4?si=kFI76QrnK0DHf5nG",
    cover:  "thuy - universe (official visualizer⧸lyric video).jpg"
  },
  {
    title:  "Better With You",
    artist: "Austin Mahone",
    url:    "https://youtu.be/oia_Ng0uHUs?si=-g4MypDBRyogV6Fv",
    cover:  "Austin Mahone - Better With You.jpg"
  },
  {
    title:  "Everlasting",
    artist: "Albert Posis",
    url:    "https://youtu.be/uiKEh5q3Pn4?si=5KC6DFW6RhZitZ1e",
    cover:  "Albert Posis - Everlasting (Official Music Video).jpg"
  },
  {
    title:  "More & More",
    artist: "Finding Hope",
    url:    "https://youtu.be/aiZTtkaUBFM?si=jEWD4asWs7wwco97",
    cover:  "More & More.jpg"
  },
  {
    title:  "your text",
    artist: "sundial",
    url:    "https://youtu.be/zUZ1mR77GCo?si=99VGv4Svaxrbg3lu",
    cover:  "[LYRICS] sundial - your text.jpg"
  },
  {
    title:  "Green Tea & Honey",
    artist: "DaneAmar",
    url:    "Green Tea & Honey.mp3",
    cover:  "Green Tea & Honey.jpg"
  },
  {
    title:  "Infatuated",
    artist: "Rangga Jones",
    url:    "Infatuated - Rangga Jones (Official Music Video).mp3",
    cover:  "Infatuated - Rangga Jones (Official Music Video).jpg"
  },
  {
    title:  "Ride",
    artist: "HYBS",
    url:    "https://youtu.be/qbEVGyRfS0I?si=cQawj_aDW9tFESH_",
    cover:  "HYBS - Ride (Official Video).jpg"
  },

  {
    title:  "Ladybug",
    artist: "Numcha",
    url:    "Numcha - Ladybug (Official Lyric Video).mp3",
    cover:  "Numcha - Ladybug (Official Lyric Video).jpg"
  },

  {
    title:  "Found You",
    artist: "Austin Mahone",
    url:    "Austin Mahone - Found You (Official Audio).mp3",
    cover:  "Austin Mahone - Found You (Official Audio).jpg"
  },
  {
    title:  "Rest Assured",
    artist: "Jeff Bernat, Albert Posis, Jesse Barrera, PRVDNT",
    url:    "https://youtu.be/p8z2Umtrjrw?si=4NMJ-TBwVqnECcNx",
    cover:  "Jeff Bernat, Albert Posis, Jesse Barrera, PRVDNT ＂Rest Assured＂ (Lyric Video).jpg"
  },
  {
    title:  "I Like You (A Happier Song)",
    artist: "Post Malone ft. Doja Cat",
    url:    "Post Malone - I Like You (A Happier Song) (Audio) ft. Doja Cat.mp3",
    cover:  "Post Malone - I Like You (A Happier Song) (Audio) ft. Doja Cat.jpg"
  },
  {
    title:  "Enchanted",
    artist: "Taylor Swift",
    url:    "Taylor Swift - Enchanted (Taylor's Version) (Lyric Video).mp3",
    cover:  "Taylor Swift - Enchanted (Taylor's Version) (Lyric Video).jpg"
  },
  {
    title:  "Nothing",
    artist: "Jeremy Passion",
    url:    "https://youtu.be/wQeNczbT6nw?si=r1njcGQ01zbDfhRV",
    cover:  "Nothing.jpg"
  },
  {
    title:  "Day 1",
    artist: "HONNE",
    url:    "HONNE - Day 1 ◑.mp3",
    cover:  "HONNE - Day 1 ◑.jpg"
  },
];

let cur           = -1;
let isPlaying     = false;
let shuffleOn     = false;
let autoNext      = true;
let shuffleOrder  = [];
let ytPlayer      = null;
let ytReady       = false;
let progressTimer = null;

const audioEl   = document.getElementById('audio-el');
const volSlider = document.getElementById('vol-slider');
const progBg    = document.getElementById('prog-bg');
const progFill  = document.getElementById('prog-fill');

(function () {
  const c = document.getElementById('hearts-bg');
  ['🌸','💕','🌷','💗','🩷','✿','💖'].forEach(e => {
    for (let i = 0; i < 3; i++) {
      const el = document.createElement('div');
      el.className   = 'hrt';
      el.textContent = e;
      el.style.cssText = `left:${Math.random()*100}%;animation-duration:${12+Math.random()*14}s;animation-delay:${Math.random()*14}s;font-size:${10+Math.random()*12}px;`;
      c.appendChild(el);
    }
  });
})();

function esc(s) {
  return (s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}
function getYtId(url) {
  if (!url) return null;
  url = url.trim();
  let m;
  m = url.match(/youtu\.be\/([a-zA-Z0-9_-]{11})/);  if (m) return m[1];
  m = url.match(/[?&]v=([a-zA-Z0-9_-]{11})/);        if (m) return m[1];
  m = url.match(/\/embed\/([a-zA-Z0-9_-]{11})/);     if (m) return m[1];
  m = url.match(/\/shorts\/([a-zA-Z0-9_-]{11})/);    if (m) return m[1];
  return null;
}
function resolveUrl(url) {
  if (!url) return url;
  url = url.trim();
  let m = url.match(/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/);
  if (m) return `https://drive.google.com/uc?export=download&id=${m[1]}`;
  m = url.match(/drive\.google\.com\/open\?id=([a-zA-Z0-9_-]+)/);
  if (m) return `https://drive.google.com/uc?export=download&id=${m[1]}`;
  if (/dropbox\.com\/s\//i.test(url))
    return url.replace(/[?&]dl=0/, '').replace('dropbox.com', 'dl.dropboxusercontent.com');
  return url;
}
function isAudioUrl(url) {
  if (!url) return false;
  const r = resolveUrl(url);
  return /\.(mp3|wav|ogg|aac|flac|m4a)(\?|$)/i.test(r)
    || /drive\.google\.com\/(uc|file\/d\/)/i.test(url)
    || /dl\.dropboxusercontent\.com/i.test(r)
    || /dropbox\.com\/s\//i.test(url);
}
function getMode(url) {
  if (getYtId(url))    return 'yt';
  if (isAudioUrl(url)) return 'mp3';
  return 'unknown';
}
function fmt(s) {
  if (!s || isNaN(s) || s === Infinity) return '0:00';
  return Math.floor(s/60) + ':' + String(Math.floor(s%60)).padStart(2,'0');
}
let toastTimer;
function showToast(msg) {
  const t = document.getElementById('toast-el');
  t.textContent = msg; t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2500);
}

const ytHidden = document.createElement('div');
ytHidden.id = 'yt-hidden-player';
ytHidden.style.cssText = 'position:fixed;bottom:-9999px;left:-9999px;width:1px;height:1px;pointer-events:none;';
document.body.appendChild(ytHidden);

const ytScript = document.createElement('script');
ytScript.src   = 'https://www.youtube.com/iframe_api';
document.head.appendChild(ytScript);

window.onYouTubeIframeAPIReady = function () {
  ytPlayer = new YT.Player('yt-hidden-player', {
    width: '1', height: '1',
    playerVars: { autoplay: 0, controls: 0, rel: 0, playsinline: 1 },
    events: {
      onReady: (e) => {
        ytReady = true;
        e.target.setVolume(parseFloat(volSlider.value));
      },
      onStateChange: (e) => {
        if (e.data === YT.PlayerState.PLAYING) {
          setPlayingUI(true);
          startYtProgress();
        } else if (e.data === YT.PlayerState.PAUSED) {
          setPlayingUI(false);
          stopProgress();
        } else if (e.data === YT.PlayerState.ENDED) {
          stopProgress();
          setProgress(0, 0, 0);
          if (autoNext) playNext(); else setPlayingUI(false);
        }
      },
    }
  });
};

function buildShuffleOrder() {
  shuffleOrder = [...Array(songs.length).keys()];
  for (let i = shuffleOrder.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffleOrder[i], shuffleOrder[j]] = [shuffleOrder[j], shuffleOrder[i]];
  }
}
function nextIndex() {
  if (!songs.length) return -1;
  if (shuffleOn) { const p = shuffleOrder.indexOf(cur); return shuffleOrder[(p+1) % shuffleOrder.length]; }
  return (cur + 1) % songs.length;
}
function prevIndex() {
  if (!songs.length) return -1;
  if (shuffleOn) { const p = shuffleOrder.indexOf(cur); return shuffleOrder[(p-1+shuffleOrder.length) % shuffleOrder.length]; }
  return (cur - 1 + songs.length) % songs.length;
}

function stopAll() {
  audioEl.pause(); audioEl.src = '';
  if (ytReady && ytPlayer) { try { ytPlayer.stopVideo(); } catch(e) {} }
  stopProgress();
  setProgress(0, 0, 0);
}

function pick(i) {
  if (i < 0 || i >= songs.length) return;
  cur = i;
  const s    = songs[i];
  const mode = getMode(s.url);
  const ytId = getYtId(s.url);

  stopAll();

  document.getElementById('np-title').textContent  = s.title;
  document.getElementById('np-artist').textContent = s.artist;

  const art      = document.getElementById('album-art');
  const coverUrl = s.cover
    ? s.cover
    : (mode === 'yt' && ytId)
      ? `https://img.youtube.com/vi/${ytId}/mqdefault.jpg`
      : null;
  if (coverUrl) {
    art.style.backgroundImage = `url("${encodeURI(coverUrl)}")`;
    art.style.backgroundSize = "cover";
    art.style.backgroundPosition = "center";
    art.classList.add('has-thumb');
    art.querySelector('.art-emoji').style.display = 'none';
  } else {
    art.style.backgroundImage = '';
    art.classList.remove('has-thumb');
    art.querySelector('.art-emoji').style.display = '';
  }

  const ytShell  = document.getElementById('yt-shell');
  const mp3Badge = document.getElementById('mp3-badge');

  if (mode === 'yt' && ytId) {
    ytShell.style.display  = 'block';
    mp3Badge.style.display = 'none';
    if (ytReady && ytPlayer) {
      ytPlayer.loadVideoById(ytId);
      ytPlayer.setVolume(parseFloat(volSlider.value));
    } else {
      const container = document.getElementById('yt-container');
      container.innerHTML = '';
      const iframe = document.createElement('iframe');
      iframe.src   = `https://www.youtube.com/embed/${ytId}?autoplay=1&controls=0&rel=0&modestbranding=1&playsinline=1`;
      iframe.allow = 'autoplay; encrypted-media';
      container.appendChild(iframe);
      setPlayingUI(true);
    }
  } else if (mode === 'mp3') {
    ytShell.style.display  = 'none';
    mp3Badge.style.display = 'flex';
    audioEl.src    = resolveUrl(s.url);
    audioEl.volume = parseFloat(volSlider.value) / 100;
    audioEl.play().catch(() => showToast('⚠️ เล่นไฟล์นี้ไม่ได้'));
  } else {
    showToast('⚠️ ลิงก์ไม่รองรับ ใช้ YouTube หรือ MP3 นะ');
    return;
  }

  renderTracks();
}

function togglePlay() {
  if (cur < 0) { if (songs.length) pick(0); return; }
  const mode = getMode(songs[cur].url);
  if (mode === 'yt') {
    if (!ytReady || !ytPlayer) return;
    try { isPlaying ? ytPlayer.pauseVideo() : ytPlayer.playVideo(); } catch(e) {}
  } else if (mode === 'mp3') {
    isPlaying ? audioEl.pause() : audioEl.play().catch(() => {});
  }
}
function playPrev() { if (songs.length) pick(prevIndex()); }
function playNext() { if (songs.length) pick(nextIndex()); }

audioEl.addEventListener('play',  () => { setPlayingUI(true);  startMp3Progress(); });
audioEl.addEventListener('pause', () => { setPlayingUI(false); stopProgress(); });
audioEl.addEventListener('ended', () => {
  stopProgress(); setProgress(0,0,0);
  if (autoNext) playNext(); else setPlayingUI(false);
});

function startYtProgress() {
  stopProgress();
  progressTimer = setInterval(() => {
    if (!ytReady || !ytPlayer) return;
    try {
      const curr = ytPlayer.getCurrentTime() || 0;
      const dur  = ytPlayer.getDuration()    || 0;
      setProgress(curr, dur, dur > 0 ? (curr/dur)*100 : 0);
    } catch(e) {}
  }, 500);
}
function startMp3Progress() {
  stopProgress();
  progressTimer = setInterval(() => {
    if (!audioEl.duration || isNaN(audioEl.duration)) return;
    setProgress(audioEl.currentTime, audioEl.duration, (audioEl.currentTime/audioEl.duration)*100);
  }, 400);
}
function stopProgress()  { clearInterval(progressTimer); progressTimer = null; }
function setProgress(curr, dur, pct) {
  progFill.style.width = Math.min(pct, 100) + '%';
  document.getElementById('t-curr').textContent  = fmt(curr);
  document.getElementById('t-total').textContent = fmt(dur || 0);
}

progBg.addEventListener('click', e => {
  if (cur < 0) return;
  const pct  = Math.max(0, Math.min(1, (e.clientX - progBg.getBoundingClientRect().left) / progBg.offsetWidth));
  const mode = getMode(songs[cur].url);
  if (mode === 'yt' && ytReady && ytPlayer) {
    try { const d = ytPlayer.getDuration()||0; if(d) ytPlayer.seekTo(pct*d, true); } catch(e) {}
  } else if (mode === 'mp3' && audioEl.duration && !isNaN(audioEl.duration)) {
    audioEl.currentTime = pct * audioEl.duration;
  }
});

function updateVolume() {
  const v = parseFloat(volSlider.value); // 0–100
  audioEl.volume = v / 100;
  if (ytReady && ytPlayer) { try { ytPlayer.setVolume(v); } catch(e) {} }
  volSlider.style.setProperty('--vol-pct', v + '%');
}
volSlider.addEventListener('input', updateVolume);
volSlider.style.setProperty('--vol-pct', volSlider.value + '%');
audioEl.volume = parseFloat(volSlider.value) / 100;

document.getElementById('btn-shuffle').addEventListener('click', () => {
  shuffleOn = !shuffleOn;
  document.getElementById('btn-shuffle').classList.toggle('active', shuffleOn);
  if (shuffleOn) buildShuffleOrder();
  showToast(shuffleOn ? '🔀 เปิด Shuffle' : '🔀 ปิด Shuffle');
});

const btnAutoNext = document.getElementById('btn-autonext');
btnAutoNext.classList.add('active');
btnAutoNext.addEventListener('click', () => {
  autoNext = !autoNext;
  btnAutoNext.classList.toggle('active', autoNext);
  showToast(autoNext ? '▶ เล่นต่ออัตโนมัติ' : '⏹ หยุดหลังเพลงจบ');
});

function setPlayingUI(v) {
  isPlaying = v;
  document.getElementById('player-card').classList.toggle('is-playing', v);
  const btn = document.getElementById('btn-play');
  btn.innerHTML = v ? pauseIcon() : playIcon();
  btn.classList.toggle('playing', v);
  renderTracks();
}
function playIcon()  { return `<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>`; }
function pauseIcon() { return `<svg viewBox="0 0 24 24"><path d="M6 19h4V5H6zm8-14v14h4V5z"/></svg>`; }

function renderTracks() {
  const c = document.getElementById('track-list');
  document.getElementById('track-count').textContent = songs.length ? `${songs.length} เพลง` : '';
  if (!songs.length) { c.innerHTML = '<div class="empty-track">ยังไม่มีเพลง 🌸</div>'; return; }
  c.innerHTML = songs.map((s, i) => {
    const mode  = getMode(s.url);
    return `
      <div class="track-item ${i===cur?'active':''} ${i===cur&&isPlaying?'playing':''}" onclick="pick(${i})">
        <div class="tnum">${i+1}</div>
        <div class="eq"><span></span><span></span><span></span></div>
        <div class="tinfo">
          <div class="ttitle">${esc(s.title)}</div>
          <div class="tartist">${esc(s.artist)}</div>
        </div>

      </div>`;
  }).join('');
}

document.getElementById('btn-prev').addEventListener('click', playPrev);
document.getElementById('btn-play').addEventListener('click', togglePlay);
document.getElementById('btn-next').addEventListener('click', playNext);

document.getElementById('btn-play').innerHTML = playIcon();
buildShuffleOrder();
renderTracks();