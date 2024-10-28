export function fetchImages(userInput) {
  const keyApi = '46773204-8ec36d0a78d9132ebe706b3ce';
  let url = `https://pixabay.com/api/?key=${keyApi}&q=${userInput}&image_type=photo&orientation=horizontal&safesearch=true`;

  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    } else {
      return response.json();
    }
  });
}
