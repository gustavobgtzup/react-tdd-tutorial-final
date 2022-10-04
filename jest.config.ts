import type { Config } from 'jest';

const config: Config = {
	clearMocks: true,
	collectCoverage: true,
	coverageDirectory: 'coverage',
	coverageProvider: 'v8',
	testEnvironment: 'jsdom',
	transform: {
		'^.+\\.(t|j)sx?$': [
			'@swc/jest',
			{
				jsc: {
					parser: {
						syntax: 'typescript',
						tsx: true,
						decorators: true,
					},
					keepClassNames: true,
					transform: {
						legacyDecorator: true,
						decoratorMetadata: true,
						react: {
							runtime: 'automatic',
						},
					},
				},
				module: {
					type: 'es6',
					noInterop: false,
				},
			},
		],
	},
	setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
	moduleNameMapper: {
		'\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
			'<rootDir>/__mocks__/fileMock.js',
	},
};

export default config;
