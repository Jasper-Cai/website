/* index js */

function fuc_load() {
    initial_load()
    second_load()
    third_load()
    forth_load()
}

function initial_load() {
    //var inventorySectionX = 5
    //let HTML = render_f(inventorySectionX)
    //alert(HTML)
    var indexSectionTwo = []
    let html = render_threeImage(indexSectionTwo)
    document.getElementById("home_top_threeImage").innerHTML = html;
    $.ajax({
        url: "https://www.lzlianxin.com/index_feed.php?top3Image_infor=trunk_model",
        success: function (result) {
            var indexSectionTwo = result
            let html = render_threeImage(indexSectionTwo)
            document.getElementById("home_top_threeImage").innerHTML = html;
        }
    })
}
function render_threeImage(threeImages){
    let outHtml = "";
    for(let i = 0; i < threeImages.length; i++){
        outHtml += `
        <div>
            <div class="column product_preview_item">
                <img src="${threeImages[i].imageUrl}" alt="Porsche 918"/>
                <h3>${threeImages[i].title}</h3>
                <p>${threeImages[i].describe}</p>
            </div>
        </div>
        `;              
    }
    return outHtml;
}


function second_load() {
    var indexSectionThree = []
    let html = render_middleFeature(indexSectionThree)
    document.getElementById("home_middle_feature").innerHTML = html;
    $.ajax({
        url: "https://www.lzlianxin.com/index_feed.php?middleFeature_infor=truck_feature",
        success: function (result) {
            var indexSectionThree = result
            let html = render_middleFeature(indexSectionThree)
            document.getElementById("home_middle_feature").innerHTML = html;
        }
    })
}
function render_middleFeature(middleFeatures){
    let outHtml = "";
    for (let i = 0; i < middleFeatures.length; i++){
        outHtml += `
        <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="feature-item">
                <img src="${middleFeatures[i].imageUrl}" alt="icon-1"/>
                <h3>${middleFeatures[i].title}</h3>
                <p>${middleFeatures[i].describe}</p>
            </div>
        </div>
        `;
    }
    return outHtml;
}


function third_load() {
    var indexSectionFive = [
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
    let html = render_middleFiveImage(indexSectionFive)
    document.getElementById("home_middle_fiveImage").innerHTML = html;
    
}
function render_middleFiveImage(middleFiveImages){
    let outHtml="";
    outHtml += ' <div class="col-lg-2 col-md-2 col-sm-4">';
    outHtml += ' <h5 style="color:#F00;">Recent Vehicles</h5>';
    outHtml += ' <p>Browse through the vast selection of vehicles that have recently been added to our inventory.</p>';
    outHtml += ' </div>';
    outHtml += ' <div class="col-lg-10 col-md-10 col-sm-8 recent-vehicles">';
    outHtml += ' <div class="row">';
    for(let i = 0;i < middleFiveImages.length; i++){
        outHtml += `
            <div class="col-lg-2 col-md-2 col-sm-8 recent-vehicles-infor">
                <a href="">
                    <div class="recent-vehicles-item">
                        <img src="${middleFiveImages[i].imageUrl}" alt="BMW">
                        <div style="background-color:#eee">
                            <div><strong>${middleFiveImages[i].title}</strong></div>
                            <div>${middleFiveImages[i].describe}</div>
                                <span>${middleFiveImages[i].price}</span>
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


function forth_load() {
    var indexSectionEight = []
    let html = render_bottomFeature(indexSectionEight)
    document.getElementById("home_bottom_feature").innerHTML = html;
    $.ajax({
        url: "https://www.lzlianxin.com/index_feed.php?bottomFeature_infor=strength",
        success: function (result) {
            var indexSectionEight = result
            let html = render_bottomFeature(indexSectionEight)
            document.getElementById("home_bottom_feature").innerHTML = html;
        }
    })
}
function render_bottomFeature(bottomFeatures){
    let outHtml = "";
    for (let i = 0; i < bottomFeatures.length; i++){
        outHtml += `
            <div class="col-lg-3 col-md-6 col-sm-6">
                <div>
                    <img src="${bottomFeatures[i].imageUrl}" alt="icon-1"/>
                    <span><h2>${bottomFeatures[i].number}</h2>
                    <p>${bottomFeatures[i].describe}</p></span>
                </div>
            </div>
            `;
    }
    return outHtml;
}