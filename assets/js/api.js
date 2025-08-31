async function fetchProfileData() {
  const url = "https://gusta-2024.github.io/js-developer-portfolio-2-main/meuPerfil.json";
  const response = await fetch(url);
  const profileData = await response.json();
  return profileData;
}

