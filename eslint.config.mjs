// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
	// Your custom configs here
	rules: {
		'indent': ['error', '4'],
		'semi': ['error', 'never'],
	}
)
