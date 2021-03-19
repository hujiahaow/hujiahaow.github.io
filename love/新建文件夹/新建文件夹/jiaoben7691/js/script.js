new Vue({
  el: '#app',
  data() {
    return {
      isOpenedTop: true,
      items: [
        {
          img1: "img/1.jpg",
          img2: "img/2.jpg",
          img3: "img/3.jpg",
          title: "NEKO",
          isOpen: false
        },
        {
          img1: "img/4.jpg",
          img2: "img/5.jpg",
          img3: "img/6.jpg",
          title: "NYAN",
          isOpen: false
        },
        {
          img1: "img/7.jpg",
          img2: "img/8.jpg",
          img3: "img/9.jpg",
          title: "NEKO",
          isOpen: false
        },
        {
          img1: "img/10.jpg",
          img2: "img/11.jpg",
          img3: "img/12.jpg",
          title: "NYANNYAN",
          isOpen: false
        },
        {
          img1: "img/13.jpg",
          img2: "img/14.jpg",
          img3: "img/15.jpg",
          title: "NEKONEKO",
          isOpen: false
        }
      ]
    };
  },
  methods: {
    topOpen() {
      this.isOpenedTop = !this.isOpenedTop;
    },

    open(idx, isOpen) {
      if (this.isOpenedTop) {
        this.items[idx].isOpen = !isOpen;
      }
    },

    reset() {
      this.items.forEach(item => (item.isOpen = false));
      this.isOpenedTop = false;
    }
  }
})