import { useEffect, useState } from 'react';
import '../App.css';
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
  const checkList = ['mobil', 'motor', 'truk'];
  const [checked, setChecked] = useState([]);

  useEffect(() => {
    const newData = { ...form };
    newData.kendaraan = checked;
    setForm(newData);
  }, [checked]);

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
  const handleKendaraan = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };
  const handleAddSkill = () => {
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
    const skills = form.skills;
    skills.splice(index, 1);
    const newForm = {
      ...form,
      skills: skills,
    };
    setForm(newForm);
  };

  const handleSubmit = (e) => {
    // e.prevent.default();
    console.log(checked);
    console.log(form);
  };
  return (
    <>
      <div className="FormInput">
        <h2>Form</h2>
        <form>
          <label>
            Nama Lengkap:
            <input placeholder="Nama Depan" className="input" type="text" name="namaDepan" onChange={handleNamaDepan} value={form.namaDepan} /> <br />
            <input className="input" placeholder="Nama Belakang" type="text" name="nama belakang" onChange={handleNamaBelakang} value={form.namaBelakang} /> <br />
          </label>
          <label>
            Sign Up:
            <input className="input" placeholder="Username" type="text" name="username" value={judul} disabled /> <br />
            <input className="input" placeholder="Password" type={passwordShow ? 'password' : 'text'} name="password" onChange={handleNamaPassword} value={form.password} />
            <button type="button" onClick={handleShowPassword}>
              .
            </button>
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
          <label>
            Kendaraan:
            {checkList.map((data, index) => (
              <div key={index} onChange={handleKendaraan}>
                <input type="checkbox" id={data} name="kendaraan" value={data} />
                <label>{data} </label>
                <br />
              </div>
            ))}
          </label>

          <label>
            <button type="button" onClick={handleAddSkill}>
              Add Skill +
            </button>
            <br />
            {form.skills.length > 0 ? (
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
      </div>

      {/* <div>
        Halo perkenalkan saya {form.namaDepan} {form.namaBelakang} dengan username {form.username} lahir pada tanggal {form.tanggal}. Saya memeluk agama {form.agama} dan selama ini saya memiliki berbagai kendaraan seperti
        {form.kendaraan.map((data, index) => (
          <span key={{ index }}> {data}</span>
        ))}
        . saya memiliki berbagai kemampuan diantaranya
        {form.skills.map((data, index) => (
          <div key={{ index }}>{data}</div>
        ))}
        .
      </div> */}
    </>
  );
}

<style>
  .FormInput
  {{
    border: '1px solid black',
    marginTop: '5rem',
    marginLeft: 'auto',
    marginRight: 'auto',
  }}
</style>;
