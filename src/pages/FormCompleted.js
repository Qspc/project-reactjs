export default function FormCompleted() {
  return (
    <>
      <form>
        <label>
          Nama Depan:
          <input type="text" name="nama depan" /> <br />
        </label>
        <label>
          Nama Belakang:
          <input type="text" name="nama belakang" /> <br />
        </label>
        <label>
          Username:
          <input type="text" name="usernama" /> <br />
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
          <input type="radio" id="contactChoice1" name="contact" value="Islam" />
          <label for="contactChoice1">Islam</label>
          <input type="radio" id="contactChoice2" name="contact" value="Kristen" />
          <label for="contactChoice2">Kristen</label>
          <input type="radio" id="contactChoice3" name="contact" value="yahudi" />
          <label for="contactChoice3">yahudi</label>
        </label>
        <br />
        <label>
          Kendaraan:
          <input type="checkbox" id="contactChoice1" name="contact" value="Islam" />
          <label for="contactChoice1">Islam</label>
          <input type="checkbox" id="contactChoice2" name="contact" value="Kristen" />
          <label for="contactChoice2">Kristen</label>
          <input type="checkbox" id="contactChoice3" name="contact" value="yahudi" />
          <label for="contactChoice3">yahudi</label>{' '}
        </label>
        <br />
        <label>
          Skill:
          <input type="text" name="skill" /> <br />
        </label>
      </form>
      username - biasa password - password nama depan & nama belakang - biasa tgl lahir - date format agama - radio button kendaraan - checkbox button skill - optional button submit button - hidden
      <h1>must required, ada ID random angka, konfirmasi semua diisi</h1>
    </>
  );
}
