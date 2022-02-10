<template>
  <div>
    <div class="row m-t-30" id="main">
      <div class="col-lg-12">
        <div class="table-responsive">
          <table class="table table-centered table-nowrap mb-0">
            <thead class="thead-light">
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Date of Apppointment</th>
                <th>Time of Appointment</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>12324233DED  </td>
                <td class="text-capitalize">Emmanuel Michael </td>

                <td> 10 January 2022 </td>
                <td> 9:30AM </td>
                <td>
                  <span class="badge badge-success p-1"> Scheduled </span>
                </td>
                <td>
                  <router-link to="/"> <button class="view-more-button">View More</button> </router-link>
                </td>
              </tr>
              <tr>
                <td>12324233DED  </td>
                <td class="text-capitalize">Emmanuel Michael </td>

                <td> 10 January 2022 </td>
                <td> 9:30AM </td>
                <td>
                  <span class="badge badge-warning p-1" > Pending </span>
                </td>
                <td>
                  <router-link to="/"> <button class="view-more-button">View More</button> </router-link>
                </td>
              </tr>
              <tr>
                <td>12324233DED  </td>
                <td class="text-capitalize">Emmanuel Michael </td>

                <td> 10 January 2022 </td>
                <td> 9:30AM </td>
                <td>
                  <span class="badge badge-danger p-1"> Declined </span>
                </td>
                <td>
                  <router-link to="/"> <button class="view-more-button">View More</button> </router-link>
                </td>
              </tr>
              <tr>
                <td>12324233DED  </td>
                <td class="text-capitalize">Emmanuel Michael </td>

                <td> 10 January 2022 </td>
                <td> 9:30AM </td>
                <td>
                  <span class="badge badge-warning p-1" > Pending </span>
                </td>
                <td>
                  <router-link to="/"> <button class="view-more-button">View More</button> </router-link>
                </td>
              </tr>
              <tr>
                <td>12324233DED  </td>
                <td class="text-capitalize">Emmanuel Michael </td>

                <td> 10 January 2022 </td>
                <td> 9:30AM </td>
                <td>
                  <span class="badge badge-danger p-1"> Declined </span>
                </td>
                <td>
                  <router-link to="/"> <button class="view-more-button">View More</button> </router-link>
                </td>
              </tr>
              <tr>
                <td>12324233DED  </td>
                <td class="text-capitalize">Emmanuel Michael </td>

                <td> 10 January 2022 </td>
                <td> 9:30AM </td>
                <td>
                  <span class="badge badge-success p-1"> Scheduled </span>
                </td>
                <td>
                  <router-link to="/"> <button class="view-more-button">View More</button> </router-link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
        
    };
  },
  methods: {
    
    
  },
  
};
</script>
