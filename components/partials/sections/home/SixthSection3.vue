<template>
    <section  class="w-full  flex justify-center relative pb-20  ">
       
        <div id="home_sixth_section_background" class="w-screen h-full bg-primary absolute z-[1] top-0 left-0
        2xl:right-0"></div>

        <div class="w-full  container py-48 z-[2]  mx-auto px-4 flex flex-col items-center text-white">
            <h2 class="text-4xl font-bold sm:text-5xl text-center px-4 md:mt-16 lg:mt-24">
                <span>FAQ</span> 
                <span>Häufige Fragen (FAQ)</span> 
            </h2>
            <div v-accordion class="accordion flex flex-col gap-y-5 mt-20  max-w-2xl">
                <div class="accordion-item">
                    <div class="accordion-header px-4 py-2 bg-white text-primary font-semibold rounded-md flex items-center justify-between">
                        <div> Muss ich Produkte hochladen? </div>
                        <svg class="chevron -rotate-90 w-3 h-3" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 129 129">
                            <g>
                                <path opacity="0.8" d="m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z"/>
                            </g>
                        </svg>
                    </div>
                    <div class="accordion-content">
                        <p class="p-4">IndieZone bietet drei verschiedene Abomodelle an. Das günstigste Modell beinhaltet eine reine Shoppräsenz auf unserer Plattform. Das EInstellen von Produkten ist somit keine Pflicht. Wir würden es Ihnen aber sehr raten, um den Kunden ein möglichst gutes Bild von dem zu geben, was sie in Ihrem Laden kaufen können.</p>
                    </div>
                </div>
                <div class="accordion-item">
                    <div class="accordion-header px-4 py-2 bg-white text-primary font-semibold rounded-md flex items-center justify-between">
                        <div> Was kostet IndieZone? </div>
                        <svg class="chevron -rotate-90 w-3 h-3" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 129 129">
                            <g>
                                <path opacity="0.8" d="m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z"/>
                            </g>
                        </svg>
                    </div>
                    <div class="accordion-content">
                        <p class="p-4">Anders als die Onlinemarktplatzgiganten wird IndieZone keine Margen verlangen. Wir werden ein Abomodell verfolgen, welches sich nicht an Ihren Umsätzen, sondern an der eingestellten Produktanzahl bemisst. Da wir noch nicht auf dem Markt sind, stehen unsere Preise noch nicht fest. Die verschiedenen Abomodelle werden sich jedoch vorraussichtlich zwischen 9€ und 100€ befinden.<br> Derzeit sind wir mit verschiedenen Städten im Gespräch, um unseren Händlern einen kostenlosen Zugang zu ermöglichen.</p>
                    </div>
                </div>
                <div class="accordion-item">
                    <div class="accordion-header px-4 py-2 bg-white text-primary font-semibold rounded-md flex items-center justify-between">
                        <div> Ist die Voranmeldung verbindlich? </div>
                        <svg class="chevron -rotate-90 w-3 h-3" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 129 129">
                            <g>
                                <path opacity="0.8" d="m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z"/>
                            </g>
                        </svg>
                    </div>
                    <div class="accordion-content">
                        <p class="p-4">Die Voranmeldung bei IndieZone ist nicht verbindlich, sichert Ihnen aber einen Platz, sobald wir in Ihrer Region auf den Markt gehen. Zudem sagen wir Ihnen natürlich Bescheid, sobald IndieZone online geht. Außerdem unterstützen Sie uns durch eine Voranmeldung, da wir durch das so gezeigte Interesse bei Städten für eine Förderung Ihres Abonements argumentieren können.</p>
                    </div>
                </div>
            </div>

            <div class="flex flex-col items-center gap-y-5 mt-20 lg:mt-64 xl:mt-24">
                <div class="text-center md:text-xl md:font-semibold">Noch nicht alle Fragen beantwortet?</div>
                <UIBaseButton class="px-10 py-4 bg-white text-primary">
                <div class="text-primary">Jetzt direkt Fragen</div> 
                </UIBaseButton>
                
            </div>

            <div class="flex flex-col items-center gap-y-5 text-center mt-48  lg:mt-64 ">
                <div class="font-light">Werde Teil der IndieZone</div>
                <p class="text-xl sm:text-3xl lg:text-5xl font-medium max-w-lg">Registriere dich direkt und mache den nächsten Schritt. Werde Teil der wachsenden Gemeinschaft und gestalte den Einzelhandel der Zukunft.<br><br>Einfach. Fair. Effektiv.</p>
            </div>
            <UIBaseButton class="px-10 py-4 bg-white  mt-20">
                <div class="text-primary"> Jetzt direkt Fragen
                    </div> 
            </UIBaseButton>
        </div>
        

    </section>
