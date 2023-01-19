/* Our Team js */

function fuc_load() {
    initial_load()
    second_load()
}

function initial_load() {
    //var inventorySectionX = 5
    //let HTML = render_f(inventorySectionX)
    //alert(HTML)
    var ourTeamSectionTwo = []
    let html = render_threeImage(ourTeamSectionTwo)
    document.getElementById("OurTeam_threeImage").innerHTML = html;
    $.ajax({
        url: "https://www.lzlianxin.com/ourTeam_feed.php?manager_infor=CXW",
        success: function (result) {
            var ourTeamSectionTwo = result
            let html = render_threeImage(ourTeamSectionTwo)
            document.getElementById("OurTeam_threeImage").innerHTML = html;
        }
    })
}

function render_threeImage(threeImages){
    let outHtml = "";
    for(let i = 0; i < threeImages.length; i++){
        outHtml += `
        <div class="column col-sm-12 col-md-12 col-lg-4 manager-infor">
            <div class="manager-img">
            <img src="${threeImages[i].imageUrl}" alt="图片错误" height="280">
                <div>
                    <h4><strong>${threeImages[i].name}</strong></h4>
                    <p>${threeImages[i].position}</p>
                </div>
                <hr>
                <div>
                    <ul style="text-align:left;white-space:nowrap;">
                        <li><span>微信：${threeImages[i].workPhone}</span></li>
                        <li><span>电话：${threeImages[i].telephone}</span></li>
                    </ul>
                </div>
            </div>
        </div>
        `;
    }
    return outHtml;
}



function second_load() {
    //var inventorySectionX = 5
    //let HTML = render_f(inventorySectionX)
    //alert(HTML)
    var ourTeamSectionThree = []
    let html = render_fourImage(ourTeamSectionThree)
    document.getElementById("OurTeam_fourImage").innerHTML = html;
    $.ajax({
        url: "https://www.lzlianxin.com/ourTeam_feed.php?salesTeam_infor=CZX",
        success: function (result) {
            var ourTeamSectionThree = result
            let html = render_fourImage(ourTeamSectionThree)
            document.getElementById("OurTeam_fourImage").innerHTML = html;
        }
    })
}

function render_fourImage(fourImages){
    let outHtml = "";
    for(let i = 0; i < fourImages.length; i++){
        outHtml += `
        <div class="column col-sm-12 col-md-6 col-lg-3 col-xl-3 sales-infor">
            <div class="sales-infor-img">
                <img src="${fourImages[i].imageUrl}" alt="图片错误" height="300">
                <div>
                    <h4><strong>${fourImages[i].name}</strong></h4>
                    <p>${fourImages[i].position}</p>
                </div>
                <hr>
                <div>
                    <ul style="text-align:left;white-space:nowrap;">
                        <li><span>微信：${fourImages[i].weChat}</span></li>
                        <li><span>电话：${fourImages[i].telephone}</span></li>
                    </ul>
                </div>
            </div>
        </div>
        `;
    }
    return outHtml;
}

