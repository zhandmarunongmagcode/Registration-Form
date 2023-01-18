import styles from "./Form.module.css";

export default function Contact_us() {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.header_box}>
          <h1>Registration form</h1>
        </div>
        <div className={styles.form}>
          <form>
            <div className={styles.textbox}>
              <input type="text" placeholder="First Name"></input>
              <input type="text" placeholder="Last Name"></input>
              <input type="text" placeholder="Email"></input>
              <input type="text" placeholder="Mobile"></input>
            </div>
            <div className={styles.address}>
              <input type="text" placeholder="Address"></input>
            </div>
            <h3>Old TUP student?</h3>
            <div className={styles.bolean}>
              <input type="radio" name="radio" id="yes" />
              <label for="yes">Yes</label>
              <input type="radio" name="radio" id="no" />
              <label for="no">No</label>
            </div>
            <textarea
              type="text"
              rows="4"
              cols="70"
              placeholder="Why do you want to study here?"
            ></textarea>
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
