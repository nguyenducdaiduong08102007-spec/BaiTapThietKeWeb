"use strict";

document.documentElement.classList.add("js-enabled");

const products = [
  {
    id: "cua-bien-ca-mau",
    name: "Cua biển Cà Mau",
    detailName: "Cua gạch / Cua thịt",
    category: "seafood",
    categoryLabel: "Hải sản tươi",
    badge: "Đặc sản trứ danh",
    price: "Từ 350.000đ/kg",
    description: "Thịt chắc ngọt, gạch son béo thơm từ vùng nước mặn lợ.",
    image: "Images/cuaCaMau.jpg",
    imageAlt: "Cua biển tươi được đánh bắt tại vùng biển Cà Mau",
    origin: "Cua được tuyển chọn từ vùng nuôi sinh thái Năm Căn và Ngọc Hiển, nơi giao hòa giữa nước biển và dòng phù sa.",
    serving: "Hấp với sả hoặc bia để giữ vị ngọt tự nhiên; cua gạch ngon khi chấm muối tiêu chanh.",
    storage: "Giữ cua sống nơi thoáng mát và chế biến trong ngày. Nếu nhận hàng đông lạnh, bảo quản ngăn đông và rã đông chậm trong ngăn mát."
  },
  {
    id: "mam-ba-khia",
    name: "Mắm ba khía Rạch Gốc",
    detailName: "Ba khía muối truyền thống",
    category: "forest",
    categoryLabel: "Mắm & sản vật rừng",
    badge: "Chuẩn vị Rạch Gốc",
    price: "Từ 120.000đ/hũ",
    description: "Vị mặn mòi, đậm đà qua cách muối ba khía truyền đời.",
    image: "Images/mamBaKhiaRachGoc.jpg",
    imageAlt: "Món ba khía trộn gia vị hấp dẫn",
    origin: "Ba khía Rạch Gốc, huyện Ngọc Hiển, được làm từ loài ba khía vùng rừng ngập mặn và ủ muối theo cách truyền thống.",
    serving: "Tách mai, trộn cùng tỏi, ớt, đường và nước cốt chanh; ăn với cơm nóng hoặc trộn gỏi đu đủ.",
    storage: "Đậy kín nắp sau khi dùng, bảo quản ngăn mát tủ lạnh và sử dụng theo hướng dẫn trên nhãn."
  },
  {
    id: "tom-kho-dat",
    name: "Tôm khô đất Cà Mau",
    detailName: "Tôm đất một nắng",
    category: "dried",
    categoryLabel: "Đặc sản khô",
    badge: "Bán chạy",
    price: "Từ 850.000đ/kg",
    description: "Tôm đất chắc thịt, màu đỏ au, ngọt đậm sau khi phơi.",
    image: "Images/tomkhoCaMau.png",
    imageAlt: "Tôm khô màu đỏ au, đặc sản miền sông nước",
    origin: "Tôm đất đánh bắt ở vùng nước lợ Cà Mau được sơ chế kỹ, luộc vừa lửa và phơi nắng để giữ độ ngọt.",
    serving: "Ngâm mềm để nấu canh, làm củ kiệu tôm khô, trộn gỏi hoặc dùng làm món ăn chơi.",
    storage: "Bảo quản kín trong ngăn mát hoặc ngăn đông. Sau khi mở túi, nên dùng trong thời gian ngắn để giữ hương vị."
  },
  {
    id: "mat-ong-u-minh",
    name: "Mật ong rừng U Minh Hạ",
    detailName: "Mật ong hoa tràm",
    category: "forest",
    categoryLabel: "Mắm & sản vật rừng",
    badge: "Quà quê tinh túy",
    price: "Từ 280.000đ/lít",
    description: "Mật thơm dịu hương tràm, khai thác theo mùa hoa rừng.",
    image: "https://images.unsplash.com/photo-1587049352851-8d4e89133924?auto=format&fit=crop&w=850&q=85",
    imageAlt: "Hũ mật ong rừng vàng óng bên tổ ong",
    origin: "Mật được thu hoạch theo mùa hoa tràm trong vùng đệm rừng U Minh Hạ, từ những hộ làm nghề gác kèo ong địa phương.",
    serving: "Pha cùng nước ấm, dùng với trà hoặc làm nguyên liệu ướp món ăn. Không nên pha với nước quá nóng.",
    storage: "Đóng kín nắp, để nơi khô ráo, tránh ánh nắng trực tiếp và không bảo quản trong tủ lạnh."
  },
  {
    id: "ca-thoi-loi",
    name: "Cá thòi lòi",
    detailName: "Nướng muối ớt / Khô",
    category: "dried",
    categoryLabel: "Đặc sản khô",
    badge: "Lạ mà ngon",
    price: "Từ 250.000đ/kg",
    description: "Sản vật rừng ngập mặn, vị ngọt thơm đậm chất miền Tây.",
    image: "Images/cathoiloi.jpg",
    imageAlt: "Món cá nướng thơm ngon dùng kèm rau xanh",
    origin: "Cá thòi lòi được bắt tại những bãi bùn và rừng đước ven biển Cà Mau, nơi loài cá đặc biệt này sinh sống.",
    serving: "Cá tươi nướng muối ớt, cuốn bánh tráng rau rừng; cá khô nướng sơ chấm mắm me đều ngon.",
    storage: "Cá khô đóng kín và bảo quản ngăn mát hoặc ngăn đông. Cá tươi cần giữ lạnh và chế biến sớm."
  },
  {
    id: "banh-phong-tom",
    name: "Bánh phồng tôm Năm Căn",
    detailName: "Bánh phồng tôm truyền thống",
    category: "dried",
    categoryLabel: "Đặc sản khô",
    badge: "Đậm vị tôm",
    price: "Từ 95.000đ/gói",
    description: "Bánh thơm vị tôm, chiên nở giòn rụm, ăn là nhớ.",
    image: "Images/banhphongtom.jpg",
    imageAlt: "Món ăn giòn rụm với màu sắc hấp dẫn",
    origin: "Bánh được làm theo nghề truyền thống ở vùng Năm Căn, kết hợp tôm và bột theo công thức địa phương.",
    serving: "Chiên ngập dầu ở lửa vừa đến khi bánh nở đều, dùng ăn không hoặc ăn kèm gỏi, món khai vị.",
    storage: "Giữ bánh sống trong túi kín, đặt nơi khô thoáng, tránh ẩm để bánh không bị mềm."
  },
  {
    id: "kho-ca-sac-ran",
    name: "Khô cá sặc rằn U Minh",
    detailName: "Khô cá sặc rằn",
    category: "dried",
    categoryLabel: "Đặc sản khô",
    badge: "Đúng vị miền Tây",
    price: "Từ 290.000đ/kg",
    description: "Thịt cá dai ngọt, tẩm ướp đậm đà, phơi nắng vừa.",
    image: "Images/cakhosacran.jpg",
    imageAlt: "Cá nướng vàng thơm, đặc sản miền sông nước",
    origin: "Cá sặc rằn vùng U Minh được làm sạch, tẩm ướp theo vị quê và phơi nắng tự nhiên.",
    serving: "Nướng hoặc chiên vàng, xé trộn xoài xanh, dưa leo và rau thơm thành món gỏi hấp dẫn.",
    storage: "Bảo quản kín trong ngăn mát hoặc ngăn đông. Hạn chế để sản phẩm tiếp xúc với không khí ẩm."
  },
  {
    id: "mam-tom-chua",
    name: "Mắm tôm chua Đất Mũi",
    detailName: "Tôm chua thủ công",
    category: "forest",
    categoryLabel: "Mắm & sản vật rừng",
    badge: "Vị nhà làm",
    price: "Từ 110.000đ/hũ",
    description: "Tôm tươi lên men vừa độ, chua dịu, cay thơm hài hòa.",
    image: "Images/mamchua.jpg",
    imageAlt: "Mắm và món ăn địa phương được bày biện chỉn chu",
    origin: "Món mắm được chế biến thủ công từ tôm tươi miền biển Cà Mau, kết hợp gia vị theo khẩu vị bản địa.",
    serving: "Ăn kèm thịt luộc, rau sống, bún hoặc cuốn bánh tráng; có thể thêm tỏi và ớt tùy khẩu vị.",
    storage: "Đậy kín nắp, bảo quản ngăn mát sau khi mở và dùng dụng cụ sạch khi lấy mắm."
  }
];

