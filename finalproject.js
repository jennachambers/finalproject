(function() {

	d3.select("#step-two")
		.on('stepin', function () {
			d3.select("#columbia-image")
				.attr("src", "firms_increase_afro.png")
		})

	d3.select("#step-one")
		.on('stepin', function () {
			d3.select("#columbia-image")
				.attr("src", "firms_increase.png")
		})

	d3.select("#blocks-step-one")
		.on('stepin', function () {
			d3.select("#blocks")
				.attr("src", "women_increase.png")
		})
	d3.select("#blocks-step-two")
		.on('stepin', function () {
			d3.select("#blocks")
				.attr("src", "women_increase_afro.png")
		})
	d3.select("#blocks-step-three")
		.on('stepin', function () {
			d3.select("#blocks")
				.attr("src", "")
		})
	d3.select("#blocks-step-three")
		.on('stepin', function () {
			d3.select("#blocks")
				.attr("src", "")
		})


})()