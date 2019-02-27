<template>
    <div>
        <div class="row">
            <div class="col-md-6">
                <departament-card/>
            </div>
            <div class="col-md-6">
                <departament-card/>
            </div>
        </div>
        <div class="row">
            <carrousel-user-departament/>
        </div> 
    </div>
</template>


<script>

import DepartamentCard from './DepartamentCard'
import CarrouselUserDepartament from './CarrouselUserDepartament'
import axios from 'axios';


export default {
    components:{
        DepartamentCard,
        CarrouselUserDepartament,
        
    }
}
</script>


<style>

</style>
