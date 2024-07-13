export default {
    plugins: [],
    theme: {
    extend: {},
    },
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
	],
    purge: ["./index.html",'./src/**/*.{svelte,js,ts}'], //for unused css
    variants: {
      	extend: {},
    },
    darkmode: false, // or 'media' or 'class'
  }