import { useState } from 'react';

export default function FormCompleted() {
  const [form, setForm] = useState({
    namaDepan: 'ponti',
    namaBelakang: 'anak',
  });
  const judul = form.namaDepan + '-' + form.namaBelakang;

  const handleSubmit = (e) => {
    e.prevent.default();
    console.log('send accpet');
  };
  return (
    <>
      <form>
        <label>
          Nama Depan:
          <input type="text" name="nama depan" value={form.namaDepan} /> <br />
        </label>
        <label>
          Nama Belakang:
          <input type="text" name="nama belakang" value={form.namaBelakang} /> <br />
        </label>
        <label>
          Username:
          <input type="text" name="username" value={judul} /> <br />
        </label>
        <label>
          Password:
          <input type="password" name="password" /> <br />
        </label>
        <label>
          Tanggal Lahir:
          <input type="date" name="tanggal lahir" /> <br />
        </label>
        <label>
          Agama:
          <input type="radio" name="contact" value="Islam" />
          <label>Islam</label>
          <input type="radio" name="contact" value="Kristen" />
          <label>Kristen</label>
          <input type="radio" name="contact" value="yahudi" />
          <label>yahudi</label>
        </label>
        <br />
        <label>
          Kendaraan:
          <input type="checkbox" id="contactChoice1" name="contact" value="Islam" />
          <label>Islam</label>
          <input type="checkbox" id="contactChoice2" name="contact" value="Kristen" />
          <label>Kristen</label>
          <input type="checkbox" id="contactChoice3" name="contact" value="yahudi" />
          <label>yahudi</label>
        </label>
        <br />
        <label>
          Skill:
          <input type="text" name="skill" /> <br />
        </label>
        <button onSubmit={handleSubmit}>Submit</button>
      </form>
      username - biasa password - password nama depan & nama belakang - biasa tgl lahir - date format agama - radio button kendaraan - checkbox button skill - optional button submit button - hidden
      <h1>must required, ada ID random angka, konfirmasi semua diisi</h1>
    </>
  );
}
