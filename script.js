$(document).ready(function() {
    const audio = document.getElementById('audio');
    const trackTitle = document.querySelector('.track-title');
    const musicBox = document.getElementById('musicBox'); // Thêm biến để tham chiếu đến hộp nhạc
    const musicIcon = document.getElementById('musicIcon'); // Thêm biến để tham chiếu đến biểu tượng nhạc
    const unmuteIcon = document.getElementById('unmuteIcon');
    const muteIcon = document.getElementById('muteIcon');

    let songs = Array.from(audio.querySelectorAll('source')).map(source => source.src);
    let currentSongIndex = -1;
    let shuffleMode = true;

    // Chạy bài hát theo chỉ số
    function playSong(index) {
        const song = songs[index];
        audio.src = song;
        const title = song.split('/').pop().replace('.mp3', '');
        trackTitle.textContent = title;
        audio.play();
        currentSongIndex = index;
        musicBox.classList.add('playing'); // Thêm lớp 'playing' khi bắt đầu phát nhạc
    }

    // Chạy bài hát ngẫu nhiên
    function playRandomSong() {
        if (songs.length === 0) return;
        const randomIndex = Math.floor(Math.random() * songs.length);
        playSong(randomIndex);
    }

    // Bắt sự kiện click trên toàn trang để chuyển đến trang chính
    $(document).on('click', function(event) {
        // Nếu click vào hộp nhạc, không chuyển trang
        if (!$(event.target).closest('#musicBox').length) {
            $('#enterText').fadeOut('slow', function() {
                $('#mainContent').fadeIn('slow');
            });
        }
    });

    // Bắt sự kiện kết thúc bài hát
    audio.addEventListener('ended', () => {
        if (shuffleMode) {
            playRandomSong();
        } else {
            playNextSong();
        }
        musicBox.classList.remove('playing'); // Xóa lớp 'playing' khi nhạc kết thúc
    });

    // Xáo trộn danh sách bài hát
    function shuffleSongs() {
        for (let i = songs.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [songs[i], songs[j]] = [songs[j], songs[i]];
        }
    }

    shuffleSongs();

    // Bắt sự kiện click vào tiêu đề bài hát để phát bài hát ngẫu nhiên
    $(musicBox).on('click', function() {
        playRandomSong();
    });

});

// animation mouse
const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
    "#000000",
    "#000000",
    "#000000",
    "#000000",
    "#000000",
    "#000000",
    "#000000",
    "#000000"
];

circles.forEach(function(circle, index) {
    circle.x = 0;
    circle.y = 0;
    circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function(e) {
    coords.x = e.clientX;
    coords.y = e.clientY;

});

function animateCircles() {

    let x = coords.x;
    let y = coords.y;

    circles.forEach(function(circle, index) {
        circle.style.left = x - 12 + "px";
        circle.style.top = y - 12 + "px";

        circle.style.scale = (circles.length - index) / circles.length;

        circle.x = x;
        circle.y = y;

        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;
    });

    requestAnimationFrame(animateCircles);
}

animateCircles();

// Hàm để chuyển đổi giữa âm thanh bật và tắt
function toggleMute() {
    if (audio.muted) {
        audio.muted = false;
        unmuteIcon.style.display = 'block';
        muteIcon.style.display = 'none';
    } else {
        audio.muted = true;
        unmuteIcon.style.display = 'none';
        muteIcon.style.display = 'block';
    }
}

// Thêm sự kiện click cho biểu tượng âm thanh
$('#soundControl').on('click', function() {
    toggleMute();
});


// script.js

document.addEventListener('DOMContentLoaded', (event) => {
    const notification = document.getElementById('notification');
    const closeBtn = document.getElementById('close-btn');
    const flagEn = document.getElementById('flag-en');
    const flagVn = document.getElementById('flag-vn');
    const displayFlag = document.getElementById('display-flag');

    // Hiển thị thông báo sau khi trang được tải
    setTimeout(() => {
        notification.style.display = 'flex';
    }, 500); // Thay đổi thời gian delay nếu cần

    // Xử lý sự kiện đóng thông báo
    closeBtn.addEventListener('click', () => {
        notification.style.display = 'none';
    });

    // Xử lý sự kiện chọn ngôn ngữ
    flagEn.addEventListener('click', () => {
        document.querySelector('.notification-text').textContent = 'Please use headphones for a better experience.';
        displayFlag.src = 'flag-en.png'; // Hiển thị cờ Mỹ
    });

    flagVn.addEventListener('click', () => {
        document.querySelector('.notification-text').textContent = 'Vui lòng sử dụng tai nghe để có một trải nghiệm tốt hơn.';
        displayFlag.src = 'flag-vn.png'; // Hiển thị cờ Việt Nam
    });
});

document.querySelector('.dropbtn').addEventListener('click', function() {
    var dropdownContent = document.querySelector('.dropdown-content');
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
});

// Get the modals
var loginModal = document.getElementById("login-modal");
var cartModal = document.getElementById("cart-modal");

// Get the buttons that open the modals
var userIcon = document.getElementById("userIcon");
var cartIcon = document.getElementById("cartIcon");

// Get the <span> elements that close the modals
var closeLogin = document.getElementsByClassName("close")[0];
var closeCart = document.getElementsByClassName("close-cart")[0];

// When the user clicks the user icon, open the login modal
userIcon.onclick = function() {
    loginModal.style.display = "block";
}

// When the user clicks the cart icon, open the cart modal
cartIcon.onclick = function() {
    cartModal.style.display = "block";
}

// When the user clicks on <span> (x), close the login modal
closeLogin.onclick = function() {
    loginModal.style.display = "none";
}

// When the user clicks on <span> (x), close the cart modal
closeCart.onclick = function() {
    cartModal.style.display = "none";
}

// When the user clicks anywhere outside of the modals, close them
window.onclick = function(event) {
    if (event.target == loginModal) {
        loginModal.style.display = "none";
    }
    if (event.target == cartModal) {
        cartModal.style.display = "none";
    }
}