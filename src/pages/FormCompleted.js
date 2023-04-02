import { useState } from 'react';
// import IconButton from '@mui/material/IconButton';
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';

export default function FormCompleted() {
  const [form, setForm] = useState({
    namaDepan: '',
    namaBelakang: '',
    username: '',
    password: '',
    tanggal: '',
    agama: '',
    kendaraan: [],
    skills: [],
  });

  const handleNamaDepan = (e) => {
    const newData = {
      ...form,
      namaDepan: e.target.value,
      username: judul,
    };
    setPasswordShow(!passwordShow);
    setForm(newData);
  };
  const handleNamaBelakang = (e) => {
    const newData = {
      ...form,
      namaBelakang: e.target.value,
      username: judul,
    };
    setForm(newData);
  };
  const judul = form.namaDepan === '' || form.namaBelakang === '' ? '' : form.namaDepan + '-' + form.namaBelakang;
  const handleNamaPassword = (e) => {
    const newData = {
      ...form,
      password: e.target.value,
    };
    setForm(newData);
  };
  const [passwordShow, setPasswordShow] = useState(true);
  const handleShowPassword = () => {
    setPasswordShow(!passwordShow);
    console.log(form.agama);
  };
  const handleTanggal = (e) => {
    const newData = {
      ...form,
      tanggal: e.target.value,
    };
    setForm(newData);
  };
  const handleAgama = (e) => {
    const newData = {
      ...form,
      agama: e.target.value,
    };
    setForm(newData);
  };
  const handleKendaraan = (e) => {
    if (e.target.checked === true) {
      const newData = {
        ...form,
        kendaraan: [...form.kendaraan, e.target.value],
      };
      setForm(newData);
    }
  };
  const handleAddSkill = () => {
    // console.log('masuk');
    setForm({
      ...form,
      skills: [...form.skills, { skill: '' }],
    });
  };
  const handleSkill = (index, e) => {
    const newForm = {
      ...form,
    };
    newForm.skills[index].skill = e.target.value;
    setForm(newForm);
  };
  const handleDeleteSkill = (index) => {
    const header = form.skills;
    header.splice(index, 1);
    const newForm = {
      ...form,
      skills: header,
    };
    setForm(newForm);
  };

  const handleSubmit = (e) => {
    // e.prevent.default();
    console.log(form.kendaraan);
  };
  return (
    <>
      <form>
        <label>
          Nama Depan:
          <input type="text" name="namaDepan" onChange={handleNamaDepan} value={form.namaDepan} /> <br />
        </label>
        <label>
          Nama Belakang:
          <input type="text" name="nama belakang" onChange={handleNamaBelakang} value={form.namaBelakang} /> <br />
        </label>
        <label>
          Username:
          <input type="text" name="username" value={judul} disabled /> <br />
        </label>
        <label>
          Password:
          <input type={passwordShow ? 'password' : 'text'} name="password" onChange={handleNamaPassword} value={form.password} />
          <button type="button" onClick={handleShowPassword}>
            .
          </button>
          <br />
        </label>
        <label>
          Tanggal Lahir:
          <input type="date" name="tanggal lahir" onChange={handleTanggal} value={form.tanggal} /> <br />
        </label>
        <label onChange={handleAgama}>
          Agama:
          <input type="radio" name="agama" value="Islam" />
          <label>Islam</label>
          <input type="radio" name="agama" value="Kristen" />
          <label>Kristen</label>
          <input type="radio" name="agama" value="yahudi" />
          <label>yahudi</label>
        </label>
        <br />
        <label onChange={handleKendaraan}>
          Kendaraan:
          <input type="checkbox" id="contactChoice1" name="contact" value="mobil" />
          <label>mobil </label>
          <input type="checkbox" id="contactChoice2" name="contact" value="motor" />
          <label>motor</label>
          <input type="checkbox" id="contactChoice3" name="contact" value="truk" />
          <label>truk</label>
        </label>
        <br />
        <label>
          <button type="button" onClick={handleAddSkill}>
            Add Skill +
          </button>
          <br />
          {form.skills.length !== 0 ? (
            <>
              {form.skills.map((c, index) => (
                <>
                  <label>
                    Skill:
                    <input key={index} type="text" name="skill" onChange={(e) => handleSkill(index, e)} value={form.skills[index].skill} />
                    <button type="button" onClick={() => handleDeleteSkill(index)}>
                      delete
                    </button>
                    <br />
                  </label>
                </>
              ))}
            </>
          ) : (
            <></>
          )}
        </label>
        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </>
  );
}
