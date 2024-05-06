<?php
//Untuk mengambil data dari tabel
SELECT * FROM nama_tabel;
// Koneksi ke database
$koneksi = mysqli_connect("localhost", "username", "password", "nama_database");

// Periksa koneksi
if (mysqli_connect_errno()) {
    echo "Koneksi database gagal: " . mysqli_connect_error();
    exit();
}

// Query untuk mengambil data dari tabel
$query = "SELECT * FROM daftar_sampah";
$result = mysqli_query($koneksi, $query);

// Array untuk menyimpan data hasil query
$data = array();

// Loop melalui hasil query dan menambahkan data ke dalam array
while ($row = mysqli_fetch_assoc($result)) {
    $data[] = $row;
}

// Mengonversi array data ke format JSON
echo json_encode($data);

// Tutup koneksi ke database
mysqli_close($koneksi);
?>
