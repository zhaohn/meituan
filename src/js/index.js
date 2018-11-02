$(function() {
    var shop = document.querySelector('.shop');
    $.ajax({
        url: '/api/list',
        dataType: 'json',
        success: function(res) {
            var html = '';
            if (res.code === 1) {
                res.data.forEach(function(item) {
                    html += `<dl>
                            <dt><img src="${item.img}" alt=""></dt>
                            <dd>
                                <h2>${item.name}</h2>
                                <h3>${item.text}</h3>
                                <h4><span><b>${item.price}</b>元</span><span>门市价：20元</span><span>${item.num}</span></h4>
                            </dd>
                        </dl>`;
                })
                shop.innerHTML = html;
            }
        }
    })
})