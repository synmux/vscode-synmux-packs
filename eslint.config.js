import config from '@hyperupcall/scripts-nodejs/config-eslint.js'

export default [
	...config,
	// VS Code reads theme files as JSONC; the bundled upstream themes contain comments.
	{
		files: ['pack-decoration-bundled-themes/themes/**/*.json'],
		language: 'json/jsonc',
		languageOptions: { allowTrailingCommas: true },
	},
]
