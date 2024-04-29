var data_mentah = {
    "arabica": [
        {
            "foto": "images/produk/product_capuchino.jpg",
            "nama": "Cappuccino",
            "size": "250 Ml",
            "harga": "25.000",
            "link": "#"
        },
        {
            "foto": "images/produk/product_latte.jpg",
            "nama": "Latte",
            "size": "250 Ml",
            "harga": "35.000",
            "link": "#"
        }
    ],
    "robusta": [
        {
            "foto": "images/produk/product_espresso.jpg",
            "nama": "Espresso",
            "size": "150 Ml",
            "harga": "15.000",
            "link": "#"
        },
        {
            "foto": "images/produk/product_kopi_susu.jpg",
            "nama": "Kopi Susu",
            "size": "150 Ml",
            "harga": "25.000",
            "link": "#"
        }
    ],
    "nonkopi": [
        {
            "foto": "https://fajar.co.id/wp-content/uploads/2023/09/IMG_0741.jpg",
            "nama": "Es Teh Manis",
            "size": "350 Ml",
            "harga": "10.000",
            "link": "#"
        }
    ]
}
console.log("Data Mentah: ", function updateSelect() {
    select_kopi.innerHTML = <option selected disabled>-</option>
    Object.keys(data_mentah).forEach(opsi => {
        select_kopi.innerHTML += <option value="${opsi}">${opsi}</option>
    })
    console.log("update select", Object.keys(data_mentah))
}
updateSelect()var data_kopi = []
select_kopi.onchange = function () {
    console.log("select_kopi:", select_kopi.value)
    data_kopi = data_mentah[select_kopi.value]
    console.log("data_kopi:", data_kopi)
    updateTampilan()
}

function updateTampilan(baris_produk.innerHTML = ""
data_kopi.forEach(kopi => {
    baris_produk.innerHTML += `<!--mulai col-->
        <div class="col mb-4">
            <div class="card">
                <img src="${kopi.foto}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${kopi.nama}</h5>
                    <div class="row hargasize my-4">
                        <div class="col">
                            <i class="bi bi-cup-straw"></i> ${kopi.size}
                        </div>
                        <div class="col fw-bold text-primary">
                            ${kopi.harga}
                        </div>
                    </div>
                    <a href="${kopi.link}" class="btn btn-primary w-100"><i class="bi bi-cart4"></i> Beli</a>
                </div>
            </div>
        </div>
        <!--akhir col-->`
})) {

})