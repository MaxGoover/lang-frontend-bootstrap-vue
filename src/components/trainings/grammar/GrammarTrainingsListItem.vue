<template>
  <div class="col-md-6 mb-3 pl-0">
    <router-link
      :to="{
        name: 'GrammarTraining',
        params: { alias: training.alias }
      }"
    >
      <div class="card">
        <div class="row no-gutters">
          <div class="col-2 px-3 my-auto">
            <img
              :src="`/img/icons/${ training.avatar }.png`"
              class="card-img" alt="avatar"
            >
          </div>
          <div class="col-10">
            <div class="card-body">
              <h5 class="card-title mb-0">{{ training.title }}</h5>
              <p class="card-text">
                <small class="text-muted">
                  {{ training.translation }}
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'GrammarTrainingsListItem',
    props: {
      training: { type: Object }
    }
  }
</script>

<style scoped>
@import '../../../assets/shop/ShopGroupsListColumn.css';
</style>
