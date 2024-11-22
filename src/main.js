import "@fontsource-variable/inter";
import "@fontsource-variable/jetbrains-mono";
import "./style.css";

const values = document.querySelectorAll("td");
const snackbar = document.getElementById("snackbar");

for (const value of values) {
	value.addEventListener("click", async () => {
		await navigator.clipboard.writeText(value.textContent);
		snackbar.classList.add("show");

		setTimeout(() => {
			snackbar.classList.remove("show");
		}, 2300);
	});
}
