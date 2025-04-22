// Fetch user data from the API
fetch('https://jsonplaceholder.typicode.com/users/1')
.then(response => response.json())
.then(data => {
  // Update the profile content with the fetched data
  document.getElementById('profile-image').src = `./img/avatar_1.png`;
  document.getElementById('profile-name').textContent = data.name;
  document.getElementById('profile-title').textContent = 'Senior Product Designer';
  document.getElementById('profile-location').textContent = `${data.address.city}, USA · Fulltime Freelancer`;
  document.getElementById('about-me-text').textContent = 'Hi, I\'m a final year student completing a bachelor\'s In information Technology in QUT, with experience. We are the company behind the wildly successful DIY channel 5-Minute Crafts, the inspirational and creative channel Bright Side.';

  // Обновляем данные в контактном окне
  document.getElementById('contact-email').textContent = "pristia@gmail.com";
  document.getElementById('contact-phone').textContent = "0809021920139";
})
.catch(error => console.error('Error fetching user data:', error));