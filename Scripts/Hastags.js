var url = "https://dummyapi.io/data/v1/tag?limit=5";

fetch(url, {
  method: "GET",
  headers: { "app-id": "63791f172b788b328d99c6da" },
})
  .then((response) => response.json())
  .then((json) => {
    data = json.data;
    data.map((element, index) => {
      var templateString = ` 
       <span class="hash-style mt-3" id='span_Id${index}'   onclick="get_span(${index})">
                              ${element}
                          </span> `;

      $("#test4").append(templateString);
    });
  });

function get_span(index) {
  var test = $("#span_Id" + index).text();
  console.log(String(test).trim());
  var url1 = `https://dummyapi.io/data/v1/tag/${String(test)
    .trim()
    .toLowerCase()}/post?limit=10`;
  fetch(url1, {
    method: "GET",
    headers: { "app-id": "63791f172b788b328d99c6da" },
  })
    .then((response) => response.json())
    .then((json) => {
      post_data = json.data;
      console.log(post_data);

      // const filtereddata = post_data.filter((value) =>
      //   value.tags.includes(String(test).trim().toLowerCase())
      // );
      // console.log(filtereddata);

      post_data.map((value, index) => {
        fetch(`https://dummyapi.io/data/v1/post/${value.id}/comment?limit=10`, {
          method: "GET",
          headers: { "app-id": "63791f172b788b328d99c6da" },
        })
          .then((response) => response.json())
          .then((json2) => {
            Comment_data = json2.data;
            // console.log(Comment_data);
            Comment_data.map((element, index) => {
              $(".post-com").val("");
              var temp = `


<div class=" mt-4 comment-div">


            
 <div class="comment  mt-4">
                                <div >
                                    <img class="logo" src="${element.owner.picture}" alt="">
                                </div>

                                <div class="comments mb-2">
                                    <div>
                                        <span class="post-user">${element.owner.firstName} </span>
                                    </div>
                                    <div>
                                        <span>${element.publishDate} </span>
                                    </div>
                                </div>

                            </div>
 

                            <div class="actual-com mx-1  del2 ">
                                
                                    <span contentEditable="true" class="comment-box">${element.message} </span>
                                <i class="fas fa-edit head-chat pr-2 mt-2" onclick="edit()"></i>
                                <i class="fa fa-trash head-chat  mt-2" class="del" aria-hidden="true" onclick="delete_com()"></i>
                            </div>
                        </div>

`;

              $(".post-com").append(temp);
            });

            var tags = value.tags;
            var templateString = `
        <div class="post pb-4">
                    <div class="post-content pt-3 ">
                        <div>
                            <img class="logo" src=${value.owner.picture} alt="">
                        </div>
                        <div class="post-name mb-4">
                            <span class='post-user'>
                                ${value.owner.firstName}  ${value.owner.lastName} 
                            </span>



                            <span>
                                 ${value.publishDate}
                            </span>
                        </div>



                    </div>
                    <div class="tag-area" id='tag-id'>
                   

                  
                    
                        <span class="hash-style mt-3">
                            ${tags[0]}
                        </span>

                        <span class="hash-style mt-3">
                            ${tags[1]}
                        </span>

                        <span class="hash-style mt-3">
                            ${tags[2]}
                        </span>

                        
                    </div>



                    <div class="title mb-2">
                        <span>
                             ${value.text}
                        </span>
                    </div>

                    <div>
                        <img class="post-img" src=" ${value.image}" alt="">

                    </div>
                    <div class="com-like" >
                        <h6 class="head-chat  mt-2"> <i class="fa-solid fa-comment com-icon"></i>Comments
                        </h6>
                        <h6 class="head-chat  mt-2"> <i class="fa fa-thumbs-up com-icon" aria-hidden="true"></i>Likes ${value.likes}
                        </h6>
                     </div>

                    <div class='post-com'>
                    


                    </div>

                    
                    </div>



                    

                    
                    





                    

                </div>
    `;

            $("#testnew").prepend(templateString);
          });
      });
    });
}
