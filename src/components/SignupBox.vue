<template>
    <div class="signup">
        <div id="alert" v-if="alert">{{ alert }}</div>

        <form @submit.prevent="signupWithPassword">
          <div class="box">
            <div class="innerBox">
              <label class="emailLabel">
                Email
                <input placeholder="Email" class="emailAns" type="email" v-model="email" />
              </label>
              <label class="passLabel">
                Password
                <input placeholder="Password" class="passAns" type="password" v-model="password" />
              </label>
            </div>
            <div class="buttonDiv">
              <button class="button" @click="signupWithPassword" type="submit">Signup
                <span class="popuptext" id="myPopup">Invalid password. Password must be of length 8-14, start with an uppercase and include two lowercase alphabet characters, include the character '_' and include one numeric value</span>
              </button>
            </div>
          </div>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: ''
        };
    },
    methods: {
        signupWithPassword() {
        if (!this.passwordControl()) {
            var popup = document.getElementById("myPopup");
            popup.classList.toggle("show");
            return false;
        }
        return true;
        },
        passwordControl() {
            if (
                this.password.length < 8 ||
                this.password.length > 14 ||
                this.password[0] !== this.password[0].toUpperCase()
            ) {
                return false;
            }
      
            let consistsChar = false;
            let consistsNumber = false;
            let lowercase = 0;
            
            for (let i = 0; i < this.password.length; i++) {
              if (this.password[i] >= '0' && this.password[i] <= '9') {
                consistsNumber = true;
              }
              if (this.password[i] === this.password[i].toLowerCase()) {
                lowercase += 1;
              }
              if (this.password[i] === "_") {
                consistsChar = true;
              }
            }

            return consistsChar && consistsNumber && lowercase >= 2;
            }
        }
}

</script>

<style scoped>


label {
  font-family: Helvetica, sans-serif;
}

.signup {
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #a3c4b7;
    width: 100%;
    align-items: center;
    height: 300px;
    margin-bottom: 100px;
    margin-top: 100px;
}

form {
    margin: auto;
}

.buttonDiv {
  margin-left: 50%;
  margin-top: 30px;
  margin-bottom: 5px;
}

.button {
    background-color: #3777c4;
    font-size: 30px;
    transform: translateX(-50%);
    border-radius: 5px;
}
.button:hover {
    background-color: #94b8d6;
}

.emailLabel,
.passLabel {
    font-size: 30px; 
    width: 45%;
  margin-left: 5px;
}

.emailAns,
.passAns {
    font-size: 30px;
    border-radius: 25px;
    text-align: center;
    padding: 10px;
    width: 55%;
    margin-left: 2cm;
}

.passLabel {
    font-size: 30px;
    padding-left: 2%;
}

.emailLabel {
    padding-left: 72px;
    margin-bottom: 10cm
}

.emailAns {
    margin-bottom: 0.5cm;
}

.button .popuptext {
    display: none;
    width: 800px;
    background-color: #555;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 8px 0;
    position: absolute;
    z-index: 1;
    bottom: 125%;
    left: 50%;
    transform: translateX(-50%);
}

.button .popuptext.show {
    display: block;
    animation: fadeIn 1s;
}

@media (max-width: 800px) {
  .popuptext {
    width: 90vw; /* Set width relative to the viewport width */
    max-width: 200px; /* Optional: if you want to limit how wide it can get on larger phones */
    bottom: 20px; /* Position it just below the button */
    left: 50%; /* Center horizontally */
    transform: translateX(-50%); /* Adjust translation to ensure it's centered */
    font-size: 16px; /* Adjust font size for readability */
  }
}


@keyframes fadeIn {
    from {opacity: 0;}
    to {opacity: 1;}
}
</style>