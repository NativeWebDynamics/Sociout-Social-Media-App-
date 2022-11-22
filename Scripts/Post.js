function edit() {
  $("#no_of_staff").attr("readonly", false);
  document.getElementById("no_of_staff").removeAttribute("readonly");
  document.getElementById("no_of_staff").className = "comment-boxborder";
}

function focusout() {
  document.getElementById("no_of_staff").className = "comment-box";
}

var url1 = "https://dummyapi.io/data/v1/post?limit=10";

fetch(url1, {
  method: "GET",
  headers: { "app-id": "63791f172b788b328d99c6da" },
})
  .then((response) => response.json())
  .then((json) => {
    post_data = json.data;
    console.log(post_data);

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
            var temp = `<div class=" mt-4 comment-div">


            
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

          $("#test5").append(templateString);
        });
    });
  });

jQuery(function ($) {
  $("#scroll").on("scroll", function () {
    if (
      $(this).scrollTop() + $(this).innerHeight() >=
      $(this)[0].scrollHeight
    ) {
      //api call
      var limit = 10;
      const spinner = document.getElementById("spinner");
      spinner.removeAttribute("hidden");
      var url1 = `https://dummyapi.io/data/v1/tag/water/post?limit=10`;
      var url2 =
        "https://dummyapi.io/data/v1/post/60d21af267d0d8992e610b8d/comment?limit=2";
      fetch(url1, {
        method: "GET",
        headers: { "app-id": "63791f172b788b328d99c6da" },
      })
        .then((response) => response.json())
        .then((json) => {
          //  Comments fetching
          fetch(url2, {
            method: "GET",
            headers: { "app-id": "63791f172b788b328d99c6da" },
          })
            .then((response) => response.json())
            .then((json2) => {
              spinner.setAttribute("hidden", "");
              post_data = json.data;
              comment_data = json2.data;
              console.log(comment_data);

              post_data.map((value, index) => {
                var unique_name = "1";
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
                    <div class=" mt-4 comment-div test6">


                    
                      
                  <div class=" mt-4 comment-div test6  name=' ${unique_name}'">


            
 <div class="comment  mt-4">
                                <div >
                                    <img class="logo" src="${comment_data[1].owner.picture}" alt="">
                                </div>

                                <div class="comments mb-2">
                                    <div>
                                        <span class="post-user"> ${comment_data[1].owner.firstName}</span>
                                    </div>
                                    <div>
                                        <span>${comment_data[1].publishDate}</span>
                                    </div>
                                </div>

                            </div>
 

                           <div class="actual-com mx-1  del2 ">
                                
                                    <span contentEditable="true" class="comment-box">${comment_data[1].message} </span>
                                <i class="fas fa-edit head-chat pr-2 mt-2" onclick="edit()"></i>
                                <i class="fa fa-trash head-chat  mt-2" class="del" aria-hidden="true" onclick="delete_com()"></i>
                            </div>
                        </div>


               <div class=" mt-4 comment-div test6">


            
 <div class="comment  mt-4">
                                <div >
                                    <img class="logo" src="${comment_data[0].owner.picture}" alt="">
                                </div>

                                <div class="comments mb-2">
                                    <div>
                                        <span class="post-user"> ${comment_data[0].owner.firstName}</span>
                                    </div>
                                    <div>
                                        <span>${comment_data[0].publishDate}</span>
                                    </div>
                                </div>

                            </div>
 

                            <div class="actual-com mx-1  del2 ">
                                
                                    <span contentEditable="true" class="comment-box">${comment_data[0].message} </span>
                                <i class="fas fa-edit head-chat pr-2 mt-2" onclick="edit()"></i>
                                <i class="fa fa-trash head-chat  mt-2" class="del" aria-hidden="true" onclick="delete_com()"></i>
                            </div>
                        </div>


              

                    </div>

                    </div>
                      
                    </div>





                    

                </div>
    `;

                $("#test5").append(templateString);
              });
            });
        });
    }
  });
});

function logout() {
  localStorage.clear();
  window.location.href = "Login.html";
}

$(function () {
  // Open Popup
  $("[popup-open]").on("click", function () {
    var popup_name = $(this).attr("popup-open");
    $('[popup-name="' + popup_name + '"]').fadeIn(300);
  });

  // Close Popup
  $("[popup-close]").on("click", function () {
    var popup_name = $(this).attr("popup-close");
    $('[popup-name="' + popup_name + '"]').fadeOut(300);
  });

  // Close Popup When Click Outside
  $(".popup")
    .on("click", function () {
      var popup_name = $(this).find("[popup-close]").attr("popup-close");
      $('[popup-name="' + popup_name + '"]').fadeOut(300);
    })
    .children()
    .click(function () {
      return false;
    });
});

function User_Detail() {
  var local_email = localStorage.getItem("email");
  var local_password = localStorage.getItem("Password");
  console.log(local_email, local_password);
  document.getElementById("name1").value = local_email;
  document.getElementById("pass1").value = local_password;
}

function edit_data() {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const email = document.getElementById("name1").value;
  const pass = document.getElementById("pass1").value;

  if (email == "" && pass == "") {
    alert("please enter your details");
  }
  if (email != "" && pass == "") {
    alert("please enter password");
  }
  if (email == "" && pass != "") {
    alert("please enter password");
  }
  if (pass.length < 8) {
    alert("password must be greater than 8 character");
  }
  if (!email.match(mailformat)) {
    alert("please enter a Valid Email");
  } else {
    localStorage.setItem("email", email);
    localStorage.setItem("Password", pass);
  }
}
