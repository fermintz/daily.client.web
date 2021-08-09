<template>
  <div class="homeHeader">
    <dl>
      <dt>
        <label>우리집</label>
        <v-icon>mdi-chevron-down</v-icon>
      </dt>
      <dd>부산광역시 금정구 부산대학로 63번길 2 과학기술연구동 201호</dd>
    </dl>
  </div>
</template>

<script>

export default {

}
</script>

<style lang="scss" scoped>
.homeHeader{
  position: sticky;
  top:0px;
  width:100%;
  border-bottom:1px solid #e2e2e2;
  background: #fff;
  z-index:10;
  margin-bottom:30px;
  display:flex;
  justify-content: center;

  dl{
    width:50%;
    height:60px;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    dt{
      display:flex;
      align-items: center;

      label{
        font-weight:bold;
        text-align:center;
        font-size:18px;
      }
      .v-icon{
        margin-left:5px;
        font-size:18px;
        color:#0CA0E2;
      }
    }
    dd{
      width:100%;
      text-align:center;
      font-size:9px;
      color:#888;
      text-overflow:ellipsis;
      white-space: nowrap;
      overflow:hidden
    }
  }
}
</style>