<template>
  <div class="home">
    <a-button>{{ $t("a11") }}</a-button>
    <a-input @change="change" type="textarea" v-model="datePicker"></a-input>
    <d
      @start="drag = true"
      @end="drag = false"
      v-bind="{
        animation: 500,
        group: 'description',
        disabled: false,
        ghostClass: 'ghost'
      }"
    >
      <transition-group :name="!drag ? 'flip-list' : null">
        <div v-for="i in 10" :key="i">{{ i }}</div>
      </transition-group>
    </d>
    <Chrome v-model="a" />
  </div>
</template>

<script>
import { Button, Input } from "ant-design-vue";
import "ant-design-vue/es/_util/antInputDirective";
import d from "vuedraggable";
import Chrome from "vue-color/src/components/Sketch";
export default {
  name: "Home",
  components: {
    [Button.name]: Button,
    [Input.name]: Input,
    d: d,
    Chrome
  },
  data() {
    return {
      datePicker: "",
      drag: true,
      a: ""
    };
  },
  mounted() {
    console.log(this);
  },
  methods: {
    change(v) {
      console.log(v);
    }
  }
};
</script>
<style lang="less" scoped>
.flip-list-move {
  transition: transform 0.5s;
}
</style>