</template>
<style scoped>
#home_sixth_section_background{
    clip-path: path('M-27.5 117.711C216 117.71 432.71 -41.0344 538.5 11.2194C664.75 73.5793 702.919 228.632 759.423 370.075C815.984 511.66 713.602 668.539 664.674 813.676C625.412 930.142 569.687 1032.03 502.798 1131.31C431.265 1237.48 369.474 1359.6 260.929 1412.94C146.432 1469.21 17.8923 1448.71 -106.008 1430.51C-249.612 1409.4 -438.091 1436.68 -515.273 1298.88C-595.517 1155.62 -470.925 974.194 -455.952 805.719C-445.302 685.881 -465.483 569.167 -440.025 452.184C-409.74 313.021 -470.84 201.029 -367.192 117.711C-263.329 34.2211 -192.939 117.712 -27.5 117.711Z');
}


@media (min-width:25rem) {
    #home_sixth_section_background{
        clip-path: path('M8.02313 111.231C268.335 111.23 500.008 -39.6265 613.102 10.0308C748.069 69.2921 788.873 216.641 849.279 351.055C909.745 485.605 800.294 634.689 747.988 772.614C706.014 883.293 646.442 980.118 574.936 1074.46C498.463 1175.36 432.406 1291.41 316.366 1342.1C193.965 1395.58 56.5495 1376.1 -75.9055 1358.79C-229.424 1338.74 -430.917 1364.66 -513.428 1233.71C-599.212 1097.56 -466.018 925.155 -450.011 765.052C-438.626 651.169 -460.2 540.254 -432.984 429.084C-400.608 296.836 -465.927 190.409 -355.122 111.231C-244.089 31.8896 -168.838 111.232 8.02313 111.231Z');
    }
}

@media (min-width:38rem) {
    #home_sixth_section_background{
        clip-path: path('M147.383 117.289C473.651 117.288 764.023 -41.7848 905.772 10.5772C1074.94 73.0662 1126.08 228.44 1201.79 370.175C1277.58 512.054 1140.39 669.258 1074.83 814.695C1022.23 931.402 947.559 1033.5 857.935 1132.99C762.086 1239.38 679.292 1361.75 533.852 1415.2C380.437 1471.59 208.205 1451.05 42.1895 1432.8C-150.227 1411.66 -402.772 1438.99 -506.188 1300.91C-613.708 1157.34 -446.766 975.545 -426.704 806.722C-412.434 686.635 -439.475 569.68 -405.363 452.454C-364.784 313.004 -446.652 200.78 -307.773 117.289C-168.606 33.6265 -74.29 117.29 147.383 117.289Z');

    }
}

@media (min-width:64rem) {
    #home_sixth_section_background{
        clip-path: path("M338.432 217.963C658.226 132.458 882.934 -56.4834 1020.35 16.9021C1184.34 104.481 1209.07 480.499 1282.47 679.142C1355.94 877.986 1222.95 1098.3 1159.39 1302.14C1108.39 1465.7 1036.01 1608.79 949.128 1748.22C856.21 1897.34 775.948 2068.83 634.955 2143.75C486.231 2222.77 319.265 2193.99 158.326 2168.42C-28.2061 2138.78 -273.029 2177.09 -373.283 1983.56C-477.515 1782.36 -315.678 1527.57 -296.23 1290.96C-282.396 1122.66 -308.61 958.748 -275.541 794.456C-236.202 599.016 -315.568 441.734 -180.935 324.722C-46.0238 207.468 130.109 273.664 338.432 217.963Z");
    }

}

/* @media (min-width:80rem) {
    #home_sixth_section_background{
        clip-path: path('M523.732 198.575C922.914 120.822 1203.41 -50.9898 1374.93 15.7425C1579.63 95.3811 1610.51 437.31 1702.12 617.943C1793.83 798.76 1627.83 999.105 1548.5 1184.46C1484.84 1333.19 1394.48 1463.31 1286.03 1590.1C1170.05 1725.69 1069.86 1881.64 893.866 1949.77C708.222 2021.63 499.807 1995.45 298.916 1972.2C66.0768 1945.25 -239.523 1980.09 -364.665 1804.11C-494.772 1621.14 -292.76 1389.45 -268.483 1174.29C-251.215 1021.25 -283.936 872.2 -242.658 722.803C-193.554 545.081 -292.622 402.059 -124.566 295.655C43.8359 189.031 263.693 249.226 523.732 198.575Z');
    }

}  */





