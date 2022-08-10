import React from 'react';
import styles from '../styles/SignUpForm.module.css';

const SignUpForm = ({val}) => {
    if (val == "SignUp") {
      return (
        <div>
          <form>
            <ul className={styles.signUpForm}>
              <li>
                <label className={styles.label} htmlFor="Name">
                  Name
                </label>
                <input
                  className={styles.input}
                  id="Name"
                  type="text"
                  placeholder="Name"
                />
              </li>
              <li>
                <label
                  className={styles.label}
                  htmlFor="Email"
                >
                  Email
                </label>
                <input
                  className={styles.input}
                  id="Email"
                  type="text"
                  placeholder="Email"
                />
              </li>
              <li>
                <label
                  className={styles.label}
                  htmlFor="Password"
                >
                  Password
                </label>
                <input
                  className={styles.input}
                  id="Password"
                  type="text"
                  placeholder="Password"
                />
              </li>
              <li>
                <label
                  className={styles.label}
                  htmlFor="Confirm Password"
                >
                  Confirm Password
                </label>
                <input
                  className={styles.input}
                  id="Confirm Password"
                  type="text"
                  placeholder="Confirm Password"
                />
              </li>
              <li>
                <input
                  type="submit"
                  className={styles.formSubmit}
                  value="Sign Up"
                />
              </li>
            </ul>
          </form>
        </div>
      );
    }
    else {
      return (
        <div>
          <form>
            <ul className={styles.signUpForm}>
              <li>
                <label className={styles.label} htmlFor="Email">
                  Email
                </label>
                <input
                  className={styles.input}
                  id="Email"
                  type="text"
                  placeholder="Email"
                />
              </li>
              <li>
                <label className={styles.label} htmlFor="Password">
                  Password
                </label>
                <input
                  className={styles.input}
                  id="Password"
                  type="text"
                  placeholder="Password"
                />
              </li>
              <li>
                <input
                  type="submit"
                  className={styles.formSubmit}
                  value="Sign In"
                />
              </li>
            </ul>
          </form>
        </div>
      );
    }
}

export default SignUpForm

