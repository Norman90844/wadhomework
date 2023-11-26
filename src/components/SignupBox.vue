<template>
    <div class="signup">
        <div id="alert" v-if="alert">{{ alert }}</div>

        <form @submit.prevent="signupWithPassword">
            <label class="emailLabel">
                Email
                <input placeholder="Email" class="emailAns" type="email" v-model="email" />
            </label>
            <br>
            <label class="passLabel">
                Password
                <input placeholder="Password" class="passAns" type="password" v-model="password" />
            </label>
            <br>
            <button class="button" @click="signupWithPassword" type="submit">Signup
                <span class="popuptext" id="myPopup">Invalid password. Password must be of length 8-14, start with an uppercase and include two lowercase alphabet characters, include the character '_' and include one numeric value</span>
            </button>
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
.signup {
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #a3c4b7;
    width: 80%;
    margin: 20px auto;
    align-items: center;
    height: 75vh;
}

form {
    margin: auto;
}

.button {
    background-color: #349eeb;
    font-size: 40px;
    position: fixed;
    bottom: 20%;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 25px;
}
.button:hover {
    background-color: #94b8d6;
}

.emailLabel,
.passLabel {
    font-size: 30px; 
    width: 45%;
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
    padding-left: 30px;
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

@keyframes fadeIn {
    from {opacity: 0;}
    to {opacity: 1;}
}
</style>