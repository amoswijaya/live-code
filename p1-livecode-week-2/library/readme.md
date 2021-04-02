# Library of Hacktiv8's Path

_⏰_ Time Estimation ~150 minutes

## Livecode Phase 1 Week 2

Diceritakan pada jaman dahulu kala terdapat sebuah perpustakaan yang memuat 
seluruh buku buku yang ada di muka bumi ini. Ada seorang pustakawan konvensional 
yang diminta untuk mendata dan mengarsipkan buku yang ada di perpustakaan ini.

Dikarenakan pustakawan tersebut tidak sanggup, pustakawan meminta bantuan Anda.
Anda adalah seorang junior programmer `foxy` yang ditugaskan untuk membantu 
pustakawan tersebut untuk meringankan pekerjaannya.

Buatlah sebuah aplikasi sederhana berbasis **MVC** dan **OOP** yang 
akan me-listing buku berdasarkan informasi yang ada di bawah ini.

## Release 0 - Class (10 Points)
* Buatlah sebuah class `Author` yang memiliki property:

| Property | Deskripsi |
| -------- | --------- |
| name | nama dari si penulis |
| nation | kebangsaan dari si penulis |

* Buatlah sebuah class `Book` yang memiliki property:

| Property | Deskripsi |
| -------- | --------- |
| id | id untuk setiap judul buku |
| title | judul dari buku |
| type | tipe dari buku yang ada |
| location | tempat penyimpanan pada perpustakaan |
| author | kumpulan `Author` yang menulis buku |

Untuk `type` dari class `Book` ini akan menentukan jenis buku yang ada,
terbagi menjadi 2 Class yang diturunkan dari `Book`, yaitu:

* class `Fiction`, yang memiliki property tambahan:

| Property | Deskripsi |
| -------- | --------- |
| genre | genre dari buku fiksi |
| volume | jumlah volume yang sudah ada di perpustakaan |

* class `NonFiction`, yang memliki property tambahan:

| Property | Deskripsi |
| -------- | --------- |
| classification | klasifikasi dari buku non-fiksi |
| publisher | publisher dari buku non-fiksi |

Buatlah semua class yang diperlukan sesuai dengan requirement yang ada di atas.

## Release 1 - Reader (20 Points)
Buatlah sebuah fitur untuk menampilkan seluruh data buku yang ada pada file
`seeds/buku.json`

Command yang dijalankan adalah:
```
> node index.js show
```

Output yang diharapkan adalah:
```
[
  NonFiction {
    id: 1,
    title: 'The Subtle Art of Not Giving a F*ck',
    type: 'NonFiction',
    location: 'A10',
    author: [ [Author] ],
    classification: 'Self-Help',
    publisher: 'Harper'
  },
  NonFiction {
    id: 2,
    title: 'Spark Joy: Art of Organizing and Tidying Up',
    type: 'NonFiction',
    location: 'A11',
    author: [ [Author] ],
    classification: 'Self-Learn',
    publisher: 'Ten Speed Press'
  },
  Fiction {
    id: 3,
    title: 'Mahouka Koukou no Rettousei, Vol. 1: Enrollment Arc',
    type: 'Fiction',
    location: 'B01',
    author: [ [Author], [Author] ],
    genre: 'Light Novel',
    volume: 1
  },
  Fiction {
    id: 4,
    title: 'Boku no Hiro Academia Collection Set',
    type: 'Fiction',
    location: 'B02',
    author: [ [Author], [Author] ],
    genre: 'Manga',
    volume: 15
  },
  Fiction {
    id: 5,
    title: 'Legendary Moonlight Scultptor',
    type: 'Fiction',
    location: 'B03',
    author: [ [Author] ],
    genre: 'Web Novel',
    volume: 56
  }
]
```

## Release 2 - Adding Data (20 Points)
Buatlah sebuah fitur untuk menambahkan data ke dalam file `seeds/buku.json`.

command yang digunakan adalah (dalam satu baris)
```
> node index.js add <id> <title> <type> <location> <genre/classification> <volume/publisher>
```

