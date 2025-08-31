async function fetchProfileData() {
  const url = "https://gusta-2024.github.io/Gusta_25.github.io/data/meupessoal.json";
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Erro ao carregar JSON: ${response.status}`);
  const profileData = await response.json();
  return profileData;
}


