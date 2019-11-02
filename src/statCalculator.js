export default {
	subtract(curr, input) {
		/* eslint-disable no-console */
		if (curr === null || curr === undefined || input === undefined || input === null) return;

		// nature: max 7
		// will: max 6
		// health: max 6
		// circles: max 10
		// resources: max 10
		Object.keys(curr.abilities).forEach((e) => {
			// console.log(e, curr.abilities[e], input.abilities[e].level);
			if (input.abilities[e]) {
				curr.abilities[e] -= input.abilities[e].level;
			}
		});
		// skill max 6 min 2
		// curr.skills.forEach((e) => {});
	},

	add(curr, input) {
		if (curr === null || curr === undefined || input === undefined || input === null) return;

		Object.keys(curr.abilities).forEach((e) => {
			// console.log(e, curr.abilities[e], input.abilities[e].level);
			if (input.abilities[e]) {
				curr.abilities[e] += input.abilities[e].level;
			}
		});
	}
};