const productGrid = document.querySelector("#product-grid");
const productSelect = document.querySelector("#product-interest");
const detailPage = document.querySelector("#product-detail");
const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#primary-navigation");
const contactForm = document.querySelector("#contact-form");
const toast = document.querySelector("#toast");
let toastTimeout;

function renderProducts(filter = "all") {
  if (!productGrid) return;
  const visibleProducts = filter === "all" ? products : products.filter((product) => product.category === filter);
  productGrid.innerHTML = visibleProducts.map((product) => `
    <article class="product-card">
      <a class="product-image-wrap" href="product.html?item=${product.id}" aria-label="Xem ${product.name}">
        <img class="product-image" src="${product.image}" alt="${product.imageAlt}" loading="lazy">
        <span class="product-badge">${product.badge}</span>
      </a>
      <div class="product-content">
        <p class="product-category">${product.categoryLabel}</p>
        <h3><a href="product.html?item=${product.id}">${product.name}</a></h3>
        <p class="product-description">${product.description}</p>
        <div class="product-card-bottom">
          <span class="product-price">${product.price}</span>
          <a class="detail-button" href="product.html?item=${product.id}">Xem chi tiết <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </article>
  `).join("");
}

function populateProductSelect() {
  if (!productSelect) return;
  products.forEach((product) => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    productSelect.append(option);
  });

  const requestedProduct = new URLSearchParams(window.location.search).get("product");
  if (products.some((product) => product.id === requestedProduct)) productSelect.value = requestedProduct;
}

