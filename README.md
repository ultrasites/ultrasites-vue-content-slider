# ultrasites-vue-slider

This is a dynamic content slider based on the Vue framework. You can render any contents, like texts, images or other ones. The slider is developed as a Vue component.

Short Example:
Create a Vue object with your own settings.
```javascript
new Vue({
             el: '#default-slider',
             data: {
                 settings:{
                     leftArrow: 'content for the left arrow',
                     rightArrow: 'content for the right arrow',
                     slides:[
                         {
                             slide:'some content'
                         },
                         {
                             slide:'some content'
                         },
                         {
                             slide:'some content'
                         },
                         {
                             slide:'some content'
                         }
                     ]
                 }
             }
         });
```

Paste this in your HTML-Code. The Slider has a **settings** directive.
```html
<ultrasites-vue-content-slider :settings="settings"></ultrasites-vue-content-slider>
```

##Parameters
```javascript
showArrows:boolean
```
**TRUE** = show the arrows on left and right<br/>
**FALSE** = hide the arrows on left and right<br/>
```javascript
showState:boolean
```
**TRUE** = show the states<br/>
**FALSE** = hide the states<br/>
```javascript
leftArrow:string
```
Any content as left arrow.<br/>
```javascript
rightArrow:string
```
Any content as right arrow.<br/>
```javascript
timer:boolean
```
**TRUE** = the interval to switch the slides is active<br/>
```javascript
duration:number
```
Waiting time on current slide, when the timer is active<br/>
```javascript
speed:number
```
Animationspeed between two slides.<br/>
```javascript
slides[]:array
```
Slides of content.

##Contact
Ultra Sites Medienagentur<br/>
Pfingstanger 15<br />
34434 Borgentreich GERMANY<br/><br/>

http://www.ultra-sites.de

