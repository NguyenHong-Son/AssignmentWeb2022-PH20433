const contentList = [
    {
        id: 1,
        title:"Learn about the HTML language" ,
        date: "12 Feb 2019",
        text: "Express, Handlebars",
        paragraph: "HTML (short for HyperText Markup Language, or (Hypertext Markup Language) is a markup language designed to create web pages on the World Wide Web. It can be helped by technologies like CSS and JavaScript-like scripting languages.",
    },
    {
        id: 2,
        title:"Learn about Python language" ,
        date: "12 Feb 2019",
        text: "Express, Handlebars",
        paragraph: "Python is a language with a very bright appearance, clear structure, convenient for beginners and easy to learn; widely used in artificial intelligence development. Python's structure also allows the user to write code with minimal keystrokes.[25] In July 2018, van Rossum stepped down as leader in the Python language community after 30 years of work.[26][27]",
    },
    {
        id: 3,
        title:"What is a programmer?" ,
        date: "12 Feb 2019",
        text: "Express, Handlebars",
        paragraph: "Programmers (Developers) are understood as software engineers who will use different programming languages ​​to design, build, and maintain computer programs. A programmer can be compared to a conductor, who conducts an orchestra (programming code) to create a perfect piece of music (computer software).",
    },
    {
        id: 4,
        title:"Top 10 programming languages ​​to learn in 2022" ,
        date: "12 Feb 2019",
        text: "Express, Handlebars",
        paragraph: "The following are the top 10 most popular programming languages, calculated based on popularity, frequency of use as well as the number of job vacancies on the market, updated in 2022, sorted by order of popularity: JavaScript, Python, C/C++, Java, PHP, Swift, C#, Ruby, Objective-C, SQL",
    }
    
];
function showContents(Contents){
    if(!Array.isArray(Contents) || Contents.length == 0){
        return false;
    }
    let result = "";
    for(let i = 0 ; i < Contents.length; i++){
        const content = Contents[i];
        result += `
        <div class="content space-y-3 border-b-[3px] py-10">
                    <h2><a href="" class="text-[26px] md:text-3xl font-bold">${content.title}</a></h2>
                    <div class="flex items-center space-x-10">
                        <span class="text-base md:text-2xl">${content.date}</span>
                        <svg width="2" height="21" viewBox="0 0 2 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 0V21" stroke="black" />
                        </svg>
                        <span class="text-base md:text-2xl text-[#8695A4]">${content.text}</span>
                    </div>
                    <p class="text-base md:text-lg max-w-[682px]">${content.paragraph}</p>
                </div>
        `;
    }
    return result;
}
document.getElementById("contents").innerHTML = showContents(contentList);