function renderProductDetail() {
  if (!detailPage) return;
  const productId = new URLSearchParams(window.location.search).get("item");
  const product = products.find((item) => item.id === productId);
  if (!product) {
    detailPage.innerHTML = '<div class="product-not-found"><p class="eyebrow"><span></span> CHƯA TÌM THẤY SẢN VẬT</p><h1>Đường dẫn này chưa có đặc sản.</h1><p>Hãy quay lại danh mục để chọn món bạn muốn khám phá.</p><a class="button button-accent" href="products.html">Xem danh mục đặc sản <span aria-hidden="true">↗</span></a></div>';
    return;
  }

  detailPage.querySelector(".product-detail-image").src = product.image;
  detailPage.querySelector(".product-detail-image").alt = product.imageAlt;
  detailPage.querySelector(".detail-badge").textContent = product.badge;
  detailPage.querySelector(".detail-category").textContent = product.categoryLabel;
  detailPage.querySelector(".detail-title").textContent = product.detailName;
  detailPage.querySelector(".detail-price").textContent = product.price;
  detailPage.querySelector(".detail-description").textContent = product.description;
  detailPage.querySelector(".detail-origin").textContent = product.origin;
  detailPage.querySelector(".detail-serving").textContent = product.serving;
  detailPage.querySelector(".detail-storage").textContent = product.storage;
  document.querySelector(".detail-crumb-name").textContent = product.name;
  detailPage.querySelector(".detail-contact").href = `contact.html?product=${encodeURIComponent(product.id)}`;
  document.title = `${product.name} — Hương Vị Đất Mũi`;

  const relatedProducts = products.filter((item) => item.category === product.category && item.id !== product.id).slice(0, 3);
  document.querySelector("#related-products").innerHTML = relatedProducts.map((item) => `
    <a class="related-card" href="product.html?item=${item.id}">
      <img src="${item.image}" alt="" loading="lazy">
      <span><small>${item.categoryLabel}</small><strong>${item.name}</strong></span>
      <b aria-hidden="true">↗</b>
    </a>
  `).join("");
}

