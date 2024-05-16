axios.get('http://localhost:1337/api/colors')
  .then(response => {
    const colors = response.data.data; // Acceder a los datos de los colores correctamente

    // Encuentra el color activo
    const activeColor = colors.find(color => color.attributes.isActive);
    if (activeColor) {
      // Remueve todas las clases de color del body
      document.body.classList.remove('black-bg', 'white-bg', 'darkPurple-bg');
      
      // Agrega la clase correspondiente al color activo al body
      const colorName = activeColor.attributes.name + '-bg';
      document.body.classList.add(colorName);
    } else {
      console.error('No hay un color activo en la API de Strapi');
    }
  })
  .catch(error => console.error('Error al obtener los colores desde Strapi:', error));