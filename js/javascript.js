
window.onload = function() {


 	urlProfile = "https://api.github.com/users/"


	// dataKey = access_token: apiKey;

	var createProfile = function(profileData) {
		
		console.log("data received dog.");
		console.log(profileData);
		
		$("#profilePic").attr("src",profileData.avatar_url);
		$("#loginName")[0].innerHTML = profileData.login; 
		$("#realName")[0].innerHTML = profileData.name;
		$('#dateJoined')[0].innerHTML = "<i class='fa fa-clock-o'></i>" + " Joined " + profileData.created_at;
		$("#followers")[0].innerHTML = "<span>" + profileData.followers + "</span>" + "<br>" + "<p>" + "Followers" + "</p>";
		$("#starred")[0].innerHTML = "<span>" + "0" + "</span>" + "<br>" + "<p>" +
			"Starred" + "</p>";
		$("#followed")[0].innerHTML =  "<span>" + profileData.following + "</span>" + "<br>" + "<p>" + "Followed" + "</p>" ; 
	}


	// var createCounter = function(info)
	// 	$("#followers")[0].innerHTML = "Followers"

	var createRepos = function(repoData) {
		console.log("and I helped!");
		console.log(repoData);
		repoList(repoData);
	}

	var repoList = function(repoArr) {
		// [repoObj1, repoObj2]
		var listElement = $("#reposList")[0]
			listElement.innerHTML = ""
		repoArr.forEach(function(repObj){
			listElement.innerHTML += "<div class = repos>" + "<a href=" + repObj.url + " class = repoName>" + repObj.name + "</a>" + "<p class = starGazers>" + "<i class='fa fa-star'></i> " + repObj.stargazers_count + "<p class = fork>" + "<i class='fa fa-code-fork'></i> " + repObj.forks_count + "</p>" + "<p class = language>" + repObj.language + "</p>" + "<br>" + "<p class = createdOn>" + repObj.created_at + "</p>"
		})		
	}



	var startAjax = function(query) {
		var gitProfile = {
			url: urlProfile + query.replace("#" , ""),
			success: createProfile,
			data: {
				// "access_token" : apiKey
			}
		}
		$.ajax(gitProfile).success(createProfile),
		console.log("finding profile")

		var gitRepos = {
			url: urlProfile + query.replace("#","") + "/repos",
			success: createRepos,
			data: {
				// "access_token" : apiKey
			}
		}

		$.ajax(gitRepos).success(createRepos);
		console.log("loading repos")
	}


	var	changeUser = function(){
		var inputEl = $("input")[0]
		inputEl.onkeypress = getInput
		var query = location.hash

	}

	var getInput = function(event){
		if (event.keyCode === 13){
			var inputEl = event.srcElement,
				query = inputEl.value
			inputEl.value = ""
            location.hash = query
			console.log("ninjas")
		}
	}


	window.onhashchange = function (){
		var query = location.hash
		startAjax(query)
	}

	changeUser()
	// var ajaxRepsonse1 = $.ajax(gitProfile).success(createProfile),
	// 	ajaxRepsonse2 = $.ajax(gitRepos).success(createRepos);


	// window.ajaxRepsonse1 = ajaxRepsonse1;
	// console.log("ajax called");
	// window.ajaxRepsonse2 = ajaxRepsonse2;
	// console.log("ajax called again")

}