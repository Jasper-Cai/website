/* Our Team js */

var ourTeamSectionTwo = [
    {
        "imageUrl": "https://demo.themesuite.com/automotive-wp/wp-content/uploads/2014/09/team11.jpg",
        "name": "William Dean",
        "position": "Chief Executive Officer / CEO",
        "describe": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor aenean massa. Cum sociis numquasa mode tempora posuere feugiat.",
        "workPhone": "1-800-123-4567 - Extension 114",
        "telephone": "1-902-361-7714",
        "email": "william@automotivetemplate.com",
        "socialMedia":"icon.jpg",
    },
    {
        "imageUrl": "https://demo.themesuite.com/automotive-wp/wp-content/uploads/2014/09/team21.jpg",
        "name": "Leah Jennings",
        "position": "Chief Financial Officer / CFO",
        "describe": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor aenean massa. Cum sociis numquasa mode tempora posuere feugiat.",
        "workPhone": "1-800-123-4567 - Extension 107",
        "telephone": "1-902-342-0864",
        "email": "leah@automotivetemplate.com",
        "socialMedia":"icon.jpg",
    },
    {
        "imageUrl": "https://demo.themesuite.com/automotive-wp/wp-content/uploads/2014/09/team31.jpg",
        "name": "Zachary Hale",
        "position": "Lead Sales Manager",
        "describe": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor aenean massa. Cum sociis numquasa mode tempora posuere feugiat.",
        "workPhone": "1-800-123-4567 - Extension 119",
        "telephone": "1-902-832-3702",
        "email": "zachary@automotivetemplate.com",
        "socialMedia":"icon.jpg",
    },
]
function OurTeam_threeImage(){
    let outHtml = "";
    for(let i = 0; i < ourTeamSectionTwo.length; i++){
        outHtml += `
        <div class="column col-sm-12 col-md-12 col-lg-4 manager-infor">
            <div class="manager-img">
            <img src="${ourTeamSectionTwo[i].imageUrl}" alt="William Dean" width="300" height="200">
                <div>
                    <h4><strong>${ourTeamSectionTwo[i].name}</strong></h4>
                    <p>${ourTeamSectionTwo[i].position}</p>
                </div>
                <hr>
                <div>
                    <p>${ourTeamSectionTwo[i].describe}</p>
                    <ul>
                        <li><span>${ourTeamSectionTwo[i].workPhone}</span></li>
                        <li><span>${ourTeamSectionTwo[i].telephone}</span></li>
                        <li><a class="email" href="">${ourTeamSectionTwo[i].email}</a></li>
                    </ul>
                </div>
                <hr>
                <div>
                <img src="${ourTeamSectionTwo[i].socialMedia}" width="250px">
                </div>
            </div>
        </div>
        `;
    }
    return outHtml;
}

var ourTeamSectionThree = [
    {
        "imageUrl": "https://demo.themesuite.com/automotive-wp/wp-content/uploads/2014/09/team4-lrg1.jpg",
        "name": "Luca Sanderson",
        "position": "Sales Representative",
        "describe": "Lorem ipsum dolor sit amet, paleotousia consectetuer adipiscing elit. Aenean com.",
        "workPhone": "1-800-123-4567 - Extension 105",
        "telephone": "1-902-544-4415",
        "email": "luca@automotivetemplate.com",
        "socialMedia":"icon.jpg",
    },
    {
        "imageUrl": "https://demo.themesuite.com/automotive-wp/wp-content/uploads/2014/09/team5-lrg1.jpg",
        "name": "Abby Myers",
        "position": "Sales Representative",
        "describe": "Lorem ipsum dolor sit amet, paleotousia consectetuer adipiscing elit. Aenean com.",
        "workPhone": "1-800-123-4567 - Extension 123",
        "telephone": "1-902-361-7267",
        "email": "abby@automotivetemplate.com",
        "socialMedia":"icon.jpg",
    },
    {
        "imageUrl": "https://demo.themesuite.com/automotive-wp/wp-content/uploads/2014/09/team6-lrg1.jpg",
        "name": "Connor Wyatt",
        "position": "Sales Representative",
        "describe": "Lorem ipsum dolor sit amet, paleotousia consectetuer adipiscing elit. Aenean com.",
        "workPhone": "1-800-123-4567 - Extension 111",
        "telephone": "1-902-544-4415",
        "email": "connor@automotivetemplate.com",
        "socialMedia":"icon.jpg",
    },
    {
        "imageUrl": "https://demo.themesuite.com/automotive-wp/wp-content/uploads/2014/09/team7-lrg1.jpg",
        "name": "Sarah Thomas",
        "position": "Sales Representative",
        "describe": "Lorem ipsum dolor sit amet, paleotousia consectetuer adipiscing elit. Aenean com.",
        "workPhone": "1-800-123-4567 - Extension 108",
        "telephone": "1-902-544-4415",
        "email": "sarah@automotivetemplate.com",
        "socialMedia":"icon.jpg",
    },
]
function OurTeam_fourImage(){
    let outHtml = "";
    for(let i = 0; i < ourTeamSectionThree.length; i++){
        outHtml += `
        <div class="column col-sm-12 col-md-6 col-lg-3 col-xl-3 sales-infor">
            <div class="sales-infor-img">
                <img src="${ourTeamSectionThree[i].imageUrl}" alt="William Dean" height="200">
                <div>
                    <h4><strong>${ourTeamSectionThree[i].name}</strong></h4>
                    <p>${ourTeamSectionThree[i].position}</p>
                </div>
                <hr>
                <div>
                    <p>${ourTeamSectionThree[i].describe}</p>
                    <ul>
                        <li><span>${ourTeamSectionThree[i].workPhone}</span></li>
                        <li><span>${ourTeamSectionThree[i].telephone}</span></li>
                        <li><a class="email" href="">${ourTeamSectionThree[i].email}</a></li>
                    </ul>
                </div>
                <hr>
                <div>
                    <img src="${ourTeamSectionThree[i].socialMedia}" width="200px">
                </div>
            </div>
        </div>
        `;
    }
    return outHtml;
}

document.addEventListener("readystatechange",function(event){
    if(event.target.readyState == "interactive"){
        if(document.getElementById("OurTeam_threeImage")!= null){
            document.getElementById("OurTeam_threeImage").innerHTML = OurTeam_threeImage();
        }
        if(document.getElementById("OurTeam_fourImage")!= null){
            document.getElementById("OurTeam_fourImage").innerHTML = OurTeam_fourImage();
        }
    }
})