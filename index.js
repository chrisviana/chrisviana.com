fetch('README.md')
    .then(response => response.text())
    .then(markdown => {
      const html = marked(markdown);
      document.getElementById('readme-content').innerHTML = html;
    })
    .catch(error => console.error('Erro ao carregar o README.md:', error));