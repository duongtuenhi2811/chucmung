/* =========================================================
   CÁ NHÂN HÓA WEBSITE
   Sửa tên trong CONFIG bên dưới; ảnh đặt tại assets/images/.
   Đổi đường dẫn src trong CONFIG.photos để dùng ảnh của bạn.
   ========================================================= */
    const CONFIG = {
      herName: "cô gái nhỏ", // Đổi thành tên hoặc biệt danh của cô ấy
      yourName: "một người luôn muốn cậu vui", // Đổi thành tên/biệt danh của bạn
      pageTitle: "Một món quà nhỏ dành cho cậu ♡",
      // Thêm ảnh vào assets/images rồi sửa src ở từng mục bên dưới.
      // Hỗ trợ .jpg, .jpeg, .png, .webp và .svg.
      photos: [
        { src: "assets/images/anh1.jpg", alt: "Ảnh kỷ niệm 1", title: "Kỷ niệm 1 🌷", caption: "Một khoảnh khắc dễ thương ♡" },
        { src: "assets/images/anh2.jpg", alt: "Ảnh kỷ niệm 2", title: "Kỷ niệm 2 💗", caption: "Một khoảnh khắc dễ thương ♡" },
        { src: "assets/images/anh3.jpg", alt: "Ảnh kỷ niệm 3", title: "Kỷ niệm 3 ✨", caption: "Một khoảnh khắc dễ thương ♡" },
        { src: "assets/images/anh5.jpg", alt: "Ảnh kỷ niệm 4", title: "Kỷ niệm 4 🌸", caption: "Một khoảnh khắc dễ thương ♡" },
        { src: "assets/images/anh7.jpg", alt: "Ảnh kỷ niệm 5", title: "Kỷ niệm 5 🎀", caption: "Một khoảnh khắc dễ thương ♡" },
        { src: "assets/images/anh8.jpg", alt: "Ảnh kỷ niệm 6", title: "Kỷ niệm 6 💕", caption: "Một khoảnh khắc dễ thương ♡" }
      ]
    };

    document.title = CONFIG.pageTitle;
    document.getElementById('heroName').textContent = 'dành riêng cho ' + CONFIG.herName + ' ♡';
    document.getElementById('letterTitle').textContent = 'Gửi ' + CONFIG.herName + ' thương mến';
    document.getElementById('signature').textContent = 'Từ ' + CONFIG.yourName + ' ♡';
    document.getElementById('giftTitle').textContent = 'Chúc mừng ngày của ' + CONFIG.herName + '!';

    // Ảnh hoạt động: cho phép thay ảnh ngay trên trang và đồng bộ cả album/bó hoa.
    const PHOTO_STORAGE_KEY = 'cute20Photos-v2';
    const isPhoto = photo => photo && typeof photo === 'object' && typeof photo.src === 'string' && photo.src.length > 0;
    let activePhotos = (() => {
      try {
        const saved = JSON.parse(localStorage.getItem(PHOTO_STORAGE_KEY) || 'null');
        if (Array.isArray(saved) && saved.length && saved.every(isPhoto)) return saved;
        return CONFIG.photos.map(photo => ({ ...photo }));
      }
      catch { return CONFIG.photos.map(photo => ({ ...photo })); }
    })();
    const fallbackPhotos = [{ src: 'assets/images/flower.svg', alt: 'Minh họa hoa pastel', title: 'Một chút dịu dàng ♡', caption: '' }];

    function renderPhotoViews() {
      memoryGrid.innerHTML = '';
      activePhotos.forEach((photo, index) => {
        const card = document.createElement('article');
        card.className = 'memory';
        const tilts = [-2, 2, -1, 1, -1.5, 1.5];
        card.style.setProperty('--tilt', tilts[index % tilts.length] + 'deg');
        const image = document.createElement('img');
        image.loading = 'lazy'; image.src = photo.src; image.alt = photo.alt || photo.title || 'Ảnh kỷ niệm dễ thương';
        image.addEventListener('error', () => { image.alt = 'Không tải được ảnh'; image.classList.add('image-load-failed'); }, { once: true });
        const title = document.createElement('div'); title.className = 'memory-title'; title.textContent = photo.title || 'Một điều dễ thương ♡';
        const caption = document.createElement('p'); caption.className = 'memory-caption'; caption.textContent = photo.caption || '';
        card.append(image, title, caption); memoryGrid.appendChild(card);
      });

      bouquetPhotoFan.innerHTML = '';
      const sourcePhotos = activePhotos.length ? activePhotos : fallbackPhotos;
      Array.from({ length: 6 }, (_, index) => sourcePhotos[index % sourcePhotos.length]).forEach((photo, index) => {
        const frame = document.createElement('figure'); frame.className = 'bouquet-photo';
        frame.style.setProperty('--delay', (index * 100) + 'ms');
        frame.setAttribute('aria-label', photo.alt || photo.title || 'Ảnh dễ thương');
        const image = document.createElement('img'); image.src = photo.src; image.alt = photo.alt || 'Ảnh trong bó hoa'; image.loading = 'eager'; image.decoding = 'async';
        image.addEventListener('error', () => { image.src = 'assets/images/flower.svg'; image.alt = 'Minh họa hoa pastel'; }, { once: true });
        frame.appendChild(image); bouquetPhotoFan.appendChild(frame);
      });
    }

    const memoryGrid = document.getElementById('memoryGrid');
    const bouquetPhotoFan = document.getElementById('bouquetPhotoFan');
    renderPhotoViews();

    const welcomeScreen = document.getElementById('welcomeScreen');
    const letterScreen = document.getElementById('letterScreen');
    const envelopeButton = document.getElementById('envelopeButton');
    const giftModal = document.getElementById('giftModal');

    function openLetter() {
      if (welcomeScreen.classList.contains('leaving')) return;
      envelopeButton.classList.add('open');
      welcomeScreen.classList.add('leaving');
      window.setTimeout(() => {
        welcomeScreen.classList.remove('active', 'leaving');
        letterScreen.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        burstHearts(16);
      }, 820);
    }
    envelopeButton.addEventListener('click', openLetter);
    document.getElementById('openLetterButton').addEventListener('click', openLetter);

    document.getElementById('backButton').addEventListener('click', () => {
      letterScreen.classList.remove('active');
      welcomeScreen.classList.add('active');
      envelopeButton.classList.remove('open');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    let giftAnimationTimers = [];
    function clearGiftAnimationTimers() {
      giftAnimationTimers.forEach((timer) => window.clearTimeout(timer));
      giftAnimationTimers = [];
    }
    function openGift() {
      clearGiftAnimationTimers();
      giftModal.classList.remove('photos-ready', 'message-ready', 'show');
      giftModal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      // Bước 1: bó hoa trồi lên. Bước 2: sáu tấm ảnh lần lượt bung ra. Bước 3: lời chúc xuất hiện.
      void giftModal.offsetWidth;
      giftModal.classList.add('show');
      giftAnimationTimers.push(window.setTimeout(() => {
        giftModal.classList.add('photos-ready');
        burstHearts(18);
      }, 1150));
      giftAnimationTimers.push(window.setTimeout(() => {
        giftModal.classList.add('message-ready');
      }, 2450));
      giftAnimationTimers.push(window.setTimeout(() => {
        document.getElementById('closeGiftButton').focus({ preventScroll: true });
      }, 50));
      burstHearts(12);
    }
    function closeGift() {
      clearGiftAnimationTimers();
      giftModal.classList.remove('show', 'photos-ready', 'message-ready');
      giftModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
    document.getElementById('openGiftButton').addEventListener('click', openGift);
    document.getElementById('closeGiftButton').addEventListener('click', closeGift);
    document.getElementById('finalButton').addEventListener('click', () => {
      closeGift();
      burstHearts(22);
    });
    giftModal.addEventListener('click', (event) => {
      if (event.target === giftModal) closeGift();
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && giftModal.classList.contains('show')) closeGift();
    });

    function burstHearts(count = 16) {
      const symbols = ['💗', '💕', '♡', '🌸', '✨', '💖', '🎀'];
      for (let i = 0; i < count; i++) {
        const item = document.createElement('span');
        item.className = 'confetti';
        item.textContent = symbols[Math.floor(Math.random() * symbols.length)];
        item.style.left = (Math.random() * 100) + 'vw';
        item.style.setProperty('--duration', (2.1 + Math.random() * 2.3) + 's');
        item.style.setProperty('--drift', ((Math.random() * 220) - 110) + 'px');
        item.style.fontSize = (14 + Math.random() * 18) + 'px';
        document.body.appendChild(item);
        window.setTimeout(() => item.remove(), 4700);
      }
    }

    // Các hình trang trí bay nhẹ — ít phần tử để trang vẫn mượt trên điện thoại.
    const decorLayer = document.getElementById('decorLayer');
    const floatSymbols = ['♡', '✿', '♥', '✧', '🌸'];
    for (let i = 0; i < 18; i++) {
      const item = document.createElement('span');
      item.className = 'floaty';
      item.textContent = floatSymbols[i % floatSymbols.length];
      item.style.left = (Math.random() * 100) + '%';
      item.style.fontSize = (12 + Math.random() * 17) + 'px';
      item.style.animationDuration = (13 + Math.random() * 16) + 's';
      item.style.animationDelay = (-Math.random() * 24) + 's';
      decorLayer.appendChild(item);
    }
    for (let i = 0; i < 12; i++) {
      const star = document.createElement('span');
      star.className = 'sparkle';
      star.textContent = '✧';
      star.style.left = (4 + Math.random() * 92) + '%';
      star.style.top = (5 + Math.random() * 88) + '%';
      star.style.fontSize = (12 + Math.random() * 16) + 'px';
      star.style.animationDelay = (Math.random() * 3) + 's';
      decorLayer.appendChild(star);
    }
