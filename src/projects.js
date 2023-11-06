const projects = [
    { name: "KUMPAS", tags: ["UI/UX", "AI/ML", "Deep Learning"], link: "https://bit.ly/45sw8BK", description: "<b>Kumpas</b> empower deaf individuals by improving their ability to communicate with the hearing population and aims to help parents, teachers, and children learn and communicate through Filipino Sign Language." },
    { name: "MNIST Classifier", tags: ["Data Science", "AI/ML", "Deep Learning"], link: "https://bit.ly/3PS8o4F", description: "A <b>Machine Learning model</b> that I built to recognize handwritten numbers. It uses convolutional neural networks to recognize patterns with the hand writing." },
    { name: "Karachi Advanced Weather Prediction", tags: ["Data Science", "AI/ML", "Deep Learning"], link: "https://bit.ly/3OZrYM1", description: "An <b>Omdena Project</b> that I am contributing to, we are working to create a better weather forecasting model to help predict disasters. I am tasked to do Exploratory Data Analysis on the different features that affects the weather, mainly temperature." },
    // { name: "BlockED", tags: ["UI/UX", "Web3"], link: "https://bit.ly/45fvaZL", description: "<b>BlockED</b> is Decentralized Web3 App we designed and presented during the Web3 Xircus Hackathon. A Decentralized and gamified learning platform." },
    { name: "CAIOU", tags: ["UI/UX"], link: "https://bit.ly/3P3cnuZ", description: "<b>CAIOU</b> is a redesigned tutoring platform we made for the Hackada platform redesign competition. It is a platform for Learners to find tutors for specific skills and fields that the want to learn." },
    { name: "DASIG", tags: ["UI/UX", "Web Scraping", "NLP"], link: "https://bit.ly/47GdiZK", description: "<b>Dasig</b> is a desktop application that me and my team developed. It is a job matching application that uses web scraping tools and nlp tool kits to process the data collected and rate how compatible it is to the user." },
    { name: "Heart Failure Prediction", tags: ["Data Science", "AI/ML"], link: "https://bit.ly/3qM5cxM", description: "A <b>Data science project</b> I did that explores the different factors that affects heart failure. I tested different machine learning algorithms to predict the likelihood of heart failure." },

]

function loadProjects(){
    var container = document.getElementById("projects-container")
    for(let i=0;i<projects.length;i++){
        let projectDiv = document.createElement('div')
        projectDiv.className += "project"
        let title = document.createElement('h2')
        title.innerHTML = projects[i].name
        projectDiv.appendChild(title)
        let tagContainer = document.createElement('div')
        tagContainer.className += "tag-container"
        for (let j=0; j < projects[i].tags.length; j++){
            let tag = document.createElement('div')
            tag.className += "tag"
            tag.innerHTML = projects[i].tags[j]
            tagContainer.appendChild(tag)
        }
        projectDiv.appendChild(tagContainer)
        let link = document.createElement('p')
        link.innerHTML += "<a href=\"" + projects[i].link + "\"> <b>Project Link</b> </a>"
        projectDiv.appendChild(link)
        let description = document.createElement('p')
        description.innerHTML = projects[i].description
        projectDiv.appendChild(description)
        container.appendChild(projectDiv)
    }
}

loadProjects()