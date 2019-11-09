export default {
	subtract(curr, input) {
		/* eslint-disable no-console */
		if (curr === null || curr === undefined || input === undefined || input === null) return;

		// nature: max 7
		// will: max 6
		// health: max 6
		// circles: max 10
		// resources: max 10
		if (input.abilities)
			Object.keys(input.abilities).forEach((e) => {
				if (input.abilities[e]) {
					curr.abilities[e] -= input.abilities[e].level;
				}
			});

		for (let i in input.skills) {
			for (let j in curr.skills) {
				if (curr.skills[j].skill === input.skills[i].skill) {
					curr.skills[j].level -= input.skills[i].level;
				}
			}
		}

		for (let i in input.traits) {
			for (let j in curr.traits) {
				if (curr.traits[j].trait === input.traits[i].trait) {
					curr.traits[j].level -= input.traits[i].level;
				}
			}
		}
	},

	add(curr, input) {
		if (curr === null || curr === undefined || input === undefined || input === null) return;

		if (input.abilities)
			Object.keys(input.abilities).forEach((e) => {
				// console.log(e, curr.abilities[e], input.abilities[e].level);
				if (input.abilities[e]) {
					curr.abilities[e] += input.abilities[e].level;
				}
			});

		// skill max 6 min 2
		for (let i in input.skills) {
			let contains = false;
			for (let j in curr.skills) {
				if (curr.skills[j].skill === input.skills[i].skill) {
					contains = true;
					curr.skills[j].level += input.skills[i].level;
				}
			}
			console.log('contains: ', contains);
			if (!contains) {
				curr.skills.push(Object.assign({}, input.skills[i]));
			}
		}

		for (let i in input.traits) {
			let contains = false;

			for (let j in curr.traits) {
				if (curr.traits[j].trait === input.traits[i].trait) {
					contains = true;
					curr.traits[j].level += input.traits[i].level;
				}
			}
			if (!contains) {
				curr.traits.push(Object.assign({}, input.traits[i]));
			}
		}
	}
};
