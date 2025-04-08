const navList = [
	"Homepage",
	"Projects",
	"Articles",
	"Contact"
];

const projectList = [
	"HTML Only Portfolio",
	"Calculator",
	"Quiz App",
	"Countdown Timer",
	"Product Upcoming Page"
];

function addToEleFromList(ele, lst, litype) {
	if (!ele) { return; }
	lst.forEach((i) => {
		const liEle = = document.createElement(litype);
		liEle.innerHTML = i;
		ele.appendChild(liEle);
	});
}

const menuEle = document.querySelector("#pages");
if (menuEle) {
	navList.forEach((i) => {
		const linkEle = document.createElement("a");
		linkEle.href = "./" + i + ".html";
		if(i === "Homepage") { linkEle.href = "./index.html";}
		const listEle = document.createElement("li");
		listEle.innerHTML = i;
		linkEle.appendChild(listEle);
		menuEle.appendChild(linkEle);
	});
};

const projectEle = document.querySelector("#project-list");
addToEleFromList(projectEle, projectList, "li");
