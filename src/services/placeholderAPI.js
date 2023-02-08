const BASE_API_URL = "https://jsonplaceholder.typicode.com";

export async function fetchPlaceholderPosts() {
  const response = await fetch(`${BASE_API_URL}/posts`);

  if (!response.ok) {
    return [];
  }
  return response.json();
}
