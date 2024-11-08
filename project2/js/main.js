async function displayData() {
    const giphyApiKey = "Zy3h56fvBHGzyNS61BYzn7rqnjxy92uY";
    const searchValue = document.getElementById("searchInput").value;
    const limit = 20;
    const offset = 0;
    const url = `http://api.giphy.com/v1/gifs/search?q=${searchValue}&api_key=${giphyApiKey}&limit=${limit}&offset=${offset}`;
    try {
      const response = await fetch(url);
      console.log (response)
      if (!response.ok) throw new Error("Network response was not ok.");
      
      const data = await response.json();
      console.log (data)
      const sectionImage = document.getElementById("section_image");
      console.log (sectionImage)
      sectionImage.innerHTML = ""; // Clear previous results if any


      data.data.forEach(element => {
      console.log (element)

        const newImage = document.createElement("img");
        newImage.src = element.images.original.url;
        newImage.className = "gif-items";
        sectionImage.appendChild(newImage);
      });


      
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  }