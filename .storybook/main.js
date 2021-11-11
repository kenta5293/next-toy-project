module.exports = {
  "stories": [
    "../components/**/index.stories.@(js|jsx|ts|tsx|mdx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-docs"
  ],
}

/*
  ⭐️ main.js
   ∙ Storybook을 위한 config 설정이 담겨 있음.
   ∙ stories : story 파일이 프로젝트 내 어디에 어떤 형식의 파일로 위치하고 있는 지 명시.
   ∙ addons : Storybook에서 사용되는 plugin 시스템.
*/