<template>
<div
	v-bind:class="{ 'logo_s' : size == 's' }" 
	class="logo">
<svg 
 	v-if="size == 'm'"
  viewBox="0 0 238 415" 
  version="1.1" 
  xmlns="http://www.w3.org/2000/svg" 
  xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
       	<linearGradient x1="66.1819482%" y1="34.585479%" x2="102.32485%" y2="0.170953707%" id="gradient-main">
            <stop v-bind:stop-color="colors['--logo-color-main']" offset="0%"></stop>
            <stop v-bind:stop-color="colors['--logo-color-main-tint']" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="17.5%" y1="87.4848485%" x2="90.2%" y2="10.3787879%" id="gradient-second">
            <stop v-bind:stop-color="colors['--logo-color-second']" offset="0%"></stop>
            <stop v-bind:stop-color="colors['--logo-color-second-tint']" offset="100%"></stop>
        </linearGradient>
    </defs>
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g transform="translate(11.000000, 0.000000)" fill-rule="nonzero">
            <polygon fill="url(#gradient-second)" points="151.58 7 216.58 72 146.58 73"></polygon>
            <path d="M38.4922449,234 L0.19,272.31 L0.19,234 L0.19,-3.17287917e-05 L133.71,-3.47144595e-15 C140.413644,-0.0106196476 146.846361,2.64495168 151.59031,7.38139675 C156.334258,12.1178418 159.000008,18.5463474 159,25.25 L159,64 L197.76,64 C204.456717,64.0026516 210.8781,66.6654552 215.611518,71.4026243 C220.344936,76.1397933 223.002653,82.5632835 223,89.26 L223.000002,234 L38.4922449,234 Z" fill="url(#gradient-main)"></path>
        </g>
        <g transform="translate(10.000000, 274.000000)" v-bind:fill="colors['--logo-color-font']">
            <path d="M223.112,47.208 C223.112,55.7360426 220.321361,62.4093092 214.74,67.228 C209.158639,72.0466908 202.554705,74.456 194.928,74.456 C187.301295,74.456 180.697361,72.0466908 175.116,67.228 C169.534639,62.4093092 166.744,55.7360426 166.744,47.208 C166.744,38.6799574 169.534639,32.0066908 175.116,27.188 C180.697361,22.3693092 187.301295,19.96 194.928,19.96 C202.554705,19.96 209.158639,22.3693092 214.74,27.188 C220.321361,32.0066908 223.112,38.6799574 223.112,47.208 Z M194.928,62.184 C198.949353,62.184 202.433319,60.8146804 205.38,58.076 C208.326681,55.3373196 209.8,51.7146892 209.8,47.208 C209.8,42.7013108 208.326681,39.0786804 205.38,36.34 C202.433319,33.6013196 198.949353,32.232 194.928,32.232 C190.906647,32.232 187.422681,33.6013196 184.476,36.34 C181.529319,39.0786804 180.056,42.7013108 180.056,47.208 C180.056,51.7146892 181.529319,55.3373196 184.476,58.076 C187.422681,60.8146804 190.906647,62.184 194.928,62.184 Z"></path>
            <polygon points="142.928 13.928 142.928 0.2 157.28 0.2 157.28 13.928"></polygon>
            <polygon points="143.552 73 143.552 21.416 156.656 21.416 156.656 73"></polygon>
            <path d="M87.808,93.8 L89.888,81.632 C91.413341,82.4640042 92.9733254,82.88 94.568,82.88 C97.2720135,82.88 99.2133274,81.250683 100.392,77.992 L102.056,73.416 L80.84,21.416 L95.712,21.416 L109.024,54.904 L121.712,21.416 L136.584,21.416 L112.04,82.36 C110.237324,86.7973555 107.96668,90.0039901 105.228,91.98 C102.48932,93.9560099 99.0746871,94.944 94.984,94.944 C92.1413191,94.944 89.749343,94.5626705 87.808,93.8 Z"></path>
            <path d="M76.056,36.912 L76.056,73 L62.952,73 L62.952,41.072 C62.952,34.6239678 60.248027,31.4 54.84,31.4 C51.8586518,31.4 49.4493425,32.5093222 47.612,34.728 C45.7746575,36.9466778 44.856,40.1359792 44.856,44.296 L44.856,73 L31.752,73 L31.752,41.28 C31.752,34.6933004 28.9786944,31.4 23.432,31.4 C20.7279865,31.4 18.4226762,32.5266554 16.516,34.78 C14.6093238,37.0333446 13.656,40.1359802 13.656,44.088 L13.656,73 L0.552,73 L0.552,21.416 L13.656,21.416 L13.656,28.28 C17.2613514,22.7333056 22.2533014,19.96 28.632,19.96 C35.8427027,19.96 40.6266549,22.9066372 42.984,28.8 C46.658685,22.9066372 52.1359636,19.96 59.416,19.96 C64.6853597,19.96 68.7759854,21.4853181 71.688,24.536 C74.6000146,27.5866819 76.056,31.711974 76.056,36.912 Z"></path>
        </g>
    </g>
    