/* @media (min-width:40rem) {
    #home_sixth_section_background{
        clip-path: path('M8.02313 111.231C268.335 111.23 500.008 -39.6265 613.102 10.0308C748.069 69.2921 788.873 216.641 849.279 351.055C909.745 485.605 800.294 634.689 747.988 772.614C706.014 883.293 646.442 980.118 574.936 1074.46C498.463 1175.36 432.406 1291.41 316.366 1342.1C193.965 1395.58 56.5495 1376.1 -75.9055 1358.79C-229.424 1338.74 -430.917 1364.66 -513.428 1233.71C-599.212 1097.56 -466.018 925.155 -450.011 765.052C-438.626 651.169 -460.2 540.254 -432.984 429.084C-400.608 296.836 -465.927 190.409 -355.122 111.231C-244.089 31.8896 -168.838 111.232 8.02313 111.231Z');
    }
}

@media (min-width:48rem) {
    #home_sixth_section_background{
        clip-path: path('M147.383 117.289C473.651 117.288 764.023 -41.7848 905.772 10.5772C1074.94 73.0662 1126.08 228.44 1201.79 370.175C1277.58 512.054 1140.39 669.258 1074.83 814.695C1022.23 931.402 947.559 1033.5 857.935 1132.99C762.086 1239.38 679.292 1361.75 533.852 1415.2C380.437 1471.59 208.205 1451.05 42.1895 1432.8C-150.227 1411.66 -402.772 1438.99 -506.188 1300.91C-613.708 1157.34 -446.766 975.545 -426.704 806.722C-412.434 686.635 -439.475 569.68 -405.363 452.454C-364.784 313.004 -446.652 200.78 -307.773 117.289C-168.606 33.6265 -74.29 117.29 147.383 117.289Z');

    }
}

@media (min-width:64rem) {
    #home_sixth_section_background{
        clip-path: path('M338.432 217.963C658.226 132.458 882.934 -56.4834 1020.35 16.9021C1184.34 104.481 1209.07 480.499 1282.47 679.142C1355.94 877.986 1222.95 1098.3 1159.39 1302.14C1108.39 1465.7 1036.01 1608.79 949.128 1748.22C856.21 1897.34 775.948 2068.83 634.955 2143.75C486.231 2222.77 319.265 2193.99 158.326 2168.42C-28.2061 2138.78 -273.029 2177.09 -373.283 1983.56C-477.515 1782.36 -315.678 1527.57 -296.23 1290.96C-282.396 1122.66 -308.61 958.748 -275.541 794.456C-236.202 599.016 -315.568 441.734 -180.935 324.722C-46.0238 207.468 130.109 273.664 338.432 217.963Z');
    }

}

@media (min-width:80rem) {
    #home_sixth_section_background{
        clip-path: path('M523.732 198.575C922.914 120.822 1203.41 -50.9898 1374.93 15.7425C1579.63 95.3811 1610.51 437.31 1702.12 617.943C1793.83 798.76 1627.83 999.105 1548.5 1184.46C1484.84 1333.19 1394.48 1463.31 1286.03 1590.1C1170.05 1725.69 1069.86 1881.64 893.866 1949.77C708.222 2021.63 499.807 1995.45 298.916 1972.2C66.0768 1945.25 -239.523 1980.09 -364.665 1804.11C-494.772 1621.14 -292.76 1389.45 -268.483 1174.29C-251.215 1021.25 -283.936 872.2 -242.658 722.803C-193.554 545.081 -292.622 402.059 -124.566 295.655C43.8359 189.031 263.693 249.226 523.732 198.575Z');
    }

} */


/* @media (min-width:96rem) {
    #home_sixth_section_background{
        clip-path: path('M147.383 117.289C473.651 117.288 764.023 -41.7848 905.772 10.5772C1074.94 73.0662 1126.08 228.44 1201.79 370.175C1277.58 512.054 1140.39 669.258 1074.83 814.695C1022.23 931.402 947.559 1033.5 857.935 1132.99C762.086 1239.38 679.292 1361.75 533.852 1415.2C380.437 1471.59 208.205 1451.05 42.1895 1432.8C-150.227 1411.66 -402.772 1438.99 -506.188 1300.91C-613.708 1157.34 -446.766 975.545 -426.704 806.722C-412.434 686.635 -439.475 569.68 -405.363 452.454C-364.784 313.004 -446.652 200.78 -307.773 117.289C-168.606 33.6265 -74.29 117.29 147.383 117.289Z');
    }
} */



</style>