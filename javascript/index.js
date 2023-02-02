/* index js */

function fuc_load() {
    initial_load()
    second_load()
    third_load()
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
        <div class="column product_preview_item">
            <img src="${threeImages[i].imageUrl}" alt="图片错误"/>
            <h3>${threeImages[i].title}</h3>
            <p>${threeImages[i].describe}</p>
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