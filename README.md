# Dokumentasi API

Dokumentasi ini menjelaskan dua endpoint API yang tersedia dalam proyek ini.

## 1. Mendapatkan Daftar Pengguna

**Endpoint:**  
`GET http://localhost:3000/get-users`

### Deskripsi
Endpoint ini digunakan untuk mengambil daftar semua pengguna yang terdaftar.

### Respons
- **Status Code:** `200 OK`
- **Body Respons:**
    ```json
    [
        {
            "name": "David Simbolon",
            "age": 24,
            "job_title": "IT Programming",
            "company": "PT. Maha Akbar Sejahtera"
        },
    ]
    ```

## 2. Menambahkan Pengguna Baru

**Endpoint:**  
`POST http://localhost:3000/add-user`

### Deskripsi
Endpoint ini digunakan untuk menambahkan pengguna baru ke dalam sistem.

### Parameter
- **Content-Type:** `application/json`
- **Body Permintaan:**
    ```json
    {
        "name": "David Simbolon",
        "age": 24,
        "job_title": "IT Programming",
        "company": "PT. Maha Akbar Sejahtera"
    }
    ```

### Respons
- **Status Code:** `201 Created`
- **Body Respons:**
    ```json
    {
        "status": "Success",
        "message": "New user added successfully",
        "user": {
            "name": "David Simbolon",
            "age": 24,
            "job_title": "IT Programming",
            "company": "PT. Maha Akbar Sejahtera"
        }
    }
    ```
