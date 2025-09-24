const heroSection = document.querySelector(".hero-section");

window.addEventListener("scroll", ()=> {
    if(window.scrollY>50){
        heroSection.classList.add("scrolled");
    }
});



const dataCardsAboutMe = [
    {title: "Takmir Masjid Al-Huriyah", desc: "Head of Imarah Division", img:"asset/takmir.jpg"},
    {title: "Putra Putri SMAN 1 Glagah", desc: "Leader of Pulsa Ganesha", img:"asset/pulsa.jpg"},
    {title: "HMIF", desc:"Technology Subdivision Staff", img:"asset/mediatek.jpg"},
    {title: "RyperLab", desc:"Practicum Assistant", img:"asset/ryperlab.jpg"}
]


const container = document.getElementById("card-container");

dataCardsAboutMe.forEach(item =>  {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
    <img src="${item.img}" alt="${item.title}">
    <h3>${item.title}</h3>
    <p>${item.desc}</p> 
    `;
    container.appendChild(card)
});


const navbar = document.querySelector('nav');

let lastScrollTop = 0;

window.addEventListener("scroll", function(){
    let scrollTop = this.window.pageYOffset || this.document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        if (scrollTop > 100) {
            navbar.classList.add("nav-hidden");
        }
    }else {
        navbar.classList.remove("nav-hidden");
    }

    lastScrollTop = scrollTop;
});


const projectCardContainer = document.querySelector(".project-card");

const projects = [
    {
        title: "informatics website",
        description: "This project is the development of a company profile website for the Informatics Study Program. The website is designed to provide comprehensive information about the program, including its vision and mission, academic curriculum, faculty members, facilities, achievements, and student activities.",
        imageUrl: "asset/informatics.png",
        projectUrl: "informatics.hmifunej.id"
    },

    {
        title: "Neceeta",
        description:"This project is an e-commerce website developed by our team for a web development competition. The website is designed to provide a seamless online shopping experience with features that support both customers and administrators.",
        imageUrl: "asset/neceeta.png",
        projectUrl: "neceeta.vercel.app"
    },

    {
        title:"naskun mama eli",
        description:"This project is an e-commerce website that I developed as part of an assignment for my Entrepreneurship (KWU) subject during high school. The purpose of the project was to combine entrepreneurial concepts with technology by creating a digital platform that simulates online business activities",
        imageUrl:"asset/nakunmamaeli.png",
        projectUrl: "naskunmamaeli.vercel.app"
    },

    {
        title:"Mbok Wo Reserve",
        description:"This project is a desktop application developed using Windows Forms (WinForms) for managing table reservations at Warung Makan Ayam Pedes Mbok Wo. The system was designed to simplify the reservation process, improve customer service efficiency, and assist the restaurant in organizing seating arrangements.",
        imageUrl:"asset/mbokwo.png",
        projectUrl:"https://github.com/farhanzsani/Final-Project-PBO"
    }
    
]
projects.forEach(project => {
    const card = document.createElement("div");
    card.className = "project-card-item";
    card.innerHTML = `
        <img src="${project.imageUrl}" alt="${project.title}">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <a href="https://${project.projectUrl}" target="_blank">View Project</a>
    `;
    projectCardContainer.appendChild(card);
});
