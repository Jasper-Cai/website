/* Inventory js */

function initial_load() {
    //var inventorySectionX = 5
    //let HTML = render_f(inventorySectionX)
    //alert(HTML)
    var inventorySectionThree = []
    let html = render_inventory(inventorySectionThree)
    document.getElementById("inventory_container").innerHTML = html;
    $.ajax({
        url: "https://www.lzlianxin.com/feed.php?CZX_coupon=100",
        success: function (result) {
            var inventorySectionThree = JSON.parse(result)
            let html = render_inventory(inventorySectionThree)
            document.getElementById("inventory_container").innerHTML = html;
        }
    })
}

function render_f(item) {
    return "<div>"+item+"</div>"
}
function render_inventory(inventories){
    let outHtml = "";
    for (let i = 0; i < inventories.length; i++){
        outHtml += `
            <div class=" col-xl-3 col-lg-4 col-md-6 col-sm-12 col-xs-12 ">
                <div class="inventory border border-secondary rounded-3">
                    <div class="margin-bottom-20">
                        <div class="title">${inventories[i].title}</div>
                        <div class="checkbox"><input class="form-check-input" type="checkbox"></div>
                    </div>
                    <img src="${inventories[i].carImageUrl}" alt="Porsche" width="200" height="150">
                    <table>
                        <tbody>
                            <tr>
                                <td class="vehicle-detail">${inventories[i].rearAxle}</td>
                                <td class="spec">${inventories[i].rac}</td>
                            </tr>
                            <tr>
                                <td class="vehicle-detail">${inventories[i].wheelBase}</td>
                                <td class="spec">${inventories[i].wbc}</td>
                            </tr>
                            <tr>
                                <td class="vehicle-detail">${inventories[i].transmission}</td>
                                <td class="spec">${inventories[i].tc}</td>
                            </tr>
                            <tr>
                                <td class="vehicle-detail">${inventories[i].drivetrain}</td>
                                <td class="spec">${inventories[i].dc}</td>
                            </tr>
                            <tr>
                                <td class="vehicle-detail">${inventories[i].engine}</td>
                                <td class="spec">${inventories[i].ec}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div>
                        <div style="float:left;margin-right:20px;">
                            <img src="${inventories[i].carfaxImgUrl}" alt="CARFAX" class="carfax-logo">
                        </div>

                        <div class="margin-bottom-20">
                            <b>${inventories[i].price}</b>
                            <div class="figure">
                            <h3>${inventories[i].pc}</h3>
                            </div>
                            <div><em>${inventories[i].tax}</em></div>
                        </div>
                    </div>
                    <button type="button" class="btn btn-sm btn-outline-secondary">${inventories[i].cardBtnLeft}</button>
                    <button type="button" class="btn btn-sm btn-outline-secondary btn-details">${inventories[i].cardBtnRight}</button>
                </div>
            </div>
        `;  
    }
    return outHtml;
}
