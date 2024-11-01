function updateDateTime() {
    const now = new Date();
    const optionsDate = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
    const currentDate = now.toLocaleDateString('id-ID', optionsDate);
    
    // Menampilkan hari dan tanggal real-time
    document.getElementById('dateTime').innerText = currentDate;

    // Memperbarui title dengan tanggal real-time
    document.getElementById('dynamicTitle').textContent = currentDate;

    // Menampilkan hanya tanggal dari Minggu hingga Sabtu
    const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
    let daysHtml = '<tr>'; // Memulai baris

    for (let i = 0; i < days.length; i++) {
        const dayDate = new Date(now);
        dayDate.setDate(now.getDate() + (i - now.getDay())); // Mengatur tanggal berdasarkan hari
        const dayNumber = dayDate.getDate(); // Ambil hanya tanggal
        daysHtml += `<td>${dayNumber}</td>`; // Menambahkan kolom
    }

    daysHtml += '</tr>'; // Menutup baris
    document.getElementById('daysContainer').innerHTML = daysHtml;
}

// Memperbarui tanggal dan waktu setiap detik
setInterval(updateDateTime, 1000);

// Panggil fungsi sekali untuk menampilkan saat pertama kali
updateDateTime();
