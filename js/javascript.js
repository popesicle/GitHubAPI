
window.onload = function() {

	var  urlProfile = "https://api.github.com/users/popesicle",

	newProfile = "https://api.github.com/users/",

	newRepos = "https://api.github.com/";

	// dataKey = access_token: apiKey;



	var gitProfile = {
		url: urlProfile,
		// data: {
		// 		"access_token" : apiKey
		// 	}
		}

	var gitRepos = {
		url: urlProfile + "/repos",
		// data: {
		// 		"access_token" : apiKey
		// 	}
		}

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
		var listElement = $("#reposList")[0];
		repoArr.forEach(function(repObj){
			listElement.innerHTML += "<div class = repos>" + "<p class = repoName>" + repObj.name + "</p>" + "<p class = starGazers>" + "<i class='fa fa-star'></i> " + repObj.stargazers_count + "<p class = fork>" + "<i class='fa fa-code-fork'></i> " + repObj.forks_count + "</p>" + "<p class = language>" + repObj.language + "</p>" + "<br>" + "<p class = createdOn>" + repObj.created_at + "</p>"
		})		
	}





	var ajaxRepsonse1 = $.ajax(gitProfile).success(createProfile);

	var ajaxRepsonse2 = $.ajax(gitRepos).success(createRepos);


	window.ajaxRepsonse1 = ajaxRepsonse1;
	console.log("ajax called");
	window.ajaxRepsonse2 = ajaxRepsonse2;
	console.log("ajax called again")


}