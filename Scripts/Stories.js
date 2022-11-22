var url = "https://dummyapi.io/data/v1/user?limit=10";

fetch(url, {
  method: "GET",
  headers: { "app-id": "63791f172b788b328d99c6da" },
})
  .then((response) => response.json())
  .then((json) => {
    data = json.data;

    data.map((value, index) => {
      var templateString = `<div class="swiper-slide ">
                            <img class="story-img" src="${value.picture}" alt="">
                            <span class="name2 mt-4 mr-5">${value.firstName}  ${value.lastName}</span>
                        </div>`;
      $("#test3").append(templateString);
    });
  });
