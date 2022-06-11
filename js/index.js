const contentList = [
    {
        id: 1,
        img: "https://res.cloudinary.com/freelencer/image/upload/v1654920244/ASSIGNMENT-WEB2022/macaroon-cookies-jv_msrvuc.jpg",
        title: "Building a high school website FTP",
        year: 2022,
        text: "HTML and CSS",
        paragraph: "This is the last Assignment of my high school web design course. And I took the idea of ​​high school FPT and then I built it using HTML and CSS language.",
    },
    {
        id: 2,
        img: "https://res.cloudinary.com/freelencer/image/upload/v1654920014/ASSIGNMENT-WEB2022/raspberry-good-fruit-plant-4k-um_ynmlzi.jpg",
        title: "Building a FUHO sales page",
        year: 2022,
        text: "Tailwindcss",
        paragraph: "This is the Lab3 lesson of the Web Presentation Technique, the idea is that a food site is Fuho. I built this interface in 2 languages ​​HTML and CSS in which I also know more about responsive design and tailwindcss framework.",
    },

    {
        id: 3,
        img: "https://res.cloudinary.com/freelencer/image/upload/v1654927787/tiki/coffee-cup-beans-4k-4c_aahh1m.jpg",
        title: "Website design for sales of Tiki",
        year: 2018,
        text: "Dashboard",
        paragraph: "This is a Tiki sales website, coded by myself in 3 languages ​​HTML, CSS, and Javascript. I used the tailwindcss framework to build it quickly.",
    },
    {
        id: 4,
        img: "https://res.cloudinary.com/freelencer/image/upload/v1654927787/tiki/christmas-cookies-jn_xsmfvw.jpg",
        title: "Build a sales website",
        year: 2018,
        text: "Dashboard",
        paragraph: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
        id: 5,
        img: "https://res.cloudinary.com/freelencer/image/upload/v1654927787/tiki/coffee-cup-drink-notebook-table-dp_aaypgh.jpg",
        title: "Build a sales website",
        year: 2018,
        text: "Dashboard",
        paragraph: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
];
function showContents(Contents){
    if(!Array.isArray(Contents) || Contents.length == 0){
        return false;
    }
    let result = "";
    for(let i = 0 ; i < Contents.length; i++){
        const content = Contents[i];
        result += `
        <div class="md:flex md:space-x-5 border-b-[3px] py-5">
          <div class="">
            <img
              src="${content.img}"
              alt="" class="md:max-w-[246px] md:min-h-[175px] max-w-[
            339px] min-h-[
            230px] mx-auto md:mx-0 rounded-md">
          </div>
          <div class="space-y-5 pt-5 md:pt-0">
            <a href="./work.html?id=${content.id}" class="text-[26px] font-bold">${content.title}</a>
            <div class="flex items-center space-x-5">
              <span class="text-lg font-black bg-[#142850] rounded-xl px-3 text-white">${content.year}</span>
              <span class="text-xl text-[#8695A4]">${content.text}</span>
            </div>
            <p class="text-base text-justify">${content.paragraph}</p>
          </div>
        </div>
        `;
    }
    return result;
}
document.getElementById("contents").innerHTML = showContents(contentList);