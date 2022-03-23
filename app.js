// set the initial count
let count = 0;

// select the value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
	btn.addEventListener("click", function (event) {
		const style = event.currentTarget.classList;
		if (style.contains("decrease")) {
			count--;
		} else if (style.contains("reset")) {
			count = 0;
		} else {
			count++;
		}
		if (count > 0) {
			value.style.color = "#12c712";
		}
		if (count < 0) {
			value.style.color = "#f52323";
		}
		if (count === 0) {
			value.style.color = "white";
		}
		value.textContent = count;
	});
});
