function customToast({ title = "", message = "", type = "" }) {
  const toastWrapper = document.querySelector("#toast");
  if (toastWrapper) {
    const icons = {
      Success: "fa-solid fa-circle-check",
      Error: "fa-solid fa-triangle-exclamation",
    };
    const icon = icons[type];
    const toast = document.createElement("div");
    toast.classList.add("toast", "show");
    toast.innerHTML = `
      <div class="toast-icon">
        <i class="${icon}"></i>
      </div>
      <div class="toast-message">
        <h5>${title}</h5>
        <p>${message}</p>
      </div>
      <div class="toast-close">&times;</div>
    `;
    toastWrapper.appendChild(toast);
    toast.addEventListener("click", (e) => {
      if (e.target.closest(".toast-close")) {
        toastWrapper.removeChild(toast);
      }
    });
    setTimeout(() => {
      toastWrapper.removeChild(toast);
    }, 2000);
  }
}

function showToast() {
  customToast({
    title: "Thông báo",
    message: "Đặt hàng thành công",
    type: "Error",
  });
}
