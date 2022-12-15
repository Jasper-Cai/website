/* index js */

var indexSectionTwo=[
    {
       "imageUrl" :"/image/home-sample1.jpg",
       "title":"FACTORY READY FOR TRACK DAY",
       "describe":"Sea veniam lucilius neglegentur ad, an per sumo volum voluptatibus. Qui cu everti repudiare. Eam ut cibo nobis aperiam, elit qualisque at cum. Possit antiopam id est. Illud delicata ea mel, sed novum mucius id. Nullam qua."
    },
    {
        "imageUrl" :"/image/home-sample2.jpg",
        "title":"SPORT UTILITY FOR THE FAMILY",
        "describe":"Sea veniam lucilius neglegentur ad, an per sumo volum voluptatibus. Qui cu everti repudiare. Eam ut cibo nobis aperiam, elit qualisque at cum. Possit antiopam id est. Illud delicata ea mel, sed novum mucius id. Nullam qua."
     },
     {
        "imageUrl" :"/image/home-sample3.jpg",
        "title":"MAKE AN EXECUTIVE STATEMENT",
        "describe":"Sea veniam lucilius neglegentur ad, an per sumo volum voluptatibus. Qui cu everti repudiare. Eam ut cibo nobis aperiam, elit qualisque at cum. Possit antiopam id est. Illud delicata ea mel, sed novum mucius id. Nullam qua."
     }
]
function home_top_threeImage(){
    let outHtml = "";
    for(let i = 0; i < indexSectionTwo.length; i++){
        outHtml += `
        <div>
            <div class="column product_preview_item">
                <img src="${indexSectionTwo[i].imageUrl}" alt="Porsche 918"/>
                <h3>${indexSectionTwo[i].title}</h3>
                <p>${indexSectionTwo[i].describe}</p>
            </div>
        </div>
        `;              
    }
    return outHtml;
}

var indexSectionThree=[
    {
       "imageUrl": "icon-1.PNG",
        "title": "Results Driven",
        "describe":"Sed ut perspiciatis unde om nis natus error sit volup atem accusant dolorem que laudantium. Totam aperiam, eaque ipsa quae ai.",
    },
    {
        "imageUrl": "icon-2.PNG",
        "title": "Proven Technology",
        "describe":"Sed ut perspiciatis unde om nis natus error sit volup atem accusant dolorem que laudantium. Totam aperiam, eaque ipsa quae ai.",
     },
     {
        "imageUrl": "icon-3.PNG",
        "title": "Winning Culture",
        "describe":"Sed ut perspiciatis unde om nis natus error sit volup atem accusant dolorem que laudantium. Totam aperiam, eaque ipsa quae ai.",
     },
     {
        "imageUrl": "icon-4.PNG",
        "title": "Winning Culture",
        "describe":"Sed ut perspiciatis unde om nis natus error sit volup atem accusant dolorem que laudantium. Totam aperiam, eaque ipsa quae ai.",
     }
]
function home_middle_feature(){
    let outHtml = "";
    for (let i = 0; i < indexSectionThree.length; i++){
        outHtml += `
        <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="feature-item">
                <img src="${indexSectionThree[i].imageUrl}" alt="icon-1"/>
                <h3>${indexSectionThree[i].title}</h3>
                <p>${indexSectionThree[i].describe}</p>
            </div>
        </div>
        `;
    }
    return outHtml;
}

