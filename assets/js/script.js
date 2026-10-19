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
        {
          src: "assets/images/flower.svg",
          alt: "Minh họa bó hoa pastel",
          title: "Xinh như hoa 🌷",
          caption: "Mong ngày nào của cậu cũng nở rộ những điều vui vẻ."
        },
        {
          src: "assets/images/rose.svg",
          alt: "Minh họa những bông hoa hồng",
          title: "Ngọt ngào một chút 🍓",
          caption: "Thêm chút đường vào những ngày bình thường nhất."
        },
        {
          src: "assets/images/cat.svg",
          alt: "Minh họa một bé mèo đáng yêu",
          title: "Nạp năng lượng cute 🐱",
          caption: "Một chiếc ảnh dễ thương để cậu mỉm cười nè."
        }
      ]
    };

    document.title = CONFIG.pageTitle;
    document.getElementById('heroName').textContent = 'dành riêng cho ' + CONFIG.herName + ' ♡';
    document.getElementById('letterTitle').textContent = 'Gửi ' + CONFIG.herName + ' thương mến';
    document.getElementById('signature').textContent = 'Từ ' + CONFIG.yourName + ' ♡';
    document.getElementById('giftTitle').textContent = 'Chúc mừng ngày của ' + CONFIG.herName + '!';

    // Tạo album từ CONFIG.photos. Ảnh được phục vụ trực tiếp từ thư mục của website.
    const memoryGrid = document.getElementById('memoryGrid');
    CONFIG.photos.forEach((photo, index) => {
      const card = document.createElement('article');
      card.className = 'memory';
      const tilts = [-2, 2, -1, 1, -1.5, 1.5];
      card.style.setProperty('--tilt', (tilts[index % tilts.length]) + 'deg');

      const image = document.createElement('img');
      image.loading = 'lazy';
      image.src = photo.src;
      image.alt = photo.alt || 'Ảnh kỷ niệm dễ thương';
      image.addEventListener('error', () => {
        image.alt = 'Không tìm thấy ảnh: ' + photo.src;
        image.style.display = 'none';
        card.classList.add('image-missing');
        const notice = document.createElement('div');
        notice.className = 'image-missing-note';
        notice.textContent = 'Chưa tìm thấy ảnh — kiểm tra đường dẫn trong CONFIG.photos nhé 💗';
        card.insertBefore(notice, card.firstChild);
      }, { once: true });

      const title = document.createElement('div');
      title.className = 'memory-title';
      title.textContent = photo.title || 'Một điều dễ thương ♡';
      const caption = document.createElement('p');
      caption.className = 'memory-caption';
      caption.textContent = photo.caption || '';
      card.append(image, title, caption);
      memoryGrid.appendChild(card);
    });

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
      }, 650);
    }
    envelopeButton.addEventListener('click', openLetter);
    document.getElementById('openLetterButton').addEventListener('click', openLetter);

    document.getElementById('backButton').addEventListener('click', () => {
      letterScreen.classList.remove('active');
      welcomeScreen.classList.add('active');
      envelopeButton.classList.remove('open');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    function openGift() {
      giftModal.classList.add('show');
      giftModal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      burstHearts(34);
      document.getElementById('closeGiftButton').focus();
    }
    function closeGift() {
      giftModal.classList.remove('show');
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