Contoh:
```
> node index.js add 6 "Satu Keping" Fiction C01 Manga 71
```

Output yang diharapkan:
```
===========
ADD-SUCCESS
===========
Success adding Fiction "Satu Keping".
```

## Release 3 - Edit Author (20 Points)
Buatlah sebuah fitur untuk mengedit data `author` berdasarkan id yang
ada pada file `seeds/buku.json`

Syarat:
- Asumsikan bahwa file `seeds/buku.json` sudah ada.
- Memiliki output success dan error (apabila tidak ditemukan)

command yang digunakan adalah (dalam satu baris)
```
> node index.js editAuthor <id> <author_name_1> <author_nation_1> <author_name_2> <author_nation_2> ... <author_name_n> <author_nation_n>
```

Contoh:
```
> node index.js editAuthor 5 Author1 Nation1 Author2 Nation2
```

Output yang diharapkan - Sukses
```
==============
EDIT - SUCCESS
==============
Success editing Fiction "Legendary Moonlight Scultptor" with 2 Author(s)
```

Output yang diharapkan - Error
```
=====
ERROR
=====
Error : Edit - 404 - Not Found
```

## Release 4 - Delete Data (20 Points)
Buatlah sebuah fitur untuk menghapus data buku yang ada di file 
`seeds/buku.json` berdasarkan id yang diinputkan.

Syarat:
- Asumsikan bahwa file `seeds/buku.json` sudah ada.
- Memiliki output success dan error (apabila tidak ditemukan)

command yang digunakan adalah
```
> node index.js delete <id>
```

Contoh:
```
> node index.js delete 4
```

Output yang diharapkan - Sukses
```
================
DELETE - SUCCESS
================
Success deleting 4 with Title: Boku no Hiro Academia Collection Set
```

Output yang diharapkan - Error
```
=====
ERROR
=====
Error : Delete - 404 - Not found
```

## Release 5 - Show Table (10 Points)
Buatlah sebuah fitur untuk menampilkan listing seluruh buku yang
ada di `seeds/buku.json` dalam bentuk tabel.

Syarat:
- Asumsikan bahwa file `seeds/buku.json` sudah ada.
- Ketika menjalankan fitur ini akan menampilkan 2 tabel, Tabel untuk 
`Fiction` dan Tabel untuk `NonFiction`
- Tabel `Fiction` hanya menampilkan `title`, `genre`, dan `volume`
- Tabel `NonFiction` hanya menampilkan `title`, `classification`,
  dan `publisher`


Hint:
- `console.table()`

command yang digunakan adalah:
```
> node index.js showTable
```

Output yang diharapkan adalah:
```
=======
Fiction
=======
┌─────────┬───────────────────────────────────────────────────────┬───────────────┬────────┐
│ (index) │                         title                         │     genre     │ volume │
├─────────┼───────────────────────────────────────────────────────┼───────────────┼────────┤
│    0    │ 'Mahouka Koukou no Rettousei, Vol. 1: Enrollment Arc' │ 'Light Novel' │   1    │
│    1    │        'Boku no Hiro Academia Collection Set'         │    'Manga'    │   15   │
│    2    │            'Legendary Moonlight Scultptor'            │  'Web Novel'  │   56   │
└─────────┴───────────────────────────────────────────────────────┴───────────────┴────────┘

===========
Non-Fiction
===========
┌─────────┬───────────────────────────────────────────────┬────────────────┬───────────────────┐
│ (index) │                     title                     │ classification │     publisher     │
├─────────┼───────────────────────────────────────────────┼────────────────┼───────────────────┤
│    0    │     'The Subtle Art of Not Giving a F*ck'     │  'Self-Help'   │     'Harper'      │
│    1    │ 'Spark Joy: Art of Organizing and Tidying Up' │  'Self-Learn'  │ 'Ten Speed Press' │
└─────────┴───────────────────────────────────────────────┴────────────────┴───────────────────┘
```

Selamat mengerjakan !