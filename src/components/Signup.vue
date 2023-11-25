<template>
  <div class="login">
    <div class="loginBody">
      <p class="welcome">
        Welcome to PostIT
      </p>

      <a class="blueButtons">
        Create an account
      </a>

      <p class="orText">
        or
      </p>

      <p>
        Please log in
      </p>

      <form class="fields" action="">
        <input type="text" class="textfield" name="email" placeholder="Email" required>
        <input type="text" class="textfield" name="password" placeholder="Password" required>
        <input id="loginButton" type="submit" value="Log in">
      </form>

      <a class="blueButtons">
        Forgot password
      </a>
    </div>
  </div>
</template>

<script>

export default {

}
</script>

<style scoped>

*{
  font-family: Helvetica;
  box-sizing: border-box;
}

.login {
  display: flex;
  justify-content: center;
  align-items: center;
}

.loginBody {
  width: 25%;
  height: 50%;
  background-color: #dbd7da;
  margin-top: 50px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 18px 25px;
  min-width: 300px;
  margin-bottom: 70px;
  gap: 8px;
}

.loginBody > a {
  font-size: 15px;
  color: rgb(36, 147, 184);
  cursor: pointer;
  letter-spacing: 1px;
  text-decoration: none;
  font-size: 17px;
}

.loginBody > p {
  font-size: 17px;
  font-weight: 400;
  letter-spacing: 2px;
}

.welcome {
  font-size: 22px !important;
  font-weight: 600 !important;
  margin-bottom: 15px;
  margin-top: 0px;
}

.orText {
  margin-top: 3px;
  margin-bottom: 0px;
}

.orText ~ p {
  margin-top: 3px;
  margin-bottom: 7px;
}

.fields {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.textfield {
  margin: 0px;
  font-size: 14px;
  padding: 5px 0px 5px 8px;
  border-radius: 3px;
  width: 100%;
  border: none;
  color: grey;
  letter-spacing: 1px;
}

input#loginButton {
  font-size: 17px;
  display: flex;
  justify-content: center;
  width: 80px;
  height: 30px;
  background-color: rgb(24, 67, 130);
  color: white;
  border-radius: 3px;
  text-decoration: none;
  letter-spacing: 1px;
}

#loginButton:hover {
  cursor: pointer;
}

.fields + a {
  margin-top: 10px;
  font-size: 15px;
}

</style>
