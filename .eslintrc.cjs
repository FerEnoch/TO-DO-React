module.exports = {
	env: { browser: true, es2020: true },
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'plugin:react-hooks/recommended'
	],
	parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
	settings: { react: { version: '18.2' } },
	plugins: [ 'react-refresh' ],
	rules: {
		'react-refresh/only-export-components': 'warn',
		'indent': [ 'error', 'tab' ],
		'linebreak-style': [ 'error', 'unix' ],
		'quotes': [ 'error',	'single' ],
		'jsx-quotes': [ 'error', 'prefer-single' ],
		'semi': [ 'error', 'always' ],
		'react/button-has-type': [ 'error', {
			'button': true,
			'submit': true,
			'reset': true
		}],
		'react/destructuring-assignment': [ 'error', 'always' ],
		'react/jsx-tag-spacing': [ 'error', {
			'beforeSelfClosing': 'proportional-always',
			'beforeClosing': 'never',
			'closingSlash': 'never',
			'afterOpening': 'never'
		}],
		'react/jsx-child-element-spacing': [ 'error' ],
		'react/jsx-curly-newline': [ 'error', {
			'multiline': 'consistent' 
		}],
		'spaced-comment': [ 'error', 'always' ],
		'comma-dangle': [ 'error', 'never' ],
		'array-bracket-spacing': [ 'error', 'always', {
			'singleValue': true,
			'objectsInArrays': false,
			'arraysInArrays': false
		}],
		'arrow-spacing': [ 'error', { 'before': true, 'after': true }],
		'block-spacing': [ 'error', 'always' ],
		'comma-spacing': [ 'error', {
			'before': false,
			'after': true
		}],
		'array-element-newline': [ 'error', {
			'ArrayExpression': 'consistent',
			'ArrayPattern': { 'minItems': 3 }
		}],
		'keyword-spacing': [ 'error', {
			'before': true,
			'after': true
		}],
		'object-curly-spacing': [ 'error', 'always' ],
		'react/hook-use-state': [ 'error', { 'allowDestructuredState': true }],
		'react/jsx-max-props-per-line': [ 'error', { 
			'maximum': 2, 
			'when': 'always'
		}],
		'react/self-closing-comp':	[ 'error', {
			'component': true,
			'html': true
		}],
		'react/jsx-closing-tag-location': [ 'error' ],
		'react/jsx-equals-spacing': [ 'error', 'never' ],
		'react/prop-types': 0,
		'no-unused-vars': [ 'warn', { 'vars': 'all' }]
	}
};
