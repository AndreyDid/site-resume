import expenseApp from "../assets/images/expense-app.png"
import terminalsApp from "../assets/images/terminals-app.png"
import gitImg from "../assets/images/github.png"
import htmlImg from "../assets/images/skills/html.png"
import cssImg from "../assets/images/skills/css.png"
import jsImg from "../assets/images/skills/js.png"
import reactImg from "../assets/images/skills/react.png"

export const portfolioData = [
    {
        title: "Expense App",
        description: "Приложение для отслеживания расходов и доходов. Full-stack SPA. Pet-проект",
        url: "https://github.com/AndreyDid/expense-app",
        urlGitHubImg: gitImg,
        techs: "ReactJS, Redux, NodeJS, MongoDB",
        image: expenseApp,
        ghPages: ''
    },
    {
        title: "Terminals App",
        description: "Приложение для учета выполненной работы (сборка терминалов). Pet-проект",
        url: "https://github.com/AndreyDid/terminals",
        urlGitHubImg: gitImg,
        techs: "ReactJS, Redux, NodeJS, FireBase",
        image: terminalsApp,
        ghPages: "https://andreydid.github.io/terminals/"
    },
]

export const skillsData = [
    {
        title: "HTML5",
        image: htmlImg
    },
    {
        title: "CSS3",
        image: cssImg
    },{
        title: "JavaScript",
        image: jsImg
    },{
        title: "ReactJS",
        image: reactImg
    },
]