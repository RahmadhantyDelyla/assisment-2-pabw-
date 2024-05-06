// Fungsi untuk menampilkan data ke dalam tabel
function tampilkanDataTabel(data) {
    var tabel = $("#tabel-sampah tbody");
    tabel.empty(); // Kosongkan isi tabel sebelum menambahkan data baru

    $.each(data, function(index, item) {
        var row = $("<tr>");
        row.append("<td>" + item.id + "</td>");
        row.append("<td>" + item.jenis + "</td>");
        row.append("<td>" + item.berat + "</td>");
        row.append("<td>" + item.lokasi + "</td>");
        // Tombol untuk menghapus data
        row.append("<td><button class='btn-hapus' data-id='" + item.id + "'>Hapus</button></td>");
        tabel.append(row);
    });

    // Event handler untuk tombol hapus
    $(".btn-hapus").click(function() {
        var id = $(this).data("id");
        hapusData(id);
    });
}

// Fungsi untuk menghapus data menggunakan AJAX
function hapusData(id) {
    $.ajax({
        url: "hapus_data.php?id=" + id,
        type: "GET",
        success: function(response) {
            console.log(response); // Tampilkan pesan sukses atau error di konsol
            // Panggil kembali fungsi untuk memuat data setelah penghapusan
            $.ajax({
                url: "ambil_data.php",
                type: "GET",
                dataType: "json",
                success: function(data) {
                    tampilkanDataTabel(data);
                },
                error: function(xhr, status, error) {
                    console.error("Error: " + error);
                }
            });
        },
        error: function(xhr, status, error) {
            console.error("Error: " + error);
        }
    });
}
