$(document).ready(function(){
    // Memanggil data dari server menggunakan AJAX
    $.ajax({
        url: "get_dataa.js",
        type: "GET",
        dataType: "json",
        success: function(data){
            // Memanggil fungsi untuk menampilkan data ke dalam tabel
            tampilkanData(data);
        },
        error: function(xhr, status, error) {
            console.error(xhr.responseText);
            console.error(status, error);
        }
    });
});
