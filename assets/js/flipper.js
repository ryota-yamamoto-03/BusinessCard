// カードフリップ
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("card").addEventListener("click", function() {
      this.classList.toggle("flipped");
    });
  });

  // 右クリック禁止
  document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
  });