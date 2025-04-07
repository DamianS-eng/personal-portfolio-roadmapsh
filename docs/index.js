const navList = [
	"Homepage",
	"Projects",
	"Articles",
	"Contact"
];

const projectList = [
  
];

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
