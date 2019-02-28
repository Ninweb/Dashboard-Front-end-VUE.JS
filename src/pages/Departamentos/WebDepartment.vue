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

        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
          Launch demo modal
        </button>
        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                ...
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
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
