var defaultConfig = function () {
	return {
		logger: false,
		auth: false,
		s3HtmlCache: false,
		redis: false,
		port: 3000
	};
};

exports = module.exports = function () {
	var env = process.env;
	var config = defaultConfig();
	if ((env.PRERENDER_LOGGER && env.PRERENDER_LOGGER.toString() !== '' && env.PRERENDER_LOGGER.toString().toLowerCase() !== 'false')) {
		config.logger = true;
	}
	if ((env.BASIC_AUTH_USERNAME && env.BASIC_AUTH_USERNAME !== '') && (env.BASIC_AUTH_PASSWORD && env.BASIC_AUTH_PASSWORD !== '')) {
		config.auth = true;
	}
	if ((env.AWS_ACCESS_KEY_ID && env.AWS_ACCESS_KEY_ID !== '') && (env.AWS_SECRET_ACCESS_KEY && env.AWS_SECRET_ACCESS_KEY !== '') && (env.S3_BUCKET_NAME && env.S3_BUCKET_NAME !== '')) {
		config.s3HtmlCache = true;
	}

	if ((env.REDISTOGO_URL && env.REDISTOGO_URL !== '') || (env.REDISCLOUD_URL && env.REDISCLOUD_URL !== '') || (env.REDISGREEN_URL && env.REDISGREEN_URL !== '') || (env.REDIS_URL && env.REDIS_URL !== '')) {
		config.redis = true;
	}

	return config;
};
