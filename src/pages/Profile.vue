<template>

  <div>
    <div class="row fuentes">
      <div class="col-md-12">
        <my-profile/>
      </div>
    </div>
     <div class="row fuentes">
      <div class="col-md-12">
        <my-employment/>
      </div>
    </div>
    <div class="row fuentes">
      <div class="col-md-6">
        <my-family/>
      </div>
      <div class="col-md-6">
        <my-references/>
      </div>
    </div>
    <div class="row">
      <div class="col-md-8">
        <edit-profile-form :model="model">
        </edit-profile-form>
      </div>
      
    </div>
  </div>
  
</template>
<script>
  import EditProfileForm from './Profile/EditProfileForm';
  import UserCard from './Profile/UserCard'
  import MyProfile from './Profile/MyProfile'
  import MyFamily from './Profile/MyFamily'
  import MyReferences from './Profile/MyReferences'
  import MyEmployment from './Profile/MyEmployment'

  export default {
    components: {
      EditProfileForm,
      UserCard,
      MyProfile,
      MyFamily,
      MyReferences,
      MyEmployment
    },
    data() {
      return {
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
    }
  }
</script>
<style>
  .fuentes p{
    font-size: 18px!important;
    font-weight:350;
  }

</style>
