const npmUserPackages = require('npm-user-packages')
const axios = require('axios')

const getDonwloads = async (name, period) => {
	return await axios({
		method: 'GET',
		url: `https://api.npmjs.org/downloads/point/${period}/${name}`,
	}).then((res) => {
		if (res.data) {
			return res.data.downloads || 0
		}
		return 0
	}).catch(() => {
		return 0
	})
}

module.exports = async (author, period) => {
	var packages = await npmUserPackages(author)
	for (var pkg of packages) {
		pkg.downloads = await getDonwloads(pkg.name, period)
	}
	packages.sort((pkgA, pkgB) => pkgB.downloads - pkgA.downloads)
	return packages
}
