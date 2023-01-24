module.exports = {
	userId: 12,
	api: {
		// eslint-disable-next-line no-undef
		baseUrl: `http://localhost:${process.env.REACT_APP_ENVIRONMENT === "mirage" ? "3001" : "3000"}/user`,
	},
};