function showToast(message) {
  if (!toast) return;
  toast.querySelector(".toast-message").textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(toastTimeout);
  toastTimeout = window.setTimeout(() => toast.classList.remove("is-visible"), 4500);
}

function closeNavigation() {
  if (!menuToggle || !navigation) return;
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Mở menu điều hướng");
  navigation.classList.remove("is-open");
}

function setFieldError(input, errorElement, message) {
  errorElement.textContent = message;
  input.setAttribute("aria-invalid", message ? "true" : "false");
}

const filterRow = document.querySelector(".filter-row");
if (filterRow && productGrid) {
  filterRow.addEventListener("click", (event) => {
    const button = event.target.closest("[data-filter]");
    if (!button) return;
    document.querySelectorAll(".filter-button").forEach((filterButton) => {
      const isActive = filterButton === button;
      filterButton.classList.toggle("is-active", isActive);
      filterButton.setAttribute("aria-pressed", String(isActive));
    });
    renderProducts(button.dataset.filter);
  });
}

if (menuToggle && navigation) {
  menuToggle.addEventListener("click", () => {
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isExpanded));
    menuToggle.setAttribute("aria-label", isExpanded ? "Mở menu điều hướng" : "Đóng menu điều hướng");
    navigation.classList.toggle("is-open", !isExpanded);
  });

  navigation.addEventListener("click", (event) => {
    if (event.target.closest("a")) closeNavigation();
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeNavigation();
});

const currentPage = window.location.pathname.split("/").pop() || "index.html";
const activePage = currentPage === "product.html" ? "products" : currentPage === "index.html" ? "home" : currentPage.replace(".html", "");
document.querySelectorAll("[data-nav]").forEach((link) => {
  if (link.dataset.nav === activePage) {
    link.classList.add("is-current");
    link.setAttribute("aria-current", "page");
  }
});

const header = document.querySelector(".site-header");
if (header) {
  const updateHeader = () => header.classList.toggle("is-scrolled", window.scrollY > 24);
  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });
}

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const nameInput = contactForm.elements.name;
    const phoneInput = contactForm.elements.phone;
    const nameError = document.querySelector("#name-error");
    const phoneError = document.querySelector("#phone-error");
    const normalizedName = nameInput.value.trim();
    const normalizedPhone = phoneInput.value.replace(/[\s().-]/g, "");
    const validPhone = /^\+?\d{9,12}$/.test(normalizedPhone);
    const validName = normalizedName.length >= 2;

    setFieldError(nameInput, nameError, validName ? "" : "Vui lòng nhập họ tên (ít nhất 2 ký tự).");
    setFieldError(phoneInput, phoneError, validPhone ? "" : "Vui lòng nhập số điện thoại hợp lệ.");
    if (!validName || !validPhone) {
      (validName ? phoneInput : nameInput).focus();
      return;
    }

    contactForm.reset();
    nameInput.removeAttribute("aria-invalid");
    phoneInput.removeAttribute("aria-invalid");
    showToast("Cảm ơn bạn! Chúng tôi sẽ liên hệ tư vấn sớm.");
  });
}

const revealElements = document.querySelectorAll(".reveal");
let revealObserver;

function revealElementsInViewport() {
  revealElements.forEach((element) => {
    const bounds = element.getBoundingClientRect();
    if (bounds.top < window.innerHeight - 24 && bounds.bottom > 0) {
      element.classList.add("is-visible");
      if (revealObserver) revealObserver.unobserve(element);
    }
  });
}

if ("IntersectionObserver" in window) {
  revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -35px 0px" });
  revealElements.forEach((element) => revealObserver.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("is-visible"));
}
window.requestAnimationFrame(revealElementsInViewport);
window.setTimeout(revealElementsInViewport, 120);
window.addEventListener("scroll", revealElementsInViewport, { passive: true });

document.querySelectorAll(".current-year").forEach((element) => {
  element.textContent = String(new Date().getFullYear());
});
renderProducts();
populateProductSelect();
renderProductDetail();
