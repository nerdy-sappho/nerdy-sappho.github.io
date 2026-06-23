const username = "whatsmynameagain"; // your nekoweb username

const getStats = async () => {
	const request = await fetch(
		`https://nekoweb.org/api/site/info/${username}`,
	);
	const json = await request.json();

	// formats the date
	const updatedDate = new Date(json.updated_at);
	const monthNames = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];

	const updated = `${monthNames[updatedDate.getMonth()]} ${updatedDate.getDate()} ${updatedDate.getFullYear()}`;

	const createdDate = new Date(json.created_at);
	const created = `${createdDate.getMonth()}/${createdDate.getDate()}/${createdDate.getFullYear()}`;

	// change the exclemation marks to before and after texts. for example turn
	// !!!! ${json.views} !!!! into
	// you are my ${json.views}th visitor

	/*document.getElementById("neko-visitors").innerHTML = `!!!! ${json.views} !!!!`;
    document.getElementById("created").innerHTML = `!!!! ${created} !!!!`;*/
	document.getElementById("updated").innerHTML = `Last updated: <br> ${updated}`;
	document.getElementById("followers").innerHTML =
		`Followers: ${json.followers}`;
};
getStats();
