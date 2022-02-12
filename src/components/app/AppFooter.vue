<template>
  <footer>
    <div class="copyright">
      <div class="container">
        <div class="row">
          <div class="col">
            <span>
              &copy; 2020 Written with<i class="fa fa-heart"/>by Maxim Zaharov
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="void"></div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<style scoped>
.container {
  height: 40px;
}
.copyright {
  background-color: #fff;
  bottom: 0;
  position: fixed;
  width: 100%;
}
.void {
  height: 40px;
}
</style>
