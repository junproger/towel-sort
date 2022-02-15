
// You should implement your task here.

module.exports = function towelSort (matrix) {
	let tws = [];
	if (Array.isArray(matrix)) {
		tws = matrix;
		if (tws.length !== 0) {
			for (let t of tws) {
				if (tws.indexOf(t,0) % 2) {
					let i = t.length - 1;
					for (let s of t) {
						let r = t[i];
						if (i > ((t.length -1) / 2)) {
							t[i] = s;
							t[t.indexOf(s,0)] = r;
							i = i - 1;
						};
					};
				};
			};
			tws = tws.reduce((a, b) => a.concat(b));
		} else {
			tws = [];
		};
	} else {
		tws = [];
	};
	return tws;
};
