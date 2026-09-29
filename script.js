document.querySelector("#cek").addEventListener("click", () => {
  const container = document.querySelector("#hasil-container");
  const hasil = document.querySelector("#hasil");
  const button = document.querySelector("#cek");
  
  // Animasi klik tombol
  button.style.transform = "scale(0.95)";
  setTimeout(() => {
    button.style.transform = "";
  }, 150);

  // Menampilkan hasil
  container.classList.remove("hidden");
  
  // Delay agar animasi CSS berjalan halus
  setTimeout(() => {
    container.classList.add("show");
    hasil.textContent = "JavaScript berhasil berjalan dengan lancar!";
  }, 10);
});