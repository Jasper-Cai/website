/* Inventory js */

function fuc_load() {
    initial_load()
}

var inventorySectionThree = []
function initial_load() {
    //var inventorySectionX = 5
    //let HTML = render_f(inventorySectionX)
    //alert(HTML)
    let html = render_inventory(inventorySectionThree)
    document.getElementById("inventory_container").innerHTML = html;
    $.ajax({
        url: "https://www.lzlianxin.com/inventory_feed.php?CZX_coupon=100",
        success: function (result) {
            inventorySectionThree = JSON.parse(result)
            let html = render_inventory(inventorySectionThree)
            document.getElementById("inventory_container").innerHTML = html;
        }
    })
}



function open_video(inventoryId) {
    var foundInventory = null
    var inventories = inventorySectionThree
    for (var i = 0; i < inventories.length; i++){
        let inventory = inventories[i]
        if (inventory.id == inventoryId) {
            foundInventory = inventory
        }
    }
    if (foundInventory != null) {
        document.querySelector('.modal-title').innerHTML = foundInventory.title;
        //document.querySelector('.modal-body').innerHTML = foundInventory.price + foundInventory.pc;
        $("#exampleModal").modal("toggle");
    }
}

function view_details(inventoryId) {
    var foundInventory = null
    var inventories = inventorySectionThree
    for (var i = 0; i < inventories.length; i++){
        let inventory = inventories[i]
        if (inventory.id == inventoryId) {
            foundInventory = inventory
        }
    }
    if (foundInventory != null) {
        document.querySelector('.modal-title').innerHTML = foundInventory.title;
        document.querySelector('.modal-body').innerHTML = `
        <ul>
            <li>${foundInventory.rearAxle}: ${foundInventory.rac}</li>
            <li>${foundInventory.wheelBase}: ${foundInventory.wbc}</li>
            <li>${foundInventory.drivetrain}: ${foundInventory.dc}</li>
            <li>${foundInventory.engine}: ${foundInventory.ec}</li>
            <li>${foundInventory.price}: ${foundInventory.pc}</li>
            <li>${foundInventory.engine}: ${foundInventory.ec}</li>
        </ul>
`;
        $("#exampleModal").modal("toggle");
    }
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
                    <div class="margin-bottom-20" style="text-align:center;width:100%;padding:20px"><img src="${inventories[i].carImageUrl}" alt="图片错误" width="100%" height="auto"></div>
                    <table style="margin-top:20px">
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
                    <div style="margin-top:35px">
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
                    <button onclick="open_video('${inventories[i].id}')" type="button" class="btn btn-sm btn-outline-secondary">${inventories[i].cardBtnLeft}</button>
                    <button onclick="view_details('${inventories[i].id}')" type="button" class="btn btn-sm btn-outline-secondary btn-details">${inventories[i].cardBtnRight}</button>
                </div>
            </div>
        `;  
    }
    return outHtml;
}