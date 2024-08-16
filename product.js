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

document.querySelector('.dropbtn').addEventListener('click', function() {
    var dropdownContent = document.querySelector('.dropdown-content');
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
});

document.addEventListener('DOMContentLoaded', function() {
    function updateProductDetails(product) {
        const imageFolder = document.querySelector('.product-details').getAttribute('data-image-folder');

        // Cập nhật thông tin sản phẩm
        document.getElementById('product-title').textContent = product.title;
        document.getElementById('product-price').textContent = 'Price: ' + product.price;
        document.getElementById('myImage').src = imageFolder + product.mainImage;
        document.getElementById('product-description').innerHTML = product.description;

        // Cập nhật ảnh thu nhỏ
        const thumbnailsContainer = document.querySelector('.product-thumbnails');
        thumbnailsContainer.innerHTML = ''; // Xóa ảnh thu nhỏ cũ

        product.thumbnails.forEach((thumbSrc, index) => {
            const thumbnail = document.createElement('img');
            thumbnail.src = imageFolder + thumbSrc;
            thumbnail.alt = `Product Thumbnail ${index + 1}`;
            thumbnail.className = 'thumbnail';
            thumbnail.addEventListener('click', () => {
                // Thay đổi ảnh chính khi nhấp vào ảnh thu nhỏ
                document.getElementById('myImage').src = imageFolder + thumbSrc;

                // Cập nhật lớp active cho thumbnail
                document.querySelectorAll('.thumbnail').forEach(img => img.classList.remove('active'));
                thumbnail.classList.add('active');
            });

            thumbnailsContainer.appendChild(thumbnail);
        });

        // Mặc định đặt lớp active cho ảnh đầu tiên
        if (thumbnailsContainer.firstChild) {
            thumbnailsContainer.firstChild.classList.add('active');
        }
    }

    // Lấy productId từ URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    // Dữ liệu mô phỏng sản phẩm
    const products = {
        1: {
            title: 'MOTHERBOARD LOGO II T-SHIRT BROWN',
            description: 'SEASON FW20 <br>COLOR BROWN <br>RELEASE DATE 12/11/2020. ',
            price: '1,206,000 VNĐ',
            mainImage: 'playstation1-removebg-preview.png',
            thumbnails: [
                'playstation1-removebg-preview.png',
                'playstation2-removebg-preview.png'
            ],
            productType: 'clothing'
        },
        2: {
            title: 'CJ CUSTOM TSHIRT FOR UTOPIA C4',
            description: 'PREMIUM HEAVYWEIGHT COTTON Black SHORT SLEEVE TEE WITH SCREENPRINT DETAILS.',
            price: '1,206,000 VNĐ',
            mainImage: 'cjcustom1-removebg-preview.png',
            thumbnails: [
                'cjcustom1-removebg-preview.png',
                'cjcustom2-removebg-preview.png'
            ],
            productType: 'clothing'
        },
        3: {
            title: 'TOUR EUROPE BLACK TEE',
            description: 'PREMIUM HEAVYWEIGHT COTTON WHITE SHORT SLEEVE TEE WITH TOUR PRINT DETAILS.',
            price: '1.468.500 VNĐ',
            mainImage: 'tour1-removebg-preview.png',
            thumbnails: [
                'tour1-removebg-preview.png',
                'tour2-removebg-preview.png'
            ],
            productType: 'clothing'
        },
        4: {
            title: 'CJ X AP COLLAGE TEE',
            description: 'PREMIUM HEAVYWEIGHT COTTON CUT AND SEW SHORT SLEEVE TEE WITH SCREEN.',
            price: '1.468.500 VNĐ',
            mainImage: 'watch1-removebg-preview.png',
            thumbnails: [
                'watch1-removebg-preview.png',
                'watch2-removebg-preview.png '
            ],
            productType: 'clothing'
        },
        5: {
            title: 'MANUSCRIPT TEE',
            description: 'PREMIUM HEAVYWEIGHT COTTON CUT AND SEW SHORT SLEEVE TEE WITH SCREENPRINT DETAILS',
            price: '1,457,500 VND',
            mainImage: 'noname1-removebg-preview.png',
            thumbnails: [
                'noname1-removebg-preview.png',
                'noname2-removebg-preview.png'
            ],
            productType: 'clothing'
        },
        6: {
            title: 'TRAVIS SCOTT CJ DIGITAL GIRL PEPPER',
            description: 'SEASON FW20<br> COLOR PEPPER BROWN<br> RELEASE DATE 12/11/2020',
            price: '1,192,500 VND',
            mainImage: 'digitalgirl1-removebg-preview.png',
            thumbnails: [
                'digitalgirl1-removebg-preview.png',
                'digitalgirl2-removebg-preview.png'
            ],
            productType: 'clothing'
        },
        7: {
            title: 'ANNIHILATOR TEE',
            description: 'SEASON FW20<br> COLOR PEPPER BROWN<br> RELEASE DATE 12/11/2020',
            price: '1,457,500 VND',
            mainImage: 'monkeytravis1-removebg-preview.png',
            thumbnails: [
                'monkeytravis1-removebg-preview.png',
                'monkeytravis2-removebg-preview.png'
            ],
            productType: 'clothing'
        },
        8: {
            title: 'TRAVIS SCOTT X MCDONALD’S CACTUS SAUCE',
            description: 'SEASON FW20<br> CCOLOR WHITE<br> RELEASE DATE 10/09/2020',
            price: '1,192,500 VND',
            mainImage: 'macdonald1-removebg-preview.png',
            thumbnails: [
                'macdonald1-removebg-preview.png',
                'macdonald2-removebg-preview.png'
            ],
            productType: 'clothing'
        },
        9: {
            title: 'CJ CUSTOM TSHIRT FOR UTOPIA B4',
            description: 'PREMIUM HEAVYWEIGHT COTTON Black SHORT SLEEVE TEE WITH SCREENPRINT DETAILS',
            price: '1,192,500 VND',
            mainImage: 'drum1-removebg-preview.png',
            thumbnails: [
                'drum1-removebg-preview.png',
                'drum2-removebg-preview.png'
            ],
            productType: 'clothing'
        },
        10: {
            title: 'CJ CUSTOM TSHIRT FOR UTOPIA B2',
            description: 'PREMIUM HEAVYWEIGHT COTTON Black SHORT SLEEVE TEE WITH SCREENPRINT DETAILS',
            price: '1,192,500 VND',
            mainImage: 'uptopia1-removebg-preview.png',
            thumbnails: [
                'uptopia1-removebg-preview.png',
                'uptopia2-removebg-preview.png'
            ],
            productType: 'clothing'
        },
        11: {
            title: 'TRAVIS SCOTT HIGHEST IN THE ROOM SUN HOODIE',
            description: 'SEASON FW19<br> COLOR BLACK<br> RELEASE DATE 10/05/2019',
            price: '2,314,000 VND',
            mainImage: 'HN-1024x872-1-510x434.png',
            thumbnails: [
                'HN-1024x872-1-510x434.png',
                'BD-1024x872-1-510x434.png'
            ],
            productType: 'clothing'
        },
        12: {
            title: 'TRAVIS SCOTT WORLD EVENT HOODIE',
            description: 'SEASON SS20<br> COLOR BROWN<br> RELEASE DATE 28/04/2020',
            price: '2,314,000 VND',
            mainImage: 'DS-1024x872-1-510x434.png',
            thumbnails: [
                'DS-1024x872-1-510x434.png',
                '7Y-1024x872-1-510x434.png'
            ],
            productType: 'clothing'
        },
        13: {
            title: 'TRAVIS SCOTT THE SCOTTS WORLD HOODIE BLACK',
            description: 'SEASON SS20<br> COLOR BLACK<br> RELEASE DATE 23/04/2020',
            price: '2,314,000 VND',
            mainImage: '1Q-1-1024x872-1-510x434.png',
            thumbnails: [
                '1Q-1-1024x872-1-510x434.png',
                'W2-1024x872-1-510x434.png'
            ],
            productType: 'clothing'
        },
        14: {
            title: 'TRAVIS SCOTT JACKBOYS VEHICLE HOODIE BLACK',
            description: 'SEASON FW19<br>COLOR BLACK<br> RELEASE DATE 27/12/2019',
            price: '2,314,000 VND',
            mainImage: '98-1024x872-1.png',
            thumbnails: [
                '98-1024x872-1.png',
                '97-1-1024x872-1.png'
            ],
            productType: 'clothing'
        },
        15: {
            title: 'ASTROWORLD FESTIVAL RUN BEYOND BELIEF',
            description: 'SEASON SS19<br> COLOR BLACK<br> RELEASE DATE 06/11/2019',
            price: '2,314,000 VND',
            mainImage: 'AQ-1024x872-1-510x434.png',
            thumbnails: [
                'AQ-1024x872-1-510x434.png',
                '1Q-1024x872-1-510x434.png'
            ],
            productType: 'clothing'
        },
        16: {
            productType: "vinyl",
            title: 'ONE OF THE GIRLS + POPULAR 7” VINYL',
            description: 'Double Side A<br>1. One Of The Girls 04:04<br>2. Popular 03:35<br><br>Limited to 4 per customer.',
            price: '350,700 VND',
            mainImage: 'twalb1.png',
            thumbnails: [
                'twalb5.png',
                'twalb1.png',
                'twalb6.png',
                'twalb7.png'
            ]
        },
        17: {
            productType: "vinyl",
            title: 'After Hours Album Vinyl',
            description: 'TRACKLIST <br><br> 1. ALONE AGAIN<br> 2. TOO LATE<br> 3. HARDEST TO LOVE<br> 4. SCARED TO LIVE<br> 5. SNOWCHILD<br> 6. ESCAPE FROM LA<br> 7. HEARTLESS<br> 8. FAITH<br> 9. BLINDING LIGHTS<br> 10.IN YOUR EYES<br> 11. SAVE YOUR TEARS<br> 12. REPEAT AFTER ME(INTERLUDE)<br> 13. AFTER HOURS<br> 14. UNTIL I BLEED OUT',
            price: '1,002,000 VND',
            mainImage: 'twalb3.png',
            thumbnails: [
                'twalb3.png',
                'twalb4.png',
                'twalb5.png'
            ]
        },
        18: {
            productType: "vinyl",
            title: 'UTOPIA SPECIAL EDITION VINYL',
            description: 'SPECIAL EDITION 2-DISK VINYL BOX SET WITH MELTED VINYL <br><br> SHIPS IN 12-16 WEEKS',
            price: '3.446.763 VND',
            mainImage: 'tsalb2.png',
            thumbnails: [
                'tsalb2.png',
                'tsalb3.png',
                'tsalb4.png',
                'tsalb1.png',
                'tsalb5.png'
            ]
        },
        19: {
            productType: "vinyl",
            title: 'MF DOOM MM Food Green & Pink Vinyl Edition',
            description: 'Vinyl 2LP | 2004 / US – Reissue | New <br> <br> 1. Beef Rapp<br>2. Hoe Cakes<br>3. Potholderz<br> 4. One Beer<br> 5. Deep Fried Frenz<br>6. Poo-Putt Platter<br> 7. Fillet-O-Rapper<br>8. Gumbo<br>9. Fig Leaf Bi-Carbonate<br> 10. Kon Karne<br> 11. Guinnesses<br>12. Kon Queso<br> 13. Rapp Snitch Knishes<br>14. Vomitspit<br> 15. Kookies',
            price: '832,913 VND',
            mainImage: 'mfdoomalb1.png',
            thumbnails: [
                'mfdoomalb3.png',
                'mfdoomalb1.png',
                'mfdoomalb4.png',
                'mfdoomalb5.png',
                'mfdoomalb2.png'
            ]
        },
        20: {
            productType: "vinyl",
            title: 'T-REXX SOCK PACK',
            description: '100% COTTON JACQUARD SOCKS',
            price: '151,704 VND',
            mainImage: 'SOCKS_01_UPDATE_1500x-510x510.webp',
        },
        21: {
            productType: "vinyl",
            title: 'STUDDED BELT',
            description: 'LEATHER BELT WITH OVAL BUCKLE AND METAL RIVETS',
            price: '413,475 VND',
            mainImage: 'BELT_01_V1_1500x-510x510.webp',
        },
        22: {
            productType: "vinyl",
            title: 'UTOPIA BRIEFCASE',
            description: 'LEATHER BRIEFCASE WITH COMBO LOCK AND ETCHED UTOPIA LOGO',
            price: '413,475 VND',
            mainImage: 'SUITCASE_01_1500x-1024x1024-1-510x510.png',
        },
    };

    // Hiển thị thông tin chi tiết sản phẩm dựa trên productId
    const product = products[productId];
    if (product) {
        updateProductDetails(product);

        // Hiển thị hoặc ẩn phần chọn kích cỡ dựa trên loại sản phẩm
        const sizeSection = document.querySelector('.product-size');
        if (product.productType === 'clothing') {
            if (sizeSection) {
                sizeSection.style.display = 'block'; // Hiển thị phần chọn size nếu sản phẩm là áo
            }
        } else if (product.productType === 'vinyl') {
            if (sizeSection) {
                sizeSection.style.display = 'none'; // Ẩn phần chọn size nếu sản phẩm là vinyl
            }
        }
    } else {
        document.getElementById('product-title').textContent = 'Product not found';
        document.getElementById('product-description').textContent = '';
        document.getElementById('product-price').textContent = '';
        document.getElementById('myImage').src = '';
    }
});

// Xử lý sự kiện click cho các kích cỡ
document.querySelectorAll('.size').forEach(function(sizeElement) {
    sizeElement.addEventListener('click', function() {
        // Xóa lớp 'selected' khỏi tất cả các kích cỡ
        document.querySelectorAll('.size').forEach(function(size) {
            size.classList.remove('selected');
        });
        // Thêm lớp 'selected' vào kích cỡ được chọn
        this.classList.add('selected');
    });
});

// Các sự kiện click cho số lượng
document.getElementById('increase-quantity').addEventListener('click', function() {
    var quantityInput = document.getElementById('quantity');
    quantityInput.value = parseInt(quantityInput.value) + 1;
});

document.getElementById('decrease-quantity').addEventListener('click', function() {
    var quantityInput = document.getElementById('quantity');
    if (parseInt(quantityInput.value) > 1) {
        quantityInput.value = parseInt(quantityInput.value) - 1;
    }
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