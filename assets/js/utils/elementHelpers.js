export function toggleElementClass(el, toRemove, toAdd) {
	toRemove.forEach(className => {
		el.classList.remove(className);
	});

	toAdd.forEach(className => {
		el.classList.add(className);
	});
}