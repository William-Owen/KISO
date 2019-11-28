module.exports = (plop) => {

	// create your generators here
	plop.setGenerator("Component", {

		description: "A basic component",
		prompts: [

			{
				type: "input",
				name: "name",
				message: "Component Name",
			},
			{
				type: "confirm",
				name: "isLibrary",
				message: "Is this is a UI Library Component?",
			},
			{
				type: "confirm",
				name: "useProps",
				message: "Uses Props",
			},
			{
				type: "confirm",
				name: "useRedux",
				message: "Uses Redux",
			},

		], // array of inquirer prompts
		actions(data) {

			const actions = []

			if (data.isLibrary) {

				actions.push({
					type: "add",
					path: "src/components/library/{{name}}/{{name}}.js",
					templateFile: "plop-templates/component/component.hbs",
				})

				actions.push({
					type: "add",
					path: "src/components/library/{{name}}/{{name}}.doc.md",
					templateFile: "plop-templates/component/documentation.hbs",
				})

				actions.push({
					type: "add",
					path: "src/components/library/{{name}}/{{name}}.sass",
					templateFile: "plop-templates/component/style.hbs",
				})

				actions.push({
					type: "add",
					path: "src/components/library/{{name}}/{{name}}.stories.js",
					templateFile: "plop-templates/component/story.hbs",
				})

				actions.push({
					type: "add",
					path: "src/components/library/{{name}}/{{name}}.test.js",
					templateFile: "plop-templates/component/test.hbs",
				})

				actions.push({
					type: "add",
					path: "src/components/library/{{name}}/index.js",
					templateFile: "plop-templates/component/index.hbs",
				})

				actions.push({
					type: "modify",
					path: "src/components/library/index.js",
					pattern: "// -end",
					templateFile: "plop-templates/component/libraryIndexFragement.hbs",
				})

			} else {

				actions.push({
					type: "add",
					path: "src/components/app/{{name}}/{{name}}.js",
					templateFile: "plop-templates/component/component.hbs",
				})

				actions.push({
					type: "add",
					path: "src/components/app/{{name}}/{{name}}.doc.md",
					templateFile: "plop-templates/component/documentation.hbs",
				})

				actions.push({
					type: "add",
					path: "src/components/app/{{name}}/{{name}}.sass",
					templateFile: "plop-templates/component/style.hbs",
				})

				actions.push({
					type: "add",
					path: "src/components/app/{{name}}/{{name}}.stories.js",
					templateFile: "plop-templates/component/story.hbs",
				})

				actions.push({
					type: "add",
					path: "src/components/app/{{name}}/{{name}}.test.js",
					templateFile: "plop-templates/component/test.hbs",
				})

				actions.push({
					type: "add",
					path: "src/components/app/{{name}}/index.js",
					templateFile: "plop-templates/component/index.hbs",
				})

			}

			return actions

		},

	})

	// create your generators here
	plop.setGenerator("Page", {

		description: "A basic page",
		prompts: [

			{
				type: "input",
				name: "name",
				message: "Component Name",
			},

		], // array of inquirer prompts
		actions: [

			{
				type: "add",
				path: "src/components/pages/{{name}}/{{name}}.js",
				templateFile: "plop-templates/page/component.hbs",
			},

			{
				type: "add",
				path: "src/components/pages/{{name}}/{{name}}.doc.md",
				templateFile: "plop-templates/page/documentation.hbs",
			},

			{
				type: "add",
				path: "src/components/pages/{{name}}/{{name}}.sass",
				templateFile: "plop-templates/page/style.hbs",
			},

			{
				type: "add",
				path: "src/components/pages/{{name}}/{{name}}.test.js",
				templateFile: "plop-templates/page/test.hbs",
			},

			{
				type: "add",
				path: "src/components/pages/{{name}}/index.js",
				templateFile: "plop-templates/page/index.hbs",
			},

			{
				type: "modify",
				path: "src/components/pages/index.js",
				pattern: "// -end",
				templateFile: "plop-templates/page/pageIndexFragement.hbs",
			},

		], // array of actions

	})

}
