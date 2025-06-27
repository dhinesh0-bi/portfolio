  const toggleBtn = document.getElementById('themeToggle');
  const body = document.body;

  // Check saved theme
  if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    toggleBtn.textContent = '☀️';
  } else {
    body.classList.add('light-mode');
  }

  toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');

    const isDark = body.classList.contains('dark-mode');
    toggleBtn.textContent = isDark ? '☀️' : '☾';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });


  document.getElementById("sb").addEventListener("click", function() {
      document.getElementById("sk").scrollIntoView({ behavior: 'smooth' });
    });
    
    document.getElementById("home").addEventListener("click", function() {
      document.getElementById("her").scrollIntoView({ behavior: 'smooth' });
    }); 

    document.getElementById("ex").addEventListener("click", function() {
      document.getElementById("ab").scrollIntoView({ behavior: 'smooth' });
    });

     document.getElementById("p").addEventListener("click", function() {
      document.getElementById("ps").scrollIntoView({ behavior: 'smooth' });
    });

     document.getElementById("b").addEventListener("click", function() {
      document.getElementById("her").scrollIntoView({ behavior: 'smooth' });
    });

    