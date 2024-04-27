/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
	app() {
		return {
			home: "aws",
			name: "sst-ion-zombies-repro",
			providers: {
				aws: true,
			},
			removal: "remove",
		};
	},
	async run() {
		const fn = new sst.aws.Function("Fn", {
			handler: "src/index.handler",
			url: {
				cors: false,
			},
		});

		return {
			url: fn.url,
		};
	},
});
