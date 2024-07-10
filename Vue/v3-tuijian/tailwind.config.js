/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    // ** 是一个 glob 表达式，它会匹配 src/ 目录下的所有子目录
    "./src/**/*.{vue,js,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

