<template>
    <div>
        <div class="login-form ">
	
            <form class="form row" v-on:submit.prevent="loginAPI">
                <div class="avatar">
                    <img src="img/login-logo.png" alt="Avatar">
                </div>           
                <div class="grupo col-md-12">
                    <div class="form-group">
                        <input type="text" class="form-control input-lg" v-model="usuario.correo" name="correo" placeholder="Correo" required="required">	
                    </div>
                    <div class="form-group">
                        <input type="password" class="form-control input-lg" name="password" v-model="usuario.password" placeholder="Contraseña" required="required">
                    </div>        
                    <div class="form-group clearfix">
                        
                        <button type="submit" class="btn btn-lg pull-right">Entrar</button>
                    </div>	
                </div>   
                <div class="hint-text">¿Olvidaste tu contraseña? <a href="#">Recupera tu contraseña</a></div> 
            </form>
            
            
        
        </div>
        </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: 'app',
        data(){
            return {
                usuario: {
                    correo: '',
                    password: ''
                }
            }
        
        },
        methods: {
            loginAPI(){
            //const axios = require('axios');
            console.log(this.usuario);
            axios.post('http://localhost:8000/api/login',{
                correo: this.usuario.correo,
                password: this.usuario.password   
            })
            .then(response => { 
                console.log(response)
                if (response.body.usuario.acceso_usuario == "admin"){
                    let token = response.body.usuario.api_token;
                    let usuarioLogeado = response.data;
                    
                    console.log(usuarioLogeado)

                    //console.log(token);
                    
                    /*this.$router.push({ 
                        name:'main-view', 
                        params: this.usuario
                    })*/
                }
            })
            .catch(error => {
                console.log(error.response)
            });

            }
        }
    }
</script>

<style>
    body {

		
		background-image:url('../../public/img/fondoLogin.jpg');
        background-repeat: no-repeat;
        background-size: 100% 100%;
        height: 100vh;
		font-family: 'Roboto', sans-serif;
	}
    .form{
        color: #ffffff!important;
        position: relative;
        top: 200px;
        height:360px!important;
    }
    .hint-text{
        position: relative;
        top: -90px;
        color: #ffffff!important;
    }
    .btn{
        background: #111!important;
        border: 1px solid #1b64a8!important;
        padding: 5px!important;
    }
    .btn:hover{
        background: #cccccc!important;
    }
    a{
        color: #1b64a8!important;
        font-style:initial;
        font-weight: 600!important;
    }
    .form-control {
        font-size: 16px;
		border-color: transparent;
		box-shadow: none !important;
        border-color: #1b64a8!important;
	}
	.form-control:focus {
		border-color: #05dfa9!important;
       
	}
    .form-control, .btn {        
        border-radius: 2px;
    }
	.login-form {
		width: 380px;
		margin: 0 auto;
	}
    .login-form h2 {
        margin: 0;
        padding: 30px 0;
        font-size: 34px;
    }
	.login-form .avatar {
		margin: 0 auto 30px;
		width: 150px;
		height: 150px;
		border-radius: 50%;
		z-index: 9;
		background: #1b64a8;
        border: 1px solid #1b64a8 !important;
        position: relative;
        top: -100px;
		box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
	}
	.login-form .avatar img {
		width: 100%;
	}
    .login-form form {
		color: #7a7a7a;
		border-radius: 4px;
    	margin-bottom: 20px;
        background: rgba(19, 19, 19, 0.9)!important;
        box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
        padding: 30px;		
    }
    .login-form .btn {
		font-size: 16px;
		line-height: 26px;
		min-width: 120px;
        font-weight: bold;
		background: #1b64a8;
		border: none;		
    }
	.login-form .btn:hover, .login-form .btn:focus{
		border-color: #05dfa9!important;
        background: #111!important;
        outline: none !important;
	}
	.checkbox-inline {
		margin-top: 14px;
	}
	.checkbox-inline input {
		margin-top: 3px;
	}
    .login-form a {
		color: #1b64a8;
	}	
	.login-form a:hover {
		text-decoration: underline;
	}
	.hint-text {
		color: #999;
        text-align: center;
		padding-bottom: 15px;
	}
    .grupo{
        position: relative;
        top: -100px!important;
    }
</style>
