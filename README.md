# ultrasites-vue-slider

This is a dynamic content slider based on the Vue framework. You can render any contents, like texts, images or other ones. The slider is developed as a Vue component.

<i>Short Example:</i>
Create a Vue object with your own settings.
<pre> new Vue({
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
         
         </pre>
Paste this in your HTML-Code. The Slider has a <b>settings</b> directive.
<pre><ultrasites-vue-content-slider :settings="settings"></ultrasites-vue-content-slider></pre>

<h3>Parameters</h5>
<pre>showArrows:boolean</pre>
<b>TRUE</b> = show the arrows on left and right<br/>
<b>FALSE</b> = hide the arrows on left and right<br/>
<pre>showState:boolean</pre>
<b>TRUE</b> = show the states<br/>
<b>FALSE</b> = hide the states<br/>
<pre>leftArrow:string</pre>
Any content as left arrow.<br/>
<pre>rightArrow:string</pre>
Any content as right arrow.<br/>
<pre>timer:boolean</pre>
<b>TRUE</b> = the interval to switch the slides is active<br/>
<pre>duration:number</pre>
Waiting time on current slide, when the timer is active<br/>
<pre>speed:number</pre>
Animationspeed between two slides.<br/>





CONTACT:<br />
Ultra Sites Medienagentur<br/>
Pfingstanger 15<br />
34434 Borgentreich GERMANY<br/><br/>

http://www.ultra-sites.de