var indexSectionFive=[
    {
       "imageUrl" :"https://demo.themesuite.com/automotive-wp/wp-content/uploads/2014/10/28-touring-1-167x119.jpg",
       "title":"2013 BMW 328i Touring Edition",
       "describe":"No owners, Brand new.",
       "describe2":"No owners, Brand new.",
       "price":"$55,000"
    },
    {
        "imageUrl" :"https://demo.themesuite.com/automotive-wp/wp-content/uploads/2014/10/28-touring-1-167x119.jpg",
        "title":"2013 BMW 328i Touring Edition",
        "describe": "No owners, Brand new.",
        "price":"$55,000"
     },
     {
        "imageUrl" :"https://demo.themesuite.com/automotive-wp/wp-content/uploads/2014/10/28-touring-1-167x119.jpg",
        "title":"2013 BMW 328i Touring Edition",
        "describe": "No owners, Brand new.",
        "price":"$55,000"
     },
     {
        "imageUrl" :"https://demo.themesuite.com/automotive-wp/wp-content/uploads/2014/10/28-touring-1-167x119.jpg",
        "title":"2013 BMW 328i Touring Edition",
        "describe": "No owners, Brand new.",
        "price":"$55,000"
     },
     {
        "imageUrl" :"https://demo.themesuite.com/automotive-wp/wp-content/uploads/2014/10/28-touring-1-167x119.jpg",
        "title":"2013 BMW 328i Touring Edition",
        "describe": "No owners, Brand new.",
        "price":"$55,000"
     }
]
function home_middle_fiveImage(){
    let outHtml="";
    outHtml += ' <div class="col-lg-2 col-md-2 col-sm-4">';
    outHtml += ' <h5 style="color:#F00;">Recent Vehicles</h5>';
    outHtml += ' <p>Browse through the vast selection of vehicles that have recently been added to our inventory.</p>';
    outHtml += ' </div>';
    outHtml += ' <div class="col-lg-10 col-md-10 col-sm-8 recent-vehicles">';
    outHtml += ' <div class="row">';
    for(let i = 0;i < indexSectionFive.length; i++){
        outHtml += `
            <div class="col-lg-2 col-md-2 col-sm-8 recent-vehicles-infor">
                <a href="">
                    <div class="recent-vehicles-item">
                        <img src="${indexSectionFive[i].imageUrl}" alt="BMW">
                        <div style="background-color:#eee">
                            <div><strong>${indexSectionFive[i].title}</strong></div>
                            <div>${indexSectionFive[i].describe}</div>
                                <span>${indexSectionFive[i].price}</span>
                        </div>
                    </div>
                </a>
            </div>
            `;
    }
    outHtml += '</div>';
    outHtml += '</div>';
    return outHtml;
}

var indexSectionEight=[
    {
        "imageUrl": "icon-1.PNG",
        "number": "2000",
        "describe":"Cars Sold",
    },
    {
        "imageUrl": "icon-2.PNG",
        "number": "$750,000",
        "describe":"Amount sold",
     },
     {
        "imageUrl": "icon-3.PNG",
        "number": "100%",
        "describe":"Customer Satisfaction",
     },
     {
        "imageUrl": "icon-4.PNG",
        "number": "3600",
        "describe":"Oil Change",
     }
]
function home_bottom_feature(){
    let outHtml = "";
    for (let i = 0; i < indexSectionEight.length; i++){
        outHtml += `
            <div class="col-lg-3 col-md-6 col-sm-6">
                <div>
                    <img src="${indexSectionEight[i].imageUrl}" alt="icon-1"/>
                    <span><h1>${indexSectionEight[i].number}</h1>
                    <p>${indexSectionEight[i].describe}</p></span>
                </div>
            </div>
            `;
    }
    return outHtml;
}

document.addEventListener("readystatechange",function(event){
    if(event.target.readyState == "interactive"){
        if(document.getElementById("home_top_threeImage")!= null){
            document.getElementById("home_top_threeImage").innerHTML = home_top_threeImage();
        }
        if(document.getElementById("home_middle_feature")!= null){
            document.getElementById("home_middle_feature").innerHTML = home_middle_feature();
        }
        if(document.getElementById("home_middle_fiveImage")!= null){
            document.getElementById("home_middle_fiveImage").innerHTML = home_middle_fiveImage();
        }
        if(document.getElementById("home_bottom_feature")!= null){
            document.getElementById("home_bottom_feature").innerHTML = home_bottom_feature();
        }
    }
})