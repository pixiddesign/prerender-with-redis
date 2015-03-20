var defaultConfig = function () {
	return {
		logger: false,
		auth: false,
		s3HtmlCache: false,
		redis: false
	};
};

exports = module.exports = function () {
	var env = process.env;
	var config = defaultConfig();
	if ((env.PRERENDER_LOGGER && env.PRERENDER_LOGGER.toString() !== '' && env.PRERENDER_LOGGER.toString().toLowerCase() !== 'false')) {
		config.logger = true;
	}
	if ((env.BASIC_AUTH_USERNAME && env.BASIC_AUTH_USERNAME.toString() !== '' && env.BASIC_AUTH_USERNAME.toString().toLowerCase() !== 'false') && (env.BASIC_AUTH_PASSWORD && env.BASIC_AUTH_PASSWORD.toString() !== '' && env.BASIC_AUTH_PASSWORD.toString().toLowerCase() !== 'false')) {
		config.auth = true;
	}
	if ((env.AWS_ACCESS_KEY_ID && env.AWS_ACCESS_KEY_ID.toString() !== '' && env.AWS_ACCESS_KEY_ID.toString().toLowerCase() !== 'false') && (env.AWS_SECRET_ACCESS_KEY && env.AWS_SECRET_ACCESS_KEY.toString() !== '' && env.AWS_ACCESS_KEY_ID.toString().toLowerCase() !== 'false') && (env.S3_BUCKET_NAME && env.S3_BUCKET_NAME.toString() !== '' && env.S3_BUCKET_NAME.toString().toLowerCase() !== 'false')) {
		config.s3HtmlCache = true;
	}

	if ((env.REDISTOGO_URL && env.REDISTOGO_URL.toString() !== '' && env.REDISTOGO_URL.toString().toLowerCase() !== 'false') || (env.REDISCLOUD_URL && env.REDISCLOUD_URL.toString() !== '' && env.REDISTOGO_URL.toString().toLowerCase() !== 'false') || (env.REDISGREEN_URL && env.REDISGREEN_URL.toString() !== '' && env.BREDISGREEN_URL.toString().toLowerCase() !== 'false') || (env.REDIS_URL && env.REDIS_URL.toString() !== '' && env.REDIS_URL.toString().toLowerCase() !== 'false')) {
		config.redis = true;
	}

	if (config.logger) {
		console.log("Configuration active", config);
	}
	return config;
};
