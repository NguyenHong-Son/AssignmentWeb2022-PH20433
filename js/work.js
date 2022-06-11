const listContent = [
    {
        id: 1,
        title: "Building a high school website FTP",
        year: 2022,
        text: "Dashboard, User Experience Design",
        paragraph1: "This is the last Assignment of my high school web design course. And I took the idea of ​​high school FPT and then I built it using HTML and CSS language.",
        img1: "https://res.cloudinary.com/freelencer/image/upload/c_scale,h_460,w_681/v1654681377/ASSIGNMENT-WEB2022/SharedScreenshot_dxcabm.jpg",
        heading1: "Heading 1",
        heading2: "Heading 2",
        paragraph2: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        img2: "https://res.cloudinary.com/freelencer/image/upload/v1654618790/ASSIGNMENT-WEB2022/Rectangle_5_x4z089.png",
        img3: "https://res.cloudinary.com/freelencer/image/upload/v1654618992/ASSIGNMENT-WEB2022/Rectangle_6_q08uny.png",
    },
    {
        id: 2,
        title: "Building a FUHO sales page",
        year: 2022,
        text: "Dashboard, User Experience Design",
        paragraph1: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        img1: "https://res.cloudinary.com/freelencer/image/upload/c_scale,h_460,w_681/v1654681593/ASSIGNMENT-WEB2022/SharedScreenshot_dqn2wn.jpg",
        heading1: "Heading 1",
        heading2: "Heading 2",
        paragraph2: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        img2: "https://res.cloudinary.com/freelencer/image/upload/v1654618790/ASSIGNMENT-WEB2022/Rectangle_5_x4z089.png",
        img3: "https://res.cloudinary.com/freelencer/image/upload/v1654618992/ASSIGNMENT-WEB2022/Rectangle_6_q08uny.png",
    },
    {
        id: 3,
        title: "Website design for sales of Tiki",
        year: 2022,
        text: "Dashboard, User Experience Design",
        paragraph1: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        img1: "https://res.cloudinary.com/freelencer/image/upload/c_scale,h_460,w_681/v1654682403/ASSIGNMENT-WEB2022/SharedScreenshot_wzvfa2.jpg",
        heading1: "Heading 1",
        heading2: "Heading 2",
        paragraph2: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        img2: "https://res.cloudinary.com/freelencer/image/upload/v1654618790/ASSIGNMENT-WEB2022/Rectangle_5_x4z089.png",
        img3: "https://res.cloudinary.com/freelencer/image/upload/v1654618992/ASSIGNMENT-WEB2022/Rectangle_6_q08uny.png",
    },
    {
        id: 4,
        title: "Components",
        year: 2022,
        text: "Dashboard, User Experience Design",
        paragraph1: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        img1: "https://res.cloudinary.com/freelencer/image/upload/v1654618789/ASSIGNMENT-WEB2022/Rectangle_4_scf55e.png",
        heading1: "Heading 1",
        heading2: "Heading 2",
        paragraph2: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        img2: "https://res.cloudinary.com/freelencer/image/upload/v1654618790/ASSIGNMENT-WEB2022/Rectangle_5_x4z089.png",
        img3: "https://res.cloudinary.com/freelencer/image/upload/v1654618992/ASSIGNMENT-WEB2022/Rectangle_6_q08uny.png",
    },
];
const id = new URLSearchParams(window.location.search).get("id");

function showContents(contents){
    if(!Array.isArray(contents) || contents.length == ""){
        return false;
    }
    let result = "";
    const content = contents.find((item) => item.id == id);
    result = `
    <div class="mx-5 xl:mx-0">
                <div class="">
                    <h1 class=" text-[34px] font-bold max-w-[506px] mb-5">${content.title}</h1>
                </div>
                <div class="space-y-10">
                    <div class="flex items-center space-x-5">
                        <span class="text-lg bg-[#FF7C7C] rounded-xl text-white font-bold px-2">${content.year}</span>
                        <span class="text-xl">Dashboard, User Experience Design</span>
                    </div>
                    <p class="text-base max-w-2xl">${content.paragraph1}</p>
                    <div class="">
                        <img src="
                        ${content.img1}"
                            alt="">
                    </div>
                </div>
            </div>
            <div class="mt-10 mx-5 xl:mx-0">
                <div class="space-y-5">
                    <div class="">
                        <h4 class="text-3xl font-medium">${content.heading1}</h4>
                        <a href="" class="text-2xl font-medium">${content.heading2}</a>
                    </div>
                    <p class="text-base max-w-2xl">${content.paragraph2}</p>
                    <div class="">
                        <img src="
                       ${content.img2}"
                            alt="">
                        <img src="${content.img3}"
                            alt="">
                    </div>
                </div>
            </div>
    `;
    return result;
}
document.getElementById("contents").innerHTML = showContents(listContent);
