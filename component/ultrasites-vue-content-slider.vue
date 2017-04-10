Vue.component('ultrasites-vue-content-slider', {
    template: '<div class="ultrasites-vue-content-slider-wrapper">' +
    '<div class="ultrasites-vue-content-slider">' +
    '<div class="ultrasites-vue-content-slider-slide"  v-for="(content, index) in slides"><div v-html="content.slide"></div></div>' +
    '</div>' +
    '<div class="ultrasites-vue-content-slider-button-back" v-if="showArrows" v-show="state > 0" @click="prev"><i class="fa fa-chevron-left" aria-hidden="true"></i></div>' +
    '<div class="ultrasites-vue-content-slider-button-next" v-if="showArrows" v-show="state < slides.length-1" @click="next"><i class="fa fa-chevron-right" aria-hidden="true"></i></div>' +
    '<div class="ultrasites-vue-content-slider-state-wrapper" v-if="showState"><div class="ultrasites-vue-content-slider-state" v-for="(content, index) in slides" @click="curState(index)"></div></div>' +
    '</div>',

    props: {
        settings: Object
    }

    ,

    data: function () {

        return {
            showArrows: this.settings.showArrows != null ? this.settings.showArrows : true,
            showState: this.settings.showState != null ? this.settings.showState : false,
            timer: this.settings.timer != null ? this.settings.timer : false,
            duration: this.settings.timer != null ? this.settings.duration : 0,
            slides: this.settings.slides,
            state: 0,
            speed: this.settings.speed != null ? this.settings.speed : 500
        }


    },


    mounted: function () {

        this.$slider = $(this.$el).find('.ultrasites-vue-content-slider');
        this.$states = $(this.$el).find('.ultrasites-vue-content-slider-state-wrapper').children();


        $(this.$slider).css({'width': this.slides.length * 100 + '%'});
        $(this.$states).first().addClass('ultrasites-vue-content-slider-state--active');

        if (this.timer) {
            setInterval(this.startTimer, this.duration);
        }

    },

    methods: {


        next: function () {
            $(this.$states[this.state]).removeClass('ultrasites-vue-content-slider-state--active');
            this.state++;
            $(this.$states[this.state]).addClass('ultrasites-vue-content-slider-state--active');
            if (this.state < this.slides.length) {
                this.animate(1);
            }
        },

        prev: function () {
            $(this.$states[this.state]).removeClass('ultrasites-vue-content-slider-state--active');
            this.state--;
            $(this.$states[this.state]).addClass('ultrasites-vue-content-slider-state--active');
            if (this.state >= 0) {
                this.animate(-1);
            }
        },

        animate: function (direction) {
            direction === 1 ?
                $(this.$slider).animate({'left': '-=100%'}, this.speed) :
                $(this.$slider).animate({'left': '+=100%'}, this.speed);
        },

        curState: function (index) {
            $(this.$states[this.state]).removeClass('ultrasites-vue-content-slider-state--active');
            this.state = index;
            $(this.$states[this.state]).addClass('ultrasites-vue-content-slider-state--active');
            $(this.$slider).animate({'left': '-' + this.state * 100 + '%'}, this.speed);
        },

        startTimer: function () {
            this.state < this.slides.length - 1 ? this.next() : this.curState(0);
        }

    }
});