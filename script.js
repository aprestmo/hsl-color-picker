const main = document.querySelector("main");
const hueBg = document.querySelector("#hue-bg");
const hueText = document.querySelector("#hue-text");
const saturationBg = document.querySelector("#saturation-bg");
const saturationText = document.querySelector("#saturation-text");
const lightnessBg = document.querySelector("#lightness-bg");
const lightnessText = document.querySelector("#lightness-text");

const bgFooter = document.querySelector("div:first-child code");
const textFooter = document.querySelector("div:last-child code");

codeTags = document.querySelectorAll("code");

main.style.setProperty("--hue-bg", hueBg.value);
main.style.setProperty("--hue-text", hueText.value);
main.style.setProperty("--saturation-bg", saturationBg.value + "%");
main.style.setProperty("--saturation-text", saturationText.value + "%");
main.style.setProperty("--lightness-bg", lightnessBg.value + "%");
main.style.setProperty("--lightness-text", lightnessText.value + "%");

const hueBgValue = getComputedStyle(hueBg).getPropertyValue("--hue-bg");
const saturationBgValue = getComputedStyle(saturationBg).getPropertyValue(
	"--saturation-bg"
);
const lightnessBgValue = getComputedStyle(lightnessBg).getPropertyValue(
	"--lightness-bg"
);
bgFooter.innerText = `background-color: hsl(${hueBgValue} ${saturationBgValue} ${lightnessBgValue});`;

const hueTextValue = getComputedStyle(hueText).getPropertyValue("--hue-text");
const saturationTextValue = getComputedStyle(saturationText).getPropertyValue(
	"--saturation-text"
);
const lightnessTextValue = getComputedStyle(lightnessText).getPropertyValue(
	"--lightness-text"
);
textFooter.innerText = `color: hsl(${hueTextValue} ${saturationTextValue} ${lightnessTextValue});`;

document.addEventListener("input", (e) => {
	switch (e.target.id) {
		case "hue-bg":
			main.style.setProperty("--hue-bg", e.target.value);
			break;
		case "saturation-bg":
			main.style.setProperty("--saturation-bg", e.target.value + "%");
			break;
		case "lightness-bg":
			main.style.setProperty("--lightness-bg", e.target.value + "%");
			break;
		case "hue-text":
			main.style.setProperty("--hue-text", e.target.value);
			break;
		case "saturation-text":
			main.style.setProperty("--saturation-text", e.target.value + "%");
			break;
		case "lightness-text":
			main.style.setProperty("--lightness-text", e.target.value + "%");
			break;
		default:
			console.log("nope");
	}

	const hueBgValue = getComputedStyle(hueBg).getPropertyValue("--hue-bg");
	const saturationBgValue = getComputedStyle(saturationBg).getPropertyValue(
		"--saturation-bg"
	);
	const lightnessBgValue = getComputedStyle(lightnessBg).getPropertyValue(
		"--lightness-bg"
	);
	bgFooter.innerText = `background-color: hsl(${hueBgValue} ${saturationBgValue} ${lightnessBgValue});`;

	const hueTextValue = getComputedStyle(hueText).getPropertyValue("--hue-text");
	const saturationTextValue = getComputedStyle(saturationText).getPropertyValue(
		"--saturation-text"
	);
	const lightnessTextValue = getComputedStyle(lightnessText).getPropertyValue(
		"--lightness-text"
	);
	textFooter.innerText = `color: hsl(${hueTextValue} ${saturationTextValue} ${lightnessTextValue});`;
});

// Copy CSS code
document.addEventListener("click", async (event) => {
	if (!event.target.matches("code")) return;
	const text = event.target.innerText;

	try {
		await navigator.clipboard.writeText(text);
		event.target.innerText = "Copied to clipboard 📋";
		setTimeout(() => {
			event.target.innerText = text;
		}, 1000);
	} catch (err) {
		console.error("Kunne ikke kopiere!", err);
	}
});
