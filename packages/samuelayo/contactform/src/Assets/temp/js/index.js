
                    $(document).ready(function(){
					$(".prod-logo").hover(function () {
					$(".inner").addClass("inner-hover");
					$(".nav-li").slideDown(500);
					},
					function () {
					$(".inner").removeClass("inner-hover");
					$(".nav-li").slideUp(500);
					}
					);
                   });

					function adminShow() {
					var x = document.getElementById("table");
					var y = document.getElementById("table1");
					if (x.style.display === "none") {
					x.style.display = "block";
					y.style.display = "none";
					} else {
					x.style.display = "none";
					}
					}
					function adminHide() {
					var x = document.getElementById("table");
					x.style.display === "none";
					
					}
					function userShow() {
					var x = document.getElementById("table1");
					var y = document.getElementById("table");
					if (x.style.display === "none") {
					x.style.display = "block";
					y.style.display = "none";
					} else {
					x.style.display = "none";
					}
					}
					function userHide() {
					var x = document.getElementById("table1");
					x.style.display === "none";
					
					}
						
				