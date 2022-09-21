export const SITE = {
	name: 'Zeister harmonie Lustrumconcert',

	origin: 'https://140jaar.kzhm.nl',
	basePathname: '/',

	title: 'Zeister Harmonie Lustrumconcert',
	description: 'Muziekshow met zandprinses, Lord of the Rings en nog veel meer',
	googleAnalyticsId: "G-KDQGVSQVZY",
	googleSiteVerificationId: 'y7I5qtd0gBrwYeeSpHdZ2HT50ytCfqqGzsGdQAf5msE'
};

export const BLOG = {
	disabled: false,
	postsPerPage: 4,

	blog: {
		disabled: false,
		pathname: 'blog', // blog main path, you can change this to "articles" (/articles)
	},

	post: {
		disabled: false,
		pathname: '', // empty for /some-post, value for /pathname/some-post 
	},

	category: {
		disabled: false,
		pathname: 'category', // set empty to change from /category/some-category to /some-category
	},

	tag: {
		disabled: false,
		pathname: 'tag', // set empty to change from /tag/some-tag to /some-tag
	},
};
