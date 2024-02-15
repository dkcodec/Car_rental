// Call data function

// Rapid Api Car by api ninjas https://rapidapi.com/apininjas/api/cars-by-api-ninjas/
// by using fetch

export async function fetchCars() {
  const headers = {
    'X-RapidAPI-Key': 'de52d40859msh0a3d49d57b118a2p11ecc9jsnea162425407f',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
  };
  const response = await fetch(
    'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars',
    {
      headers: headers,
    }
  );

  const result = await response.json();

  return result;
}
