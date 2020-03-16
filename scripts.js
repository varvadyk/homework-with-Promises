async function getRandomChinese(length) {
	let result = '';
	try {
		let i = 0;
		while (i < length) {
			let promise = new Promise((resolve) => {
				setTimeout(() => {
					const sign = String(Date.now())
					resolve(String.fromCharCode(sign));
				}, 50);
			});


			await promise.then((symbol) => {
				result += symbol;
			});
			i++;

		}
		console.log(result);
		return result;

	} catch (err) {
		alert(err);
	}
}
click.onclick = function () {
	console.log("Result")
	getRandomChinese(5)

}
