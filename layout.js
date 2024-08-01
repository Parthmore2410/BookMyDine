document.querySelectorAll('.clickable-table').forEach(table => {
  table.addEventListener('click', function () {
      const tableNumber = this.getAttribute('data-number'); // Ensure this attribute is set in your HTML
      window.location.href = `booknow.html?tableNumber=${tableNumber}`;
  });
});
