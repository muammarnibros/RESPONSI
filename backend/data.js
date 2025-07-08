const educationHistory = [ { id: 1, period: '2023 - Sekarang', institution: 'Universitas Amikom Yogyakarta', major: 'S1 - Informatika' },
{ id: 2, period: '2018 - 2021', institution: 'SMK N SMTI Yogyakarta', major: 'Kimia Indusrty' } ];
const skills = [
{ name: 'Vue.js', level: 'Mahir' }, { name: 'JavaScript', level: 'Mahir' },
{ name: 'Tailwind CSS', level: 'Mahir' }, { name: 'Node.js', level: 'Menengah' },
{ name: 'Express.js', level: 'Menengah' }, { name: 'PostgreSQL', level: 'Menengah' },
{ name: 'Git & GitHub', level: 'Mahir' }, { name: 'HTML5 & CSS3', level: 'Mahir' },
];
const projects = [ { title: 'Website Pengaduan Masyarakat', image: '/img/pengaduan.png',
description: 'Platform yang memudahkan masyarakat untuk memberikan masukan ke suatu instansi.', tech: ['Vue.js', 'Express.js',
'PostgreSQL'], link: '#' },
{ title: 'Aplikasi Penjualan Alat Billiard', image: '/img/gear9.png',
description: 'Aplikasi e-commerce untuk pembelian segala peralatan billiard dengan fitur keranjang.', tech: ['React', 'Firebase'], link: '#' } ];
module.exports = { educationHistory, skills, projects };