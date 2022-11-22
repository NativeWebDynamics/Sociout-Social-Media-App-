var url = "https://dummyapi.io/data/v1/user?limit=50";

fetch(url, {
  method: "GET",
  headers: { "app-id": "63791f172b788b328d99c6da" },
})
  .then((response) => response.json())
  .then((json) => {
    data = json.data;

    data.map((value, index) => {
      var templateString = `
    <div class="user-data ">

                                        <img class="img3 mb-2 mx-5" src="${value.picture}" alt="">
                                        <p class="user-name-1 mt-2  ">${value.firstName}  ${value.lastName}</p>
                                    </div>`;
      $("#test2").append(templateString);
    });
  });
