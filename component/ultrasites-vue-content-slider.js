Vue.component('ultrasites-vue-content-slider', {
    template: '<div class="ultrasites-vue-content-slider-wrapper">' +
    '<div class="ultrasites-vue-content-slider">' +
    '<div class="ultrasites-vue-content-slider-slide"  v-for="(content, index) in slides"><div v-html="content.slide"></div></div>' +
    '</div>' +
    '<div class="ultrasites-vue-content-slider-button-back" v-if="showArrows" @click="prev"><i class="fa fa-chevron-left" aria-hidden="true"></i></div>'+
    '<div class="ultrasites-vue-content-slider-button-next" v-if="showArrows" @click="next"><i class="fa fa-chevron-right" aria-hidden="true"></i></div>'+
    '<div class="ultrasites-vue-content-slider-state-wrapper"><div class="ultrasites-vue-content-slider-state" v-for="content in slides"></div></div>'+
    '</div>',

    props: {
        settings : Object
    }

    ,

    data: function(){

        return{
            showArrows: this.settings.showArrows!=null ? this.settings.showArrows : true,
            showState: this.settings.showState!=null ? this.settings.showState : false,
            timer: this.settings.timer!=null ? this.settings.timer : false,
            duration: this.settings.timer!=null ? this.settings.duration : 0,
            slides: this.settings.slides,
            state: 0,
            speed: this.settings.speed!=null ? this.settings.speed : 500
        }


    },


    mounted: function() {

      $sliderContainer =  $(this.$el).find(('.ultrasites-vue-content-slider'));
      $($sliderContainer).css({'width':this.slides.length*100+'%'});

      $(this.$el).find('.ultrasites-vue-content-slider-state-wrapper').children().first().addClass('ultrasites-vue-content-slider-state--active');

      if(this.timer){
          setInterval(this.next,this.duration);
      }

    },

    methods: {


        next: function(){

            $slider = $(this.$el).find('.ultrasites-vue-content-slider');

            $slides = $($slider).children();

            $firstSlide = $($slides).first();

            $($firstSlide).animate({'marginLeft':'-100%'},this.speed, 'linear', function () {
                $($firstSlide).css({'marginLeft':'0'}).remove();
                $($slider).append($firstSlide);
            });

            $states = $(this.$el).find('.ultrasites-vue-content-slider-state-wrapper').children();

            $($states[this.state]).removeClass('ultrasites-vue-content-slider-state--active');
             this.state++;
             if(this.state == this.slides.length){
                this.state=0;
            }
            $($states[this.state]).addClass('ultrasites-vue-content-slider-state--active');

           

            

        },

        prev: function () {

            $slider = $(this.$el).find('.ultrasites-vue-content-slider');

            $slides = $($slider).children();

            $lastSlide = $($slides).last();

            $($slides).last().remove();
            $($slider).prepend($lastSlide);

            $states = $(this.$el).find('.ultrasites-vue-content-slider-state-wrapper').children();

            $($states[this.state]).removeClass('ultrasites-vue-content-slider-state--active');
             this.state--;
             if(this.state == 0){
                this.state=this.slides.length;
            }
            $($states[this.state]).addClass('ultrasites-vue-content-slider-state--active');

        }

    }
});