Vue.component('ultrasites-vue-content-slider', {
    template: '<div class="ultrasites-vue-content-slider-wrapper">' +
    '<div class="ultrasites-vue-content-slider">' +
    '<div class="ultrasites-vue-content-slider-slide"  v-for="(content, index) in slides"><div v-html="content.slide"></div></div>' +
    '</div>' +
    '<div class="ultrasites-vue-content-slider-button-back" v-if="showArrows" v-show="state > 0" @click="prev" v-html="leftArrow"></i></div>' +
    '<div class="ultrasites-vue-content-slider-button-next" v-if="showArrows" v-show="state < slides.length-1" @click="next" v-html="rightArrow"></i></div>' +
    '<div class="ultrasites-vue-content-slider-state-wrapper" v-if="showState"><div class="ultrasites-vue-content-slider-state" :class="{ activeStateClass : activeState[index] }" v-for="(content, index) in slides" @click="curState(index)"></div></div>' +
    '</div>',

    props: {
        settings: Object
    }

    ,

    data: function () {

        return {
            showArrows: this.settings.showArrows != null ? this.settings.showArrows : true,
            showState: this.settings.showState != null ? this.settings.showState : false,
            leftArrow: this.settings.leftArrow,
            rightArrow: this.settings.rightArrow,
            timer: this.settings.timer != null ? this.settings.timer : false,
            duration: this.settings.timer != null ? this.settings.duration : 0,
            slides: this.settings.slides,
            state: 0,
            speed: this.settings.speed != null ? this.settings.speed : 500,
            activeStateClass: 'active',
            activeState : []
        }


    },

    beforeMount : function () {
        for(var i=0; i< this.slides.length; i++){
            this.activeState[i] = i === 0;
        }
    },


    mounted: function () {

        this.slider = this.$el.children[0];

        if (this.timer) {
            setInterval(this.startTimer, this.duration);
        }

    },

    methods: {


        next: function () {
            this.activeState[this.state] = false;
            this.animate(this.slider, 'left', this.state * 100, (this.state + 1) * 100, this.speed);
            this.state++;
            this.activeState[this.state] = true;
        },

        prev: function () {
            this.activeState[this.state] = false;
            this.animate(this.slider, 'left', this.state * 100, (this.state -1) * 100, this.speed);
            this.state--;
            this.activeState[this.state] = true;
        },

        curState: function (index) {
            this.activeState[this.state] = false;
            this.animate(this.slider, 'left', this.state * 100, index * 100, this.speed);
            this.state = index;
            this.activeState[this.state] = true;
        },

        startTimer: function () {
            this.state < this.slides.length - 1 ? this.next() : this.curState(0);
        },

        animate: function (object, property, start_value, end_value, time) {

            var frame_rate = 0.06;
            var frame = 0;
            var delta = (end_value - start_value) / time / frame_rate;

            var handle = setInterval(function() {
                frame++;
                var value = start_value + delta * frame;
                object.style[property] = "-" + value + "%";
                if (value == end_value) {
                    clearInterval(handle);
                }
            }, 1 / frame_rate);
        }

    }
});