// message event
function msg() {
  $(".show-message").on("click", function() {
    $(".show-message").hide();
    $(".message-form, .send-message").show();
  });

  $(".delete-msg").on("click", function() {
    confirm("정말 삭제하시겠습니까?");
    this.parentElement(".dropdown-item").hide();
  });
}
msg();

// delete message
function deleteConfirm() {
  $(".delete-btn").on("click", function() {
    confirm("정말 삭제하시겠습니까?");
  });
}
deleteConfirm();

//copied message
function copied() {
  $(".copied-link").on("click", function() {
    alert("수업링크가 복사되었습니다.");
  });
}
copied();

// change user profile image
function changeImg() {
  $(".edit-file-btn").click(function(e) {
    e.preventDefault();

    $("#user-img").click();
  });
}
changeImg();

$("#user-img").change(function() {
  if (this.files && this.files[0]) {
    var reader = new FileReader();
    reader.onload = function(e) {
      $(".user-profile").attr("src", e.target.result);
    };
    reader.readAsDataURL(this.files[0]);
  }
});

// make name tag
function makeTag() {
  /*
  $("#tags input")
    .on("focusout", function() {
      var txt = this.value;
      if (txt) $(this).before('<span class="tag">' + txt + "</span>");
      this.value = "";
      this.focus();
    })
    .on("keyup", function(e) {
      // comma|enter (add more keyCodes delimited with | pipe)
      if (/(188|13)/.test(e.which)) $(this).focusout();
    });

  
  */

  $("#tags").on("click", ".tag", function() {
    if (confirm("정말 삭제하시겠습니까?")) $(this).remove();
  });
}
makeTag();

var newitem = $("#student option:selected").val();

function addItem() {
  // this.options[this.selectedIndex].value;
  console.log(newitem);

  $(".bootstrap-tagsinput").append(
    "<span class='tag label label-info'>" +
      newItem +
      "<span data-role='remove'></span></span>"
  );
}

//register confirm message
$(function() {
  "use strict";
  window.addEventListener(
    "load",
    function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName("register-form");

      //   var re = /^[a-zA-Z0-9]{6,20}$/ ;
      //   var re2 = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

      var invalidFeedBack = document.getElementsByClassName("invalid-feedback");

      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener(
          "submit",
          function(event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            var email = $("#email").val();
            var confirmemail = $("#confirm_email").val();
            if (email !== confirmemail) {
              form.classList.add("was-validated");
              $("#validate").html("Email Should Match");
              $("#validate").addClass("error");
              $("#confirm_email").addClass("error-text");
              event.preventDefault();
              event.stopPropagation();
            } else {
              $("#validate").removeClass("error");
              form.classList.add("was-validated");
              $("#confirm_email").removeClass("error-text");
              $("#validate").html("Looks Good!");
            }

            //   form.classList.add('was-validated');
          },
          false
        );
      });
    },
    false
  );
});

//calendar
document.getElementById("date").valueAsDate = new Date();