</svg>

<svg 
  v-if="size == 's'"
  width="32px" 
  height="32px" 
  viewBox="0 0 32 32" 
  version="1.1" 
  xmlns="http://www.w3.org/2000/svg" 
  xmlns:xlink="http://www.w3.org/1999/xlink">
   
    <defs>
        <linearGradient x1="38.2099379%" y1="55.9503216%" x2="57.7091659%" y2="38.1748974%" id="gradient-main">
            <stop v-bind:stop-color="colors['--logo-color-second']" offset="0%"></stop>
            <stop v-bind:stop-color="colors['--logo-color-second-tint']" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="66.1819482%" y1="34.585479%" x2="102.32485%" y2="0.170953707%" id="gradient-second">
            <stop v-bind:stop-color="colors['--logo-color-main']" offset="0%"></stop>
            <stop v-bind:stop-color="colors['--logo-color-main-tint']" offset="100%"></stop>
        </linearGradient>
    </defs>
    <g stroke="none" fill="none" fill-rule="evenodd" transform="translate(6.000000, 4.000000)">
       <polygon fill="url(#gradient-main)" points="13.4539292 0.724137503 19.4060232 6.6859957 13 8"></polygon>
       <path d="M5.05791127,22.9416891 L0,28 L0,22.9416891 L0,0 L12.0315026,2.91348751e-06 C12.558022,-0.000972232715 13.0632621,0.242874868 13.4358625,0.677797624 C13.8084629,1.11272038 14.0178369,1.70301613 14.0178363,2.31857717 L14.0178363,6.02373447 L18.0175933,6.0237403 C18.5435685,6.02398379 19.0479184,6.26849499 19.4196918,6.70348422 C19.7914651,7.13847346 20.0002082,7.72830866 19.9999998,8.3432328 L20,22.9416891 L5.05791127,22.9416891 Z" fill="url(#gradient-second)"></path>
    </g>
</svg>

</div>
</template>


<script>

	import cssVars from '../../functions/css-vars.js';
	
	/**
 	* Логотип myio
 	*/
	export default {
		props: {
			/**
 			* Размер логотипа `m` — нормальный `s` — только знак
 			*/
			size : {
				default: 'm',
				type: String
			} 
		},
		created: function(){
			this.colors = cssVars(':root');
		},
		methods: {
			
		},
		date: function(){
			return {
				colors : {}
			}
		}
	}
</script>


<style lang="less">
	@import '../../less/main.less';
		
	.logo { 
		width: 90px;
		height: 135px;
		background-position: center;
		background-repeat: no-repeat;
		text-align: center;
		
		&_s {
			width: auto;
			height: auto;
			
		}
		
	}
</style>