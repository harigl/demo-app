module.exports = {
	port: process.env.PORT || 3001,
	jwt: {
		secret: process.env.JWT_SECRET,
		expiresIn: '24h'
	},
	MYSQL: {
		DB: process.env.MYSQL_DB,
		USERNAME: process.env.MYSQL_USER_NAME,
		PASSWORD: process.env.MYSQL_PASSWORD,
		HOST: process.env.MYSQL_HOST,
		PORT: process.env.MYSQL_PORT
	},
	corsDomain: String(process.env.CORS_DOMIANS || '').split(',')
}
