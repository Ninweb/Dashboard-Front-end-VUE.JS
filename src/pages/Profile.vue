<template>

  <div>
    <div class="row fuentes">
      <div class="col-md-12 align-center">
        <div>
          <button type="button" class="btn btn-outline-primary" @click="mostrar_perfil">Perfil</button>
          <button type="button" class="btn btn-outline-primary" @click="mostrar_familiar">Familiares</button>
          <button type="button" class="btn btn-outline-primary" @click="mostrar_referencia">Referencias</button>
        </div>
      </div>
    </div>

    <div class="row fuentes">
      <div class="col-md-12">
        <transition name="fade">
          <div v-if="showProfile">
            <my-profile/>
            <my-employment/>
          </div>
        </transition>

        <transition name="fade">
          <div v-if="showFamiliar">
            <my-family/>
          </div>
        </transition>

        <transition name="fade">
          <div v-if="showReferencia">
            <my-references/>
          </div>
        </transition>
      </div>
    </div>

    <!-- <div class="row">
      <div class="col-md-8">
        <edit-profile-form :model="model">
        </edit-profile-form>
      </div>

    </div> -->


  </div>

</template>
<script>
  import EditProfileForm from './Profile/EditProfileForm';
  import UserCard from './Profile/UserCard'
  import MyProfile from './Profile/MyProfile'
  import MyFamily from './Profile/MyFamily'
  import MyReferences from './Profile/MyReferences'
  import MyEmployment from './Profile/MyEmployment'
  import { SlideXRightTransition } from 'vue2-transitions'

  export default {
    components: {
      EditProfileForm,
      UserCard,
      MyProfile,
      MyFamily,
      MyReferences,
      MyEmployment,
      SlideXRightTransition
    },

    data() {
      return {
        showProfile: true,
        showFamiliar: false,
        showReferencia: false,

        data: [
          '<div>asasa</div>',
          '<div>asasa 2</div>',
          '<div>Slide 3</div>',
        ],
        model: {
          company: 'Creative Code Inc.',
          email: 'mike@email.com',
          username: 'michael23',
          firstName: 'Mike',
          lastName: 'Andrew',
          address: 'Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09',
          city: 'Melbourne',
          country: 'Australia',
          about: 'Lamborghini Mercy, Your chick she so thirsty, I\'m in that two seat Lambo.'
        },
        user: {
          fullName: 'Mike Andrew',
          title: 'Ceo/Co-Founder',
          description: `Do not be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...`,
        }
      }
    },
    methods: {
      mostrar_perfil () {
        this.showProfile = true
        this.showFamiliar = false
        this.showReferencia = false
      },

      mostrar_familiar () {
        this.showProfile = false
        this.showFamiliar = true
        this.showReferencia = false
      },

      mostrar_referencia () {
        this.showProfile = false
        this.showFamiliar = false
        this.showReferencia = true
      }
    }
  }
</script>
<style>
  .fuentes p{
    font-size: 18px!important;
    font-weight:350;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s;
    transition-delay: .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
    transition-delay: .1s;
  }

</style>
